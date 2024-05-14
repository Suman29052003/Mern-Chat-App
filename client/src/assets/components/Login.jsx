import React, { useState } from "react";

function Login() {
  const { email, setEmail } = useState();
  const { password, setPassword } = useState();

  const handleSubmit =async(e) =>{
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);


      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        body: formData,
      });
  }

 

  return (
    <form className="text-lg" onSubmit={handleSubmit}>
      <div className="name flex flex-col my-4">
        <label htmlFor="" className="my-1">
          Email <span className="text-red-700">*</span>
        </label>
        <input
          className="outline-none rounded-lg border-0 p-2 bg-[#bebebe]"
          type="text"
          placeholder="Enter Your Email"
          required
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>

      <div className="forget-password">
        <span className="text-blue-700 text-md underline cursor-pointer">
          Forgot password?
        </span>
      </div>

      <div className="submit w-full flex items-center justify-center">
        <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm scale-110 hover:scale-125 ease-in-out duration-300" >
          Log In
        </button>
      </div>
    </form>
  );
}

export default Login;
