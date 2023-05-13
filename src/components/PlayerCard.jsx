import mainManager from "../state/main/mainManager";
import { TiUserDeleteOutline } from 'react-icons/ti'

export default function PlayerCard({ player }) {
    return (
        <div className="p-2 bg-gray-300 rounded-md shadow-sm shadow-gray-800">
            <button
                className="w-fit p-1 bg-gray-50 rounded-md"
                onClick={() => mainManager.setters.removePlayerByID(player.id)}
            >
                <TiUserDeleteOutline />
            </button>
            <div className="grid grid-cols-12">
                <h1 className="col-span-3">{player.name}</h1>
                <div className="col-span-9 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-gray-100 rounded-md">W</div>
                    <div className="bg-gray-100 rounded-md">M</div>
                    <div className="bg-gray-100 rounded-md">I</div>
                </div>
            </div>
        </div>
    )
}