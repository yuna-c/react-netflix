import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import DataList from './DataList';

function MovieDetail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState([]);

    // console.log(id);
    const getMovie = useCallback(async () => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        // console.log(json.data.movieData);
        setLoading(false);
        setMovieData(json);
    }, [id]);
    
    useEffect(() => {
        getMovie()
    }, [getMovie]);

    console.log(movieData);
  
    return (
        <div className='layout-container'>
            <div className='article-layout'>
                <h1>Detail</h1>
                <div>
                    {loading ? (<h2>로딩중</h2>) : null}  
                    <div>
                        {movieData.status === "ok" ? (
                            <DataList 
                                medium_cover_image={movieData.data.movie.medium_cover_image}
                                title={movieData.data.movie.title}
                                rating={movieData.data.movie.rating}
                                genres={movieData.data.movie.genres}
                                year={movieData.data.movie.year}
                                runtime={movieData.data.movie.runtime}
                                description_full={movieData.data.movie.description_full}
                            />
                    
                    ) :
                    (
                        <div>
                            something wrong on load data
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
