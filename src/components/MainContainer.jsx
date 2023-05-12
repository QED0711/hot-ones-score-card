
// ============================= STATE ============================= 
import { useSpiccatoState } from "spiccato-react"
import mainManager from "../state/main/mainManager"
import LevelMenu from "./LevelMenu"

// ============================= COMPONENTS ============================= 
import NewPlayerForm from "./NewPlayerForm"
import PlayerCard from "./PlayerCard"

// RENDERERS
const renderPlayers = (players) => {
    return players.map(player => (
        <PlayerCard key={player.id} player={player} />
    ))
}

export default function MainContainer() {
    const { state } = useSpiccatoState(mainManager, ["players", "levels"])
    console.log(state)
    return (
        <div className="h-full w-full p-4">
            <NewPlayerForm />
            <LevelMenu />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
                {renderPlayers(state.players)}

            </div>
        </div>
    )
}