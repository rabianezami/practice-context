import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/main"
import { ThemeContext } from "./ThemeContext"


function App() {
 const [theme, setTheme] = useState("light")

 const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light")
 }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
     <Header />
     <Main />
    </ThemeContext.Provider>
  )
}

export default App
