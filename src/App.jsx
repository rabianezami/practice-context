
import Header from "./components/Header"
import Main from "./components/main"
import { AuthProvider } from "./context/AuthContext"
import { ThemeProvider } from "./context/ThemeContext"
import Login from "./components/Login"


function App() {

  return (
    <AuthProvider>
      <ThemeProvider>
        <Header /> 
        <Main />
        <Login />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
