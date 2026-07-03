import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/Main.tsx'
import About from './pages/About.tsx'
import Soon from './pages/Soon.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Главная страница
  },
  {
    path: "/about",
    element: <About />, // Страница "О нас"
  },
  {
    path: "/soon",
    element: <Soon />,
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
