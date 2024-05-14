import React, { useState,useNavi } from "react";
import defaultPic from "/defaultPfp.jpg"; // Check if the path to the default profile picture is correct
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom"


const Signup = () => {
  const [pic, setPic] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userRegistered,setUserRegistered] = useState(false)

  const usenavigate = useNavigate()

  const handleImgInput = (e) => {
    setPic(e.target.files[0]);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        setIsLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("pic", pic);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("User Registered Successfully!");
        setUserRegistered(true);
        usenavigate('/chats')
      } else {
        toast.error("User already exist! or Failed to Create User!");
      }
    } catch (err) {
      console.log("Error during fetch request:", err);
      toast.error("An error occurred during the request");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form className="text-lg" onSubmit={handleSignUp}>
        {/* Form inputs */}

        {/* profilePicture */}
        <div className="profilePicture w-full h-[8vh] mt-7 flex flex-col justify-center items-center">
          <div className="w-[100px] h-[100px] bg-center">
            <img src={pic ? URL.createObjectURL(pic) : defaultPic} alt="" className="rounded-full" />
          </div>
          <div className="uploadPfp w-full flex justify-center items-center">
            <input
              type="file"
              className="scale-75 w-[60%]"
              onChange={handleImgInput}
            />
          </div>
        </div>
        {/* name input */}
        <div className="name flex flex-col my-3">
          <label htmlFor="" className="my-1">
            Name <span className="text-red-700">*</span>
          </label>
          <input
            className="outline-none rounded-lg border-0 p-2 bg-[#bebebe]"
            type="text"
            placeholder="Enter Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* email input */}
        <div className="name flex flex-col my-4">
          <label htmlFor="" className="my-1">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            className="outline-none rounded-lg border-0 p-2 bg-[#bebebe]"
            type="email"
            placeholder="Enter Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* password input */}
        <div className="name flex flex-col my-4">
          <label htmlFor="" className="my-1">
            Password <span className="text-red-700">*</span>
          </label>
          <input
            className="outline-none rounded-lg border-0 p-2 bg-[#bebebe]"
            type="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* Confirm password input */}
        <div className="name flex flex-col my-4">
          <label htmlFor="" className="my-1">
            Confirm Password <span className="text-red-700">*</span>
          </label>
          <input
            className="outline-none rounded-lg border-0 p-2 bg-[#bebebe]"
            type="password"
            placeholder="Enter Your Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {/* signup button */}
        <div className="submit w-full flex items-center justify-center">
          <button
            className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm scale-110 hover:scale-125 ease-in-out duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
