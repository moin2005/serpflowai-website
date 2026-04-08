export interface PoseLandmark {
  x: number
  y: number
  z: number
  visibility?: number
}

export interface ExerciseState {
  exercise: "squat" | "pushup" | "plank" | null
  count: number
  phase: "up" | "down" | "hold" | "none"
  feedback: string
  isCorrect: boolean
}

// MediaPipe Pose landmark indices
export const LANDMARKS = {
  NOSE: 0,
  LEFT_SHOULDER: 11,
  RIGHT_SHOULDER: 12,
  LEFT_ELBOW: 13,
  RIGHT_ELBOW: 14,
  LEFT_WRIST: 15,
  RIGHT_WRIST: 16,
  LEFT_HIP: 23,
  RIGHT_HIP: 24,
  LEFT_KNEE: 25,
  RIGHT_KNEE: 26,
  LEFT_ANKLE: 27,
  RIGHT_ANKLE: 28,
}

function calculateAngle(a: PoseLandmark, b: PoseLandmark, c: PoseLandmark): number {
  const radians = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x)
  let angle = Math.abs((radians * 180) / Math.PI)
  if (angle > 180) angle = 360 - angle
  return angle
}

function getMidpoint(a: PoseLandmark, b: PoseLandmark): PoseLandmark {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
    z: (a.z + b.z) / 2,
  }
}

export function analyzeSquat(
  landmarks: PoseLandmark[],
  prevState: ExerciseState
): ExerciseState {
  const leftHip = landmarks[LANDMARKS.LEFT_HIP]
  const leftKnee = landmarks[LANDMARKS.LEFT_KNEE]
  const leftAnkle = landmarks[LANDMARKS.LEFT_ANKLE]
  const rightHip = landmarks[LANDMARKS.RIGHT_HIP]
  const rightKnee = landmarks[LANDMARKS.RIGHT_KNEE]
  const rightAnkle = landmarks[LANDMARKS.RIGHT_ANKLE]
  const leftShoulder = landmarks[LANDMARKS.LEFT_SHOULDER]
  const rightShoulder = landmarks[LANDMARKS.RIGHT_SHOULDER]

  // Calculate knee angles
  const leftKneeAngle = calculateAngle(leftHip, leftKnee, leftAnkle)
  const rightKneeAngle = calculateAngle(rightHip, rightKnee, rightAnkle)
  const avgKneeAngle = (leftKneeAngle + rightKneeAngle) / 2

  // Calculate hip angle for back position
  const midShoulder = getMidpoint(leftShoulder, rightShoulder)
  const midHip = getMidpoint(leftHip, rightHip)
  const midKnee = getMidpoint(leftKnee, rightKnee)
  const backAngle = calculateAngle(midShoulder, midHip, midKnee)

  let feedback = ""
  let isCorrect = true
  let phase = prevState.phase
  let count = prevState.count

  // Check back position
  if (backAngle < 140) {
    feedback = "Keep your back straighter"
    isCorrect = false
  }

  // Rep counting logic: 
  // state = "up" (standing) -> state = "down" (squatted) -> state = "up" (standing) = 1 rep
  // Only count when coming UP from DOWN position with proper form
  
  if (avgKneeAngle > 160) {
    // Standing position (UP)
    if (prevState.phase === "down") {
      // Completed a rep - came up from down position
      count++
      feedback = "Rep complete! Lower down again"
      isCorrect = true
    } else {
      if (!feedback) feedback = "Lower down into the squat"
    }
    phase = "up"
  } else if (avgKneeAngle < 100) {
    // Deep squat position (DOWN)
    phase = "down"
    if (!feedback) {
      if (avgKneeAngle < 80) {
        feedback = "Great depth! Now stand up"
        isCorrect = true
      } else {
        feedback = "Good, push up now"
        isCorrect = true
      }
    }
  } else {
    // Mid-range - transitioning
    if (prevState.phase === "up" || phase === "up") {
      if (!feedback) feedback = "Keep going down"
    } else if (prevState.phase === "down" || phase === "down") {
      if (!feedback) feedback = "Push through your heels to stand"
    } else {
      if (!feedback) feedback = "Get into position"
    }
  }

  // Check knee alignment
  if (Math.abs(leftKnee.x - leftAnkle.x) > 0.1 || Math.abs(rightKnee.x - rightAnkle.x) > 0.1) {
    feedback = "Keep knees over toes"
    isCorrect = false
  }

  if (!feedback) {
    feedback = "Correct posture"
    isCorrect = true
  }

  return {
    exercise: "squat",
    count,
    phase,
    feedback,
    isCorrect,
  }
}

