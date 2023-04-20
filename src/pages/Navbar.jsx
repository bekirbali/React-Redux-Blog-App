import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";
import CssBaseline from "@mui/material/CssBaseline";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { currentUser } = useSelector((state) => state.auth);
  const { logout } = useAuthCall();

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
