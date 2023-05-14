import { nanoid } from "nanoid";

const setters = {

    addPlayer(playerName) {
        this.setState(prevState => {
            return {
                players:
                    [
                        ...prevState.players,
                        {
                            id: nanoid(),
                            name: playerName,
                            levels: Array.from({ length: 10 }, () => ({ deductions: new Set(), score: null })),
                        }
                    ]
            }
        })
    },

    removePlayerByID(playerID) {
        this.setState(prevState => {
            return { players: prevState.players.filter(player => player.id !== playerID) }
        })
    },

    toggleSelectedLevel(level) {
        this.setState(prevState => {
            return prevState.selectedLevel?.name === level.name
                ? { selectedLevel: null }
                : { selectedLevel: level }
        })
    },

    togglePlayerDeduction(playerID, levelIdx, deduction) {
        this.setState(prevState => {
            for (let player of prevState.players) {
                if (player.id === playerID) {
                    player.levels[levelIdx].deductions.has(deduction)
                        ? player.levels[levelIdx].deductions.delete(deduction)
                        : player.levels[levelIdx].deductions.add(deduction)
                    break
                }
            }
            return { players: prevState.players }
        })
    },

    recordLevelScores(level) {
        this.setState(prevState => {
            for (let player of prevState.players) {

            }
        })
    }
}

export default setters;
