import { object, string } from "yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { Form } from "formik";
import { Box, TextField } from "@mui/material";

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
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <TextField
            label="Email"
            type="email"
            id="email"
            name="email"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.email}
            error={touched.email && Boolean(touched.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            label="Password"
            type="password"
            id="password"
            name="password"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.password}
            error={touched.password && Boolean(touched.password)}
            helperText={touched.password && errors.password}
          />
          <LoadingButton
            type="submit"
            variant="contained"
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
