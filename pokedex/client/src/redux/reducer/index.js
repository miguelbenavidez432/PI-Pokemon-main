import { GET_ALL_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_POKEMON_BY_ID, 
    GET_ALL_TYPES,
    FILTER_BY_TYPE,
    EMPTY_FILTER,
    FILTER_CREATED,
    FILTER_API,
    ORDER_BY_ATK,
    ORDER_BY_NAME,
} from '../actionsType';

const inicialState = {
    pokemons: [],
    allpokemons: [],
    pokemonDetail: {},
    types: [],
    filterType: []
}   

const reducer = (state = inicialState, action) => {
    switch(action.type){
        case GET_ALL_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                allpokemons: action.payload
            }
        case GET_POKEMON_BY_ID:
            return{
                ...state,
                pokemonDetail: action.payload
            }
        case GET_POKEMON_BY_NAME:
            return{
                ...state, 
                pokemons: [action.payload]
            }
        case GET_ALL_TYPES:
            return{
                ...state,
                types: action.payload
            }
        case FILTER_BY_TYPE:
            return {
                ...state,
                pokemons: state.allpokemons.filter(
                    (p) => p.types[0].name === action.payload ||
                    p?.types[1]?.name === action.payload
                )
            };
        case EMPTY_FILTER:
            return {
                ...state,
                pokemons: [],
            };
        case FILTER_CREATED:

            return{
                ...state,
                pokemons: state.allpokemons.filter(
                    poke => poke.create === true
                )
            }
        case ORDER_BY_NAME:
            let sortName = action.payload === 'asc' ?
                state.pokemons.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0
                }) :
                state.pokemons.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0
                })
            return{
                ...state,
                pokemons: sortName
            }
        default:
            return state;
    }
}

export default reducer;