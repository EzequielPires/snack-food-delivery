import Link from 'next/link';
import Logo from '../../assets/logo.svg';
import styles from './styles.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container d-flex flex-column-reverse flex-md-row gap-3 justify-content-between align-items-center">
                <span>© 2002-2022 PortalCatalão. Todos os direitos reservados.</span>
                <Link href="/">
                    <a>
                        <img src={Logo.src} alt="" />
                    </a>
                </Link>
            </div>
        </footer>
    )
}