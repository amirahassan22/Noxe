import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import imageError from '../../imgs/imagenotfound.jpg'
import styles from './tvdetails.module.css'

export default function TVDetails() {
    let imageBase = 'https://image.tmdb.org/t/p/w500';
    let [searchParam,setSearchParam] = useSearchParams();
    let [tvDetails,setTvDetails] = useState({});
    let currentId = searchParam.get('id');

    async function getTrendingDetails(){
        let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${currentId}?api_key=fb873dbb0c137597410413d1ca2667c5&language=en-US`);
        setTvDetails(data); 
    }
    useEffect(() => {
        getTrendingDetails();
    }, [])
  return (
    <>
     <div className="row py-5">
        <div className="col-md-4">
            {tvDetails.poster_path!=null? <img src={imageBase+ tvDetails.backdrop_path} className='img-fluid' alt="" /> : <img src={imageError}  className={styles.image} alt=''/>}
        </div>
        <div className="col-md-8">
            <div className="mediaDetails">
                <h2>{tvDetails.name}</h2>
                <p>{tvDetails.overview}</p>
                <div className='row'>
                {tvDetails.genres !== undefined? tvDetails.genres.map((genre,index)=> <div className="col-3 text-center mt-3" key={index}><div  className='rounded-pill bg-warning py-2 text-white inline-block'>{genre.name}</div></div>) : ''}
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}


