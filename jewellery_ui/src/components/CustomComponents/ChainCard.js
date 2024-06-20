import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
const ChainCard = ({ img, desc, price }) => {
   useEffect(() => {
     AOS.init({
       duration: 3000, // animation duration in milliseconds
       once: true, // whether animation should happen only once
     });
   }, []);
  return (
    <Box
      maxWidth={"370px"}
      width={"100%"}
      height={"auto"}
      sx={{ marginTop: "70px" }}
      data-aos="fade-left"
    >
      <Box>
        <img src={img} alt="" style={{ maxWidth: "370px" }} />
      </Box>
      <Box>
        <Typography sx={{ fontFamily: "Martel" }}>{desc}</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontFamily: "Martel" }}>{price}</Typography>
      </Box>
    </Box>
  );
};

export default ChainCard;
