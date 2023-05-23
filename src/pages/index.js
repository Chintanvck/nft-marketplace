import React from "react";
import Style from "../style/index.module.css"
import { AudioLive, BigNFTSlider, Brand, Category, Collection, Filter, FollowerTab, HeroSection, NFTCard, Service, Slider, Subscribe, Title } from "@/component/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>

      <Title heading="Latest Audio" paragraph=""/>
      <AudioLive/> 

      <FollowerTab/>

      <Slider/>

      <Title heading="New Collection" paragraph=""/>
      <Collection/>

      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <Filter/>

      <NFTCard />

      <Title heading="Browse by Category" paragraph="Explore the NFTs in the most featured categories."/>
      <Category/>

      <Subscribe/>
      <Brand/>
    </div>
  )
};

export default Home;
