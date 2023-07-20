import { Route, Routes } from "react-router-dom"

import { DefaultLayout } from "./layouts/DefaultLayout"

import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Home } from "./pages/Home"

const authenticated = true

export function Router() {
  return authenticated ? (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
