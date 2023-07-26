import { Container } from "./styles"

import { useDishes } from "../../hooks/useDishes"

import { Category } from "../../components/Category"

export function Home() {
  const { dishes } = useDishes()

  return (
    <Container>
      {dishes.map(category => (
        <Category
          key={category.category_name}
          category={category.category_name}
          dishes={category.dishes}
        />
      ))}
    </Container>
  )
}
