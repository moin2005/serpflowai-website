"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  analyzeSquat,
  analyzePushup,
  analyzePlank,
  drawSkeleton,
  type PoseLandmark,
  type ExerciseState,
} from "@/lib/pose-detection"
import { Camera, CameraOff, Play, Square, AlertCircle, CheckCircle, XCircle, RefreshCw } from "lucide-react"

type ExerciseType = "squat" | "pushup" | "plank"

const exercises: { type: ExerciseType; name: string; description: string }[] = [
  { type: "squat", name: "Squat", description: "Lower body strength exercise" },
  { type: "pushup", name: "Push-up", description: "Upper body and core exercise" },
  { type: "plank", name: "Plank", description: "Core stability exercise" },
]

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Pose: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Camera: any
  }
}

export default function ExercisePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState<ExerciseType>("squat")
  const [cameraError, setCameraError] = useState<string | null>(null)
  const [exerciseState, setExerciseState] = useState<ExerciseState>({
    exercise: null,
    count: 0,
    phase: "none",
    feedback: "Select an exercise and start the camera",
    isCorrect: true,
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const poseRef = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cameraRef = useRef<any>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const exerciseStateRef = useRef<ExerciseState>(exerciseState)
  const demoIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Keep ref in sync with state
  useEffect(() => {
    exerciseStateRef.current = exerciseState
  }, [exerciseState])

  const selectedExerciseRef = useRef<ExerciseType>(selectedExercise)
  useEffect(() => {
    selectedExerciseRef.current = selectedExercise
  }, [selectedExercise])

  const onResults = useCallback((results: { poseLandmarks?: PoseLandmark[] }) => {
    const canvas = canvasRef.current
    const video = videoRef.current
    if (!canvas || !video) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = video.videoWidth || 640
    canvas.height = video.videoHeight || 480

    // Clear and draw video frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.scale(-1, 1)
    ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height)
    ctx.restore()

    if (results.poseLandmarks && results.poseLandmarks.length > 0) {
      // Mirror the landmarks for display
      const mirroredLandmarks = results.poseLandmarks.map((lm: PoseLandmark) => ({
        ...lm,
        x: 1 - lm.x,
      }))

      let newState: ExerciseState
      const currentExercise = selectedExerciseRef.current
      const prevState = exerciseStateRef.current

      switch (currentExercise) {
        case "squat":
          newState = analyzeSquat(mirroredLandmarks, prevState)
          break
        case "pushup":
          newState = analyzePushup(mirroredLandmarks, prevState)
          break
        case "plank":
          newState = analyzePlank(mirroredLandmarks, prevState)
          break
        default:
          newState = prevState
      }

      setExerciseState(newState)
      drawSkeleton(ctx, mirroredLandmarks, canvas.width, canvas.height, newState.isCorrect)
    }
  }, [])

  const loadMediaPipe = async () => {
    return new Promise<void>((resolve, reject) => {
      // Check if already loaded
      if (window.Pose) {
        resolve()
        return
      }

      const scripts = [
        "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",
        "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js",
        "https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js",
      ]

      let loaded = 0
      scripts.forEach((src) => {
        const script = document.createElement("script")
        script.src = src
        script.crossOrigin = "anonymous"
        script.onload = () => {
          loaded++
          if (loaded === scripts.length) {
            // Give it a moment to initialize
            setTimeout(resolve, 500)
          }
        }
        script.onerror = () => reject(new Error("Failed to load MediaPipe"))
        document.body.appendChild(script)
      })
    })
  }

  const startDemoMode = useCallback(() => {
    setIsDemoMode(true)
    setIsRunning(true)
    setCameraError(null)
    
    const demoFeedback = {
      squat: [
        { feedback: "Great squat depth!", isCorrect: true },
        { feedback: "Keep your back straight", isCorrect: false },
        { feedback: "Perfect form!", isCorrect: true },
        { feedback: "Go lower for full range", isCorrect: false },
        { feedback: "Excellent knee alignment", isCorrect: true },
      ],
      pushup: [
        { feedback: "Keep your core tight", isCorrect: true },
        { feedback: "Lower your chest more", isCorrect: false },
        { feedback: "Great push-up!", isCorrect: true },
        { feedback: "Straighten your back", isCorrect: false },
        { feedback: "Perfect form!", isCorrect: true },
      ],
      plank: [
        { feedback: "Hold steady, great form!", isCorrect: true },
        { feedback: "Lift your hips slightly", isCorrect: false },
        { feedback: "Core engaged, excellent!", isCorrect: true },
        { feedback: "Keep your back flat", isCorrect: false },
        { feedback: "Perfect plank position!", isCorrect: true },
      ],
    }

    let demoCount = 0
    let feedbackIndex = 0

    setExerciseState({
      exercise: selectedExercise,
      count: 0,
      phase: "none",
      feedback: "Demo mode: Simulating " + selectedExercise + " detection",
      isCorrect: true,
    })

    demoIntervalRef.current = setInterval(() => {
      const exerciseFeedback = demoFeedback[selectedExerciseRef.current]
      const current = exerciseFeedback[feedbackIndex % exerciseFeedback.length]
      
      if (selectedExerciseRef.current !== "plank" && current.isCorrect && Math.random() > 0.5) {
        demoCount++
      }

      setExerciseState({
        exercise: selectedExerciseRef.current,
        count: demoCount,
        phase: current.isCorrect ? "up" : "down",
        feedback: current.feedback,
        isCorrect: current.isCorrect,
      })

      feedbackIndex++
    }, 2000)
  }, [selectedExercise])

  const stopDemoMode = useCallback(() => {
    if (demoIntervalRef.current) {
      clearInterval(demoIntervalRef.current)
      demoIntervalRef.current = null
    }
    setIsDemoMode(false)
    setIsRunning(false)
    setExerciseState({
      exercise: null,
      count: 0,
      phase: "none",
      feedback: "Demo stopped. Start again when ready.",
      isCorrect: true,
    })
  }, [])

  const startCamera = async () => {
    setIsLoading(true)
    setCameraError(null)

    try {
      await loadMediaPipe()

      // Request camera access
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: 640, height: 480 },
        audio: false,
      })

      streamRef.current = stream

      if (videoRef.current) {
        // Assign stream to video element
        videoRef.current.srcObject = stream
        
        // Wait for video to be ready before playing
        await new Promise<void>((resolve, reject) => {
          const video = videoRef.current
          if (!video) {
            reject(new Error("Video element not found"))
            return
          }
          
          video.onloadedmetadata = () => {
            video.play()
              .then(() => resolve())
              .catch(reject)
          }
          
          // Timeout fallback
          setTimeout(() => resolve(), 3000)
        })
      }

      // Initialize MediaPipe Pose
      const pose = new window.Pose({
        locateFile: (file: string) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
        },
      })

      pose.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        enableSegmentation: false,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      })

      pose.onResults(onResults)
      poseRef.current = pose

      // Start camera processing
      if (videoRef.current && window.Camera) {
        const camera = new window.Camera(videoRef.current, {
          onFrame: async () => {
            if (poseRef.current && videoRef.current) {
              await poseRef.current.send({ image: videoRef.current })
            }
          },
          width: 640,
          height: 480,
        })
        cameraRef.current = camera
        await camera.start()
      }

      setIsLoading(false)
      setIsRunning(true)
      setExerciseState((prev) => ({
        ...prev,
        feedback: "Get into position for " + selectedExercise,
        count: 0,
        phase: "none",
      }))
    } catch {
      setIsLoading(false)
      setCameraError("Camera not detected. Try Chrome and allow camera permission.")
      // Auto-start demo mode when camera is not available
      startDemoMode()
    }
  }

  const stopCamera = () => {
    // Stop demo mode if active
    if (isDemoMode) {
      stopDemoMode()
      return
    }

    if (cameraRef.current) {
      cameraRef.current.stop()
      cameraRef.current = null
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }

    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    setIsRunning(false)
    setExerciseState({
      exercise: null,
      count: 0,
      phase: "none",
      feedback: "Camera stopped. Start again when ready.",
      isCorrect: true,
    })
  }

  const resetCount = () => {
    setExerciseState((prev) => ({ ...prev, count: 0 }))
  }

  const handleExerciseChange = (type: ExerciseType) => {
    setSelectedExercise(type)
    setExerciseState((prev) => ({
      ...prev,
      exercise: type,
      count: 0,
      feedback: isRunning ? `Get into position for ${type}` : `Select ${type} and start camera`,
    }))
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (cameraRef.current) {
        cameraRef.current.stop()
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
      if (demoIntervalRef.current) {
        clearInterval(demoIntervalRef.current)
      }
    }
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
          <Camera className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Exercise Detection</h1>
          <p className="text-sm text-muted-foreground">AI-powered posture analysis</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0 relative">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover opacity-0"
                  playsInline
                  muted
                />
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {!isRunning && !cameraError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
                    <CameraOff className="h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground text-center px-4">
                      Click &quot;Start Camera&quot; to begin exercise detection
                    </p>
                    <p className="text-muted-foreground/60 text-sm text-center px-4 mt-2">
                      Demo mode will activate if no camera is available
                    </p>
                  </div>
                )}

                {isDemoMode && isRunning && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md mx-4">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Camera className="h-10 w-10 text-primary animate-pulse" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Demo Mode Active</h3>
                      <p className="text-muted-foreground mb-4">
                        Simulating {selectedExercise} detection. On a device with a camera, you&apos;ll see real-time pose tracking.
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Badge variant={exerciseState.isCorrect ? "default" : "destructive"}>
                          {exerciseState.isCorrect ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <XCircle className="h-3 w-3 mr-1" />
                          )}
                          {exerciseState.feedback}
                        </Badge>
                      </div>
                      {selectedExercise !== "plank" && (
                        <p className="text-2xl font-bold mt-4">
                          Reps: {exerciseState.count}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mb-4" />
                    <p className="text-muted-foreground">Initializing camera...</p>
                  </div>
                )}

                {isRunning && (
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <Badge
                      variant={exerciseState.isCorrect ? "default" : "destructive"}
                      className="text-sm px-3 py-1"
                    >
                      {exerciseState.isCorrect ? (
                        <CheckCircle className="h-4 w-4 mr-1" />
                      ) : (
                        <XCircle className="h-4 w-4 mr-1" />
                      )}
                      {exerciseState.feedback}
                    </Badge>
                    {selectedExercise !== "plank" && (
                      <Badge variant="secondary" className="text-lg px-4 py-1">
                        Count: {exerciseState.count}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-2">
            {!isRunning ? (
              <Button onClick={startCamera} disabled={isLoading} className="flex-1">
                <Play className="h-4 w-4 mr-2" />
                Start Camera
              </Button>
            ) : (
              <>
                <Button onClick={stopCamera} variant="destructive" className="flex-1">
                  <Square className="h-4 w-4 mr-2" />
                  Stop Camera
                </Button>
                {selectedExercise !== "plank" && (
                  <Button onClick={resetCount} variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset Count
                  </Button>
                )}
              </>
            )}
          </div>

          {cameraError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{cameraError}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-4">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-base">Select Exercise</CardTitle>
              <CardDescription>Choose an exercise to track</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {exercises.map((exercise) => (
                <button
                  key={exercise.type}
                  onClick={() => handleExerciseChange(exercise.type)}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    selectedExercise === exercise.type
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  <p className="font-medium">{exercise.name}</p>
                  <p className={`text-sm ${
                    selectedExercise === exercise.type
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}>
                    {exercise.description}
                  </p>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-base">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>1. Select an exercise from the list above</p>
              <p>2. Click &quot;Start Camera&quot; to begin</p>
              <p>3. Position yourself so your full body is visible</p>
              <p>4. Follow the real-time feedback on screen</p>
              <p>5. The AI will track your reps and form</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-base">Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="h-2 w-2 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                Ensure good lighting for better detection
              </p>
              <p className="flex items-start gap-2">
                <span className="h-2 w-2 mt-1.5 rounded-full bg-blue-500 shrink-0" />
                Wear fitted clothing for accuracy
              </p>
              <p className="flex items-start gap-2">
                <span className="h-2 w-2 mt-1.5 rounded-full bg-orange-500 shrink-0" />
                Keep your full body in frame
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
