import { useEffect } from "react"
import { MagnifyingGlass, X } from "@phosphor-icons/react"

import { Container, Content, Header, InputWrapper } from "./styles"
import { Input } from "../Input"

interface MenuMobileProps {
  isMenuMobileVisiable: boolean
  onCloseMenu: () => void
}

export function MenuMobile({ isMenuMobileVisiable, onCloseMenu }: MenuMobileProps) {
  useEffect(() => {
    document.body.style.overflowY = isMenuMobileVisiable ? "hidden" : "auto"
  }, [isMenuMobileVisiable])

  return (
    <Container open={isMenuMobileVisiable}>
      <Header>
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={onCloseMenu}
        >
          <X size={32} />
        </button>
        <span>Menu</span>
      </Header>

      <Content>
        <InputWrapper>
          <MagnifyingGlass size={24} weight="bold" />
          <Input type="text" placeholder="Busque por pratos ou ingredientes" />
        </InputWrapper>
      </Content>
    </Container>
  )
}
