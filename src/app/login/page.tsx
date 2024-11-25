'use client'
import { signIn, useSession } from 'next-auth/react';
import styles from './loginPage.module.css';

const LoginPage: React.FC = ()=>{
    const {data, status} = useSession();
    console.log(data, status);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton} onClick={()=>signIn('google')}>Ingresar con Google</div>
                <div className={styles.socialButton}>Ingresar con Github</div>
                <div className={styles.socialButton}>Ingresar con Facebook</div>
            </div>
        </div>
    )
}

export default LoginPage;