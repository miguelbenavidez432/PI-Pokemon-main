import style from '../Modal/Modal.module.css';


const Modal = ({ isOpen, onClose, children }) => {
    
    return(
        <div className={style.container} style={{ display: isOpen ? 'grid' : 'none'}}>
            <div className={style.body}>
                <button className={style.button} onClick={onClose}> CLOSE </button>
                <p className={style.p}>{children} Aca va algo</p>
            </div>
        </div>
    )
}

export default Modal