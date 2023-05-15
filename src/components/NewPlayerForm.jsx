import { useState } from "react"
import mainManager from "../state/main/mainManager"


export default function NewPlayerForm() {
    // STATE
    const [name, setName] = useState("")

    // EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        const playerName = document.querySelector("#player-name")?.value
        if (!!playerName) {
            mainManager.setters.addPlayer(playerName)
            setName("")
        }
    }

    const handleResetClick = (e) => {
        window.localStorage.clear()
        window.location.reload()
    }

    return (
        <form className="grid grid-cols-2 p-2 text-center bg-gray-300 rounded-md" onSubmit={handleSubmit}>
            <div>
                <input
                    id="player-name"
                    className="w-[20rem] px-1 mx-2 rounded-sm shadow-sm shadow-gray-700"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="submit" value="Add Player" className="cursor-pointer" />
            </div>
            
            <button onClick={handleResetClick}>Reset</button>
        </form>
    )
}