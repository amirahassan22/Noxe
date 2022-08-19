import React from 'react'
import { useNavigate } from 'react-router-dom'
import notfound from '../../imgs/notfound3.gif'
import notfoundStyles from './NotFound.module.css'

export default function Notfound() {
  let goToHome = useNavigate();
  function navToHome(){
    goToHome('/home')
  }
  return (
    <>
    <div className='w-100 vh-100'>
      <div className={`${notfoundStyles.image}`}>
         <img src={notfound} className='img-fluid' alt="" />
      </div>
      <div className={`${notfoundStyles.notfoundTxt} text-center mt-4`}>
      <h1 className='text-danger'>404 NOT FOUND</h1>
      <p>You have reached the dead land</p>
      <button onClick={navToHome} className={`btn ${notfoundStyles.backToHome} rounded-pill`}>Back to Home <i className="fa-solid fa-right-long"></i></button>
      </div>
    </div>
    </>
  )
}
