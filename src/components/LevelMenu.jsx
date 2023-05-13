// ============================= STATE ============================= 
import mainManager from '../state/main/mainManager'
import { useSpiccatoState } from 'spiccato-react'

// ============================= COMPONENTS ============================= 
import levels from '../config/levels'
import LevelCard from "./LevelCard"

// RENDERER
const renderLevels = (levels, selectedLevel) => {
    return levels.map((level, i) => (
        <LevelCard key={i} index={i+1} level={level} selected={selectedLevel?.name === level.name} />
    ))
}

export default function LevelMenu(){
    // STATE
    const {state} = useSpiccatoState(mainManager, ["selectedLevel"]);

    return (
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2 my-2">
            {renderLevels(levels, state.selectedLevel)}
        </div>
    )
}