import { FaChevronDown, FaFilter, FaRunning } from 'react-icons/fa';
import { CardRestaurant } from '../../components/CardRestaurant';
import { Footer } from '../../components/Footer';
import { HeaderFluid } from '../../components/HeaderFluid';
import { SwiperBestRestaurants } from '../../components/SwiperBestRestaurants';
import { SwiperCategories } from '../../components/SwiperCategories';
import { SwiperFilter } from '../../components/SwiperFilter';
import styles from './styles.module.scss';

export default function Restaurantes() {
    return (
        <div className={styles.container}>
            <HeaderFluid />
            <div className="container pt-3 mb-5" style={{position: `relative`}}>
                <div className={styles.filter + " d-flex gap-4"}>
                    <SwiperFilter />
                </div>
                <SwiperCategories />
            </div>
            <SwiperBestRestaurants title={'Famosos no SnackDelivery  '} />
            <div className='container mb-5'>
                <h3>Lojas no <span style={{ color: 'var(--main)', fontWeight: '700' }}>Snack</span><span style={{ color: 'var(--secondary)', fontWeight: '700' }}>Delivery</span>  </h3>
                <div className="d-flex row">
                    <div className="col-md-4 mb-4">
                        <CardRestaurant />
                    </div>
                    <div className="col-md-4 mb-4">
                        <CardRestaurant />
                    </div>
                    <div className="col-md-4 mb-4">
                        <CardRestaurant />
                    </div>
                    <div className="col-md-4 mb-4">
                        <CardRestaurant />
                    </div>
                    <div className="col-md-4 mb-4">
                        <CardRestaurant />
                    </div>
                    <div className="col-md-4 mb-4">
                        <CardRestaurant />
                    </div>
                    <div className="col-md-4 mb-4">
                        <CardRestaurant />
                    </div>
                    <div className="col-md-4 mb-4">
                        <CardRestaurant />
                    </div>
                    <div className="col-md-4 mb-4">
                        <CardRestaurant />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}