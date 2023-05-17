import heyAudio from "../assets/hey_sharon.mp3"

export default function Hey(){
    // EVENTS
    const handleClick = () => {
        document.querySelector("#audio-player")?.play()
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-200 overflow-hidden">
            <audio id="audio-player" className="hidden"><source src={heyAudio} /></audio>
            <button 
                className="block w-fit mx-auto p-4 text-3xl text-center text-gray-100 bg-red-500 rounded-md shadow-sm shadow-gray-800 hover:shadow-md hover:shadow-gray-800"
                onClick={handleClick}
            >
                Hey Sharon
            </button>
        </div>
    )
}