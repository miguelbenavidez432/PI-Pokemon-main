import { GET_ALL_POKEMONS, 
    GET_POKEMON_BY_ID, 
    GET_POKEMON_BY_NAME, 
    GET_ALL_TYPES,
    FILTER_BY_TYPE,
    EMPTY_FILTER,
    FILTER_CREATED,
    FILTER_API,
    ORDER_BY_NAME,
    ORDER_BY_ATK,
} from '../actionsType/index';
import axios from 'axios';

export const getAllPokemons = () => {
    return async function (dispatch) {
        const backData = await axios(`http://localhost:3001/pokemons`);
        const pokemonsData = backData.data;
        dispatch({ type: GET_ALL_POKEMONS, payload: pokemonsData });       
    }
}

export const getPokemonById = (id) => {
    return async function (dispatch) {
        const backData = await axios(`http://localhost:3001/pokemons/${id}`);
        const pokemonsData = backData.data;
        dispatch({ type: GET_POKEMON_BY_ID, payload: pokemonsData });       
    }
}

export const getPokemonByName = (name) => {
    return async function (dispatch) {
        const backData = await axios(`http://localhost:3001/pokemons/${name}`);
        const pokemonsData = backData.data;
        dispatch({ type: GET_POKEMON_BY_NAME, payload: pokemonsData });       
    }
}

export const getAllTypes = () =>{
    return async function (dispatch) {
        const backData = await axios(`http://localhost:3001/types`);
        const typeData = backData.data;
        dispatch({ type: GET_ALL_TYPES, payload: typeData })
    }
}

export const filterType = (type) => {
    return { type: FILTER_BY_TYPE, payload: type};
}

export const emptyFilter = () => {
    return { type: EMPTY_FILTER  };
}

export const filterCreated = (payload) => {
    return { type: FILTER_CREATED, payload }
}

export const orderBayName = (ORDER) => {
    return { type: ORDER_BY_NAME, payload: ORDER};
};
  
export const orderByAtk = (ORDER) => {
    return { type: ORDER_BY_ATK, payload: ORDER };
};
