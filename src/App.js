import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Routers from 'routers'
import useTheme from 'hooks/theme.hook'

function App() {
  const { theme } = useTheme()

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Routers />
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App
