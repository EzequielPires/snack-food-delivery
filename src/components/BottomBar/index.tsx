import { FaHome, FaReceipt, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import styles from './styles.module.scss';
export function BottomBar() {
    return (
        <div className={styles.bottom_bar}>
            <nav className={styles.navtop}>
                <FaShoppingBag />
                <button>Ver sacola</button>
                <span>R$ 23,49</span>
            </nav>
            <nav className={styles.navbottom}>
                <button className={styles.active}>
                    <FaHome />
                    Inicio
                </button>
                <button>
                    <FaSearch />
                    Buscar
                </button>
                <button>
                    <FaReceipt />
                    Pedidos
                </button>
                <button>
                    <FaUser />
                    Perfil
                </button>
            </nav>
        </div>
    )
}