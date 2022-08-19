import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
// import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import registerStyles from "./Register.module.css";
import eye from '../../imgs/69-eye-outline.gif'

export default function Register() {
  let baseURL = 'https://routeegypt.herokuapp.com/';
  let [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    password: "",
  });
  let navigate = useNavigate();
  let [validateMsg,setValidateMsg] = useState([]);
  // let [btnDisabled,setBtnDisabled] = useState(true);
  //navigating page
  function goToLogin() {
    navigate("/login");
  }

    //validating data
   function validateData(){
      const schema = Joi.object({
        first_name: Joi.string().pattern(new RegExp(/^[A-Za-z]{3,15}$/)).required(),
        last_name: Joi.string().pattern(new RegExp(/^[A-Za-z]{3,15}$/)).required(),
        email: Joi.string().email({tlds: { allow: ['com', 'net'] }}).required(),
        age:Joi.number().min(14).max(90).required(),
        password: Joi.string().pattern(new RegExp(/[A-z0-9]{7,}/))
      });
      return  schema.validate(user,{abortEarly:false});
    }
    // useEffect(() => {
    //   getInputData()
    // }, [getInputData]) 
    
  //submitting form
  async function submitFormData(e){
    e.preventDefault();
    let {data} = await axios.post(baseURL+'signup',user);
    console.log(data);
    if(data.message == 'success'){
      goToLogin();
    }
    else{
      toast.error(`${data.message}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    // console.log('user',user);
  }

  function confirmInput(e){
    if(validateData().error){
      let tar = validateMsg.filter((msg)=> { return e.target.name === msg.context.label} );
      toast.error(`Invalid ${tar[0].context.label}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        
    }
    else{
      toast.success(`Entered Data is Validated`, {
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

  //getting user input
 function getInputData(e){
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    console.log('myUser' ,myUser);
    setUser(myUser);
    if(validateData().error){
      setValidateMsg(validateData().error.details);
    }
    
    // console.log(user);
  }

  return (
    <>
    <Fade>
    <div className="row py-5 rounded">
        <div className="col-md-4">
          <div
            className={`${registerStyles.welcome} text-center h-100 d-flex flex-column justify-content-center align-items-center`}
          >
            <h2 className="pb-2">Welcome Back!</h2>
            <p>To keep connected to us please login with your personal info.</p>
            <button onClick={goToLogin}
              className={`btn ${registerStyles.btnLogin} rounded-pill px-5 mt-4`}
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <div className={`${registerStyles.createAccount} text-center py-5`}>
            <h2>Create Account</h2>
            <ul className="d-flex justify-content-center align-items-center">
              <li>
                <Link to="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-google-plus-g"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
            </ul>
            <p>Or use you email for registeration: </p>
            <form
              onSubmit={submitFormData}
              className={`${registerStyles.inputFields} w-75 m-auto`}
            >
              <input
                onChange={getInputData}
                onBlur={confirmInput}
                type="text"
                className="form-control mb-3"
                placeholder="First Name"
                name="first_name"
              />
              <p></p>
              <input
                onChange={getInputData}
                onBlur={confirmInput}
                type="text"
                className="form-control mb-3"
                placeholder="Last Name"
                name="last_name"
              />
              <input
                onChange={getInputData}
                onBlur={confirmInput}
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                name="email"
              />
              <input
                onChange={getInputData}
                onBlur={confirmInput}
                type="number"
                className="form-control mb-3"
                placeholder="Age"
                name="age"
              />
              <div className="position-relative">
              <input
                onChange={getInputData}
                onBlur={confirmInput}
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                name="password"
              />
              <img src={eye} className={`${registerStyles.eyeImg} position-absolute translate-middle rounded-pill`} alt="" />
              </div>
              <button
                className={`${registerStyles.btnReg} rounded-pill px-5 py-2 my-3`} 
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <ToastContainer
        />
      </div>
    </Fade>
      
      
    </>
  );
}
