import styles from './styles.module.scss';

export function CardFood() {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div>
                    <h4>Burguer Cia</h4>
                    <p>Pão, Hamburguer artesanal 100 Gramas de carnes selecionadas, 02 fatias mussarelas, Bacon, Alface E Tomate. (Acompanha molho da casa).</p>
                </div>
                <span className={styles.price}>R$ 16,00</span>
            </div>
            <div className={styles.avatar}>

            </div>
        </div>
    )
}