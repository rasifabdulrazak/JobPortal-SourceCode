import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../Redux/Actions/UserInfoActions";
import { Token } from "../../../utils";

const Header = () => {
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const userId = useSelector((state) => state.userId);


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
  const navigate = useNavigate();

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("accessTokens")
  );

  const [user, setUser] = useState(() => localStorage.getItem("accessTokens"));

  const logoutUserhandler = () => {
    dispatch(logoutUser());
    localStorage.removeItem(Token.ACCESS_TOKEN)
    navigate("/login");
  };

  return (
    <>
      <AppBar position="fixed" style={{ zIndex: "500px" }}>
        <Container maxWidth="xl" style={{ background: "#383838" }}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              SOLUTIONS
            </Typography>

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
                <MenuItem onClick={() => navigate("/")}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>

                <MenuItem onClick={() => navigate("/jobs")}>
                  <Typography textAlign="center">Jobs</Typography>
                </MenuItem>

                <MenuItem onClick={() => navigate("/companies")}>
                  <Typography textAlign="center">Companies</Typography>
                </MenuItem>

                <MenuItem onClick={() => navigate("/about_us")}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigate("/hr_recruiters")}>
                  <Typography textAlign="center">Recruiters</Typography>
                </MenuItem>

               {!userId && <MenuItem onClick={() => navigate("/login")}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              SOLUTIONS
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={() => navigate("/")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
              <Button
                onClick={() => navigate("/jobs")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Jobs
              </Button>
              <Button
                onClick={() => navigate("/companies")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Companies
              </Button>
              <Button
                onClick={() => navigate("/about_us")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                About Us
              </Button>
              <Button
                onClick={() => navigate("/hr_recruiters")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Recruiters
              </Button>

             {!userId  && <Button
                onClick={() => navigate("/login")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Login
              </Button>}
            </Box>

             
             { userId && !userId.isStaff && <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
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
                  <MenuItem
                    onClick={() => {
                      navigate("/user_profile");
                    }}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/user_saved_jobs");
                    }}
                  >
                    <Typography textAlign="center">Saved Jobs</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/user_applied_jobs");
                    }}
                  >
                    <Typography textAlign="center">Applied Jobs</Typography>
                  </MenuItem>
                  <MenuItem onClick={logoutUserhandler}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>}
            
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Header;
