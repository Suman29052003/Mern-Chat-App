import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-[80px] bg-gray-400 flex items-center justify-between">
        <div className=" pl-4 text-white text-2xl">
          <span class="material-symbols-outlined  scale-[1.5]">search</span>
          <input type="text" className="bg-transparent outline-none ml-2 text-white" placeholder="Search" />
        </div>

        <div className="text-4xl font-semibold text-white">
          <span>Light - Chat</span>
        </div>

        <div className="text-white">
          <span class="material-symbols-outlined  scale-[1.5] p-3 cursor-pointer">notifications</span>
          <span class="material-symbols-outlined  scale-[1.5] p-3 cursor-pointer">person</span>
          <span class="material-symbols-outlined  scale-[1.5] p-3 cursor-pointer">keyboard_arrow_down</span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
