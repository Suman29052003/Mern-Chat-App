import React from "react";
import Navbar from "../components/Navbar";

const Chats = () => {
  return (
    <>
      <Navbar />

      <div className="w-full flex">
        {/*Left */}
        <div className="contacts w-[30%] h-[85vh] bg-slate-500 m-2 rounded-md">
          <div className="header w-full flex justify-between items-center p-2 text-white font-medium ">
            <h1 className="text-4xl">My Chats</h1>
            <button className="flex bg-slate-100 text-black p-2 rounded-md">
              New Group Chat <span class="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
        {/*Right */}
        <div className="chats w-[70%] h-[85vh] bg-slate-500 m-2 rounded-md flex flex-col items-center justify-center">
          <div className="w-[98%] px-2 py-1 flex items-center justify-between ">
            <h1 className=" text-4xl text-white">Chat</h1>
            <button className="bg-white p-2 rounded-full flex items-center justify-between ">
              <span class="material-symbols-outlined scale-[1] text-black">
                visibility
              </span>
            </button>
          </div>

          <div className="w-[98%] h-[89%] bg-gray-200 rounded-md">
            <div className="messageInput w-full relative top-[92%] bg-gray-300 h-[50px] rounded-bl-md rounded-br-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chats;
