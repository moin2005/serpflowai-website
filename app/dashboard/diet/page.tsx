"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { generateMealPlan, type DayPlan } from "@/lib/diet-plans"
import { Utensils, RefreshCw, Flame, Beef, Wheat, Droplets, Target, TrendingDown } from "lucide-react"

export default function DietPage() {
  const [goal, setGoal] = useState<"fat_loss" | "muscle_gain">("fat_loss")
  const [mealPlan, setMealPlan] = useState<DayPlan[]>([])
  const [selectedDay, setSelectedDay] = useState("Monday")
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    generatePlan()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const generatePlan = async () => {
    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setMealPlan(generateMealPlan(goal))
    setIsGenerating(false)
  }

  const handleGoalChange = (newGoal: "fat_loss" | "muscle_gain") => {
    setGoal(newGoal)
    setMealPlan(generateMealPlan(newGoal))
  }

  const currentDay = mealPlan.find((d) => d.day === selectedDay)

  const weeklyAvg = mealPlan.length > 0 ? {
    calories: Math.round(mealPlan.reduce((sum, d) => sum + d.totalCalories, 0) / 7),
    protein: Math.round(mealPlan.reduce((sum, d) => sum + d.totalProtein, 0) / 7),
    carbs: Math.round(mealPlan.reduce((sum, d) => sum + d.totalCarbs, 0) / 7),
    fat: Math.round(mealPlan.reduce((sum, d) => sum + d.totalFat, 0) / 7),
  } : null

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
            <Utensils className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Diet Planner</h1>
            <p className="text-sm text-muted-foreground">7-day personalized meal plans</p>
          </div>
        </div>
        <Button onClick={generatePlan} disabled={isGenerating} variant="outline">
          <RefreshCw className={`h-4 w-4 mr-2 ${isGenerating ? "animate-spin" : ""}`} />
          Regenerate Plan
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card
          className={`cursor-pointer transition-all border-2 ${
            goal === "fat_loss"
              ? "border-primary bg-primary/5"
              : "border-border/50 hover:border-border"
          }`}
          onClick={() => handleGoalChange("fat_loss")}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                <TrendingDown className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Fat Loss</h3>
                <p className="text-sm text-muted-foreground">
                  Calorie deficit with high protein
                </p>
              </div>
              {goal === "fat_loss" && (
                <Badge className="ml-auto">Selected</Badge>
              )}
            </div>
          </CardContent>
        </Card>

        <Card
          className={`cursor-pointer transition-all border-2 ${
            goal === "muscle_gain"
              ? "border-primary bg-primary/5"
              : "border-border/50 hover:border-border"
          }`}
          onClick={() => handleGoalChange("muscle_gain")}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Muscle Gain</h3>
                <p className="text-sm text-muted-foreground">
                  Calorie surplus for growth
                </p>
              </div>
              {goal === "muscle_gain" && (
                <Badge className="ml-auto">Selected</Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {weeklyAvg && (
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Weekly Average</CardTitle>
            <CardDescription>Your daily nutritional targets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Flame className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{weeklyAvg.calories}</p>
                  <p className="text-xs text-muted-foreground">Calories</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <Beef className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{weeklyAvg.protein}g</p>
                  <p className="text-xs text-muted-foreground">Protein</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                  <Wheat className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{weeklyAvg.carbs}g</p>
                  <p className="text-xs text-muted-foreground">Carbs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Droplets className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{weeklyAvg.fat}g</p>
                  <p className="text-xs text-muted-foreground">Fat</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {mealPlan.length > 0 && (
        <Tabs value={selectedDay} onValueChange={setSelectedDay}>
          <ScrollArea className="w-full">
            <TabsList className="w-full justify-start mb-4">
              {mealPlan.map((day) => (
                <TabsTrigger key={day.day} value={day.day} className="min-w-[100px]">
                  {day.day.slice(0, 3)}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollArea>

          {mealPlan.map((day) => (
            <TabsContent key={day.day} value={day.day} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <MealCard
                  title="Breakfast"
                  meal={day.breakfast}
                  gradient="from-amber-500 to-orange-600"
                />
                <MealCard
                  title="Lunch"
                  meal={day.lunch}
                  gradient="from-emerald-500 to-teal-600"
                />
                <MealCard
                  title="Dinner"
                  meal={day.dinner}
                  gradient="from-blue-500 to-indigo-600"
                />
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600`}>
                        <Utensils className="h-4 w-4 text-white" />
                      </div>
                      <CardTitle className="text-base">Snacks</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {day.snacks.map((snack, idx) => (
                      <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{snack.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {snack.calories} cal
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{snack.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <span className="font-semibold">{day.day} Totals</span>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span><strong>{day.totalCalories}</strong> calories</span>
                      <span><strong>{day.totalProtein}g</strong> protein</span>
                      <span><strong>{day.totalCarbs}g</strong> carbs</span>
                      <span><strong>{day.totalFat}g</strong> fat</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  )
}

function MealCard({
  title,
  meal,
  gradient,
}: {
  title: string
  meal: { name: string; calories: number; protein: number; carbs: number; fat: number; description: string }
  gradient: string
}) {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-lg bg-gradient-to-br ${gradient}`}>
            <Utensils className="h-4 w-4 text-white" />
          </div>
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold mb-1">{meal.name}</h4>
        <p className="text-sm text-muted-foreground mb-3">{meal.description}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            <Flame className="h-3 w-3 mr-1 text-orange-500" />
            {meal.calories} cal
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Beef className="h-3 w-3 mr-1 text-red-500" />
            {meal.protein}g
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Wheat className="h-3 w-3 mr-1 text-amber-500" />
            {meal.carbs}g
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Droplets className="h-3 w-3 mr-1 text-blue-500" />
            {meal.fat}g
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
