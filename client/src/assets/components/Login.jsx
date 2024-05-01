import React from "react";

function Login() {
  return (
    <form className="text-lg">
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

      <div className="forget-password">
        <span className="text-blue-700 text-md underline cursor-pointer">Forgot password?</span>
      </div>

      <div className="submit w-full flex items-center justify-center">
        <button class="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm scale-95 hover:scale-110 ease-in-out duration-300">
          Log In
        </button>
      </div>
    </form>
  );
}

export default Login;
