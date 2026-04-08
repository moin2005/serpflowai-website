"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { getStats } from "@/lib/activity-store" // Activity tracking
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Camera, Utensils, MessageCircle, Dumbbell, Activity, Clock } from "lucide-react"

const features = [
  {
    title: "Exercise Detection",
    description: "Real-time posture analysis using AI camera detection",
    href: "/dashboard/exercise",
    icon: Camera,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Workout Planner",
    description: "Weekly training schedules for your goals",
    href: "/dashboard/workout",
    icon: Dumbbell,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Diet Planner",
    description: "Personalized 7-day meal plans for your goals",
    href: "/dashboard/diet",
    icon: Utensils,
    gradient: "from-orange-500 to-amber-600",
  },
  {
    title: "AI Coach",
    description: "Get instant fitness advice from your AI trainer",
    href: "/dashboard/coach",
    icon: MessageCircle,
    gradient: "from-blue-500 to-cyan-600",
  },
]

export default function DashboardPage() {
  const { user } = useAuth()
  const [stats, setStats] = useState({ workoutsCompleted: 0, lastWorkout: null as Date | null, totalActivities: 0 })

  useEffect(() => {
    setStats(getStats())
  }, [])

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  const formatLastWorkout = (date: any) => {
    if (!date) return "No activity yet"

    const parsedDate = new Date(date)

    if (isNaN(parsedDate.getTime())) {
      return "No activity yet"
    }

    const now = new Date()
    const diff = now.getTime() - parsedDate.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (days === 0) return "Today"
    if (days === 1) return "Yesterday"
    return `${days} days ago`
  }

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {getGreeting()}, {user?.name?.split(" ")[0]}
        </h1>
        <p className="text-muted-foreground mt-1">
          Ready to crush your fitness goals today?
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Workouts Completed</p>
                <p className="text-2xl font-bold mt-1">
                  {stats.workoutsCompleted > 0 ? stats.workoutsCompleted : "No activity yet"}
                </p>
              </div>
              <Activity className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Last Workout</p>
                <p className="text-2xl font-bold mt-1">{formatLastWorkout(stats.lastWorkout)}</p>
              </div>
              <Clock className="h-8 w-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.href}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              <CardHeader>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} w-fit mb-2`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link href={feature.href}>Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Tips for Today</CardTitle>
          <CardDescription>Quick wellness reminders to keep you on track</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-sm text-muted-foreground">
                Stay hydrated - aim for at least 8 glasses of water today
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
              <span className="text-sm text-muted-foreground">
                Take short breaks every hour to stretch and move around
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
              <span className="text-sm text-muted-foreground">
                Focus on protein-rich meals to support muscle recovery
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
