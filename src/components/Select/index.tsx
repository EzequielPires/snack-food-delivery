import { FaChevronDown } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Select({label, placeholder}) {
    return (
        <div className={styles.select}>
            <label htmlFor="">{label}</label>
            <button>
                {placeholder}
                <FaChevronDown />
            </button>
        </div>
    )
}