import { createStore } from "redux";

const INITIAL_STATE = {
    data: [],
    gameState: false
}

function jogadas(state = INITIAL_STATE, action) {
    const { gameState, pontuacao } = action;
    switch (action.type) {
        case 'ADD_MATCH':
            return { ...state, data: [ ...state.data, pontuacao ], gameState };
        case 'START_MATCH':
            return { ...state, data: [], gameState };
        case 'END_MATCH':
            return { ...state, data: [], gameState };
        default:
            return state;
    }
}

const store = createStore(jogadas);

export default store;