export default function LevelCard({level, index}){

    return (
        <div className="text-center cursor-pointer">
            <img src={level.image}  />
            <h3>{level.name}</h3>
        </div>
    )
}