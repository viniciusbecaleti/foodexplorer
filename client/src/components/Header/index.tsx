import { FormEvent, useState, } from "react"
import { List, MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react"

import { Container, Content, ExitButton, SearchForm, Logo, MenuButton, NewDishButton, Orders } from "./styles"

import logoImg from "../../assets/logo.svg"

import { useAuth } from "../../hooks/useAuth"
import { useDishes } from "../../hooks/useDishes"

import { Input } from "../Input"
import { MenuMobile } from "../MenuMobile"

export function Header() {
  const [isMenuMobileVisiable, setIsMenuMobileVisiable] = useState(false)
  const [search, setSeach] = useState("")

  const { user, logout } = useAuth()
  const { getDishes } = useDishes()

  function openMenu() {
    setIsMenuMobileVisiable(true)
  }

  function closeMenu() {
    setIsMenuMobileVisiable(false)
  }

  function handleSearch(event: FormEvent) {
    event.preventDefault()
    getDishes(search)
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

          <Logo to="/">
            <img src={logoImg} alt="" />
            {user?.admin && <span>admin</span>}
          </Logo>

          <SearchForm onSubmit={handleSearch}>
            <MagnifyingGlass size={24} weight="bold" />
            <Input
              type="text"
              placeholder="Busque por pratos ou ingredientes"
              value={search}
              onChange={({ target }) => setSeach(target.value)}
            />
          </SearchForm>

          {!user?.admin ? (
            <Orders to="/">
              <Receipt size={32} />
              <span>0</span>
              <span>Pedidos (0)</span>
            </Orders>
          ): (
            <NewDishButton to="/new">
              Novo prato
            </NewDishButton>
          )}

          <ExitButton
            type="button"
            aria-label="Sair"
            onClick={logout}
          >
            <SignOut size={32} />
          </ExitButton>
        </Content>
      </Container>
    </>
  )
}
