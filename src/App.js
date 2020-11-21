import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import GlobalStyles from './styles/globalStyles'

function App (){
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="container">
        <GlobalStyles />
        <h1>Dark Theme</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="accent" onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Trocar Tema
        </button>
      </div >
    </ThemeProvider>
  )
}

export default App;
