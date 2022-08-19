import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import peopleStyles from './people.module.css'

export default function Peple() {
  let imageBase = "https://image.tmdb.org/t/p/w500";
  let [popularPeople,setPopularPeople] = useState([])
  async function getPerson(){
    let {data} = await axios.get('https://api.themoviedb.org/3/person/popular?api_key=fb873dbb0c137597410413d1ca2667c5&language=en-US&page=1');
    setPopularPeople(data.results);
  }
  useEffect(() => {
    getPerson()
  }, [])
  
  return (
    <>
    <div className="row g-4 py-5">
      {popularPeople.map((person,index)=> {return (
        <div key={index} className="col-md-2">
          <div className={`position-relative ${peopleStyles.peopleInfo}`}>
          <img src={imageBase+person.profile_path} className='img-fluid' alt="" />
          <div className={`${peopleStyles.innerLayer} d-flex justify-content-center align-items-center position-absolute w-100 h-100`}>
            <div className='text-center '>
              <h5>{person.name}</h5>
              <p>Popularity:{person.popularity}</p>
              <p>{person.known_for_department}</p>
            </div>
          </div>
          </div>
        </div>
      )})}
    </div>
    </>
  )
}
