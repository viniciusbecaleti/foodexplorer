import { Link } from "react-router-dom"

import { Container, Form } from "./styles"

import logo from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Login() {
  return (
    <Container>
      <img src={logo} alt="" />

      <Form>
        <h1>Faça login</h1>

        <label>
          <span>Email</span>
          <Input type="email" placeholder="Email" autoFocus />
        </label>

        <label>
          <span>Senha</span>
          <Input type="password" placeholder="Senha" />
        </label>

        <Button type="submit">Entrar</Button>

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
