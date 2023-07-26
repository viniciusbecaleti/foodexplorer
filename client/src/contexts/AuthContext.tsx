import { ReactNode, createContext, useEffect, useState } from "react"
import secureLocalStorage from "react-secure-storage"

import { api } from "../libs/axios"

interface User {
  id: string,
  name: string,
  email: string,
  admin: boolean
}

interface LoginProps {
  email?: string
  password: string
}

interface AuthContextProps {
  user: User | null,
  isFetching: boolean
  login: ({ email, password }: LoginProps) => Promise<void>
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

interface SessionProps {
  token: string
  user: User
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isFetching, setIsFetching] = useState(false)

  async function login({ email, password }: LoginProps) {
    try {
      setIsFetching(true)

      const response = await api.post<SessionProps>("/sessions", { email, password })
      const { token, user } = response.data

      secureLocalStorage.setItem("@foodexplorer:token", token)
      secureLocalStorage.setItem("@foodexplorer:user", JSON.stringify(user))

      api.defaults.headers.common.Authorization = "Bearer " + token

      setUser(user)
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetching(false)
    }
  }

  function logout() {
    secureLocalStorage.removeItem("@foodexplorer:token")
    secureLocalStorage.removeItem("@foodexplorer:user")

    api.defaults.headers.common.Authorization = undefined

    setUser(null)
  }

  useEffect(() => {
    const token = String(secureLocalStorage.getItem("@foodexplorer:token"))
    const user = String(secureLocalStorage.getItem("@foodexplorer:user"))

    if (token && user) {
      api.defaults.headers.common.Authorization = "Bearer " + token
      setUser(JSON.parse(user))
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, isFetching, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
