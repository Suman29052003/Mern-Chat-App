import React, { useState } from "react";
import NewGroupChat from "./NewGroupChat";

const Hero = () => {
  const [newGroupChat, setNewGroupChat] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const handleNewGroupChat = (e) => {
    setNewGroupChat(!newGroupChat);
  };

  const handleVisbility = (e) => {
    setVisibility(!visibility);
  };

  return (
    <div className="w-full md:flex mr-2">
      {/*Left */}

      <div className="contacts w-[30%] h-[85vh] bg-slate-500 m-2 rounded-md md:flex flex-col items-center hidden">
        <div className="header w-full rounded-md bg-slate-400 flex justify-between items-center p-3 text-white font-medium ">
          <h1 className="text-4xl">Chats</h1>
          <button
            className="flex bg-slate-100 text-black p-2 rounded-md scale-95 transition-transform duration-300 ease-in-out hover:scale-100"
            onClick={handleNewGroupChat}
          >
            New Group Chat{" "}
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>

        <div className="my-4 w-[90%]  text-white text-2xl p-4 rounded-3xl bg-slate-600">
          <span className="material-symbols-outlined  scale-[1.5]">search</span>
          <input
            type="text"
            className="bg-transparent outline-none ml-2 text-white"
            placeholder="Search"
          />
        </div>

        {newGroupChat ? <NewGroupChat /> : null}
      </div>

      <div className="flex md:hidden w-full items-center justify-center">
        <div className="my-4   text-white text-2xl p-4 rounded-3xl bg-slate-500">
          <span className="material-symbols-outlined  scale-[1.5]">search</span>
          <input
            type="text"
            className="bg-transparent outline-none ml-2 text-white"
            placeholder="Search"
          />
        </div>

        <button
          className="flex bg-slate-100 text-black p-5 ml-1 rounded-full scale-95 transition-transform duration-300 ease-in-out hover:scale-100"
          onClick={handleNewGroupChat}
        >
          {" "}
          <span className="material-symbols-outlined font-extrabold">add</span>
        </button>
      </div>

      {/*Right */}

      <div className="chats w-[97%] md:w-[67%] h-[85vh] bg-slate-500 m-2 rounded-md flex flex-col items-center justify-center">
        <div className="w-[98%] px-2 py-1 flex items-center justify-between ">
          <h1 className=" text-4xl text-white">Chat Box</h1>
          <button
            className="bg-white p-2 rounded-full flex items-center justify-between "
            onClick={handleVisbility}
          >
            {visibility ? (
              <span className="material-symbols-outlined">visibility_off</span>
            ) : (
              <span className="material-symbols-outlined scale-[1] text-black">
                visibility
              </span>
            )}
          </button>
        </div>

        <div
          className={`w-[98%] h-[89%] bg-gray-200 rounded-md ${
            visibility ? `blur-sm` : ""
          } rounded-br-none rounded-bl-none`}
        ></div>
        <div className="messageInput w-[98%] relative bottom-2  bg-gray-300 h-[50px] flex items-center pl-4 rounded-bl-md rounded-br-md text-black ">
          <input
            type="text"
            className=" w-full bg-transparent outline-0 p-3 text-xl"
            placeholder="Enter Your Message"
          />
          <span className="material-symbols-outlined  p-4 bg-slate-500 rounded-sm text-white cursor-pointer">
            send
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
