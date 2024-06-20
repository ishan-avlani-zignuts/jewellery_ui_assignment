import { Box, Typography, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { NewCollectionData } from "../assets/data/NewCollectionData";
import NewCollectionCard from "../components/CustomComponents/NewCollectionCard";
import AOS from "aos";
import "aos/dist/aos.css";
const NewCollection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, 
      once: true, 
    });
  }, []);
  return (
    <>
      <Box id="new">
        <Box py={"100px"}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: "30px",
                textAlign: "center",
                fontFamily: "Bastiken",
              }}
            >
              New Collection
            </Typography>
          </Box>
          <Box
            sx={{
              paddingTop: "50px",
            }}
          >
            <Grid
              container
              sx={{
                width: { sx: "100%", sm: "90%", md: "80%", lg: "80%" },
                marginInline: "auto",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              data-aos="fade-right"
            >
              {NewCollectionData.map((data, index) => (
                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={8}
                  lg={4}
                  key={index}
                  style={{ width: "50px" }}
                >
                  <NewCollectionCard img={data.img} name={data.name} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: "#EAD9CE" }} py={"100px"}>
          <Box>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "400px",
                textAlign: "center",
                fontFamily: "Bastiken",
              }}
            >
              A diamond is a woman`s best friends!
            </Typography>
          </Box>
          <Box paddingTop={"50px"}>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "16px" },
                fontWeight: "400px",
                textAlign: "center",
                lineHeight: { xs: "21px", sm: "21px", md: "24px", lg: "27px" },
                fontFamily: "Martel",
              }}
            >
              A diamond is a timeless symbol of beauty and friendship, making it
              the perfect gift for any woman. It is often said that diamonds{" "}
              <br />
              are a woman's best friend, and for good reason. Not only does a
              diamond represent unwavering loyalty and devotion, but it is also
              a <br />
              symbol of luxury, glamor and class. A diamond tells the world that
              you are proud of your loved one, and want them to have only the{" "}
              <br /> best. As Coco Chanel once said, "A diamond is eternity, it
              is real and it is unbreakable".
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewCollection;
