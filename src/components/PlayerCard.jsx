import mainManager from "../state/main/mainManager";

export default function PlayerCard({player}){
    return (
        <div className="p-2 bg-gray-300 rounded-md shadow-sm shadow-gray-800">
            <button onClick={() => mainManager.setters.removePlayerByID(player.id)}>delete</button>
            <h1>{player.name}</h1>
        </div>
    )
}