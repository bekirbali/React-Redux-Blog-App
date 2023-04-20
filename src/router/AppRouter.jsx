import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import MyBlogs from "../pages/MyBlogs";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/Detail";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="my-blogs" element={<MyBlogs />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="detail" element={<Detail />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
