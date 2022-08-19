import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import imageError from "../../imgs/imagenotfound.jpg";
import MoviesStyles from './Movies.module.css';

export default function Movies() {
  let imageBase = "https://image.tmdb.org/t/p/w500";
  let [showMovies, setShowMovies] = useState([]);
  let [showMovies2, setShowMovies2] = useState([]);
  let [showMovies3, setShowMovies3] = useState([]);
  let [showMovies4, setShowMovies4] = useState([]);
  async function getMovies(pageNum, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=fb873dbb0c137597410413d1ca2667c5&language=en-US&sort_by=release_date.desc&primary_release_year=2022,2021,2020,2019&watch_region=US&include_adult=false&include_video=false&page=${pageNum}&with_watch_monetization_types=flatrate`
    );
    callback(data.results);
  }
  useEffect(() => {
    getMovies(1, setShowMovies);
    getMovies(2, setShowMovies2);
    getMovies(3, setShowMovies3);
    getMovies(4, setShowMovies4);
  }, []);

  return (
    <>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-page1"
          role="tabpanel"
          aria-labelledby="pills-first-tab"
          tabIndex="0"
        >
          <div className="row gy-4 py-5" id="page1">
            {showMovies.map((movie, index) => {
              return (
                <div className="col-md-3" key={index}>
                  <div className={`position-relative ${MoviesStyles.peopleInfo}`}>
                  <img
                    src={
                      movie.poster_path == null
                        ? imageError
                        : imageBase + movie.poster_path
                    }
                    className="img-fluid"
                    alt=""
                  />
                   <div className={`${MoviesStyles.innerLayer} d-flex justify-content-center align-items-center position-absolute w-100 h-100`}>
            <div className='text-center '>
              <h5>{movie.title}</h5>
              <p>Popularity:{movie.vote_average}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-page2"
          role="tabpanel"
          aria-labelledby="pills-second-tab"
          tabIndex="0"
        >
          <div className="row gy-4 py-5" id="page2">
            {showMovies2.map((movie, index) => {
              return (
                <div className="col-md-3" key={index}>
                  <div className={`position-relative ${MoviesStyles.peopleInfo}`}>
                  <img
                    src={
                      movie.poster_path == null
                        ? imageError
                        : imageBase + movie.poster_path
                    }
                    className="img-fluid"
                    alt=""
                  />
                   <div className={`${MoviesStyles.innerLayer} d-flex justify-content-center align-items-center position-absolute w-100 h-100`}>
            <div className='text-center '>
              <h5>{movie.title}</h5>
              <p>Popularity:{movie.vote_average}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-page3"
          role="tabpanel"
          aria-labelledby="pills-third-tab"
          tabIndex="0"
        >
          <div className="row gy-4 py-5" id="page3">
            {showMovies3.map((movie, index) => {
              return (
                <div className="col-md-3" key={index}>
                  <div className={`position-relative ${MoviesStyles.peopleInfo}`}>
                  <img
                    src={
                      movie.poster_path == null
                        ? imageError
                        : imageBase + movie.poster_path
                    }
                    className="img-fluid"
                    alt=""
                  />
                   <div className={`${MoviesStyles.innerLayer} d-flex justify-content-center align-items-center position-absolute w-100 h-100`}>
            <div className='text-center '>
              <h5>{movie.title}</h5>
              <p>Popularity:{movie.vote_average}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
                  </div>
                </div>
                
              );
            })}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-page4"
          role="tabpanel"
          aria-labelledby="pills-fourth-tab"
          tabIndex="0"
        >
          <div className="row gy-4 py-5" id="page4">
            {showMovies4.map((movie, index) => {
              return (
                <div className="col-md-3" key={index}>
                  <div className={`position-relative ${MoviesStyles.peopleInfo}`}>
                  <img
                    src={
                      movie.poster_path == null
                        ? imageError
                        : imageBase + movie.poster_path
                    }
                    className="img-fluid"
                    alt=""
                  />
                   <div className={`${MoviesStyles.innerLayer} d-flex justify-content-center align-items-center position-absolute w-100 h-100`}>
            <div className='text-center '>
              <h5>{movie.title}</h5>
              <p>Popularity:{movie.vote_average}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ul className={`nav nav-pills my-5 d-flex justify-content-end ${MoviesStyles.listBtns}`} id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-first-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-page1"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            1
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-second-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-page2"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            2
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-third-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-page3"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            3
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-fourth-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-page4"
            type="button"
            role="tab"
            aria-controls="pills-disabled"
            aria-selected="false"
          >
            4
          </button>
        </li>
      </ul>
    </>
  );
}
