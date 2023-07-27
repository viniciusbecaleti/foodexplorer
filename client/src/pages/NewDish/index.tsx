import { Link } from "react-router-dom"
import { CaretLeft } from "@phosphor-icons/react"

import { Container } from "./styles"

export function NewDish() {
  return (
    <Container>
      <Link to="/">
        <CaretLeft size={24} weight="bold" />
        voltar
      </Link>
    </Container>
  )
}
