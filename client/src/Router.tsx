import { Route, Routes } from "react-router-dom"

import { DefaultLayout } from "./layouts/DefaultLayout"

import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Home } from "./pages/Home"

import { useAuth } from "./hooks/useAuth"

import { DishesProvider } from "./contexts/DishesContext"

export function Router() {
  const { user } = useAuth()

  return user ? (
    <DishesProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </DishesProvider>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
