import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons, getPokemonByName } from "../../redux/actions/index";
import style from '../SearchBar/SearchBar.module.css'

const SearchBar = () =>{

    const [search, setSearch] = useState('')
    const dispatch = useDispatch();

    const reset = () =>{
        dispatch(getAllPokemons())
    }
    const onSearch = (event) =>{
        setSearch(event.target.value)
    }

    const onClick = (event) => {
        event.preventDefault()
        dispatch(getPokemonByName(search))
        setSearch('')
    }

    return(
        <div className={style.container}>
            <input 
            type="text" 
            placeholder="   Search...  " 
            onChange={onSearch}
            value={search}
            className={style.input}/>
            <button type="submit" className={style.button} onClick={onClick}> Search </button>
            <button type="submit" className={style.button} onClick={reset}> Reset All Pokemons </button>
            <br />
            
        </div>
        

    )
}

export default SearchBar;