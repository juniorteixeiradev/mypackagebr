import styles from "./Footer.module.css"
function Footer (){
    return(
        <footer className={styles.footer}>
            Todos os direitos Reservados &copy; MyPackageBR - Developed by Jun1or Te1xe1ra - 2023.
            <div className={styles.credits}>
                Public Api by <a href='https://linketrack.com/' target="_blank">Link & Track</a>
            </div>
        </footer>
    );
}

export default Footer;