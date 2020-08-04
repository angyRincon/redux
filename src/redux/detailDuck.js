import axios from 'axios';

import { getPokemons } from '../redux/pokeDuck';
import { useSelector } from 'react-redux';


// CONSTANTES
const dataInicial = {
    array: [],
}

// TYPES

const GET_DETAIL_EXITO = 'GET_DETAIL_EXITO';


// REDUCERS

export default function detailDuck(state = dataInicial, action) {
    switch (action.type) {
        case GET_DETAIL_EXITO:
            return { ...state, array: action.payload.array }

        default:
            return state;
    }
}

//ACTIONS

export const getDetail = (id) => async (dispatch) => {

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

        dispatch({
            type: GET_DETAIL_EXITO,
            payload: {
                array: res.data.abilities,

            }
        })
    } catch (error) {
        console.log(error);
    }
}