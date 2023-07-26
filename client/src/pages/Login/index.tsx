import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Container, Form } from "./styles"

import logo from "../../assets/logo.svg"

import { useAuth } from "../../hooks/useAuth"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

const loginFormSchema = z.object({
  email: z.string().email("E-mail inválido").nonempty("O campo email não pode ser vazio"),
  password: z.string().nonempty("O campo senha não pode ser vazio"),
})

type LoginFormInputs = z.infer<typeof loginFormSchema>

export function Login() {
  const { isFetching, login } = useAuth()

  const loginForm = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const { register, handleSubmit, formState: { errors } } = loginForm

  async function handleLogin(data: LoginFormInputs) {
    await login(data)
  }

  return (
    <Container>
      <img src={logo} alt="" />

      <Form onSubmit={handleSubmit(handleLogin)}>
        <h1>Faça login</h1>

        <label>
          <span>Email</span>
          <Input type="email" placeholder="Email" autoFocus {...register("email")} />
          {errors.email && <small>{errors.email.message}</small>}
        </label>

        <label>
          <span>Senha</span>
          <Input type="password" placeholder="Senha" {...register("password")} />
          {errors.password && <small>{errors.password.message}</small>}
        </label>

        <Button type="submit" disabled={isFetching}>Entrar</Button>

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
