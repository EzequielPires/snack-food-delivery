import Link from 'next/link';
import Logo from '../../assets/logo.svg';
import { FaChevronDown, FaSearch, FaShoppingBag, FaSignInAlt } from 'react-icons/fa';
import MenuSvg from '../../assets/Icons/menu.svg'
import styles from './styles.module.scss';

export function HeaderFluid() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link href="/">
                            <a>
                                <img src={Logo.src} alt="" />
                            </a>
                        </Link>
                        <ul className="d-none d-md-flex align-items-center">
                            <Link href="/">
                                <a className={styles.link_active}>
                                    Restaurantes
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    Mercados
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    Bebidas
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    Farmácias
                                </a>
                            </Link>
                        </ul>
                    </div>
                    <div className={styles.input_box + ' d-none d-md-flex'}>
                        <FaSearch />
                        <input type="text" placeholder='Busque por item ou loja' />
                    </div>
                    <div className="d-none d-md-flex align-items-center">
                        <Link href="/">
                            <a className={styles.link_active}>
                                R. José Saturnino de Castro, 30
                                <FaChevronDown />
                            </a>
                        </Link>
                        <button className={styles.btn_sign}><FaSignInAlt /></button>
                        <div className={styles.bag}>
                            <FaShoppingBag />
                            <div className='d-flex flex-column'>
                                <span className={styles.price}>R$ 0,00</span>
                                <span className={styles.items}>0 itens</span>
                            </div>
                        </div>
                    </div>
                    <button className={styles.button_collapse + ' d-md-none'}>
                        <img src={MenuSvg.src} alt="" />
                    </button>
                </div>
            </nav>
        </header>
    )
}