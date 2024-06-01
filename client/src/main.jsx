import React from 'react';
import { createRoot } from 'react-dom/client';
import "../src/index.css"
import AppRouter from "../src/router/AppRouter" // Import the new AppRouter component

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<AppRouter />);