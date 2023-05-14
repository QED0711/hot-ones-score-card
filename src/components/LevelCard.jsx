import mainManager from '../state/main/mainManager';


export default function LevelCard({level, index, selected}){

    return (
        <div 
            className="text-center rounded-sm shadow-sm shadow-gray-600 hover:shadow-md hover:shadow-gray-800 cursor-pointer" 
            onClick={() => {mainManager.setters.toggleSelectedLevel(level, index)}}
            style={{opacity: selected ? 1 : 0.3, }}
        >
            <img src={level.image}  />
            <h3 className='m-0'>Level {index + 1}</h3>
            <h3 className='m-0'>{level.scoville} sc.</h3>
        </div>
    )
}