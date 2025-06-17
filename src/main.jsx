import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react"
import './index.css'
import App from './App.jsx'
import theme from './theme'
import GlobalState from './context/index.jsx'
import ColorModeScript from './ColorModeScript'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeScript />
    <GlobalState>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </GlobalState>
  </StrictMode>,
)
