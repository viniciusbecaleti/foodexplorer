import { FormEvent, useEffect, useState } from "react"
import { MagnifyingGlass, X } from "@phosphor-icons/react"

import { Container, Content, Header, SearchForm } from "./styles"
import { Input } from "../Input"
import { useDishes } from "../../hooks/useDishes"

interface MenuMobileProps {
  isMenuMobileVisiable: boolean
  onCloseMenu: () => void
}

export function MenuMobile({ isMenuMobileVisiable, onCloseMenu }: MenuMobileProps) {
  const { getDishes } = useDishes()

  const [search, setSeach] = useState("")

  function handleSearch(event: FormEvent) {
    event.preventDefault()
    getDishes(search)
    onCloseMenu()
  }

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
        <SearchForm onSubmit={handleSearch}>
          <MagnifyingGlass size={24} weight="bold" />
          <Input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            value={search}
            onChange={({ target }) => setSeach(target.value)}
          />
        </SearchForm>
      </Content>
    </Container>
  )
}
