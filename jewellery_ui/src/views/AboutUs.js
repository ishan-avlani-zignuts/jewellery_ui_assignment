import { Box, Typography } from "@mui/material";
import React from "react";
import img1 from "../assets/images/Rectangle 25.png";
import CustomButton2 from "../components/CustomComponents/Button2";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#EAD9CE",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", sm: "start", md: "start" },
        }}
      >
        <motion.img
          src={img1}
          alt=""
          style={{ width: "100%", minWidth: "100%", height: "100%" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          height: "100%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          maxWidth: { xs: "100%", sm: "80%", md: "70%", lg: "60%" },
          mx: "auto",
          paddingLeft: { xs: "0px", sm: "15px", md: "60px", lg: "100px" },
        }}
        py={{ xs: "50px", sm: "75px", md: "225px", lg: "270px" }}
      >
        <Box>
          <Typography
            fontSize={"30px"}
            textAlign={{ xs: "center", sm: "center", md: "start", lg: "start" }}
            fontWeight={"400px"}
            fontFamily={"Bastiken"}
            variant="h2"
          >
            About Us
          </Typography>
        </Box>
        <Box py={"50px"}>
          <Typography
            fontSize={{ xs: "13px", sm: "16px", md: "18px" }}
            lineHeight={{ xs: "22px", sm: "25px", md: "27px" }}
            textAlign={{ xs: "center", sm: "center", md: "start", lg: "start" }}
            sx={{ fontFamily: "Martel" }}
          >
            We're a group of five friends passionate about making unique
            <br />
            and beautiful jewelry. Whether it's crafting intricate beaded
            <br />
            necklaces or designing elegant bracelets, our creativity and
            <br />
            skills shine through in every piece we create. We value
            <br />
            collaboration and work together to come up with new ideas
            <br />
            and techniques that enrich our craft. From sourcing the
            <br />
            highest quality materials to putting the finishing touches on
            <br />
            each piece, we take pride in every step of the process. At the
            <br />
            heart of our business is a genuine love for jewelry-making,
            <br />
            and we can't wait to share our passion with you.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-end",
              lg: "flex-end",
            },
            paddingRight: {
              xs: "0px",
              sm: "50px",
              md: "100px",
              lg: "300px",
            },
            flex: 1,
          }}
        >
          <CustomButton2 name="Read More" />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
