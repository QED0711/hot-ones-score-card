import { nanoid } from "nanoid";

const setters = {

    addPlayer(playerName) {
        this.setState(prevState => {
            return {players: [...prevState.players, {id: nanoid(), name: playerName, scores: []}]}
        })   
    },

    removePlayerByID(playerID) {
        this.setState(prevState => {
            return {players: prevState.players.filter(player => player.id !== playerID)}
        })
    },
}

export default setters;
