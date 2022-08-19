import React from 'react'
import image1 from '../../imgs/001-trend.png'
import image2 from '../../imgs/002-tv.png'
import image3 from '../../imgs/003-3d-movie.png'
import image4 from '../../imgs/004-software.png'
import aboutStyles from './About.module.css'

export default function About() {
  return (
    <>
    <div>
      <div className="row py-5">
        <div className="col-md-3">
          <div className={`${aboutStyles.aboutDetails} d-flex flex-column justify-content-center align-items-center`}>
            <img src={image1} alt="" />
            <p className='pt-3'>Trending Movies</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`${aboutStyles.aboutDetails} d-flex flex-column justify-content-center align-items-center`}>
            <img src={image2} alt="" />
            <p className='pt-3'>Trending Movies</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`${aboutStyles.aboutDetails} d-flex flex-column justify-content-center align-items-center`}>
            <img src={image3} alt="" />
            <p className='pt-3'>Trending Movies</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`${aboutStyles.aboutDetails} d-flex flex-column justify-content-center align-items-center`}>
            <img src={image4} alt="" />
            <p className='pt-3'>Trending Movies</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
