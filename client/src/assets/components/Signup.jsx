import React, { useState } from "react";
import axios from "axios";
import defaultPfp from "../../../public/defaultPfp.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImgInput = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSignUp = async () => {
    setIsLoading(true);

    try {
      // Password validation
      if (password !== confirmPassword) {
        toast.error("Passwords do not match", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        setIsLoading(false);
        return;
      }

      // Email validation (example)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Invalid email address", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        setIsLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("pic", profilePicture);

      const response = await axios.post("http://localhost:3000/api/user/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status.success) {
        toast.success("User Registered Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      } else {
        toast.error("User Registration failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }
    } catch (err) {
      console.log("User Registration failed", err);
      toast.error("User Signup failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  return (
    <div>
      <form className="text-lg" onSubmit={handleSubmit}>
        {/* profilePicture */}
        <div className="profilePicture w-full h-[8vh] mt-7 flex flex-col justify-center items-center">
          <div className="w-[100px] h-[100px] bg-center">
            <img src={profilePicture ? URL.createObjectURL(profilePicture) : defaultPfp} alt="" className="rounded-full" />
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