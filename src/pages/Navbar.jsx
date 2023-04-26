import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { currentUser } = useSelector((state) => state.auth);
  const { logout } = useAuthCall();

  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            role="button"
            onClick={() => navigate("/dashboard/")}
            sx={{ flexGrow: "1" }}
          >
            Stock App
          </Typography>
          {currentUser && (
            <Button color="inherit" onClick={() => logout()}>
              Logout
            </Button>
          )}
        </Toolbar>
        <CssBaseline />
      </AppBar>
    </>
  );
};

export default Navbar;
