import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope, FaEye, FaLock } from 'react-icons/fa';
import Illustration from '../../assets/illustration.png';
import Logo from '../../assets/logo.svg';

import styles from "./styles.module.scss";

export default function Login() {
    const [active, setActive] = useState(1);
    return (
        <div className={styles.login + ' container d-flex justify-content-between align-items-center'}>
            <div>
                <img src={Logo.src} alt="Logo" className='mb-4' />
                <h4>Faça seu Login</h4>
                <div className={styles.tab_button}>
                    <button className={active === 1 && styles.active} onClick={() => setActive(1)}>Cliente</button>
                    <button className={active === 2 && styles.active} onClick={() => setActive(2)}>Restaurante</button>
                </div>
                <form className={styles.form}>
                    <div className={styles.input_box}>
                        <label htmlFor="">Email</label>
                        <FaEnvelope />
                        <input type="text" placeholder='Insira seu email' />
                    </div>
                    <div className={styles.input_box}>
                        <label htmlFor="">Password</label>
                        <FaLock />
                        <FaEye />
                        <input type="text" placeholder='Insira sua senha' />
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                        <Link href={'/forgot-password'}>
                            <a>Esqueceu sua senha?</a>
                        </Link>
                    </div>
                    <button className={styles.button_submit}>Entrar</button>
                    <div className="d-flex justify-content-center mt-4">
                        <Link href={active === 1 ? '/create-user' :  '/create-restaurant'}>
                            <a>Não tem uma conta? <span>SingUp</span></a>
                        </Link>
                    </div>
                </form>
            </div>
            <img src={Illustration.src} alt="" />
        </div>
    )
}