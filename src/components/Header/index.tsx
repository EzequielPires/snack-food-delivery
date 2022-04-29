import Link from 'next/link';
import Logo from '../../assets/logo.svg';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link href="/">
                            <a>
                                <img src={Logo.src} alt="" />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className={styles.link_active}>
                                Para clientes
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                Para restaurantes
                            </a>
                        </Link>
                    </div>
                    <div className="d-flex align-items-center">
                        <Link href="/">
                            <a className={styles.link_active}>
                                Criar conta
                            </a>
                        </Link>
                        <Link href="/">
                            <a className={styles.btn}>Entrar</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}