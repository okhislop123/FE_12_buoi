import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../page/login";
import Register from "../page/register";
import Home from "../page/home";
import NotFound from "../page/notfound";
import Movie from "../page/movie";
import BaseLayout from "../components/BaseLayout";
import Post from "../page/post";
import AuthLayout from "../components/AuthLayout";
import AuthRoute from "./AuthRoute";
import BaseRoute from "./BaseRoute";

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <AuthRoute>
        <AuthLayout />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/login" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "",
    element: (
      <BaseRoute>
        <BaseLayout />
      </BaseRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
