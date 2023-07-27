import { Container } from "./styles"

import { useDishes } from "../../hooks/useDishes"

import { DishType } from "../../contexts/DishesContext"

import { Category } from "../../components/Category"
import { Loading } from "../../components/Loading"

interface CategoriesWithDishesType {
  name: string;
  dishes: DishType[]
}

export function Home() {
  const { dishes, isFetching } = useDishes()

  const categoriesWithDishes = dishes.reduce((acc: CategoriesWithDishesType[], dish) => {
    const categoryAlreadyExists = acc.findIndex(category => category.name === dish.category_name)

    if (categoryAlreadyExists === -1) {
      acc.push({ name: dish.category_name, dishes: [dish] })
    } else {
      acc[categoryAlreadyExists].dishes.push(dish)
    }

    return acc
  }, [])

  return (
    <Container>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          {categoriesWithDishes.map(category => (
            <Category
              key={category.name}
              category={category.name}
              dishes={category.dishes}
            />
          ))}
        </>
      )}
    </Container>
  )
}
