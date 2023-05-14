// ============================= STATE ============================= 
import mainManager from '../state/main/mainManager'
import { useSpiccatoState } from 'spiccato-react'

// ============================= COMPONENTS ============================= 
import levels from '../config/levels'
import LevelCard from "./LevelCard"

// RENDERER
const renderLevels = (levels, selectedLevel) => {
    return levels.map((level, i) => (
        <LevelCard key={i} index={i} level={level} selected={selectedLevel?.name === level.name} />
    ))
}

export default function LevelMenu() {
    // STATE
    const { state } = useSpiccatoState(mainManager, ["selectedLevel"]);
    
    return (
        <>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2 my-2">
                {renderLevels(levels, state.selectedLevel)}
            </div>
            <div>
                <button 
                    className='p-1 bg-gray-200 rounded-sm shadow-sm shadow-gray-800 hover:shadow-md hover:shadow-gray-800 cursor-pointer'
                    disabled={!state.selectedLevel}
                    onClick={() => {mainManager.setters.recordLevelScores()}}
                >
                    Complete Round
                </button>
            </div>
        </>
    )
}