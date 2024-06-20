import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { bracelet, chain, earrings } from "../assets/data/Sales";
import EarringsCard from "../components/CustomComponents/EarringsCard";
import ChainCard from "../components/CustomComponents/ChainCard";
import BraceleteCard from "../components/CustomComponents/BraceleteCard";


const BestSellers = () => {

  return (
    <>
      <Box id="best"
        px={{ xs: "0px", sm: "60px", md: "80px", lg: "200px" }}
        py={"50px"}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" fontSize={"30px"} fontFamily={"Bastiken"}>Best Sellers</Typography>
        </Box>
        <Box width={{xs:"100%", sm:"100%", md:"80%", lg:"80%"}} sx={{ marginInline: "auto" }}>
          <Grid container gap={"45px"} >
            {earrings.map((earrings, index) => (
              <Grid
                item
                xs={12}
                sm={8}
                md={4}
                key={index}
                style={{ maxWidth: "370px", gap: "50px" }}
              >
                <EarringsCard
                  img={earrings.img}
                  desc={earrings.desc}
                  price={earrings.price}
                />
              </Grid>
            ))}
          </Grid>

          <Grid
            container
            sx={{ justifyContent: "end" }}
            className="3"
            gap={"50px"}
          >
            {chain.map((chain, index) => (
              <Grid
                item
                xs={12}
                sm={8}
                md={4}
                key={index}
                style={{ maxWidth: "370px" }}
              >
                <ChainCard
                  img={chain.img}
                  desc={chain.desc}
                  price={chain.price}
                />
              </Grid>
            ))}
          </Grid>

          <Grid container gap={"45px"}>
            {bracelet.map((bracelet, index) => (
              <Grid
                item
                xs={12}
                sm={8}
                md={4}
                key={index}
                style={{ maxWidth: "370px" }}
              >
                <BraceleteCard
                  img={bracelet.img}
                  desc={bracelet.desc}
                  price={bracelet.price}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default BestSellers;
