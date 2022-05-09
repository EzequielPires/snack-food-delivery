import { FaChevronDown, FaPlus, FaSearch } from 'react-icons/fa';
import Motorcycle from '../../../assets/Icons/motorcycle.svg'
import { Aside } from '../../../components/Aside';
import { Category } from '../../../components/Category';
import styles from './styles.module.scss';

export default function Cardapios() {
    return (
        <div className={styles.admin}>
            <Aside />
            <div className={styles.container}>
                <div className={styles.header}>
                    <button>
                        <span>
                            <img src={Motorcycle.src} alt="" />
                            Entrega
                        </span>
                        <FaChevronDown />
                    </button>
                    <p>Este é o seu cardápio para entregas. Aqui você define quais itens os clientes vão poder pedir pelo iFood e receber em casa </p>
                </div>
                <div className={styles.content}>
                    <button className={styles.button}>
                        <FaPlus />
                        Adicionar categoria
                    </button>
                    <div className={styles.search + " d-flex mb-4"}>
                        <button className={styles.select}>
                            Todas categorias
                            <FaChevronDown />
                        </button>
                        <div className={styles.input_box}>
                            <FaSearch />
                            <input type='text' placeholder='Buscar nas categorias' />
                        </div>
                    </div>
                    <Category />
                </div>
            </div>
        </div>
    )
}