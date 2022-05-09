import styles from './styles.module.scss';
import Logo from '../../assets/logo.svg';
import Link from 'next/link';
import { FaBook, FaDollarSign, FaHome, FaReceipt } from 'react-icons/fa';
import {useRouter} from "next/router";

export function Aside() {
    const router = useRouter();
    return (
        <div className={styles.aside}>
            <div className={styles.logo}>
                <img src={Logo.src} alt="Logo" />
            </div>
            <div className={styles.store}>
                <div className={styles.avatar}>

                </div>
                <h4>Inbrasa Burguer</h4>
                <span>Loja Fechada</span>
            </div>
            <div className={styles.nav_links}>
                <Link href="/admin">
                    <a className={router.asPath === '/admin' && styles.active}>
                        <div className={styles.icon}>
                            <FaHome />
                        </div>
                        Inicio
                    </a>
                </Link>
                <Link href="/admin">
                    <a>
                        <div className={styles.icon}>
                            <FaReceipt />
                        </div>
                        Pedidos
                    </a>
                </Link>
                <Link href="/admin">
                    <a>
                        <div className={styles.icon}>
                            <FaDollarSign />
                        </div>
                        Financeiro
                    </a>
                </Link>
                <Link href="/admin/cardapios">
                    <a className={router.asPath === '/admin/cardapios1' && styles.active}>
                        <div className={styles.icon}>
                            <FaBook />
                        </div>
                        Cardápios
                    </a>
                </Link>
            </div>
        </div>
    )
}