import React from 'react'
import { useState } from 'react';
import axios from "axios";
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import { Bounce } from "react-awesome-reveal";
import { ToastContainer, toast } from "react-toastify";
import loginStyles from './login.module.css';

export default function Login(props) {
  let [userLogin,setUserLogin] = useState({
    email:"",
    password:""
  });
  
  let [alertMsg, setAlertMsg] = useState("");
  let [valditionStep,setValditionStep] = useState([]);
 
  let goToHome = useNavigate();
  function validateData() {
    let schema = Joi.object({
      email: Joi.string().email({tlds:{allow:['com','net']}})
        .required(),
      password: Joi.string().pattern(new RegExp(/^[A-z0-9]{7,}$/)).required(),
    });
    return schema.validate(userLogin, { abortEarly: false });
  }
  
  function showValError(e){
     if(validateData().error){
      let tar = valditionStep.filter((msg)=> { return e.target.name === msg.path[0]} );
      console.log(tar);
      toast.error(`Invalid ${tar[0].path[0]}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
     }
  }
  function showAlert() {
    if (alertMsg === "") {
      return "";
    } else if (alertMsg === "success") {
      return <div className="alert alert-success mt-3">{alertMsg}</div>;
    } else {
      return <div className="alert alert-danger mt-3">{alertMsg}</div>;
    }
  }
  async function submitLoginData(e){
    e.preventDefault();
    console.log(validateData());
    if(validateData().error){
      setValditionStep(validateData().error.details)
    }
    else{
      setValditionStep([]);
      let {data} = await axios.post('https://routeegypt.herokuapp.com/signin',userLogin);
      console.log(data);
      if(data.message === 'success'){
        localStorage.setItem('token',data.token)
        setAlertMsg(data.message);
        toast.success(`${data.message}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        goToHome('/home');
        props.getEncodedData();
      }
      else{
        setAlertMsg(data.message);
      }
    }
    
  }






  function getLoginData(e){
     let myUserLogin = {...userLogin};
     myUserLogin[e.target.name] = e.target.value;
     setUserLogin(myUserLogin);
  
    
    if(validateData().error){
      setValditionStep(validateData().error.details);
      
    }
    else{
      console.log('ya 3am 3addy');
    }
  }
  return (
    <>
    <ToastContainer className='mt-5' />
    <Bounce>
    <div className="loginForm vh-100 d-flex justify-content-center align-items-center">
    <div className={`${loginStyles.leftSide} bg-white rounded-3 py-5 text-center w-50 m-auto`}>
      <h2 className='fw-bolder'>Sign In</h2>
    <form onSubmit={submitLoginData} className='w-50 m-auto pt-2'>
      <input onInput={getLoginData} onBlur={showValError} type="email" className='form-control mt-3' name='email' placeholder='Enter Your Email' />
      <input onInput={getLoginData} onBlur={showValError} type="password" className='form-control mt-3 mb-2' name='password' placeholder='Enter Your Password' />
      <div className='text-center'>{showAlert()}</div>

      {/* {valditionStep? valditionStep.map((error,index)=>{ return (<div key={index} className='alert alert-danger'>{error.message}</div>)}):''} */}
      <div>
        <button className={` ${loginStyles.loginbtn} w-100 mt-3 fw-bold py-2 text-white rounded-pill mb-5`}>Login</button>
      </div>
    </form>
    </div>
    </div>
    {/* <ToastContainer/> */}
{/* Same as */}

    </Bounce>
    </>
  )
}
