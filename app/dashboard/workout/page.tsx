"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getWorkoutPlan, type WorkoutGoal } from "@/lib/workout-plans"
import { addActivity } from "@/lib/activity-store"
import { Dumbbell, Flame, Target, CheckCircle } from "lucide-react"

export default function WorkoutPage() {
  const [selectedGoal, setSelectedGoal] = useState<WorkoutGoal>("fat_loss")
  const [completedDays, setCompletedDays] = useState<Set<string>>(new Set())
  
  const plan = getWorkoutPlan(selectedGoal)

  const toggleComplete = (day: string, focus: string) => {
    const newCompleted = new Set(completedDays)
    if (newCompleted.has(day)) {
      newCompleted.delete(day)
    } else {
      newCompleted.add(day)
      // Log activity when completing a workout day
      addActivity({
        type: "workout",
        description: `Completed ${day} - ${focus}`,
      })
    }
    setCompletedDays(newCompleted)
  }

  const resetProgress = () => {
    setCompletedDays(new Set())
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
          <Dumbbell className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Workout Planner</h1>
          <p className="text-sm text-muted-foreground">Your weekly training schedule</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card 
          className={`cursor-pointer transition-all border-2 ${
            selectedGoal === "fat_loss" 
              ? "border-orange-500 bg-orange-500/5" 
              : "border-border/50 hover:border-orange-500/50"
          }`}
          onClick={() => { setSelectedGoal("fat_loss"); setCompletedDays(new Set()) }}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Fat Loss</h3>
                <p className="text-sm text-muted-foreground">High-intensity cardio focus</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className={`cursor-pointer transition-all border-2 ${
            selectedGoal === "muscle_gain" 
              ? "border-blue-500 bg-blue-500/5" 
              : "border-border/50 hover:border-blue-500/50"
          }`}
          onClick={() => { setSelectedGoal("muscle_gain"); setCompletedDays(new Set()) }}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Muscle Gain</h3>
                <p className="text-sm text-muted-foreground">Strength training focus</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={resetProgress}>
            Reset Progress
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {plan.days.map((day) => (
              <Card 
                key={day.day} 
                className={`transition-all ${
                  completedDays.has(day.day) 
                    ? "bg-primary/10 border-primary" 
                    : "border-border/50"
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{day.day}</CardTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => toggleComplete(day.day, day.focus)}
                    >
                      <CheckCircle 
                        className={`h-5 w-5 ${
                          completedDays.has(day.day) 
                            ? "text-primary fill-primary" 
                            : "text-muted-foreground"
                        }`} 
                      />
                    </Button>
                  </div>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {day.focus}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {day.exercises.map((exercise, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 mt-1.5 rounded-full bg-primary shrink-0" />
                        {exercise}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-base">Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(completedDays.size / 7) * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium">
              {completedDays.size}/7 days
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
