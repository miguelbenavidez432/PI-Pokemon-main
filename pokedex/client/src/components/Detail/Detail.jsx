import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import style from './Detail.module.css';
//import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../redux/actions";
import pokedex from '../../image/pokedex.png'

const Detail = () =>{

    const { id } = useParams();
    const navigate = useNavigate();
    const backToHome = () =>{
        navigate('/home')
    }
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getPokemonById(id))
    }, [id])
    const pokeDetail = useSelector(state => state.pokemonDetail)

    return(
        <div className={style.container}>
            <h2></h2>
            <br />
            <br />
            <img className={style.pokemon_image} src={pokeDetail.image} alt={pokeDetail.name} />
            <h1 className={style.pokemon_data} ><span>{isNaN(pokeDetail.id) ? '' : pokeDetail.id } </span> -
            <span className={style.pokemon_name} > {pokeDetail?.name}</span>
            <br />
            <br />
            <h6 className={style.pokemon_info} >

            <span >HP: {pokeDetail?.hp}</span>
            <br />
            <span>ATTACK: {pokeDetail?.attack}</span><br />
            <span>DEFENSE: {pokeDetail?.defense}</span><br />
            <span>SPEED:  {pokeDetail?.speed}</span><br />
            <span>HEIGHT: {pokeDetail?.height} dm</span><br />
            <span>WEIGHT: {pokeDetail?.weight} dg</span><br />
            <span>TYPES: {pokeDetail?.types && pokeDetail.types.map((t) => {
                    return(<span>  {t.name}  </span> )
                })}</span>
            </h6>
            </h1>
            <img className={style.img} src={pokedex} alt={pokeDetail?.name}/>
            <div className={style.divColumna}>
            <div className={style.div}>
            </div>
            </div>        
        </div>
    )
}

export default Detail;