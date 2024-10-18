import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import Seoul from '../assets/Seoul.jpg';
import Bangkok from '../assets/bangkok4top.jpg';
import Osaka from '../assets/osaka.jpg';
import Rome from '../assets/Rome.avif';
import Cebu from '../assets/cebu.jpg';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import '../css/Swiper.css';

const Slide = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideoId, setSelectedVideoId] = useState('');

    const videos = {
        Seoul: 'AmK_TScZdw4',
        Bangkok: '4iY2Fh6Q03I',
        Osaka: 'WLIv7HnZ_fE',
        Rome: '2x16HZIzsKQ',
        Cebu: '4jzph6P38l8',

    }

    const openModal = (videoId) => {
        setSelectedVideoId(videoId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedVideoId('');
    };

    return (
        <section className="swiper-section">
            <div>
                <Swiper
                    style={{
                        '--swiper-navigation-color': 'black',
                        '--swiper-pagination-color': 'white',
                    }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={({
                        640: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    })}
                >
                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src={Seoul} alt="Seoul"
                                onClick={() => openModal(videos.Seoul)}
                                className="slide-image"
                            />
                            <div className="overlay-text">
                                <h3>Seoul</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src={Bangkok} alt="Bangkok"
                                onClick={() => openModal(videos.Bangkok)}
                                className="slide-image"
                            />
                            <div className="overlay-text">
                                <h3>Bangkok</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src={Osaka} alt="Osaka"
                                onClick={() => openModal(videos.Osaka)}
                                className="slide-image"
                            />
                            <div className="overlay-text">
                                <h3>Osaka</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src={Rome} alt="Rome"
                                onClick={() => openModal(videos.Rome)}
                                className="slide-image"
                            />
                            <div className="overlay-text">
                                <h3>Rome</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src={Cebu} alt="Cebu"
                                onClick={() => openModal(videos.Cebu)}
                                className="slide-image"
                            />
                            <div className="overlay-text">
                                <h3>Cebu</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div>
                    <h2 className="swiper-heading">The best places to travel</h2>
                    <p className="swiper-subheading">Whether its for food, activity, entertainment or sightseeing,
                        anything is possible!
                    </p>
                </div>

                {isModalOpen && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${selectedVideoId}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube Video"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Slide;