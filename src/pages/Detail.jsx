import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Detail = () => {
  const { state: blog } = useLocation();
  console.log(blog);
  return (
    <div className="flex flex-col w-[50%] m-auto p-3">
      <Navbar />
      <Box
        sx={{
          marginTop: "5rem",
        }}
      >
        <div className="text-left mt-3 w-[350px] mx-auto shadow-lg p-2">
          <img
            style={{ height: "350px", width: "350px", margin: "0 auto" }}
            src={blog?.image}
            alt=""
          />
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
          <Typography
            sx={{
              borderTop: "1px solid black",
              paddingTop: "1rem",
              textDecoration: "underline",
            }}
          >
            {blog?.title}
          </Typography>
          <Typography>{blog?.content}</Typography>
        </div>
        <Grid
          container
          sx={{
            justifyContent: "center",
            marginTop: "1rem",
            gap: "1rem",
          }}
        >
          {!blog?.likes ? (
            <Typography>
              <FavoriteBorderOutlinedIcon /> {blog?.likes}
            </Typography>
          ) : (
            <Typography>
              <FavoriteOutlinedIcon /> {blog?.likes}
            </Typography>
          )}

          <Typography>
            <ChatBubbleOutlineOutlinedIcon role="button" />{" "}
            {blog?.comment_count}
          </Typography>
          <Typography>
            <VisibilityOutlinedIcon /> {blog?.post_views}
          </Typography>
        </Grid>
      </Box>
    </div>
  );
};

export default Detail;
