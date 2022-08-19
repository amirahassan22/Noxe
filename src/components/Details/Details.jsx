import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import imageError from "../../imgs/imagenotfound.jpg";
import dertailsStyle from './Details.module.css'

export default function Details() {
  let imageBase = "https://image.tmdb.org/t/p/w500";
  let [searchParam, setSearchParam] = useSearchParams();
  let [details, setDetails] = useState({});

  let currentId = searchParam.get("id");

  async function getTrendingDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${currentId}?api_key=fb873dbb0c137597410413d1ca2667c5&language=en-US`
    );
    setDetails(data);
    console.log(data);
  }
  useEffect(() => {
    getTrendingDetails();
  }, []);
  console.log(details.genres);
  return (
    <>
      <div className="row py-5">
        <div className="col-md-4">
          {details.poster_path != null ? (
            <img
              src={imageBase + details.poster_path}
              className="img-fluid"
              alt=""
            />
          ) : (
            <img src={imageError}  className={dertailsStyle.imageerror} alt="" />
          )}
        </div>
        <div className="col-md-8">
          <div className="mediaDetails">
            <h2>{details.title}</h2>
            <p>{details.overview}</p>
            <div className="row">
              {details.genres !== undefined
                ? details.genres.map((genre, index) => (
                    <div className="col-3 text-center mt-3" key={index}>
                      <div className="rounded-pill bg-warning py-2 text-white inline-block">
                        {genre.name}
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            <ul className="mt-5">
              <li className="list-unstyled mb-3">Budget : {details.budget}</li>
              <li className="list-unstyled mb-3">
                Popularity: {details.popularity}
              </li>
              <li className="list-unstyled mb-3">
                Vote Average : {details.vote_average}
              </li>
              <li className="list-unstyled mb-3">
                Vote Count : {details.vote_count}
              </li>
              <li className="list-unstyled mb-3">
                Release date : {details.release_date}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
