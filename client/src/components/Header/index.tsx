import { Link } from "react-router-dom"
import { List, Receipt, MagnifyingGlass, SignOut } from "@phosphor-icons/react"

import { Container, Content } from "./styles"

import logo from "../../assets/logo.svg"
import logoAdmin from "../../assets/logo_admin.svg"

import { Input } from "../Input"

const user = {
  admin: 1
}

export function Header() {
  return (
    <Container>
      <Content>
        <button data-button="open" type="button">
          <List size={24} weight="bold" />
        </button>

        <Link className="logo" to="/">
          <img src={user.admin ? logoAdmin : logo} alt="" />
        </Link>

        <div className="search">
          <MagnifyingGlass size={24} weight="bold" />
          <Input type="text" placeholder="Busque por pratos ou ingredientes" />
        </div>

        <button className="search-mobile" data-search="open" type="button">
          <MagnifyingGlass size={24} weight="bold" />
        </button>

        {user.admin ? (
          <Link className="button-link" to="/">
            Novo prato
          </Link>
        ) : (
          <Link className="button-link" to="/">
            <Receipt size={24} />
            Pedidos (0)
          </Link>
        )}

        {!user.admin && (
          <Link className="pedidos-mobile" to="/pedidos">
            <Receipt size={32} />
            <span>0</span>
          </Link>
        )}

        <Link className="logout" to="/sair">
          <SignOut size={32} />
        </Link>
      </Content>
    </Container>
  )
}
