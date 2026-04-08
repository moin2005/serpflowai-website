// Simple activity tracking stored in localStorage for FitVerse

export interface Activity {
  id: string
  type: "workout" | "diet" | "exercise"
  description: string
  timestamp: string
}

export interface Stats {
  workoutsCompleted: number
  lastWorkout: string | null
}

const STORAGE_KEY = "fitverse_activities"

export function getActivities(): Activity[] {
  if (typeof window === "undefined") return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function addActivity(activity: Omit<Activity, "id" | "timestamp">): void {
  if (typeof window === "undefined") return
  const activities = getActivities()
  const newActivity: Activity = {
    ...activity,
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
  }
  activities.unshift(newActivity)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(activities.slice(0, 50)))
}

export function getStats(): Stats {
  const activities = getActivities()
  const workouts = activities.filter((a) => a.type === "workout")
  return {
    workoutsCompleted: workouts.length,
    lastWorkout: workouts[0]?.timestamp || null,
  }
}

export function clearActivities(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(STORAGE_KEY)
}
