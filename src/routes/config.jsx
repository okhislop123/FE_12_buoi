import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../page/login";
import Register from "../page/register";
import Home from "../page/home";
import NotFound from "../page/notfound";
import Movie from "../page/movie";
import BaseLayout from "../components/BaseLayout";
import Post from "../page/post";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "",
    element: <BaseLayout />,
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
