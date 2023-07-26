import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

import { Router } from "./Router"

import { AuthProvider } from "./contexts/AuthContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
