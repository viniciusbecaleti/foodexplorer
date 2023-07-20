import { useEffect, useState } from "react"
import { MagnifyingGlass } from "@phosphor-icons/react"

import { Container } from "./styles"

import { FloatingSearch, Input, SearchButton } from "../Input"

import { useWindowResize } from "../../hooks/useWindowResize"

export function Search() {
  const [width, ]  = useWindowResize()

  const [searchVisible, setSearchVisible] = useState(false)

  useEffect(() => {
    if (width > 980) {
      setSearchVisible(false)
    }
  }, [width])

  return (
    <>
      {width > 980 ? (
        <Container>
          <MagnifyingGlass size={24} weight="bold" />
          <Input type="text" placeholder="Busque por pratos ou ingredientes" />
        </Container>
      ) : (
        <>
          {searchVisible && width > 840 && (
            <Input type="text" placeholder="Busque por pratos ou ingredientes" autoFocus onBlur={() => setSearchVisible(false)} />
          )}

          {!searchVisible && (
            <SearchButton type="button" onClick={() => setSearchVisible(prev => !prev)}>
              <MagnifyingGlass size={24} weight="bold" />
            </SearchButton>
          )}

          {searchVisible && width <= 840 && (
            <>
              <SearchButton type="button" onClick={() => setSearchVisible(prev => !prev)}>
                <MagnifyingGlass size={24} weight="bold" />
              </SearchButton>

              <FloatingSearch>
                <Input type="text" placeholder="Busque por pratos ou ingredientes" autoFocus onBlur={() => setSearchVisible(false)} />
              </FloatingSearch>
            </>
          )}
        </>
      )}
    </>
  )
}
