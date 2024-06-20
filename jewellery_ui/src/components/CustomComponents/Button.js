import { Button } from '@mui/material'
import React from 'react'

const CustomButton = (props) => {
  return (
    <Button
      sx={{
        borderTopRightRadius: "30px",
        borderBottomRightRadius: "30px",
        backgroundColor: "#B07B54",
        width: "233px",
        height: "50px",
        color:"white",
        fontSize:"17px",
        fontFamily:"Martel",
        '&:hover': {
          backgroundColor: "black", 
        },
      }}
    >
        {props.name}
    </Button>
  );
}

export default CustomButton;
