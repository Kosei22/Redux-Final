import styles from "./Header.module.css";

const Header = () =>{
    return(
        <>
        <div className={styles.header}>
        <h3 className={styles.title}>Angular 9 MatTable CRUD Example</h3>
        <h3 className={styles.reload}>Reload Date: <button>◯</button></h3>
        </div>
        </>
    )
}

export default Header;