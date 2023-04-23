// import React, { useState } from "react";
import Navbar from "./Navbar";
import BlogCard from "../components/BlogCard";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { flex } from "../styles/globalStyles";
import { useEffect } from "react";
import useStockCall from "../hooks/useBlogCall";

const Dashboard = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const { blogs } = useSelector((state) => state.blog);
  const { getBlogData } = useStockCall();

  useEffect(() => {
    getBlogData("blogs");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Grid container sx={(flex, { gap: 2 })}>
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
