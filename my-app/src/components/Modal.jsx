import styles from "./Modal.module.css"

const Modal = ({close, title, form})=>{
    return(
        <>
        　  <div className={styles.overlay} onClick={close}></div>
            <div className={styles.modal}>
                <h2>{title}</h2>
                {form}  
            </div>
        </>
    )
}

export default Modal;