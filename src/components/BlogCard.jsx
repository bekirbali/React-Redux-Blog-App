import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <Card
      sx={{
        marginTop: 5,
        p: 2,
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
