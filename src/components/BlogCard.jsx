import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <Card
      sx={{
        marginTop: 9,
        p: 1,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog?.title}
        </Typography>
        <div className="flex justify-center">
          <img
            style={{ width: "150px", height: "150px", marginBottom: "1rem" }}
            src={blog?.image}
            alt=""
          />
        </div>
        <Typography>
          {blog?.content.split(" ").splice(0, 10).join(" ")}...
        </Typography>
      </CardContent>
      {/* <CardMedia
    sx={{ p: 1, objectFit: "contain", height: "130px" }}
    image={blog?.image}
    title="brand"
  /> */}
      {/* <CardActions sx={flex}>
    <Button size="small">
      <Delete
        sx={btnStyle}
        onClick={() => deleteStockData("brands", brand.id)}
      />
    </Button>
    <Button size="small">
      <Edit sx={btnStyle} onClick={handleEdit} />
    </Button>
  </CardActions> */}
    </Card>
  );
};

export default BlogCard;
