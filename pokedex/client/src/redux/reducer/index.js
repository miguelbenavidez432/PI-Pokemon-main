import { GET_ALL_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_POKEMON_BY_ID, 
    GET_ALL_TYPES,
    FILTER_BY_TYPE,
    FILTER_CREATED,
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
        case FILTER_CREATED:
           const allpoke = state.allpokemons
           const createdFilter = action.payload === 'create' ? allpoke.filter((p) => p.create) : allpoke.filter ((p) => !p.create)
           return{
                ...state,
                pokemons: action.payload === 'all' ? allpoke : createdFilter
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
            case ORDER_BY_ATK:
            let sortAtt = action.payload === 'min' ?
                state.pokemons.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return 1
                    }
                    if (b.attack > a.attack) {
                        return -1
                    }
                    return 0
                }) :
                state.pokemons.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return -1
                    }
                    if (b.attack > a.attack) {
                        return 1
                    }
                    return 0
                })
            return{
                ...state,
                pokemons: sortAtt
            }
        default:
            return state;
    }
}

export default reducer;