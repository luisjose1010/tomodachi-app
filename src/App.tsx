import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import { AdminDashboard } from '@/components/Admin';
import { LandingPage } from '@/components/LandingPage';
import { LoginPage } from '@/components/LoginPage';
import { RegisterPage } from '@/components/RegisterPage';
import { PurchasePage } from '@/components/PurchasePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: 'admin',
    element: <AdminDashboard />,
  },
  {
    path: '/purchase',
    element: <PurchasePage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
