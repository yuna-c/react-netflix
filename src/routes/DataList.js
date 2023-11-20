import React from 'react';
import PropTypes from 'prop-types';

function DataList({ medium_cover_image, title, genres, year, runtime, rating, descriptipn_full }) {
   return (
        <div>
            <img src={medium_cover_image} alt={title} />
            <h1>{title}</h1>

            <div>rating : {rating}</div>
            <div>
                genres : 
                <ul>
                    {genres.map((g, index) =>(
                        <li key={index}>{g}</li>
                    ))}
                </ul>
                <div>year : {year}</div>
                <div>runtime : {runtime}</div>
                <div>{descriptipn_full}</div>
            </div>
        </div>
    )
}

DataList.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,    
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    description_full: PropTypes.string.isRequired,
};


export default DataList;
