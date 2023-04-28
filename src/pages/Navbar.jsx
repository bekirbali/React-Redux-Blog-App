// import {
//   AppBar,
//   Box,
//   Button,
//   IconButton,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import useAuthCall from "../hooks/useAuthCall";
// import CssBaseline from "@mui/material/CssBaseline";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const { currentUser } = useSelector((state) => state.auth);
//   const { logout } = useAuthCall();

//   const navigate = useNavigate();

//   return (
//     <>
//       <CssBaseline />
//       <AppBar>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Box sx={{ display: "flex", gap: "2rem" }}>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               role="button"
//               onClick={() => navigate("/dashboard/")}
//             >
//               Blog App
//             </Typography>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               role="button"
//               onClick={() => navigate("/dashboard/")}
//             >
//               New Blog
//             </Typography>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               role="button"
//               onClick={() => navigate("/dashboard/")}
//             >
//               About
//             </Typography>
//           </Box>
//           {currentUser && (
//             <Button color="inherit" onClick={() => logout()}>
//               Logout
//             </Button>
//           )}
//         </Toolbar>
//         <CssBaseline />
//       </AppBar>
//     </>
//   );
// };

// export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCall";

const pages = ["Dashboard", "New Blog", "About"];
const settings = ["My Blogs", "Profile", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { logout } = useAuthCall();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { image } = useSelector((state) => state.auth);

  const navMenuClickHandler = (e) => {
    console.log(e.target.innerText.toLowerCase() === "logout");
    if (e.target.innerText.toLowerCase() === "logout") {
      console.log("hey");
      navigate("/");
      logout();
    } else {
      navigate(`/${e.target.innerText.toLowerCase().split(" ").join("-")}`);
    }
  };

  return (
    <AppBar className="mb-5" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={navMenuClickHandler}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={navMenuClickHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="profile avatar" src={image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={navMenuClickHandler}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
