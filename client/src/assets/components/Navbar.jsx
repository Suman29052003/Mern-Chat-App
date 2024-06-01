import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-[99%] h-[80px] bg-gray-400 flex items-center justify-between">
        <div className="text-4xl font-semibold text-white pl-4">
          <span>Light - Chat</span>
        </div>

        <div className="text-white">
          <span className="material-symbols-outlined  scale-[1.5] p-3 cursor-pointer">
            notifications
          </span>
          <span className="material-symbols-outlined  scale-[1.5] p-3 cursor-pointer">
            person
          </span>
          <span className="material-symbols-outlined  scale-[1.5] p-3 cursor-pointer">
            keyboard_arrow_down
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
