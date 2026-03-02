import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

export default function Header() {
    const { theme, toggleTheme} = useContext(ThemeContext)
    
    return (
        <div>
            <h1>Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}