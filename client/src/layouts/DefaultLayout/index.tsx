import { Outlet } from "react-router-dom"

import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export function DefaultLayout() {
  return (
    <Container>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </Container>
  )
}
