export interface Meal {
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
  description: string
}

export interface DayPlan {
  day: string
  breakfast: Meal
  lunch: Meal
  dinner: Meal
  snacks: Meal[]
  totalCalories: number
  totalProtein: number
  totalCarbs: number
  totalFat: number
}

const fatLossBreakfasts: Meal[] = [
  { name: "Greek Yogurt Parfait", calories: 320, protein: 25, carbs: 35, fat: 8, description: "Greek yogurt with berries, honey, and a sprinkle of granola" },
  { name: "Veggie Egg White Omelette", calories: 280, protein: 28, carbs: 12, fat: 10, description: "Egg whites with spinach, tomatoes, and feta cheese" },
  { name: "Overnight Oats", calories: 350, protein: 15, carbs: 52, fat: 9, description: "Oats soaked in almond milk with chia seeds and banana" },
  { name: "Avocado Toast with Eggs", calories: 380, protein: 20, carbs: 30, fat: 18, description: "Whole grain toast with mashed avocado and poached eggs" },
  { name: "Protein Smoothie Bowl", calories: 340, protein: 30, carbs: 40, fat: 6, description: "Protein powder, frozen berries, banana, topped with seeds" },
  { name: "Cottage Cheese Bowl", calories: 290, protein: 28, carbs: 22, fat: 8, description: "Low-fat cottage cheese with pineapple and walnuts" },
  { name: "Turkey Breakfast Wrap", calories: 360, protein: 32, carbs: 28, fat: 12, description: "Whole wheat wrap with turkey, eggs, and veggies" },
]

const fatLossLunches: Meal[] = [
  { name: "Grilled Chicken Salad", calories: 420, protein: 40, carbs: 20, fat: 18, description: "Mixed greens with grilled chicken, avocado, and balsamic" },
  { name: "Tuna Lettuce Wraps", calories: 350, protein: 35, carbs: 12, fat: 16, description: "Tuna salad in butter lettuce cups with cucumber" },
  { name: "Turkey & Veggie Soup", calories: 320, protein: 28, carbs: 30, fat: 10, description: "Hearty soup with lean turkey and mixed vegetables" },
  { name: "Shrimp Stir-Fry", calories: 380, protein: 32, carbs: 28, fat: 14, description: "Shrimp with broccoli, bell peppers over cauliflower rice" },
  { name: "Quinoa Buddha Bowl", calories: 410, protein: 22, carbs: 48, fat: 15, description: "Quinoa with chickpeas, roasted veggies, and tahini" },
  { name: "Grilled Fish Tacos", calories: 390, protein: 35, carbs: 32, fat: 12, description: "Grilled white fish in corn tortillas with slaw" },
  { name: "Mediterranean Plate", calories: 400, protein: 25, carbs: 35, fat: 18, description: "Hummus, grilled chicken, cucumber, tomatoes, olives" },
]

const fatLossDinners: Meal[] = [
  { name: "Baked Salmon & Veggies", calories: 450, protein: 38, carbs: 20, fat: 24, description: "Salmon fillet with roasted asparagus and sweet potato" },
  { name: "Lean Beef Stir-Fry", calories: 420, protein: 36, carbs: 28, fat: 18, description: "Lean sirloin with broccoli, snap peas over brown rice" },
  { name: "Grilled Chicken Breast", calories: 380, protein: 42, carbs: 22, fat: 12, description: "Herb-grilled chicken with quinoa and steamed broccoli" },
  { name: "Turkey Meatballs", calories: 400, protein: 35, carbs: 32, fat: 14, description: "Lean turkey meatballs with marinara and zucchini noodles" },
  { name: "Cod with Vegetables", calories: 360, protein: 34, carbs: 25, fat: 12, description: "Baked cod with roasted Mediterranean vegetables" },
  { name: "Chicken Fajita Bowl", calories: 430, protein: 38, carbs: 35, fat: 16, description: "Grilled chicken with peppers, onions, salsa over rice" },
  { name: "Pork Tenderloin", calories: 390, protein: 36, carbs: 28, fat: 14, description: "Herb-crusted pork with roasted Brussels sprouts" },
]

