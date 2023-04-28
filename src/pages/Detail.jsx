import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Avatar, Box, Grid, TextField, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LoadingButton } from "@mui/lab";

const Detail = () => {
  const { state: blog } = useLocation();
  const { getCommentData, postComment } = useBlogCall();

  const [showComment, setShowComment] = useState(false);

  const { image } = useSelector((state) => state.auth);

  const { comments } = useSelector((state) => state.blog);

  const [commentText, setCommentText] = useState({
    content: "",
    post: null,
  });

  const handlePostComment = () => {
    postComment(`comments/${blog.id}`, commentText);
    setCommentText({
      content: "",
      post: null,
    });
    getCommentData("comments", blog.id);
  };

  useEffect(() => {
    getCommentData("comments", blog.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-[50%] m-auto p-3">
        <Box>
          <div className="text-left mt-3 w-[350px] mx-auto shadow-lg p-2">
            <img
              style={{ height: "350px", width: "350px", margin: "0 auto" }}
              src={blog?.image}
              alt=""
            />
            <div className="flex gap-2 my-2">
              <Avatar sx={{ width: "20px", height: "20px" }}>
                <img src={image} alt="" />{" "}
              </Avatar>
              {blog?.author}
            </div>

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
              <ChatBubbleOutlineOutlinedIcon
                role="button"
                onClick={() => setShowComment(!showComment)}
              />{" "}
              {blog?.comment_count}
            </Typography>
            <Typography>
              <VisibilityOutlinedIcon /> {blog?.post_views}
            </Typography>
          </Grid>
        </Box>
        {showComment && (
          <Box
            sx={{
              marginTop: "2rem",
              padding: "0.5rem",
            }}
          >
            {comments.map((comment) => {
              return (
                <div key={comment?.id}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    <AccountCircleIcon /> {comment?.user}
                  </Typography>
                  <Typography
                    sx={{ borderBottom: "1px solid gray", color: "#585858" }}
                  >
                    {new Date(comment?.time_stamp).toLocaleDateString("en-us", {
                      weekday: "short",
                    })}
                    ,{" "}
                    {new Date(comment?.time_stamp).toLocaleDateString("en-us", {
                      day: "numeric",
                      month: "short",
                    })}{" "}
                    {new Date(comment?.time_stamp).toLocaleDateString("en-us", {
                      year: "numeric",
                    })}
                  </Typography>
                  <Typography sx={{ borderBottom: "1px solid black" }}>
                    {comment?.content}
                  </Typography>
                </div>
              );
            })}
            {!comments.length && <p>no comment</p>}

            <form className="flex flex-col">
              <TextField
                id="outlined-multiline-flexible"
                label="Add a comment"
                multiline
                sx={{ marginTop: "1rem" }}
                maxRows={4}
                value={commentText.content}
                onChange={(e) =>
                  setCommentText({
                    ...commentText,
                    content: e.target.value,
                    post: blog.id,
                  })
                }
              />
              <LoadingButton
                variant="contained"
                sx={{ width: "150px", margin: "10px auto" }}
                onClick={handlePostComment}
              >
                Add Comment
              </LoadingButton>
            </form>
          </Box>
        )}
      </div>
    </>
  );
};

export default Detail;
