export default function Hey(){
    const handleClick = () => {
        console.log("Hey Sharon")
    }
    return (
        <div className="h-screen w-screen flex justify-center items-center overflow-hidden">
            <button 
                className="block w-fit mx-auto p-4 text-3xl text-center bg-gray-400 rounded-md shadow-sm shadow-gray-800 hover:shadow-md hover:shadow-gray-800"
                onClick={handleClick}
            >
                Hey Sharon
            </button>
        </div>
    )
}