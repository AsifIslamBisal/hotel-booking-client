import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Home/Home.jsx';
import Register from './Authentication/Register.jsx';
import SignIn from './Authentication/SignIn.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rooms from './Home/Rooms.jsx';
import MyBookings from './Home/MyBookings.jsx';
import PrivateRoute from './router/PrivateRoute.jsx';
import RoomDetails from './room details/RoomDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "rooms",
        element:<Rooms></Rooms>,
      },
      {
        path: "myBookings",
        element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/bookings/rooms/${params.id}`)
      },
      {
        path: "/rooms/:id",
        element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: "register",
        element:<Register></Register>,
      },
      {
        path: "signIn",
        element:<SignIn></SignIn>,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" autoClose={3000} />
    </AuthProvider>
  </StrictMode>,
)
