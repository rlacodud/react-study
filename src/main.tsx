import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from '@/router/index';
import '@/styles/reset.css';

const router = createBrowserRouter(AppRoutes);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);