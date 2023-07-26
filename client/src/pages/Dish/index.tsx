import { Link } from "react-router-dom"

import { Container, DishInfo } from "./styles"

export function Dish() {
  return (
    <Container>
      <Link to="/">
        Voltar
      </Link>

      <DishInfo>

      </DishInfo>
    </Container>
  )
}
