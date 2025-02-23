import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    players: [
        {id: 1, name: "Player 1", position: 1, isComputer: false},
        {id: 2, name: "Player 2", position: 1, isComputer: false}, // Will be updated to true if the player is a computer
    ],
    currentPlayer: 0,
    diceRoll: null,
    gameStatus: 'inplay', // inplay, won
    gameMode: 'pvp' // pvp, pvc (player vs player, player vs computer)
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        rollDice: (state, action) => {
            state.diceRoll = action.payload;
        },
        movePlayer: (state, action) => {
            const player = state.players[state.currentPlayer];
            player.position += action.payload;

            if (player.position >= 100) {
                player.position = 100;
                state.gameStatus = 'won';
            }
        },
        nextTurn: (state) => {
            state.currentPlayer = (state.currentPlayer + 1) % state.players.length;
        },
        resetGame: () => initialState,
        toggleGameMode: (state) => {
            state.gameMode = state.gameMode === 'pvp' ? 'pvc' : 'pvp';
            state.players[1].isComputer = state.gameMode === 'pvc';
        }
    }
});

export const { rollDice, movePlayer, nextTurn, resetGame, toggleGameMode } = gameSlice.actions;
export default gameSlice.reducer;