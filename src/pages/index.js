import React from "react";
import Style from "../style/index.module.css"
import { HeroSection, Service } from "@/component/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
    </div>
  )
};

export default Home;
