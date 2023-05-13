import mainManager from "../state/main/mainManager";
import { TiUserDeleteOutline } from 'react-icons/ti'
import { FiFlag } from 'react-icons/fi'

import { getHexColor } from "../utilities/colors";

export default function PlayerCard({ player }) {
    return (
        <div className="p-2 bg-gray-300 rounded-md shadow-sm shadow-gray-800">
            <h1 className="bg-gray-200 p-1 mb-1 rounded-sm text-gray-800 shadow-inner shadow-gray-400 font-bold">{player.name.toUpperCase()}</h1>
            <div className="grid grid-cols-12">

                <div className="col-span-3 grid grid-cols-2 gap-1">
                        <button
                            className="w-fit p-1 mr-1 bg-gray-50 rounded-md"
                            onClick={() => mainManager.setters.removePlayerByID(player.id)}
                            title="Remove Player"
                        >
                            <TiUserDeleteOutline />
                        </button>
                        <button
                            className="w-fit p-1 bg-gray-50 rounded-md"
                            onClick={() => mainManager.setters.removePlayerByID(player.id)}
                            title="Surrender"
                        >
                            <FiFlag />
                        </button>

                </div>

                <div className="col-span-9 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-gray-100 rounded-md shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-800 cursor-pointer">
                        <img className="w-[2rem] mx-auto my-1" src="https://img.uxwing.com/wp-content/themes/uxwing/download/food-drinks-cooking/water-glass-color-icon.svg" />
                        - 20%
                    </div>
                    <div className="bg-gray-100 rounded-md shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-800 cursor-pointer">
                        <img className="w-[2rem] mx-auto my-1" src="https://img.uxwing.com/wp-content/themes/uxwing/download/food-drinks-cooking/milk-glass-icon.svg" />
                        - 30%
                    </div>
                    <div className="bg-gray-100 rounded-md shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-800 cursor-pointer">
                        <img className="w-[2rem] h-[3.2rem] mx-auto my-1" src="https://img.uxwing.com/wp-content/themes/uxwing/download/food-drinks-cooking/ice-cream-color-icon.svg" />
                        - 50%
                    </div>
                </div>
            </div>
            <hr className="mt-2"/>
            <div 
                className="px-1 mt-1 text-gray-800 rounded-sm shadow-sm shadow-gray-800"
                style={{backgroundColor: getHexColor(player.score || Math.random())}}
            >
                SCORE: {player.score || 0}
            </div>
        </div>
    )
}