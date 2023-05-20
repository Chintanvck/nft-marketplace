import React from "react";
import Style from "../style/index.module.css"
import { BigNFTSlider, HeroSection, Service } from "@/component/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
    </div>
  )
};

export default Home;
