import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex items-center justify-center">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Profile;
