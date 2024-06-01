import React, { useState } from "react";
import "./../../App.css";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { Link } from "react-router-dom";

const Registration = () => {
  const [register, setRegister] = useState("login");

  return (
    <div className="registration max-w-full h-screen flex flex-col items-center justify-center">
      <div className="headerBox w-[280px] h-[8vh] bg-[#737377] md:bg-white rounded-lg mt-3 md:mt-3 flex items-center justify-center md:p-2">
        <span className="text-3xl font-semibold text">Light-Chat</span>
      </div>

      <div className="registrationBox md:w-[450px] w-[300px]  bg-white min-h-[90vh] rounded-lg my-3 flex flex-col items-center">
        <div className="navigator w-[90%] min-h-12  flex items-center justify-around p-3 my-4 bg-[#6f6f6f] rounded-lg text-white text-[18px] font-medium">
          
        <div className="LogIn hover:text-[24px] hover:font-bold ease-in-out duration-150" onClick={()=>{setRegister("login")}}>
            <span className={`cursor-pointer ${register === "login"?'underline':''} `}>
              Log In
            </span>
          </div>

          <div className="SignUp hover:text-[24px] hover:font-bold ease-in-out duration-150" onClick={()=>{setRegister("signup")}}>
            <span className={`cursor-pointer ${register === "signup"?'underline':''} `}>
              Sign Up
            </span>
          </div>

          
        </div>

        <div className="form w-[90%] h-[50%]">
          {
            register === "login"?<Login/>
            :<Signup/>
          }
          
        </div>



      </div>
    </div>
  );
};

export default Registration;
