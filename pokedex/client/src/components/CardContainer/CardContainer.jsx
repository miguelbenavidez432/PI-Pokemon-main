import Card from '../Card/Card';
import style from './CardContainer.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const CardContainer = ({ pokemons, currentPage, pokePerPage }) => {

    const indexLastPoke = currentPage * pokePerPage;
    const indexFirstPoke = indexLastPoke - pokePerPage;
    const pokemonsFiltered = pokemons?.slice(indexFirstPoke, indexLastPoke)
    const [show, setShow] = useState(true)

    

    return (
        <div>
            <br />
            {pokemonsFiltered[0].name ?
                (<div className={style.container}>
                    {pokemonsFiltered
                        && pokemonsFiltered?.map(pokemon => {
                            return <Card
                                id={pokemon.id}
                                key={pokemon.id}
                                name={pokemon.name}
                                type={pokemon.types && pokemon.types.map(t => {
                                    return (<p>{t.name}</p>)
                                })}
                                image={pokemon.image}
                            />
                        })}
                </div>)
                :
                ( 
                    <Modal isOpen={show} setShow={setShow} onClose={()=> setShow(false)} >{pokemonsFiltered[0].error}</Modal>
                )}
        </div>
    )
}

export default CardContainer;