import React from "react";

const NewGroupChat = () => {
  return (
    <form
      action=""
      className="w-full min-h-[100px] bg-slate-400 flex flex-col justify-center items-center text-white rounded-3xl scale-90 transition-transform duration-300 ease-in-out hover:scale-95"
    >
      <input
        type="text"
        className="w-[90%] p-3 m-4 outline-none bg-slate-600 rounded-3xl focus:bg-slate-500"
        placeholder="Group Name ..."
      />
      <input
        type="text"
        className="w-[90%] p-3 m-4 outline-none bg-slate-600 rounded-3xl focus:bg-slate-500"
        placeholder="Add Member ..."
      />
    </form>
  );
};

export default NewGroupChat;
