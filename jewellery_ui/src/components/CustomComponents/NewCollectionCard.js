import React from "react";
import { Box } from "@mui/material";
import CustomButton from "./Button";

const NewCollectionCard = ({ img, name }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <img src={img} alt="" />
      <Box sx={{ position: "relative", bottom: "80px", right: "55px" }}>
        <CustomButton name={name} />
      </Box>
    </Box>
  );
};

export default NewCollectionCard;
