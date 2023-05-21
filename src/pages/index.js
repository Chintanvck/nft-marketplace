import React from "react";
import Style from "../style/index.module.css"
import { BigNFTSlider, Category, HeroSection, Service, Subscribe, Title } from "@/component/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title heading="Browse by Category" paragraph="Explore the NFTs in the most featured categories."/>
      <Category/>
      <Subscribe/>
    </div>
  )
};

export default Home;
