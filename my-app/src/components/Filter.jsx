import styles from "./Filter.module.css";

const Filter = ()=>{
    return(
    <>
    <input type="text" placeholder="Filter issues" className={styles.input}/>
    </>
    )
}

export default Filter;