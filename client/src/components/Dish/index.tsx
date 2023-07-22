import { Container } from "./styles"

import dishImg from "../../assets/dish.png"

import { Button } from "../Button"
import { HeartStraight } from "@phosphor-icons/react"

export function Dish() {
  return (
    <Container>
      <button type="button" aria-label="Favoritar prato">
        <HeartStraight size={24} />
      </button>
      <img src={dishImg} alt="" />
      <h3>Salada Ravanello</h3>
      <strong>R$ 79,97</strong>
      <Button>Incluir</Button>
    </Container>
  )
}
