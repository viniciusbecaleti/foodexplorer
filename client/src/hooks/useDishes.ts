import { useContext } from "react"
import { DishesContext } from "../contexts/DishesContext"

export function useDishes() {
  const context = useContext(DishesContext)
  return context
}
