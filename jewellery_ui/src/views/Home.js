import React from "react";
import Navbar from "../components/CommonComponents/Navbar";
import Hero from "./Hero";
import NewCollection from "./NewCollection";
import AboutUs from "./AboutUs";
import Signatures from "./Signature";
import MostTrending from "./MostTrending";
import FollowUs from "./FollowUs";
import Footer from "../components/CommonComponents/Footer";
import BestSellers from "./BestSellers";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <NewCollection />
      <BestSellers />
      <AboutUs />
      <Signatures />
      <MostTrending />
      <FollowUs />
      <Footer />
    </div>
  );
};

export default Home;
