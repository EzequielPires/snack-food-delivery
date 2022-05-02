import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import styles from './styles.module.scss';

export function CardRestaurant() {
    return (
        <Link href={'/restaurantes/sanduiche-do-silvio'}>
            <a className={styles.card}>
                <div className={styles.avatar}>

                </div>
                <div className={styles.content}>
                    <h4>Nome da Loja</h4>
                    <p><FaStar /> 4.7</p>
                    <div className="d-flex align-items-center gap-3">
                        <span className={styles.time}>60-70min</span>
                        <span className={styles.circle}></span>
                        <span className={styles.price}>R$ 5,00</span>
                    </div>
                </div>
            </a>
        </Link>
    )
}