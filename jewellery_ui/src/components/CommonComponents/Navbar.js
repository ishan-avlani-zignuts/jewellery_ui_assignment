import React, { useState } from "react";
import {
  Box,
  Typography,
  Link,
  Button,
  Divider,
  Drawer,
  IconButton,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaUserAlt, FaBars } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";
import logo from "../../assets/images/Logo-name.png";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250, padding: "10px 20px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box marginBottom={"20px"}>
        <Link
          sx={{ color: "black", textDecoration: "none", fontSize: "17px" }}
          href="#"
        >
          Home
        </Link>
      </Box>
      <Box marginBottom={"20px"}>
        <Link
          sx={{ color: "black", textDecoration: "none", fontSize: "17px" }}
          href="#"
        >
          About Us
        </Link>
      </Box>
      <Box marginBottom={"20px"}>
        <Link
          sx={{ color: "black", textDecoration: "none", fontSize: "17px" }}
          href="#"
        >
          Collection
        </Link>
      </Box>
      <Box>
        <Link
          sx={{ color: "black", textDecoration: "none", fontSize: "17px" }}
          href="#"
        >
          Contact
        </Link>
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#EAD9CE",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "10px" : "22px 120px",
        }}
      >
        {isMobile ? (
          <IconButton onClick={toggleDrawer(true)}>
            <FaBars />
          </IconButton>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box marginRight={"30px"}>
              <Link
                sx={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                }}
                href="#"
              >
                Home
              </Link>
            </Box>
            <Box marginRight={"30px"}>
              <Link
                sx={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                }}
                href="#"
              >
                About Us
              </Link>
            </Box>
            <Box marginRight={"30px"}>
              <Link
                sx={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                }}
                href="#"
              >
                Collection
              </Link>
            </Box>
            <Box>
              <Link
                sx={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                }}
                href="#"
              >
                Contact
              </Link>
            </Box>
          </Box>
        )}

        <Box sx={{ textAlign: "center" }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: isMobile ? "80%" : "auto" }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box marginLeft={isMobile ? "0" : "110px"}>
              <FaSearch />
            </Box>
            <Divider
              orientation="vertical"
              sx={{
                height: "23px",
                width: "1px",
                color: "black",
                marginLeft: "15px",
                display: isMobile ? "none" : "block",
              }}
            />
            <Box marginLeft={"15px"}>
              <IoMdCart />
            </Box>
            <Divider
              orientation="vertical"
              sx={{
                height: "23px",
                marginLeft: "15px",
                display: isMobile ? "none" : "block",
              }}
            />
            <Box marginLeft={"15px"}>
              <FaUserAlt />
            </Box>
          </Box>
          <Box>
            <Button
              sx={{ color: "black", alignItems: "center", marginLeft: "15px" }}
            >
              <Typography sx={{ alignItems: "center" }}>Signup</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider
        orientation="horizontal"
        sx={{
          width: "100%",
          backgroundColor: "black",
        }}
      />
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
