import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/config";
import { getMe } from "./api";
import { useDispatch } from "react-redux";
import { setUser } from "./store/reducers/user";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    getMe()
      .then((res) => dispatch(setUser(res)))
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
