import { Link } from "react-router-dom"
import style from './Navbar.module.css';
import image from '../../image/logo.png'
const Navbar = () =>{
    return(
        <div className={style.container}>
            <img src={image} alt="pokedex" />
            <Link to='/home'>HOME</Link>
            <Link to='/create'>CREATE</Link>
        </div>
    )
}

export default Navbar;