const fatLossSnacks: Meal[] = [
  { name: "Apple with Almond Butter", calories: 180, protein: 5, carbs: 22, fat: 10, description: "Sliced apple with 1 tbsp almond butter" },
  { name: "Greek Yogurt Cup", calories: 120, protein: 15, carbs: 8, fat: 2, description: "Plain Greek yogurt with a drizzle of honey" },
  { name: "Protein Bar", calories: 200, protein: 20, carbs: 18, fat: 8, description: "Low-sugar protein bar" },
  { name: "Veggie Sticks & Hummus", calories: 150, protein: 6, carbs: 18, fat: 6, description: "Carrot, celery, cucumber with 2 tbsp hummus" },
  { name: "Hard Boiled Eggs", calories: 140, protein: 12, carbs: 1, fat: 10, description: "2 hard boiled eggs with salt and pepper" },
  { name: "Mixed Nuts", calories: 170, protein: 5, carbs: 6, fat: 15, description: "Small handful of almonds, walnuts, cashews" },
  { name: "Cottage Cheese & Berries", calories: 130, protein: 14, carbs: 10, fat: 3, description: "Half cup cottage cheese with mixed berries" },
]

const muscleGainBreakfasts: Meal[] = [
  { name: "Power Oatmeal", calories: 550, protein: 35, carbs: 65, fat: 16, description: "Oatmeal with protein powder, banana, peanut butter, and honey" },
  { name: "Whole Egg Scramble", calories: 520, protein: 38, carbs: 30, fat: 28, description: "4 whole eggs with cheese, toast, and turkey bacon" },
  { name: "Protein Pancakes", calories: 580, protein: 40, carbs: 60, fat: 18, description: "Protein pancakes with maple syrup and Greek yogurt" },
  { name: "Breakfast Burrito", calories: 620, protein: 42, carbs: 52, fat: 26, description: "Large tortilla with eggs, beans, cheese, and sausage" },
  { name: "Mass Gainer Smoothie", calories: 650, protein: 45, carbs: 75, fat: 18, description: "Protein powder, oats, banana, milk, peanut butter" },
  { name: "Steak and Eggs", calories: 580, protein: 48, carbs: 25, fat: 32, description: "Sirloin steak with eggs and hash browns" },
  { name: "French Toast Stack", calories: 560, protein: 32, carbs: 68, fat: 18, description: "Whole grain French toast with berries and protein" },
]

const muscleGainLunches: Meal[] = [
  { name: "Double Chicken Rice Bowl", calories: 680, protein: 55, carbs: 65, fat: 20, description: "Double portion chicken breast over jasmine rice with veggies" },
  { name: "Beef & Rice Plate", calories: 720, protein: 50, carbs: 70, fat: 24, description: "Lean ground beef with rice, beans, and guacamole" },
  { name: "Salmon Pasta", calories: 700, protein: 45, carbs: 72, fat: 22, description: "Grilled salmon over whole wheat pasta with olive oil" },
  { name: "Turkey Club Sandwich", calories: 650, protein: 48, carbs: 55, fat: 26, description: "Triple-decker turkey club with sweet potato fries" },
  { name: "Chicken Burrito Bowl", calories: 750, protein: 52, carbs: 78, fat: 22, description: "Chicken, rice, beans, corn, cheese, sour cream" },
  { name: "Tuna Pasta Salad", calories: 680, protein: 48, carbs: 68, fat: 20, description: "Whole wheat pasta with tuna, olive oil, and vegetables" },
  { name: "Grilled Chicken Wrap", calories: 640, protein: 50, carbs: 58, fat: 22, description: "Large wrap with double chicken, rice, and avocado" },
]

