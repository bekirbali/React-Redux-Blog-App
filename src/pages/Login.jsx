// import { Formik } from "formik";
// import LoginForm, { loginSchema } from "../components/LoginForm";
// import { Avatar } from "@mui/material";
// import LockIcon from "@mui/icons-material/Lock";
// import image from "../assets/blog.jpg";

// const Login = () => {
//   return (
//     <div className="px-[2rem]">
//       <h3 className="text-red-400 text-[3rem] text-center mb-3">STOCK APP</h3>
//       <div className="flex justify-center gap-10 lg:h-[70vh] items-center flex-col-reverse xs:h-auto lg:flex-row">
//         <div className="flex-1">
//           <img src={image} alt="blog" />
//         </div>
//         <div className="flex-1 h-[60%] lg:w-auto">
//           <Avatar
//             sx={{
//               backgroundColor: "secondary.light",
//               m: "auto",
//               width: 40,
//               height: 40,
//             }}
//           >
//             <LockIcon size="30" />
//           </Avatar>
//           <h4 className="text-center text-[2rem]">Login</h4>
//           <Formik
//             initialValues={{ email: "", password: "" }}
//             validationSchema={loginSchema}
//             onSubmit={(values, { resetForm, setSubmitting }) => {
//               resetForm();
//               setSubmitting(false);
//             }}
//             component={(props) => <LoginForm {...props} />}
//           ></Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/blog.jpg";
import { Link } from "react-router-dom";
import { Formik } from "formik";
// import useAuthCall from "../hooks/useAuthCall";
import LoginForm from "../components/LoginForm";
import { loginSchema } from "../components/LoginForm";

const Login = () => {
  // const { login } = useAuthCall();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            BLOG APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Logi
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              // login(values);
              resetForm();
              setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography>
              Don't you have an account?{" "}
              <Link
                to="/register"
                style={{ textDecoration: "underLine", color: "blue" }}
              >
                Register
              </Link>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
