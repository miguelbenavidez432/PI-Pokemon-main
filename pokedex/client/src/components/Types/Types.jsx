import { useDispatch, useSelector } from 'react-redux'
import style from './Types.module.css'
import { filterType } from '../../redux/actions';
const Types = () =>{
    
    const types = useSelector(state => state.types);
    const dispatch = useDispatch();


    return(
        <div className={style.container} >
            {types && 
            types && types.map((t) => {
            return <button 
            key={t}
            value={t}
            className={style.button}
            onClick={()=>dispatch(filterType(t))}> { t } </button>
            })}
        </div>
        
    )
}

export default Types;