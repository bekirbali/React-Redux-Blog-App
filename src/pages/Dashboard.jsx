// import React, { useState } from "react";
import Navbar from "./Navbar";
import BlogCard from "../components/BlogCard";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import axios from "axios";

const Dashboard = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const { blogs } = useSelector((state) => state.blog);
  const { getBlogData } = useBlogCall();

  const getBlog = async () => {
    const { data } = await axios(
      `http://32216.fullstack.clarusway.com/api/blogs/`
    );
    console.log(data);
  };

  useEffect(() => {
    getBlogData("blogs");
    getBlog();
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
        {blogs?.map((blog) => {
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
