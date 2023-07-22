import { Container } from "./styles"

import dishImg from "../../assets/dish.png"

export function Dish() {
  return (
    <Container>
      <img src={dishImg} alt="" />
      <h3>Spaguetti Gambe</h3>
      <p>Massa fresca com camarões e pesto</p>
      <strong>R$ 79,97</strong>
    </Container>
  )
}
