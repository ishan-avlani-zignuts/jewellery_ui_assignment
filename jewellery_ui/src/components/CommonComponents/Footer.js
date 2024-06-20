import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import first from "../../assets/images/Instagram.png";
import second from "../../assets/images/Pinterest.png";
import third from "../../assets/images/Facebook.png";
const Footer = () => {
  return (
    <>
      <Box
        px={{ xs: "15px", sm: "50px", md: "80px", lg: "250px" }}
        sx={{ backgroundColor: "#EAD9CE" }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={5}
            style={{ paddingTop: "50px" }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: "300px",
                fontFamily: "Martel",
              }}
            >
              Join Our Email List
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              Subscribing to Jewels allows you to stay <br /> updated on the
              latest trends and designs in the <br />
              jewelry industry.
            </Typography>

            <Box sx={{ display: "flex", marginTop: "20px" }}>
              <input
                type="text"
                placeholder="Email"
                style={{
                  width: "250px",
                  height: "41px",
                  border: "0px solid #EAD9CE",
                  borderBottomLeftRadius: "20px",
                  borderTopLeftRadius: "20px",
                }}
              ></input>
              <Button
                sx={{
                  backgroundColor: "#B07B54",
                  color: "white",
                  borderRadius: "30px",
                  position: "absolute",
                  left: { xs: "200px", sm: "250px", md: "300px", lg: "430px" },
                  width: "94px",
                  height: "43px",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                Send
              </Button>
            </Box>

            <Box display={"flex"} gap={"20px"} py={"30px"}>
              <img src={first} alt="" />
              <img src={second} alt="" />
              <img src={third} alt="" />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={2}
            style={{
              paddingTop: "57px",
              marginLeft: { xs: "0px", sm: "0px", md: "0px", lg: "30px" },
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: "bold",
                color: "#B07B54",
                fontFamily: "Martel",
              }}
            >
              Shop
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              Collections
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              Rings
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              Bracelets
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              Chains
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              Wedding Rings
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={2}
            style={{ paddingTop: "57px" }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: "bold",
                fontFamily: "Martel",
                color: "#B07B54",
              }}
            >
              About
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              Contact
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              FAQ`s
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={2}
            style={{ paddingTop: "57px" }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: "bold",
                color: "#B07B54",
                fontFamily: "Martel",
              }}
            >
              Our Contacts
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              shop_Jewels@gmail.com
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "400px",
                fontFamily: "Martel",
              }}
            >
              +123456789
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "#EAD9CE", paddingTop: "25px" }}>
        <Divider
          orientation="horizontal"
          sx={{
            width: "100%",
            backgroundColor: "black",
          }}
        />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{ paddingTop: "15px" }}
          >
            <Typography
              sx={{
                display: "block",
                textAlign: "center",
                fontSize: "18px",
                fontFamily: "Martel",
              }}
            >
              2023 ©JEWELS. All Rights Reserved.
            </Typography>
            <Typography
              sx={{
                display: "block",
                textAlign: "center",
                fontSize: "18px",
                marginTop: "5px",
                fontFamily: "Martel",
              }}
            >
              Created by Julianna
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
