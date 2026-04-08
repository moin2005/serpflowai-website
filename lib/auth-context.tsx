"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface StoredUser extends User {
  passwordHash: string
}

function hashPassword(password: string): string {
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return hash.toString(16) + password.length.toString(16)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const sessionUser = localStorage.getItem("fitverse_session")
    if (sessionUser) {
      try {
        setUser(JSON.parse(sessionUser))
      } catch {
        localStorage.removeItem("fitverse_session")
      }
    }
    setIsLoading(false)
  }, [])

  const getStoredUsers = (): StoredUser[] => {
    try {
      const users = localStorage.getItem("fitverse_users")
      return users ? JSON.parse(users) : []
    } catch {
      return []
    }
  }

  const signup = async (email: string, password: string, name: string) => {
    const users = getStoredUsers()
    
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: "An account with this email already exists" }
    }

    if (password.length < 6) {
      return { success: false, error: "Password must be at least 6 characters" }
    }

    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      email: email.toLowerCase(),
      name,
      createdAt: new Date().toISOString(),
      passwordHash: hashPassword(password)
    }

    users.push(newUser)
    localStorage.setItem("fitverse_users", JSON.stringify(users))

    const sessionUser: User = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      createdAt: newUser.createdAt
    }

    localStorage.setItem("fitverse_session", JSON.stringify(sessionUser))
    setUser(sessionUser)

    return { success: true }
  }

  const login = async (email: string, password: string) => {
    const users = getStoredUsers()
    const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase())

    if (!foundUser) {
      return { success: false, error: "No account found with this email" }
    }

    if (foundUser.passwordHash !== hashPassword(password)) {
      return { success: false, error: "Incorrect password" }
    }

    const sessionUser: User = {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
      createdAt: foundUser.createdAt
    }

    localStorage.setItem("fitverse_session", JSON.stringify(sessionUser))
    setUser(sessionUser)

    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem("fitverse_session")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
