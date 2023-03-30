import { useEffect, useState } from "react";
import validation from "./validation";
import style from "./Form.module.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes } from "../../redux/actions";

const Form = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTypes())
    }, [])
    const types = useSelector(state => state.types)

    const [input, setInputs] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        weight: '',
        height: '',
        type: [],
    })

    const handleTypesChoices = (event) => {
        setInputs({
            ...input,
            type: [...input.type, event.target.value]
        })
    }

    const [errors, setErrors] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        weight: '',
        height: '',
        type: '',
    })

    const changeHandler = (event) => {
        setInputs({
            ...input,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...input,
            [event.target.name]: event.target.value
        }))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/pokemons', input)
            .then(res => alert('Pokemon created'))
            .catch(err => alert('Pokemon not created'))
        setInputs({
            name: '',
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            weight: '',
            height: '',
            type: [],
        })
    }

    return (
        <form action="" className={style.containers} onSubmit={submitHandler}>
            <div >
                <label htmlFor="">Pokemon's Name: </label>
                <input type="text" value={input.name} onChange={changeHandler} name='name' />
                {errors.name && <p className={style.red}>{errors.name}</p>}
            </div>
            <br />
            <div>
                <label htmlFor="">Pokemon's HP: </label>
                <input type="text" value={input.hp} onChange={changeHandler} name='hp' />
                {errors.hp && <p className={style.red}>{errors.hp}</p>}
            </div>
            <br />
            <div>
                <label htmlFor="">Pokemon's Attack: </label>
                <input type="text" value={input.attack} onChange={changeHandler} name='attack' />
                {errors.attack && <p className={style.red}>{errors.attack}</p>}
            </div>
            <br />
            <div>
                <label htmlFor="">Pokemon's Defense: </label>
                <input type="text" value={input.defense} onChange={changeHandler} name='defense' />
                {errors.defense && <p className={style.red}>{errors.defense}</p>}
            </div>
            <br />
            <div>
                <label htmlFor="">Pokemon's Speed: </label>
                <input type="text" value={input.speed} onChange={changeHandler} name='speed' />
                {errors.speed && <p className={style.red}>{errors.speed}</p>}
            </div>
            <br />
            <div>
                <label htmlFor="">Pokemon's Weight: </label>
                <input type="text" value={input.weight} onChange={changeHandler} name='weight' />
                {errors.weight && <p className={style.red}>{errors.weight}</p>}
            </div>
            <br />
            <div>
                <label htmlFor="">Pokemon's Height: </label>
                <input type="text" value={input.height} onChange={changeHandler} name='height' />
                {errors.height && <p className={style.red}>{errors.height}</p>}
            </div>
            <br />
            <div>
                <label htmlFor="">Pokemon's Type: </label>
                {errors.type && <p className={style.red}>{errors.type}</p>}
                <select name="" id="" onChange={(event) => handleTypesChoices(event)}>
                    {types.map(t => {
                        return (
                            <option value={t}>{t}</option>
                        )
                    })}
                </select>
                <ul><li>{input.type.map(e => e + ' ,')}</li></ul>
            </div>
            <br />
            <div>
                <button type="submit"> Create Pokemon</button>
            </div>
        </form>
    )
}

export default Form;