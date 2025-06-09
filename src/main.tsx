import './style.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './Router';

createRoot(document.body).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
