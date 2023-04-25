import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

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
        <Grid
          container
          sx={{ justifyContent: "center", marginTop: "1rem", gap: "1rem" }}
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
            <ChatBubbleOutlineOutlinedIcon /> {blog?.comment_count}
          </Typography>
          <Typography>
            <VisibilityOutlinedIcon /> {blog?.post_views}
          </Typography>
        </Grid>
        <Button variant="contained" sx={{ marginTop: "0.5rem" }}>
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
