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
                            levels: Array.from({ length: 10 }, () => ({ deductions: new Array(), score: 0 })),
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

    toggleSelectedLevel(level, idx) {
        this.setState(prevState => {
            return prevState.selectedLevel?.name === level.name
                ? { selectedLevel: null, selectedLevelIndex: -1 }
                : { selectedLevel: level, selectedLevelIndex: idx }
        })
    },

    togglePlayerDeduction(playerID, levelIdx, deduction) {
        this.setState(prevState => {
            const players = [...prevState.players];

            for (let player of players) {
                if (player.id === playerID) {
                    player.levels[levelIdx].deductions = player.levels[levelIdx].deductions.includes(deduction)
                        ? player.levels[levelIdx].deductions.filter(d => d !== deduction)
                        : [...player.levels[levelIdx].deductions, deduction]
                    break
                }
            }
            return { players }
        })
    },

    recordLevelScores() {
        this.setState(prevState => {
            const players = [...prevState.players];
            for (let player of players) {
                player.levels[prevState.selectedLevelIndex].score = prevState.selectedLevel.points - prevState.selectedLevel.points * player.levels[prevState.selectedLevelIndex].deductions.reduce((sum, n) => sum + n, 0)
            }
            return {players}
        })
    }
}

export default setters;
