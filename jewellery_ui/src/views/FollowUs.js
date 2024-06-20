import { Box, Typography, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { FollowData } from "../assets/data/FollowData";
import AOS from "aos";
import "aos/dist/aos.css";
const FollowUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <Box
      id="follow"
      paddingTop={"100px"}
      paddingBottom={"50px"}
      px={{ xs: "0px", sm: "20px", md: "100px", lg: "300px" }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{ fontSize: "30px", textAlign: "center", fontFamily: "Bastiken" }}
        >
          Follow us on Instagram
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "14px", textAlign: "center", fontFamily: "Martel" }}
        >
          @SHOPJEWELSBOUTIQUE #JEWELS
        </Typography>
      </Box>

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
        paddingTop={"50px"}
      >
        {FollowData.map((follow, index) => (
          <Grid
            item
            xs={12}
            sm={9}
            md={6}
            lg={3}
            key={index}
            data-aos="fade-right"
          >
            <Box
              paddingBottom={"50px"}
              paddingRight={{ xs: "0px", sm: "0px", md: "25px" }}
            >
              <img src={follow.img} alt="" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FollowUs;
