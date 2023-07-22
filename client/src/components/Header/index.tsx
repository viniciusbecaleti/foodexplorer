import { useState } from "react"
import { List, MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react"

import { Container, Content, ExitButton, InputWrapper, Logo, MenuButton, NewDishButton, Orders } from "./styles"

import logoImg from "../../assets/logo.svg"

import { Input } from "../Input"
import { MenuMobile } from "../MenuMobile"

const user = {
  admin: true
}

export function Header() {
  const [isMenuMobileVisiable, setIsMenuMobileVisiable] = useState(false)

  function openMenu() {
    setIsMenuMobileVisiable(true)
  }

  function closeMenu() {
    setIsMenuMobileVisiable(false)
  }

  return (
    <>
      <MenuMobile
        isMenuMobileVisiable={isMenuMobileVisiable}
        onCloseMenu={closeMenu}
      />
      <Container>
        <Content>
          <MenuButton
            type="button"
            aria-label="Abrir menu"
            onClick={openMenu}
          >
            <List size={32} />
          </MenuButton>

          <Logo>
            <img src={logoImg} alt="" />
            {user.admin && <span>admin</span>}
          </Logo>

          <InputWrapper>
            <MagnifyingGlass size={24} weight="bold" />
            <Input type="text" placeholder="Busque por pratos ou ingredientes" />
          </InputWrapper>

          {!user.admin ? (
            <Orders to="/">
              <Receipt size={32} />
              <span>0</span>
              <span>Pedidos (0)</span>
            </Orders>
          ): (
            <NewDishButton to="/novo-prato">
            Novo prato
            </NewDishButton>
          )}

          <ExitButton type="button" aria-label="Sair">
            <SignOut size={32} />
          </ExitButton>
        </Content>
      </Container>
    </>
  )
}
