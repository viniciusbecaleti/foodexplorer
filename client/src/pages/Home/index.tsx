import { Container } from "./styles"

import { useDishes } from "../../hooks/useDishes"

import { Category } from "../../components/Category"
import { Loading } from "../../components/Loading"

export function Home() {
  const { dishes, isFetching } = useDishes()

  return (
    <Container>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          {dishes.map(category => (
            <Category
              key={category.category_name}
              category={category.category_name}
              dishes={category.dishes}
            />
          ))}
        </>
      )}
    </Container>
  )
}
