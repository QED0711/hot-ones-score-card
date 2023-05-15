// ========================= STATE ========================= 
import { useSpiccatoState } from 'spiccato-react';
import mainManager from '../state/main/mainManager';

// ========================= ICONS ========================= 
import {FaPepperHot} from 'react-icons/fa'

// ========================= UTILITIES ========================= 
import {getHexColor} from '../utilities/colors'
import { readableNum } from '../utilities/general';

export default function LevelCard({level, index, selected}){
    const {state} = useSpiccatoState(mainManager, ["completedLevels"])

    return (
        <div 
            className="relative text-center rounded-sm shadow-sm shadow-gray-600 hover:shadow-md hover:shadow-gray-800 cursor-pointer" 
            onClick={() => {mainManager.setters.toggleSelectedLevel(level, index)}}
            style={{opacity: selected ? 1 : 0.3, }}
        >
            <img src={level.image}  />
            <h3 className='m-0'>Level {index + 1}</h3>
            <h3 className='m-0'>{(readableNum(level.scoville))} sc.</h3>
            {
                state.completedLevels.includes(index)
                    ? <FaPepperHot 
                        className='absolute left-2 top-2 p-1 bg-gray-200 shadow-sm shadow-gray-500 rounded-full' 
                        size={"1.5rem"}
                        style={{backgroundColor: getHexColor((index+1)/10)}}
                    />
                    : <></>
            }
        </div>
    )
}