import styles from './loginPage.module.css';

const LoginPage: React.FC = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton}>Ingresar con Google</div>
                <div className={styles.socialButton}>Ingresar con Github</div>
                <div className={styles.socialButton}>Ingresar con Facebook</div>
            </div>
        </div>
    )
}

export default LoginPage;