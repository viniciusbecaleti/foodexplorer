import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../libs/axios"

export interface DishType {
  id: string
	image: string,
  name: string,
	price: number,
	description: string,
	category_name: string,
	created_at: string,
	updated_at: string
}

interface DishesContextProps {
  dishes: DishType[],
  isFetching: boolean
  getDishes: (q: string) => Promise<void>
}

interface DishesProviderProps {
  children: ReactNode
}

export const DishesContext = createContext({} as DishesContextProps)

export function DishesProvider({ children }: DishesProviderProps) {
  const [dishes, setDishes] = useState<DishType[]>([])
  const [isFetching, setIsFetching] = useState(false)

  async function getDishes(query: string = "") {
    try {
      setIsFetching(true)

      const response = await api.get("/dishes", {
        params: {
          q: query
        }
      })

      setDishes(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetching(false)
    }
  }

  useEffect(() => {
    getDishes()
  }, [])

  return (
    <DishesContext.Provider value={{ dishes, isFetching, getDishes }}>
      {children}
    </DishesContext.Provider>
  )
}
