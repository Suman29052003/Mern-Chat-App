import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      body: formData,
    });

    setIsLoading(false);

    if (response.ok) {
      toast.success("User Logged In Successfully!");
      setTimeout(() => {
        navigate("/chats");
      }, 1000);
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <form className="text-lg" onSubmit={handleSubmit}>
      <div className="name flex flex-col my-4">
        <label htmlFor="email" className="my-1">
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
        <label htmlFor="password" className="my-1">
          Password <span className="text-red-700">*</span>
        </label>
        <input
          className="outline-none rounded-lg border-0 p-2 bg-[#bebebe]"
          type="password"
          placeholder="Enter Your Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="forget-password">
        <span className="text-blue-700 text-md underline cursor-pointer">
          Forgot password?
        </span>
      </div>

      <div className=" w-full flex items-center justify-center">
        <button
          className="submit px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm scale-110 hover:scale-125 ease-in-out duration-300"
          disabled={isLoading}
        >
          Log In
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}

export default Login;
