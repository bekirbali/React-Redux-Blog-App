// import React, { useState } from "react";
import Navbar from "./Navbar";
import BlogCard from "../components/BlogCard";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";

const Dashboard = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogData } = useBlogCall();
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    getBlogData("blogs");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {blogs
          ?.filter((blog) => currentUser.includes(blog.author))
          .map((blog) => {
            return (
              <Grid item key={blog.id}>
                <BlogCard blog={blog} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Dashboard;
