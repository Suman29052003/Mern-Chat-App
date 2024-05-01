import React from "react";
import defaultPfp from "../../../public/defaultPfp.jpg";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="text-lg" onSubmit={handleSubmit}>
        <div className="profilePicture w-full h-[8vh] mt-7 flex flex-col justify-center items-center">
          <div className="w-[100px] h-[100px] bg-center">
            <img src={defaultPfp} alt="" className="rounded-full" />
          </div>
          <div className="uploadPfp w-full flex justify-center items-center">
            <input type="file" className="scale-75 w-[60%]" />
          </div>

        </div>

        <div className="name flex flex-col my-3">
          <label htmlFor="" className="my-1">
            Name <span className="text-red-700">*</span>
          </label>
          <input
            className="outline-none rounded-lg border-0 p-2 bg-[#bebebe]"
            type="text"
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div className="name flex flex-col my-4">
          <label htmlFor="" className="my-1">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            className="outline-none rounded-lg border-0 p-2 bg-[#bebebe]"
            type="text"
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="name flex flex-col my-4">
          <label htmlFor="" className="my-1">
            Password <span className="text-red-700">*</span>
          </label>
          <input
            className="outline-none rounded-lg border-0 p-2 bg-[#bebebe]"
            type="password"
            placeholder="Enter Your Password"
            required
          />
        </div>

        <div className="name flex flex-col my-4">
          <label htmlFor="" className="my-1">
            Confirm Password <span className="text-red-700">*</span>
          </label>
          <input
            className="outline-none rounded-lg border-0 p-2 bg-[#bebebe]"
            type="password"
            placeholder="Enter Your Confirm Password"
            required
          />
        </div>

        <div className="submit w-full flex items-center justify-center">
          <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm scale-110 hover:scale-125 ease-in-out duration-300">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
