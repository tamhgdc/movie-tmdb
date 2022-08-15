import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Link,
  Modal,
} from "@mui/material";
import UserIcon from "../images/UserIcon.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images/Logo.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { logOut, auth } from "../app/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SeacrhInput from "./SeacrhInput";
const pages = [
  { title: "Home", nav: "/" },
  { title: "TV & Series", nav: "/series" },
  { title: "Movies", nav: "/movies" },
  { title: "New and Popular", nav: "/new-and-popular" },
  { title: "My List", nav: "/mylist" },
];

const settings = [
  { title: "Profile" },
  { title: "Account" },
  { title: "Dashboard" },
  { title: "Logout", nav: logOut },
];
const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "0 0.5rem",
        },
      },
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#141414",
  border: "2px solid red",
  boxShadow: 24,
  p: 4,
  color: "white",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#141414",
        maxHeight: "94px",
        padding: "0 1.5rem",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link component="button" onClick={() => navigate("/")}>
            <Box
              component="img"
              sx={{
                display: { xs: "none", md: "flex" },
                marginRight: {
                  xs: "10rem",
                },
              }}
              src={Logo}
            />
          </Link>
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
              {pages.map((page, id) => (
                <MenuItem key={id} onClick={() => navigate(page.nav)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              textDecoration: "none",
            }}
            src={Logo}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, id) => (
              <Button
                key={id}
                onClick={() => navigate(page.nav)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "none",
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          {loading ? null : user ? (
            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  marginRight: "1rem",
                  display: { lg: "flex", xs: "none" },
                  alignItems: "center",
                }}
              >
                <SeacrhInput />
                <ThemeProvider theme={theme}>
                  <IconButton
                    size="large"
                    aria-label="notifications"
                    color="inherit"
                  >
                    <NotificationsIcon />
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="GifBoxTwoTone"
                    color="inherit"
                  >
                    <CardGiftcardIcon></CardGiftcardIcon>
                  </IconButton>
                </ThemeProvider>
              </Box>
              <Typography
                sx={{
                  display: { md: "inline", xs: "none" },
                  mr: 1,
                  fontSize: "0.9rem",
                }}
              >
                {user.displayName.split(" ")[0]}
              </Typography>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={UserIcon} />
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
                  <MenuItem
                    key={setting.title}
                    onClick={
                      setting.nav
                        ? () => {
                            handleOpen();
                            handleCloseUserMenu();
                          }
                        : handleCloseUserMenu
                    }
                  >
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button
              color="error"
              variant="contained"
              sx={{ textTransform: "none", px: 5, borderRadius: 0 }}
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mb: 5 }}>
            Are you sure want to Quit?
          </Typography>
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              handleClose();
              logOut();
            }}
          >
            Yeah, Im Sure
          </Button>
        </Box>
      </Modal>
    </AppBar>
  );
}
