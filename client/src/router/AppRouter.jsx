import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from '../assets/pages/Registration.jsx';
import Chats from '../assets/pages/Chats.jsx';
import ChatProvider from '../context/ChatProvider.jsx';
import ProtectedRoute from '../context/ProtectedRoute .jsx'; // Import the new ProtectedRoute component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Registration />,
  },
  {
    path: '/chats',
    element: (
      <ProtectedRoute>
        <Chats />
      </ProtectedRoute>
    ),
  },
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router}>
      <ChatProvider>
        {/* Rest of your app */}
      </ChatProvider>
    </RouterProvider>
  );
};

export default AppRouter;