import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useAuthCall from "../hooks/useAuthCall";
import { useEffect, useState } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Navbar from "./Navbar";

const NewBlog = () => {
  const { login } = useAuthCall();
  const { getCategories, postBlogData } = useBlogCall();
  const { categories } = useSelector((state) => state.blog);
  const { loading } = useSelector((state) => state.auth);

  const [info, setInfo] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    status: "p",
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInfo({
      ...info,
      ...info,
    });
    console.log(info);
    postBlogData("blogs", info);
  };

  useEffect(() => {
    getCategories("categories");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Container
        maxWidth="sm"
        sx={{
          width: "50%",
          boxShadow: "0 0 0.3rem 0.3rem rgba(17, 89, 138, 0.5)",
          borderRadius: "0.5rem",
          padding: "1rem",
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} mb={3}>
            <Typography variant="h3" color="primary" align="center">
              New Blog
            </Typography>
          </Grid>

          <Grid item xs={12} sm={10} md={6}>
            <form onSubmit={submitHandler}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <TextField
                  label="Title"
                  type="text"
                  id="title"
                  name="title"
                  variant="outlined"
                  value={info?.title}
                  onChange={handleChange}
                />
                <TextField
                  label="Image URL"
                  type="url"
                  id="image"
                  name="image"
                  variant="outlined"
                  value={info?.image}
                  onChange={handleChange}
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="category"
                    id="category"
                    name="category"
                    label="Category"
                    value={info?.category}
                    onChange={handleChange}
                  >
                    {categories?.map((category) => {
                      return (
                        <MenuItem key={category.id} value={category.id}>
                          {category.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Add a comment"
                  name="content"
                  multiline
                  maxRows={4}
                  value={info.content}
                  onChange={handleChange}
                />
                <LoadingButton
                  type="submit"
                  variant="contained"
                  loading={loading}
                  sx={{ backgroundColor: "blue.light" }}
                >
                  Submit
                </LoadingButton>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NewBlog;
