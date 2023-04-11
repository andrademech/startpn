// Context Providers
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

// Styles
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ServicesProvider } from './contexts/ServicesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <ServicesProvider>
          <Router />
        </ServicesProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
