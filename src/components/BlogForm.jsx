import { object, string } from "yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { Form } from "formik";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";

export let loginSchema = object({
  email: string().email().required("Email is required"),
  password: string()
    .required("Password is required")
    .min(4, "Password must at least 4 char")
    .max(25, "Password can be max 25 char")
    .matches(/\d+/, "Password must contains a number")
    .matches(/[a-z]/, "Contains a small letter")
    .matches(/[A-Z]/, "Must contain a capital letter")
    .matches(/[*%+-,?!€'!{}<>|.#$&]/, "Must contain special char"),
});

const LoginForm = ({ handleBlur, handleChange, errors, touched, values }) => {
  const { loading } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.blog);
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <TextField
            label="Title"
            type="text"
            id="title"
            name="title"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.title || ""}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
          />
          <TextField
            label="Image URL"
            type="url"
            id="image"
            name="image"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.image || ""}
            error={touched.image && Boolean(errors.image)}
            helperText={touched.image && errors.image}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="category"
              id="category"
              name="category"
              label="Category"
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

          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            sx={{ backgroundColor: "blue.light" }}
          >
            Submit
          </LoadingButton>
        </Box>
      </Form>
    </div>
  );
};

export default LoginForm;
