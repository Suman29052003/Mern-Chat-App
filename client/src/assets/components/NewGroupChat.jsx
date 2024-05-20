import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChatState } from "../../context/ChatProvider"; // Adjust the import path as necessary

const NewGroupChat = () => {
  const [groupChatName, setGroupChatName] = useState("");
  const [searchUsers, setSearchUsers] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const { user } = ChatState();

  const handleUserSearch = async (q) => {
    setSearchUsers(q);

    if (!q) {
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:3000/api/user?search=${searchUsers}`,
        config
      );

      console.log(data);
      setSearchResults(data);
    } catch (error) {
      toast.error("Error fetching users");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateGroupChat = async (e) => {
    e.preventDefault();
    // Your logic to create group chat
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleCreateGroupChat}
        className="w-full min-h-[100px] bg-slate-400 flex flex-col justify-center items-center text-white rounded-3xl scale-90 transition-transform duration-300 ease-in-out hover:scale-95"
      >
        <input
          type="text"
          className="w-[90%] p-3 m-4 outline-none bg-slate-600 rounded-3xl focus:bg-slate-500"
          placeholder="Group Name ..."
          value={groupChatName}
          onChange={(e) => setGroupChatName(e.target.value)}
        />
        <input
          type="text"
          className="w-[90%] p-3 m-4 outline-none bg-slate-600 rounded-3xl focus:bg-slate-500"
          placeholder="Add Member ..."
          value={searchUsers}
          onChange={(e) => handleUserSearch(e.target.value)}
        />
        <button
          type="submit"
          className="flex bg-slate-100 text-black p-2 rounded-md m-2 font-semibold"
        >
          Create Group
        </button>
      </form>
    </>
  );
};

export default NewGroupChat;
