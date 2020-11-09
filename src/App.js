import React from 'react'
import Dashboard from './containers/Dashboard'
import { ThemeProvider } from 'styled-components'
import {GlobalStyles} from './styles/global'


const App = () => {
  return (
    <ThemeProvider >
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
