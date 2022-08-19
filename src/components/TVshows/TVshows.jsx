import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import imageError from "../../imgs/imagenotfound.jpg";
import showsStyles from './TVShows.module.css'

export default function TVshows() {
  let imageBase = "https://image.tmdb.org/t/p/w500";
  let [showTVShows1, setShowTVShows1] = useState([]);
  let [showTVShows2, setShowTVShows2] = useState([]);
  let [showTVShows3, setShowTVShows3] = useState([]);
  let [showTVShows4, setShowTVShows4] = useState([]);
  async function getMovies(pageNum, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=fb873dbb0c137597410413d1ca2667c5&language=en-US&sort_by=release_date.desc&primary_release_year=2022,2021,2020,2019&watch_region=US&include_adult=false&include_video=false&page=${pageNum}&with_watch_monetization_types=flatrate`
    );
    callback(data.results);
  }
  useEffect(() => {
    getMovies(1, setShowTVShows1);
    getMovies(2, setShowTVShows2);
    getMovies(30, setShowTVShows3);
    getMovies(5, setShowTVShows4);
  }, []);
  return (
    <>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-page1"
        role="tabpanel"
        aria-labelledby="pills-first-tab"
        tabindex="0"
      >
        <div className="row gy-4 py-5" id="page1">
          {showTVShows1.map((movie, index) => {
            return (
              <div className="col-md-2" key={index}>
                <img
                  src={
                    movie.poster_path == null
                      ? imageError
                      : imageBase + movie.poster_path
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-page2"
        role="tabpanel"
        aria-labelledby="pills-second-tab"
        tabindex="0"
      >
        <div className="row gy-4 py-5" id="page2">
          {showTVShows2.map((movie, index) => {
            return (
              <div className="col-md-2" key={index}>
                <img
                  src={
                    movie.poster_path == null
                      ? imageError
                      : imageBase + movie.poster_path
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-page3"
        role="tabpanel"
        aria-labelledby="pills-third-tab"
        tabindex="0"
      >
        <div className="row gy-4 py-5" id="page3">
          {showTVShows3.map((movie, index) => {
            return (
              <div className="col-md-2" key={index}>
                <img
                  src={
                    movie.poster_path == null
                      ? imageError
                      : imageBase + movie.poster_path
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-page4"
        role="tabpanel"
        aria-labelledby="pills-fourth-tab"
        tabindex="0"
      >
        <div className="row gy-4 py-5" id="page4">
          {showTVShows4.map((movie, index) => {
            return (
              <div className="col-md-2" key={index}>
                <img
                  src={
                    movie.poster_path == null
                      ? imageError
                      : imageBase + movie.poster_path
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <ul class={`nav nav-pills my-5 d-flex justify-content-end ${showsStyles.listBtns}`} id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
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
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
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
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
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
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
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
  )
}
