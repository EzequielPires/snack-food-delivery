import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import styles from './styles.module.scss';

export function SwiperBestRestaurants() {
    return (
        <div className={styles.container + ' container best-restaurants'}>
                <h3>Os melhores restaurantes</h3>
                <Swiper
                    id={styles.swiper}
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView="auto"
                    navigation
                >
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </div>
    );
}