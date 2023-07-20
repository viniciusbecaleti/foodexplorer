import { List, Receipt, SignOut } from "@phosphor-icons/react"

import { ButtonLink, Container, Content, LogOut, Logo, Nav, OpenMenu, Orders } from "./styles"

import logo from "../../assets/logo.svg"

import { Search } from "../Search"

import { useWindowResize } from "../../hooks/useWindowResize"

const user = {
  admin: 0
}

export function Header() {
  const [width, ] = useWindowResize()

  return (
    <Container>
      <Content>
        {width <= 768 && (
          <OpenMenu>
            <List size={24} weight="bold" />
          </OpenMenu>
        )}

        <Logo to="/">
          <img src={logo} alt="" />
          {!!user.admin && <span>admin</span>}
        </Logo>

        <Nav>
          <Search />

          {width > 768 ? (
            <>
              {user.admin ? (
                <ButtonLink to="/cadastrar-prato">
                  Novo prato
                </ButtonLink>
              ) : (
                <ButtonLink to="/pedidos">
                  <Receipt size={24} weight="bold" />
                  Pedidos (0)
                </ButtonLink>
              )}
            </>
          ) : (
            <>
              {!!user.admin === false && (
                <Orders to="/pedidos">
                  <Receipt size={32} />
                  <span>0</span>
                </Orders>
              )}
            </>
          )}

          {width > 768 && (
            <LogOut type="button" aria-label="Sair">
              <SignOut size={32} />
            </LogOut>
          )}
        </Nav>
      </Content>
    </Container>
  )
}
