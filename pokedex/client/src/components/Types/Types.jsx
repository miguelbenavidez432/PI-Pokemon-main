import { useDispatch, useSelector } from 'react-redux'
import style from './Types.module.css'
import { filterCreated, filterApi, filterType } from '../../redux/actions';
const Types = () =>{
    
    const types = useSelector(state => state.types);
    const dispatch = useDispatch();

    return(
        <div>
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
        <button type="submit" className={style.button} onClick={()=>dispatch(filterCreated)}> Created </button>
        <button type="submit" className={style.button} onClick={()=>dispatch(filterApi)}> Pokemon's API </button>
        </div>
    )
}

export default Types;