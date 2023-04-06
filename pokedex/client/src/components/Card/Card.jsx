import { Link } from 'react-router-dom';
import style from '../Card/Card.module.css'

const Card = (props) =>{
    return(
        <div className={style.div}>
            <img className={style.img} src={props.image} alt="" />
            <p>Name: <Link to={`/detail/${props.id}`}>{props.name}</Link></p>
            <p>Type: {props.type}</p>
        </div>
    )
}

export default Card;