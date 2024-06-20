import { Box, Typography } from "@mui/material";
import React from "react";
import img1 from "../assets/images/top-view-golden-earrings-arrangement 1.png";
import CustomButton from "../components/CustomComponents/Button";
import { motion } from "framer-motion";
const MostTrending = () => {
  return (
    <Box
      id="trend"
      sx={{
        backgroundColor: "#EAD9CE",
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
        },
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          height: "100%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          maxWidth: { xs: "100%", sm: "80%", md: "70%", lg: "60%" },
        }}
        py={{ xs: "50px", sm: "75px", md: "225px", lg: "270px" }}
        paddingLeft={{ xs: "0px", sm: "10px", md: "25px", lg: "80px" }}
      >
        <Box>
          <Typography
            variant="h2"
            fontSize={"30px"}
            textAlign={{ xs: "center", sm: "center", md: "start", lg: "start" }}
            fontWeight={"400px"}
            fontFamily={"Bastiken"}
          >
            Most Trending In SS ‘23
          </Typography>
        </Box>
        <Box py={"50px"}>
          <Typography
            fontSize={{ xs: "13px", sm: "16px", md: "18px" }}
            lineHeight={{ xs: "22px", sm: "25px", md: "27px" }}
            textAlign={{ xs: "center", sm: "center", md: "start", lg: "start" }}
            fontFamily={"Martel"}
          >
            Based on current fashion trends and new emerging styles, it is{" "}
            <br />
            expected that bold and oversized earrings will continue to be <br />
            popular. Additionally, sustainable fashion, eco-friendly materials{" "}
            <br />
            and ethical production methods are becoming more important to <br />
            consumers, so earrings made from recycled or sustainable <br />
            materials also gain popularity.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "start",
              lg: "start",
            },
            flex: 1,
          }}
        >
          <CustomButton name="Shop Now" />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", sm: "start", md: "start" },
        }}
      >
        <motion.img src={img1}
        alt="" style={{ width: "100%", minWidth: "100%", height: "100%" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        />
      </Box>
    </Box>
  );
};

export default MostTrending;
