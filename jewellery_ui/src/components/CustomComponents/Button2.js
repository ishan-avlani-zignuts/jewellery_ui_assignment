import { Button } from "@mui/material";
import React from "react";

const CustomButton2 = (props) => {
  return (
    <Button
      sx={{
        borderTopLeftRadius: "30px",
        borderBottomLeftRadius: "30px",
        backgroundColor: "#B07B54",
        width: "233px",
        height: "50px",
        color: "white",
        fontSize: "17px",
        fontFamily: "Martel",
        '&:hover': {
          backgroundColor: "black", 
        },
      }}
    >
      {props.name}
    </Button>
  );
};

export default CustomButton2;
