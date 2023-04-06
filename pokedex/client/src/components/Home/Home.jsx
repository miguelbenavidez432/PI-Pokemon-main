import CardContainer from "../CardContainer/CardContainer"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllTypes, filterCreated, orderByAtk } from '../../redux/actions/index'
import Types from '../Types/Types'
import style from './Home.module.css'
import SearchBar from "../SearchBar/SearchBar";
import Paginacion from "../Paginacion/Paginacion";
import { orderBayName } from "../../redux/actions/index";

const Home = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokePerPage, setPokePerPage] = useState(12);
    const [order, setOrder] = useState('');
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getAllTypes())
        dispatch(getAllPokemons())
    }, [])

    const handlerSortName = (event) => {
        event.preventDefault();
        dispatch(orderBayName(event.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${event.target.value}`)
    }
    const handlerSortAtt = (event) => {
        event.preventDefault();
        dispatch(orderByAtk(event.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${event.target.value}`)
    }
    const page = (pageNumbre) => {
        setCurrentPage(pageNumbre);
        setLoading(false)
    }

    const handlerFilterCreated = (event) => {
        dispatch(filterCreated(event.target.value))
    }

    return (
        <div className={style.container}>
            <h1 className={style.h1}>Welcome to Pokedex</h1>
            <SearchBar ></SearchBar>
            <select
                onChange={(e) => handlerSortName(e)}
                className={style.option}>
                <option className={style.option} value="asc">Ascendant</option>
                <option className={style.option} value="des">Descendant</option>
            </select>
            <select 
                onChange={(e) => handlerFilterCreated(e)}
                className={style.option}>
                <option value="all">All</option>
                <option value="create"> Created</option>
                <option value="api">Api</option>
            </select>
            <select 
                onChange={(e) => handlerSortAtt(e)}
                className={style.option}>
                <option value="">Select att</option>
                <option value="max">Max Attack</option>
                <option value="min">Min Attack</option>
            </select>
            <Types></Types>
            <br />
            <Paginacion
                className={style.container}
                pokePerPage={pokePerPage}
                page={page}
                pokemons={pokemons}>
            </Paginacion>
            { !pokemons.length ? <div>Loading Pokemons...</div>
            :(<CardContainer
                pokemons={pokemons}
                currentPage={currentPage}
                pokePerPage={pokePerPage}
                className={style.card}></CardContainer>)}
            <Paginacion
                className={style.container}
                pokePerPage={pokePerPage}
                page={page}
                pokemons={pokemons}>
            </Paginacion>
        </div>
    )
}

export default Home