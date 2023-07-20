import { Container, Content } from "./styles"

import logo from "../../assets/logo_footer.svg"

export function Footer() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <p>© 2023 - Todos os direitos reservados</p>
      </Content>
    </Container>
  )
}
