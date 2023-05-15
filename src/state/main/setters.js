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
                            forfeit: false
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

    togglePlayerForfeit(playerID) {
        this.setState(prevState => {
            const players = prevState.players.map(player => (
                player.id === playerID 
                    ? {...player, forfeit: !player.forfeit}
                    : player
            ))
            return {players}
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
        if(levelIdx < 0) return;
        this.setState(prevState => {
            const players = [...prevState.players];
            console.log(playerID, levelIdx, deduction)
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
            const levelIdx = prevState.selectedLevelIndex;
            const completedLevels = prevState.completedLevels.includes(levelIdx) ? [...prevState.completedLevels] : [...prevState.completedLevels, levelIdx]
            const players = prevState.players.map(player => ({...player})) // forces a state update because the individual player objects change
            for (let player of players) {
                if(player.forfeit) {
                    player.levels[prevState.selectedLevelIndex].score = 0
                } else {
                    player.levels[prevState.selectedLevelIndex].score = prevState.selectedLevel.points - prevState.selectedLevel.points * player.levels[prevState.selectedLevelIndex].deductions.reduce((sum, n) => sum + n, 0)
                }
            }
            return {players, completedLevels}
        })
    }
}

export default setters;
