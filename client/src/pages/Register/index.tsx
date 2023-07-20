import { Link } from "react-router-dom"

import { Container, Form } from "./styles"

import logo from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Register() {
  return (
    <Container>
      <img src={logo} alt="" />

      <Form>
        <h1>Crie sua conta</h1>

        <label>
          <span>Nome</span>
          <Input type="text" placeholder="Nome completo" autoFocus />
        </label>

        <label>
          <span>Email</span>
          <Input type="email" placeholder="Email" />
        </label>

        <label>
          <span>Senha</span>
          <Input type="password" placeholder="Senha" />
        </label>

        <Button type="submit">Criar conta</Button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
