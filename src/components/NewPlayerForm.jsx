import { useState } from "react"
import mainManager from "../state/main/mainManager"


export default function NewPlayerForm() {
    // STATE
    const [name, setName] = useState("")

    // EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        const playerName = document.querySelector("#player-name")?.value
        mainManager.setters.addPlayer(playerName)
        setName("")
    }

    return (
        <form className="p-2 text-center bg-gray-300 rounded-md" onSubmit={handleSubmit}>
            <input 
                id="player-name" 
                className="w-[20rem] px-1 mx-2 rounded-sm shadow-sm shadow-gray-700"
                type="text" 
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input type="submit" value="Add Player" className="cursor-pointer" />
        </form>
    )
}