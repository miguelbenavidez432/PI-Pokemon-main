import Card from '../Card/Card';
import style from './CardContainer.module.css';

const CardContainer = ({ pokemons, currentPage, pokePerPage }) => {

    const indexLastPoke = currentPage * pokePerPage;
    const indexFirstPoke = indexLastPoke - pokePerPage;
    const pokemonsFiltered = pokemons?.slice(indexFirstPoke, indexLastPoke)

    return (
        <div>
            <br />
            <div className={style.container}>
                {pokemonsFiltered?.map(pokemon => {
                    return <Card
                        id={pokemon.id}
                        key={pokemon.id}
                        name={pokemon.name}
                        type={pokemon.types.map(t => {
                            return (<p>{t.name}</p>)
                        })}
                        image={pokemon.image}
                    />
                })}
            </div>
        </div>
    )
}

export default CardContainer;