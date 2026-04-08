export type WorkoutGoal = "fat_loss" | "muscle_gain"

export interface DayWorkout {
  day: string
  exercises: string[]
  focus: string
}

export interface WorkoutPlan {
  goal: WorkoutGoal
  name: string
  description: string
  days: DayWorkout[]
}

export const workoutPlans: Record<WorkoutGoal, WorkoutPlan> = {
  fat_loss: {
    goal: "fat_loss",
    name: "Fat Loss Program",
    description: "High-intensity workouts to maximize calorie burn",
    days: [
      { day: "Monday", focus: "Full Body HIIT", exercises: ["Burpees x 10", "Squats x 15", "Push-ups x 12", "Mountain Climbers x 20"] },
      { day: "Tuesday", focus: "Cardio + Core", exercises: ["Jumping Jacks x 30", "Plank 45 sec", "Bicycle Crunches x 20", "High Knees x 30"] },
      { day: "Wednesday", focus: "Lower Body", exercises: ["Lunges x 12 each", "Squats x 20", "Calf Raises x 20", "Wall Sit 30 sec"] },
      { day: "Thursday", focus: "Rest", exercises: ["Light walking", "Stretching 15 min"] },
      { day: "Friday", focus: "Upper Body", exercises: ["Push-ups x 15", "Tricep Dips x 12", "Plank Shoulder Taps x 16", "Diamond Push-ups x 10"] },
      { day: "Saturday", focus: "Full Body Circuit", exercises: ["Squat Jumps x 12", "Push-ups x 12", "Burpees x 8", "Plank 60 sec"] },
      { day: "Sunday", focus: "Active Recovery", exercises: ["Yoga 20 min", "Light stretching", "Walking 30 min"] },
    ],
  },
  muscle_gain: {
    goal: "muscle_gain",
    name: "Muscle Building Program",
    description: "Strength-focused workouts for muscle growth",
    days: [
      { day: "Monday", focus: "Push Day", exercises: ["Push-ups 4x12", "Pike Push-ups 3x10", "Diamond Push-ups 3x8", "Tricep Dips 3x12"] },
      { day: "Tuesday", focus: "Pull Day", exercises: ["Pull-ups 4x8", "Inverted Rows 3x12", "Chin-ups 3x8", "Bicep Holds 3x20 sec"] },
      { day: "Wednesday", focus: "Legs", exercises: ["Squats 4x15", "Lunges 3x12 each", "Bulgarian Split Squats 3x10", "Calf Raises 4x20"] },
      { day: "Thursday", focus: "Rest", exercises: ["Light walking", "Mobility work 15 min"] },
      { day: "Friday", focus: "Upper Body", exercises: ["Push-ups 4x15", "Pike Push-ups 3x12", "Plank 3x60 sec", "Shoulder Taps 3x20"] },
      { day: "Saturday", focus: "Lower Body", exercises: ["Jump Squats 3x15", "Single Leg Squats 3x8", "Glute Bridges 4x15", "Wall Sit 3x45 sec"] },
      { day: "Sunday", focus: "Active Recovery", exercises: ["Stretching 20 min", "Light cardio 20 min"] },
    ],
  },
}

export function getWorkoutPlan(goal: WorkoutGoal): WorkoutPlan {
  return workoutPlans[goal]
}
