import levels from '../config/levels'
import LevelCard from "./LevelCard"

const renderLevels = (levels) => {
    return levels.map((level, i) => (
        <LevelCard key={i} index={i+1} level={level} />
    ))
}

export default function LevelMenu(){
    return (
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2 my-2">
            {renderLevels(levels)}
        </div>
    )
}