export function analyzePushup(
  landmarks: PoseLandmark[],
  prevState: ExerciseState
): ExerciseState {
  const leftShoulder = landmarks[LANDMARKS.LEFT_SHOULDER]
  const leftElbow = landmarks[LANDMARKS.LEFT_ELBOW]
  const leftWrist = landmarks[LANDMARKS.LEFT_WRIST]
  const rightShoulder = landmarks[LANDMARKS.RIGHT_SHOULDER]
  const rightElbow = landmarks[LANDMARKS.RIGHT_ELBOW]
  const rightWrist = landmarks[LANDMARKS.RIGHT_WRIST]
  const leftHip = landmarks[LANDMARKS.LEFT_HIP]
  const rightHip = landmarks[LANDMARKS.RIGHT_HIP]
  const leftAnkle = landmarks[LANDMARKS.LEFT_ANKLE]
  const rightAnkle = landmarks[LANDMARKS.RIGHT_ANKLE]

  // Calculate elbow angles
  const leftElbowAngle = calculateAngle(leftShoulder, leftElbow, leftWrist)
  const rightElbowAngle = calculateAngle(rightShoulder, rightElbow, rightWrist)
  const avgElbowAngle = (leftElbowAngle + rightElbowAngle) / 2

  // Check body alignment (shoulder-hip-ankle line)
  const midShoulder = getMidpoint(leftShoulder, rightShoulder)
  const midHip = getMidpoint(leftHip, rightHip)
  const midAnkle = getMidpoint(leftAnkle, rightAnkle)
  const bodyAngle = calculateAngle(midShoulder, midHip, midAnkle)

  let feedback = ""
  let isCorrect = true
  let phase = prevState.phase
  let count = prevState.count

  // Check body alignment
  if (bodyAngle < 150) {
    feedback = "Keep your hips up, maintain straight body"
    isCorrect = false
  } else if (bodyAngle > 190) {
    feedback = "Lower your hips, avoid sagging"
    isCorrect = false
  }

  // Rep counting logic:
  // state = "up" (arms extended) -> state = "down" (arms bent) -> state = "up" = 1 rep
  // Only count when coming UP from DOWN position
  
  if (avgElbowAngle > 160) {
    // Arms extended (UP position)
    if (prevState.phase === "down") {
      // Completed a rep - came up from down position
      count++
      feedback = "Rep complete! Lower down again"
      isCorrect = true
    } else {
      if (!feedback) feedback = "Lower your chest to the ground"
    }
    phase = "up"
  } else if (avgElbowAngle < 100) {
    // Arms bent (DOWN position)
    phase = "down"
    if (!feedback) feedback = "Great depth! Push back up"
  } else {
    // Mid-range - transitioning
    if (prevState.phase === "up" || phase === "up") {
      if (!feedback) feedback = "Go lower, chest towards floor"
    } else if (prevState.phase === "down" || phase === "down") {
      if (!feedback) feedback = "Push up with control"
    } else {
      if (!feedback) feedback = "Get into position"
    }
  }

  if (!feedback) {
    feedback = "Correct posture"
    isCorrect = true
  }

  return {
    exercise: "pushup",
    count,
    phase,
    feedback,
    isCorrect,
  }
}

