import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Profile = () => {
  const { image } = useSelector((state) => state.auth);
  return (
    <>
      <Navbar />
      <div>Profile</div>
    </>
  );
};

export default Profile;
