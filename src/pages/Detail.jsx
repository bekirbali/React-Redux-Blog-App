import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Detail = () => {
  const { state: blog } = useLocation();
  console.log(blog);
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={blog?.image} alt="" />
        <div>
          <Typography>{blog?.author}</Typography>
          <Typography>
            {new Date(blog?.publish_date).toLocaleDateString("en-us", {
              weekday: "long",
            })}
          </Typography>
          <Typography>
            {new Date(blog?.publish_date).toLocaleDateString("en-us", {
              month: "long",
              year: "numeric",
              day: "numeric",
            })}
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default Detail;
