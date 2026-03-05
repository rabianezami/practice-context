import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    const { user, setUser } = useContext(AuthContext)

    const [name, setName] = useState("")

    if (user) {
        return <h1>hello {user}</h1>
    }

    return (
        <div className="m-5">      
             <input
                type="text"
                placeholder="enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={() => setUser(name)}>
                Login
            </button>
        </div>
    )
}