import React, { useEffect } from "react";
import { Grid, Box, Typography} from "@mui/material";
import { signature } from "../assets/data/Signature";
import CustomButton2 from "../components/CustomComponents/Button2";
import AOS from "aos";
import "aos/dist/aos.css";
const Signatures = () => {

   useEffect(() => {
     AOS.init({
       duration: 3000,
       once: true,
     });
   }, []);
  return (
    <>
      <Box py={"100px"} id="signature">
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "400px",
              fontFamily: "Bastiken",
            }}
          >
            Signature Earrings
          </Typography>
        </Box>
        <Box paddingTop={"20px"} paddingBottom={"70px"}>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "16px", md: "16px", lg: "16px" },
              textAlign: "center",
              lineHeight: { xs: "22px", sm: "25px", md: "27px" },
              fontFamily: "Martel",
            }}
          >
            Our unique and eye-catching earrings are exclusively made in-house.
            Each pair is carefully designed <br />
            with attention to detail, resulting in a signature style that is
            both modern and timeless.
          </Typography>
        </Box>
        <Box
          sx={{
            marginInline: { xs: "0px", sm: "50px", md: "100px", lg: "200px" },
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            sx={{ flex: 1, display: "flex", justifyContent: "center" }}
          >
            {signature.map((signature, index) => (
              <Grid
                item
                xs={12}
                sm={9}
                md={6}
                lg={3}
                key={index}
                data-aos="fade-left"
              >
                <Box paddingTop={"5px"}>
                  <img src={signature.img} alt="" />
                </Box>
              </Grid>
            ))}

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "center", md: "end" },
                flex: 1,
                paddingRight: { xs: "0px", sm: "20px", md: "40px", lg: "48px" },
                paddingTop: "50px",
              }}
            >
              <CustomButton2 name="View All" />
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Signatures;
