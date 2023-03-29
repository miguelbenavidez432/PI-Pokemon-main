import { useSelector} from 'react-redux';
import style from '../Paginacion/Paginacion.module.css'

 const Paginacion = ({ pokePerPage, page, pokemons }) => {
    
    const pagNumbers = [];
  
    for (let i = 1; i <= Math.ceil(pokemons.length/pokePerPage); i++) {
      pagNumbers.push(i);
    }
    return (
      <div>
        <ul className={style.container}>
          {pagNumbers &&
            pagNumbers.map((number) => (
                <button className={style.button} onClick={() => page(number)}>   {number}   </button>
            ))}
        </ul>
      </div>
    );
  }

  export default Paginacion