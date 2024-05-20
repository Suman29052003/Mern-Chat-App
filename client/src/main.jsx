// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import Registration from "../src/assets/pages/Registration.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Chats from "./assets/pages/Chats.jsx";
// import ChatProvider from "../src/context/ChatProvider.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Registration />,
//   },
//   {
//     path: "/chats",
//     element: (
//       <ChatProvider>
//         <Chats />,
//       </ChatProvider>
//     ),
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Registration from "../src/assets/pages/Registration.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chats from "./assets/pages/Chats.jsx";
import ChatProvider from "../src/context/ChatProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/chats",
    element: (
        <Chats />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChatProvider>
    <RouterProvider router={router} />
  </ChatProvider>
);