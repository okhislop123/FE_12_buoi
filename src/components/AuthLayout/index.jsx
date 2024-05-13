import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex">
      <div className="bg-gray-200 lg:w-[66.66%] h-screen"></div>
      <div className="w-1/3 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
