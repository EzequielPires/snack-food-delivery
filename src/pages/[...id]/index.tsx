import { FaChevronDown, FaMotorcycle, FaSearch, FaStar, FaStore } from 'react-icons/fa';
import Motorcycle from '../../assets/Icons/motorcycle.svg'
import { CardFood } from '../../components/CardFood';
import { Footer } from '../../components/Footer';
import { HeaderFluid } from '../../components/HeaderFluid';
import styles from './styles.module.scss';

export default function RestaurantView() {
    return (
        <div className={styles.container}>
            <HeaderFluid />
            <div className="container my-4">
                <div className={styles.banner}>
                    <div className='d-flex align-items-center'>
                        <div className={styles.icon}>
                            <FaStore />
                        </div>
                        <div className='d-flex flex-column'>
                            <h4>Loja fechada</h4>
                            <p>Abre às 17:00</p>
                        </div>
                    </div>
                </div>
                <div className={styles.header + " d-flex align-items-center justify-content-between mt-4"}>
                    <div className={styles.logo}>

                    </div>
                    <div className="d-flex flex-column w-100">
                        <div className="d-flex align-items-center justify-content-between gap-md-4">
                            <h4 className={styles.title}>Sanduíche do Silvio</h4>
                            <div className="d-flex align-items-center">
                                <FaStar />
                                <span>4,6</span>
                            </div>
                        </div>
                        <div className={styles.sub_header + " d-flex justify-content-between align-items-center"}>
                            <a href="">Ver mais</a>
                            <span>Pedido mínimo R$ 16,00</span>
                        </div>
                    </div>
                </div>
                <div className={styles.form + " d-flex flex-wrap mt-4"}>
                    <div className={styles.input_box}>
                        <FaSearch />
                        <input type="text" placeholder='Busque no cardápio' />
                    </div>
                    <button>
                        <span>
                            <img src={Motorcycle.src} alt="" />
                            Entrega
                        </span>
                        <FaChevronDown />
                    </button>
                    <button className="d-flex flex-column">
                        <span>Hoje</span>
                        <span>60-70min . R$ 5,00</span>
                    </button>
                </div>
                <div className={styles.category}>
                    <h4>Ofertas Promocionais</h4>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                    </div>
                </div>
                <div className={styles.category}>
                    <h4>Combos Promocionais</h4>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                    </div>
                </div>
                <div className={styles.category}>
                    <h4>Diversos</h4>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                        <div className="col-md-6 mb-4">
                            <CardFood />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}