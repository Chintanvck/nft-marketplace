import React from "react";
import Style from "../style/index.module.css"
import { BigNFTSlider, HeroSection, Service, Subscribe } from "@/component/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Subscribe/>
    </div>
  )
};

export default Home;
