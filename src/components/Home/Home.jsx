import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import homeStyles from './Home.module.css'
// import { alt } from 'joi';

export default function Home() {
  // const swiper = new Swiper();
  let imageBase = 'https://image.tmdb.org/t/p/w500';
  let [viewTrendingMovies,setViewTrendingMovies] = useState([]);
  let [viewTrendingTv,setViewTrendingTv] = useState([]);
  let [viewTrendingPeople,setViewTrendingPeople] = useState([]);
  let navigate = useNavigate();
  async function getTrending(mediaName,callback){
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaName}/day?api_key=fb873dbb0c137597410413d1ca2667c5`);
    // console.log(data.results)
    callback(data.results);
    // console.log(viewTrending);
  }
  useEffect(() => {
    getTrending('movie',setViewTrendingMovies);
    getTrending('tv',setViewTrendingTv);
    getTrending('person',setViewTrendingPeople);
    // console.log();
  }, []);
  function doToDetails(id){
    navigate({
      pathname:'/details',
      search:`?id=${id}`
    })
  }
  function goToTVDetails(id){
    navigate({
      pathname:'/tvdetails',
      search:`?id=${id}`
    })
  }
  return (
    <>
      <div className="row g-2 py-5">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div className={homeStyles.trendigInfo}>
          <div className={homeStyles.upperLine}></div>
          <h2>Trending movies to watch now</h2>
          <div className={homeStyles.lowerLine}></div>
          </div>
        </div>
        {viewTrendingMovies.map((movie,index)=> {
          return(<div key={index} onClick={()=> doToDetails(movie.id)}  className="col-md-2 rounded-3">
            <div className="movie-details">
              <img src={imageBase+ movie.poster_path} className='img-fluid' alt="" />
            </div>
          </div>)})}
      </div>
      <div className="row g-2 py-5">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
        <div className={homeStyles.trendigInfo}>
          <div className={homeStyles.upperLine}></div>
          <h2>Trending TV shows to watch now</h2>
          <div className={homeStyles.lowerLine}></div>
          </div>
        </div>
        {viewTrendingTv.map((tv,index)=> {
          return(<div key={index} onClick={()=> goToTVDetails(tv.id)}  className="col-md-2 rounded-3">
            <div className="movie-details">
              <img src={imageBase+ tv.poster_path} className='img-fluid' alt="" />
            </div>
          </div>)})}
      </div>

<div className="row py-5">
  <div className="col-md-4 d-flex justify-content-center align-items-center">
  <div className={`${homeStyles.trendigInfo}`}>
          <div className={homeStyles.upperLine}></div>
          <h2>Trending people</h2>
          <div className={homeStyles.lowerLine}></div>
          </div>
  </div>
  <div className="col-md-8">
  <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          {viewTrendingPeople.map((people,index)=> <SwiperSlide key={index}> <img  src={imageBase+people.profile_path} className={`img-fluid bg-danger ${homeStyles.peopleImgs}`} alt='' /></SwiperSlide>)}
      </Swiper>
  </div>
</div>
      
    </>
  )
}
