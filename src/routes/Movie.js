import React, { useState, useEffect } from 'react';
import SwiperDetail from '../components/SwiperDetail';

function Movie() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        .then((response) => response.json())
        .then((json) => {
            setLoading(false);
            console.log(json.data.movies);
        })
    }, []);

    return (
        <div>
            <div className='article-layout'>
                {loading ? 
                    (
                    <h2>Loading</h2> 
                    )
                    : 
                    (
                    <div>
                        <div className='layout-container mb50'>
                            <h1 className='mt16 mb16'>최신 등록 콘텐츠</h1>
                            <SwiperDetail/>    
                        </div>    
                        <div className='layout-container mb50'>
                            <h1 className='mt16 mb16'>내가 찜한 콘텐츠</h1>
                            <SwiperDetail/>    
                        </div>  
                        <div className='layout-container mb50'>
                            <h1 className='mt16 mb16'>최신 영화 콘텐츠</h1>
                            <SwiperDetail/>    
                        </div>        
                        <div className='layout-container mb50'>
                            <h1 className='mt16 mb16'>시리즈 등록 콘텐츠</h1>
                            <SwiperDetail/>    
                        </div>                        
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Movie;
