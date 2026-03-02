
import Header from "./components/Header"
import Main from "./components/main"
import { ThemeProvider } from "./context/ThemeContext"


function App() {

  return (
    <ThemeProvider>
     <Header />
     <Main />
    </ThemeProvider>
  )
}

export default App
