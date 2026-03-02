import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

 function Main() {
    const { theme } = useContext(ThemeContext)

    return (
        <div
            style={{
            background: theme === "dark" ? "black" : "white",
            color: theme === "dark" ? "white" : "black",
            padding: "50px"
        }}
        >
            This is main content
        </div>
    )
}

export default Main;