export function analyzePlank(
  landmarks: PoseLandmark[],
  prevState: ExerciseState
): ExerciseState {
  const leftShoulder = landmarks[LANDMARKS.LEFT_SHOULDER]
  const rightShoulder = landmarks[LANDMARKS.RIGHT_SHOULDER]
  const leftHip = landmarks[LANDMARKS.LEFT_HIP]
  const rightHip = landmarks[LANDMARKS.RIGHT_HIP]
  const leftAnkle = landmarks[LANDMARKS.LEFT_ANKLE]
  const rightAnkle = landmarks[LANDMARKS.RIGHT_ANKLE]
  const leftElbow = landmarks[LANDMARKS.LEFT_ELBOW]
  const rightElbow = landmarks[LANDMARKS.RIGHT_ELBOW]

  // Check body alignment
  const midShoulder = getMidpoint(leftShoulder, rightShoulder)
  const midHip = getMidpoint(leftHip, rightHip)
  const midAnkle = getMidpoint(leftAnkle, rightAnkle)
  const bodyAngle = calculateAngle(midShoulder, midHip, midAnkle)

  // Check shoulder position relative to elbows
  const shoulderElbowDiff = Math.abs(midShoulder.x - getMidpoint(leftElbow, rightElbow).x)

  let feedback = ""
  let isCorrect = true

  // Check if in plank position (horizontal body)
  const isHorizontal = Math.abs(midShoulder.y - midAnkle.y) < 0.3

  if (!isHorizontal) {
    feedback = "Get into plank position"
    isCorrect = false
  } else if (bodyAngle < 150) {
    feedback = "Raise your hips up"
    isCorrect = false
  } else if (bodyAngle > 190) {
    feedback = "Lower your hips, avoid sagging"
    isCorrect = false
  } else if (shoulderElbowDiff > 0.15) {
    feedback = "Align shoulders over elbows"
    isCorrect = false
  } else {
    feedback = "Perfect plank! Hold steady"
    isCorrect = true
  }

  return {
    exercise: "plank",
    count: prevState.count,
    phase: "hold",
    feedback,
    isCorrect,
  }
}

export function drawSkeleton(
  ctx: CanvasRenderingContext2D,
  landmarks: PoseLandmark[],
  width: number,
  height: number,
  isCorrect: boolean
) {
  const color = isCorrect ? "#22c55e" : "#ef4444"
  
  // Connections for skeleton
  const connections = [
    [LANDMARKS.LEFT_SHOULDER, LANDMARKS.RIGHT_SHOULDER],
    [LANDMARKS.LEFT_SHOULDER, LANDMARKS.LEFT_ELBOW],
    [LANDMARKS.LEFT_ELBOW, LANDMARKS.LEFT_WRIST],
    [LANDMARKS.RIGHT_SHOULDER, LANDMARKS.RIGHT_ELBOW],
    [LANDMARKS.RIGHT_ELBOW, LANDMARKS.RIGHT_WRIST],
    [LANDMARKS.LEFT_SHOULDER, LANDMARKS.LEFT_HIP],
    [LANDMARKS.RIGHT_SHOULDER, LANDMARKS.RIGHT_HIP],
    [LANDMARKS.LEFT_HIP, LANDMARKS.RIGHT_HIP],
    [LANDMARKS.LEFT_HIP, LANDMARKS.LEFT_KNEE],
    [LANDMARKS.LEFT_KNEE, LANDMARKS.LEFT_ANKLE],
    [LANDMARKS.RIGHT_HIP, LANDMARKS.RIGHT_KNEE],
    [LANDMARKS.RIGHT_KNEE, LANDMARKS.RIGHT_ANKLE],
  ]

  // Draw connections
  ctx.strokeStyle = color
  ctx.lineWidth = 3
  connections.forEach(([i, j]) => {
    const a = landmarks[i]
    const b = landmarks[j]
    if (a && b && (a.visibility ?? 1) > 0.5 && (b.visibility ?? 1) > 0.5) {
      ctx.beginPath()
      ctx.moveTo(a.x * width, a.y * height)
      ctx.lineTo(b.x * width, b.y * height)
      ctx.stroke()
    }
  })

  // Draw landmarks
  ctx.fillStyle = color
  landmarks.forEach((landmark) => {
    if ((landmark.visibility ?? 1) > 0.5) {
      ctx.beginPath()
      ctx.arc(landmark.x * width, landmark.y * height, 6, 0, 2 * Math.PI)
      ctx.fill()
    }
  })
}
