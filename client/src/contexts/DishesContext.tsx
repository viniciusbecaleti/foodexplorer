import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../libs/axios"

interface IngredientType {
  id: string,
	name: string,
	dish_id: string,
	created_at: string,
	updated_at: string
}

export interface DishType {
  id: string
	image: string,
  name: string,
	price: number,
	description: string,
	category_name: string,
	created_at: string,
	updated_at: string,
	ingredients: IngredientType[]
}

interface CategoryType {
  category_name: string,
  dishes: DishType[]
}

interface DishesContextProps {
  dishes: CategoryType[]
}

interface DishesProviderProps {
  children: ReactNode
}

export const DishesContext = createContext({} as DishesContextProps)

export function DishesProvider({ children }: DishesProviderProps) {
  const [dishes, setDishes] = useState<CategoryType[]>([])

  async function getDishes(query: string = "") {
    const response = await api.get("/dishes", {
      params: {
        q: query
      }
    })

    setDishes(response.data)
  }

  useEffect(() => {
    getDishes()
  }, [])

  return (
    <DishesContext.Provider value={{ dishes }}>
      {children}
    </DishesContext.Provider>
  )
}