const muscleGainDinners: Meal[] = [
  { name: "Ribeye Steak Dinner", calories: 780, protein: 58, carbs: 45, fat: 38, description: "8oz ribeye with baked potato and grilled vegetables" },
  { name: "Chicken Breast & Pasta", calories: 720, protein: 55, carbs: 75, fat: 18, description: "Grilled chicken breast over whole wheat pasta with sauce" },
  { name: "Salmon & Sweet Potato", calories: 680, protein: 48, carbs: 55, fat: 28, description: "Large salmon fillet with loaded sweet potato" },
  { name: "Ground Beef & Rice", calories: 750, protein: 52, carbs: 68, fat: 28, description: "Lean beef with rice, vegetables, and teriyaki sauce" },
  { name: "Pork Chops Dinner", calories: 700, protein: 50, carbs: 55, fat: 30, description: "Grilled pork chops with mashed potatoes and greens" },
  { name: "Chicken Thigh Dinner", calories: 680, protein: 48, carbs: 52, fat: 28, description: "Crispy chicken thighs with rice and roasted vegetables" },
  { name: "Fish & Chips", calories: 720, protein: 45, carbs: 72, fat: 26, description: "Baked cod with oven-baked potato wedges and coleslaw" },
]

const muscleGainSnacks: Meal[] = [
  { name: "Protein Shake", calories: 300, protein: 35, carbs: 25, fat: 8, description: "Protein powder with milk and banana" },
  { name: "PB&J Sandwich", calories: 380, protein: 15, carbs: 48, fat: 16, description: "Classic peanut butter and jelly on whole wheat" },
  { name: "Trail Mix", calories: 320, protein: 10, carbs: 30, fat: 20, description: "Mixed nuts, seeds, and dark chocolate chips" },
  { name: "Cheese & Crackers", calories: 280, protein: 14, carbs: 22, fat: 16, description: "Whole grain crackers with cheese slices" },
  { name: "Greek Yogurt Parfait", calories: 350, protein: 25, carbs: 40, fat: 10, description: "Greek yogurt with granola, honey, and fruit" },
  { name: "Beef Jerky & Banana", calories: 260, protein: 22, carbs: 30, fat: 6, description: "Beef jerky with a medium banana" },
  { name: "Rice Cakes with PB", calories: 290, protein: 10, carbs: 35, fat: 14, description: "Rice cakes topped with peanut butter and honey" },
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function generateMealPlan(goal: "fat_loss" | "muscle_gain"): DayPlan[] {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  
  const breakfasts = shuffleArray(goal === "fat_loss" ? fatLossBreakfasts : muscleGainBreakfasts)
  const lunches = shuffleArray(goal === "fat_loss" ? fatLossLunches : muscleGainLunches)
  const dinners = shuffleArray(goal === "fat_loss" ? fatLossDinners : muscleGainDinners)
  const snacks = shuffleArray(goal === "fat_loss" ? fatLossSnacks : muscleGainSnacks)

  return days.map((day, index) => {
    const breakfast = breakfasts[index % breakfasts.length]
    const lunch = lunches[index % lunches.length]
    const dinner = dinners[index % dinners.length]
    const daySnacks = [
      snacks[index % snacks.length],
      snacks[(index + 3) % snacks.length],
    ]

    const totalCalories = breakfast.calories + lunch.calories + dinner.calories + daySnacks.reduce((sum, s) => sum + s.calories, 0)
    const totalProtein = breakfast.protein + lunch.protein + dinner.protein + daySnacks.reduce((sum, s) => sum + s.protein, 0)
    const totalCarbs = breakfast.carbs + lunch.carbs + dinner.carbs + daySnacks.reduce((sum, s) => sum + s.carbs, 0)
    const totalFat = breakfast.fat + lunch.fat + dinner.fat + daySnacks.reduce((sum, s) => sum + s.fat, 0)

    return {
      day,
      breakfast,
      lunch,
      dinner,
      snacks: daySnacks,
      totalCalories,
      totalProtein,
      totalCarbs,
      totalFat,
    }
  })
}
