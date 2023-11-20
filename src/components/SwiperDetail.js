import React, { useState, useEffect } from 'react';
// npm install --save prop-types
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

import 'swiper/css';
import 'swiper/css/bundle';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function SwiperDetail() {
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        ).json();
        // const json = await response.data();
        setMovies(json.data.movies);
        console.log(json);
    }
    useEffect(()=> {
        getMovies();
    }, []);

    return (
        <div className='swiper-container'>
             {/* {movies.map((movie) => 
                <div
                    key={movie.id}
                    id={movie.id}
                >
                    <Link to={`./${movie.id}`}> 
                        <img src={movie.medium_cover_image} alt={movie.title} />
                    </Link>
                </div>          
                )} */}
            <Swiper 
                slidesPerView={11}
                spaceBetween={0}
                navigation={true}
                pagination={{ clickable: true }}
                // modules={[EffectFade, A11y]} effect="fade"	
                // A11y 있으면 하나씩 밖에 안나옴
                // autoplay={{ delay: 1000 }}
                onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                {movies.map((movie) => 
                <SwiperSlide
                    key={movie.id}
                    id={movie.id}
                >
                    <Link to={`./detail/${movie.id}`}> 
                        <img src={movie.medium_cover_image} alt={movie.title} />
                    </Link>
                </SwiperSlide>          
                )}
            </Swiper>
        </div>
    );
}

// SwiperDetail.propTypes = {
//     id: PropTypes.number.isRequired,
//     medium_cover_image: PropTypes.string.isRequired
// }

export default SwiperDetail;
 