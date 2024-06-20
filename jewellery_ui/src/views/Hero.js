import { Box, Typography } from "@mui/material";
import React from "react";
import hero from "../assets/images/hero.png";
import CustomButton from "../components/CustomComponents/Button";
import { motion } from "framer-motion";
const Hero = () => {

  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: "#EAD9CE",
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
        },
      }}
      py={"40px"}
    >
      <Box
        width={{ xs: "100%", sm: "100%", md: "50%", lg: "50%" }}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "center", md: "end" },
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
          py={{ xs: "20px", sm: "30px", md: "50px", lg: "100px" }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "26px", sm: "30px", md: "36px", lg: "45px" },
                fontWeight: "400px",
                lineHeight: { xs: "37px", sm: "45px", md: "50px", lg: "70px" },
                fontFamily: "Bastiken",
              }}
            >
              Your One-Stop Destination
              <br /> for Unique and Exquisite <br />
              Jewelry Pieces
            </Typography>
          </Box>
          <Box py={"30px"}>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "18px" },
                fontWeight: "300px",
                lineHeight: { xs: "21px", sm: "22px", md: "24px", lg: "27px" },
                fontFamily: "Martel",
              }}
            >
              Here, we offer various types of jewelry, including necklaces,
              <br />
              bracelets, earrings, and rings. From classic designs to modern{" "}
              <br />
              styles, we have something for everyone.
            </Typography>
          </Box>

          <CustomButton name="Shop The Collection" />
        </Box>
      </Box>
      <Box
        width={{ xs: "100%", sm: "100%", md: "50%", lg: "50%" }}
        data-aos="zoom-in"
      >
        <Box data-aos="zoom-in">
          <motion.img
            src={hero}
            alt=""
            style={{ width: "100%", minWidth: "100%", height: "auto" }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
