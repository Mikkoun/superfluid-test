import "../src/styles.css"

import { createTheme, ThemeProvider } from "@mui/material"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { Provider } from "react-redux"

import Configuration from "../src/core/Configuration"
import Store from "../src/redux/Store"

import type { AppProps } from "next/app"

const theme = createTheme({
  palette: {
    success: {
      main: Configuration.style.success,
    },
    warning: {
      main: Configuration.style.alert,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <StyledThemeProvider theme={Configuration.style}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledThemeProvider>
    </Provider>
  )
}

export default MyApp
