// src/main.jsx
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom'; // ✅ importar

import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>       {/* ✅ envolver tu app */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
