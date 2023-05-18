import React from "react";
import Style from "../style/index.module.css"
import { HeroSection } from "@/component/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
    </div>
  )
};

export default Home;
