import style from '../Landing/Landing.module.css';
import { Link } from 'react-router-dom';
import image from '../../image/pokeball.png';

const Landing = () => {
    return(
        <>
        <div className={style.container} >
            <h1>LANDING PAGE DE POKEMON</h1>
            <Link to='/home'><img src={image} alt="" /></Link>            
        </div>        
        </>
    )
}

export default Landing;
