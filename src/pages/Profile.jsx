import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Profile = () => {
  const { image, currentUser, bio, email } = useSelector((state) => state.auth);
  console.log(email);
  return (
    <>
      <Navbar />
      <div className="w-[35%] flex flex-col gap-3 p-3 items-center justify-center m-auto shadow-[0_0_0.3rem_0.3rem_rgba(17,89,138,0.5)]">
        <img style={{ width: "305px" }} src={image} alt="profile" />
        <p>{currentUser}</p>
        <p>{bio}</p>
        <p>{email}</p>
      </div>
    </>
  );
};

export default Profile;
