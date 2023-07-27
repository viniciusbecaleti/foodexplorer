import { Navigate, Route, Routes } from "react-router-dom"

import { DefaultLayout } from "./layouts/DefaultLayout"

import { useAuth } from "./hooks/useAuth"

import { DishesProvider } from "./contexts/DishesContext"

import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Home } from "./pages/Home"
import { Dish } from "./pages/Dish"


export function Router() {
  const { user } = useAuth()

  return user ? (
    <DishesProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dish/:dish_id" element={<Dish />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </DishesProvider>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
