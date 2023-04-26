import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { Form } from "formik";
import { useSelector } from "react-redux";
import { object, string } from "yup";

export let registerSchema = object({
  username: string()
    .required("username is required")
    .min(4, "username must at least 4 char"),
  image: string().required().min(2, "name must at least 2 char"),
  bio: string().required().min(2, "name must at least 2 char"),
  email: string().email().required("email is required"),
  password: string()
    .required("password is required")
    .min(8, "password must at least 8 char")
    .max(25, "password can be max 25 char")
    .matches(/\d+/, "password must contains a number")
    .matches(/[a-z]/, "contains a small letter")
    .matches(/[A-Z]/, "must contain a capital letter")
    .matches(/[*%+-,?!€'!{}<>|.#$&]/, "must contain special char"),
});

const RegisterForm = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
}) => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <div>
      <Form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <TextField
            label="Username"
            name="username"
            id="username"
            type="text"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.username && errors.username}
            error={touched.username && Boolean(errors.username)}
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
          <TextField
            label="Image"
            name="image"
            id="image"
            type="text"
            variant="outlined"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.image && errors.image}
            error={touched.image && Boolean(errors.image)}
          />
          <TextField
            label="Bio"
            name="bio"
            id="bio"
            type="text"
            variant="outlined"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.bio && errors.bio}
            error={touched.bio && Boolean(errors.bio)}
          />
          <TextField
            label="Password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
          />
          <LoadingButton variant="contained" type="submit" loading={loading}>
            Register
          </LoadingButton>
        </Box>
      </Form>
    </div>
  );
};
export default RegisterForm;
