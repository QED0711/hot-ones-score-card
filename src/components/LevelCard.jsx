import mainManager from '../state/main/mainManager';


export default function LevelCard({level, index, selected}){

    return (
        <div 
            className="text-center rounded-sm shadow-sm shadow-gray-600 hover:shadow-md hover:shadow-gray-800 cursor-pointer" 
            onClick={() => {mainManager.setters.toggleSelectedLevel(level)}}
            style={{opacity: selected ? 1 : 0.3, }}
        >
            <img src={level.image}  />
            <h3>{level.name} * {level.points}</h3>
        </div>
    )
}