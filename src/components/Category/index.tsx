import { FaChevronUp, FaEllipsisV, FaInfoCircle, FaPlus } from 'react-icons/fa';
import { CreateItem } from '../CreateItem';
import styles from './styles.module.scss';

export function Category() {
    return (
        <div className={styles.category}>
            <div className={styles.header}>
                <span className={styles.title}>Smash Burguer </span>
                <div className="d-flex gap-4">
                    <div className={styles.togle}>
                        <button>Pausar</button>
                        <button>Ativado</button>
                    </div>
                    <button className={styles.btn_icon}><FaChevronUp /></button>
                    <button className={styles.btn_icon}><FaEllipsisV /></button>
                </div>
            </div>
            <div className={styles.row + ' row'}>
                <div className='col-md-1'>

                </div>
                <div className='col-md-5'>
                    <span className={styles.title}>Item</span>
                </div>
                <div className='col-md-3'>
                    <span className={styles.title}>Preço <FaInfoCircle /></span>
                </div>
                <div className='col-md-3'>
                    <span className={styles.title}>Status de vendas</span>
                </div>
            </div>
            <div className={styles.row + ' row'}>
                <div className={styles.col + ' col-md-1'}>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.col + ' col-md-5'}>
                    <span className={styles.name}>Burguer Cia</span>
                    <p>Pão, Hamburguer artesanal 100 Gramas de carnes selecionadas, 02 fatias mussarelas, Bacon, Alface...</p>
                </div>
                <div className={styles.col + ' col-md-3'}>
                    <div className={styles.togle_price}>
                        <button>R$ 28,00</button>
                        <button>R$ 19,90</button>
                    </div>
                </div>
                <div className={styles.col + ' col-md-3 p-0'}>
                    <div className="d-flex justify-content-end gap-4">
                        <div className={styles.togle}>
                            <button>Pausar</button>
                            <button>Ativado</button>
                        </div>
                        <button className={styles.btn_icon}><FaChevronUp /></button>
                        <button className={styles.btn_icon}><FaEllipsisV /></button>
                    </div>
                </div>
            </div>
            <CreateItem />
            
        </div>
    )
}