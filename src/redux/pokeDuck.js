import axios from 'axios';

//CONSTANTS

const mainData = {
    array: [],
    offset: 0
}


// TYPES

const GET_POKEMONS_ACTION = 'GET_POKEMONS_ACTION';
const GET_NEXT_POKEMONS_ACTION = 'GET_NEXT_POKEMONS_ACTION';
const GET_LAST_POKEMONS_ACTION = 'GET_LAST_POKEMONS_ACTION';

//REDUCER

export default function pokeReducer(state = mainData, action) {

    switch (action.type) {
        case GET_POKEMONS_ACTION:
            return { ...state, array: action.payload };

        case GET_NEXT_POKEMONS_ACTION:

            return { ...state, array: action.payload.array, offset: action.payload.offset };

        case GET_LAST_POKEMONS_ACTION:

            return { ...state, array: action.payload.array, offset: action.payload.offset };

        default:
            return state;
    }
}

//ACTIONS

export const getPokemons = () => async (dispatch, getState) => {

    getState();
    const offset = getState().pokemons.offset

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=3`);
        dispatch({
            type: GET_POKEMONS_ACTION,
            payload: res.data.results
        });
    } catch (error) {
        console.log(error);
    }
};

export const nextPokemon = (number) => async (dispatch, getState) => {

    const offset = getState().pokemons.offset;
    const siguiente = offset + number;

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=3`);
        dispatch({
            type: GET_NEXT_POKEMONS_ACTION,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const lastPokemon = (number) => async(dispatch, getState) => {
   
    const offset = getState().pokemons.offset;
    const anterior = offset - number;

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${anterior}&limit=3`);
        dispatch({
            type: GET_LAST_POKEMONS_ACTION,
            payload: {
                array: res.data.results,
                offset: anterior
            }
        })
    } catch (error) {
        console.log(error);
    }
}