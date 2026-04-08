export interface CoachResponse {
  category: string
  keywords: string[]
  responses: string[]
}

export const coachResponses: CoachResponse[] = [
  {
    category: "diet",
    keywords: ["diet", "meal", "food", "eat", "nutrition", "calories", "protein", "carbs", "healthy eating", "what to eat"],
    responses: [
      "Focus on protein with every meal - chicken, fish, eggs, or legumes. Add veggies to half your plate and drink water before meals.",
      "Meal prep on Sundays: cook proteins and grains in bulk. Mix and match throughout the week to save time and stay consistent.",
      "Cut processed foods first. Whole foods keep you fuller longer. A palm of protein, fist of carbs, thumb of fats per meal works well.",
      "Track your food for one week to understand your habits. Most people underestimate calories by 30-40%. Awareness is the first step.",
      "Don't skip breakfast. A protein-rich start reduces cravings all day. Try eggs with veggies or Greek yogurt with nuts."
    ]
  },
  {
    category: "workout",
    keywords: ["workout", "exercise", "training", "gym", "routine", "sets", "reps", "muscle", "strength", "cardio", "fitness"],
    responses: [
      "Start with compound exercises: squats, deadlifts, bench press, rows. 3 sets of 8-12 reps. Rest 60-90 seconds between sets.",
      "Train each muscle group twice per week. A simple split: Push (Mon), Pull (Wed), Legs (Fri). Add cardio on off days.",
      "Progressive overload is key. Add weight or reps each week. Track your workouts to see progress over time.",
      "Don't skip warm-ups. 5-10 minutes of light cardio and dynamic stretching prevents injuries and improves performance.",
      "Recovery matters. Sleep 7-9 hours, eat enough protein, and take rest days. Muscles grow during recovery, not during workouts."
    ]
  },
  {
    category: "motivation",
    keywords: ["motivation", "motivated", "lazy", "tired", "quit", "give up", "struggling", "hard", "can't", "don't want"],
    responses: [
      "Don't wait to feel motivated. Just start with 10 minutes. Action creates motivation, not the other way around.",
      "Focus on showing up, not perfection. A bad workout beats no workout. Consistency over intensity wins long-term.",
      "Set small weekly goals you can control: 3 workouts, 10k steps daily. Celebrate these wins. Progress compounds.",
      "Remember why you started. Write it down. On hard days, that reason pulls you through when motivation fades.",
      "Compare yourself to yesterday's version, not others. Every rep, every healthy meal is a vote for who you want to become."
    ]
  },
  {
    category: "general",
    keywords: [],
    responses: [
      "I'm here to help! Ask me about diet tips, workout routines, or staying motivated. What's your biggest challenge right now?",
      "Fitness success = consistent training + proper nutrition + good sleep. Which area do you want to focus on today?",
      "Every journey starts with a single step. I can help with workout plans, nutrition advice, or motivation. What do you need?",
      "No question is too basic! Whether you're starting out or leveling up, I've got practical tips. What's on your mind?",
      "Let's crush your goals together! Ask about workouts, diet, or motivation and I'll give you actionable advice."
    ]
  }
]

const usedResponses: Map<string, Set<number>> = new Map()

export function getCoachResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()
  
  // Find matching category
  let matchedCategory = coachResponses.find(cat => 
    cat.keywords.some(keyword => lowerMessage.includes(keyword))
  )
  
  // Default to general if no match
  if (!matchedCategory) {
    matchedCategory = coachResponses.find(cat => cat.category === "general")!
  }
  
  // Get or create used responses set for this category
  if (!usedResponses.has(matchedCategory.category)) {
    usedResponses.set(matchedCategory.category, new Set())
  }
  
  const usedSet = usedResponses.get(matchedCategory.category)!
  const responses = matchedCategory.responses
  
  // Reset if all responses have been used
  if (usedSet.size >= responses.length) {
    usedSet.clear()
  }
  
  // Find unused response
  const availableIndices = responses
    .map((_, idx) => idx)
    .filter(idx => !usedSet.has(idx))
  
  // Pick random from available
  const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)]
  usedSet.add(randomIndex)
  
  return responses[randomIndex]
}

export function resetResponseHistory() {
  usedResponses.clear()
}
