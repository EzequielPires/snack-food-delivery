import { FaChevronDown } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Textarea({label, placeholder}) {
    return (
        <div className={styles.input}>
            <label htmlFor="">{label}</label>
            <textarea placeholder={placeholder} />
        </div>
    )
}