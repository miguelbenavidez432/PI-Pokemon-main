import CardContainer from "../CardContainer/CardContainer"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllTypes } from '../../redux/actions/index'
import Types from '../Types/Types'
import style from './Home.module.css'
import SearchBar from "../SearchBar/SearchBar";
import Paginacion from "../Paginacion/Paginacion";
import { orderBayName } from "../../redux/actions/index";

const Home = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons)
    const [currentPage, setCurrentPage] = useState(0);
    const [pokePerPage, setPokePerPage] = useState(12);
    const [order, setOrder] = useState('')

    useEffect(() => {
        dispatch(getAllPokemons())
        dispatch(getAllTypes())
    }, [])

    const handlerSortName = (event) => {
        event.preventDefault();
        dispatch(orderBayName(event.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${event.target.value}`)
    }
    const page = (pageNumbre) => {
        setCurrentPage(pageNumbre)
    }

    return (
        <div className={style.container}>
            <h1>Esto es el Home</h1>
            <SearchBar ></SearchBar>
            <select onChange={(e) => handlerSortName(e)}
                className={style.container}>
                <option className={style.button} value="asc">Ascendente</option>
                <option className={style.button} value="des">Descendente</option>
            </select>
            <Types></Types>
            <br />
            <Paginacion
                className={style.container}
                pokePerPage={pokePerPage}
                page={page}
                pokemons={pokemons}>
            </Paginacion>
            <CardContainer
                pokemons={pokemons}
                currentPage={currentPage}
                pokePerPage={pokePerPage}
                className={style.card}></CardContainer>
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