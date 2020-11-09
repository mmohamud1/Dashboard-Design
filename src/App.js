import React from 'react'
import Dashboard from './containers/Dashboard'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <ThemeProvider theme='any'>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
