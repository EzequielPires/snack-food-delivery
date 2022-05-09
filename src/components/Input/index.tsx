import { FaChevronDown } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Input({label, placeholder}) {
    return (
        <div className={styles.input}>
            <label htmlFor="">{label}</label>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}