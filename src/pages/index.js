import React, { useState } from "react";
import Style from "../style/index.module.css"
import { AudioLive, BigNFTSlider, Brand, Category, Collection, Filter, FollowerTab, HeroSection, NFTCard, Service, Slider, Subscribe, Title, Video, Loader } from "@/component/componentsindex";

import { useContext, useEffect } from "react";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected, fetchNFT } = useContext(NFTMarketplaceContext);

  useEffect(()=>{
    checkIfWalletConnected();
  },[])

  const [nfts, setNfts] = useState([])

  useEffect(()=>{
    fetchNFT().then((items)=>{
      setNfts(items.reverse())
    })
  })
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

      {nfts.length == 0 ? <Loader/> : <NFTCard nfts={nfts}/>}

      <Title heading="Browse by Category" paragraph="Explore the NFTs in the most featured categories."/>
      <Category/>

      <Subscribe/>
      <Brand/>
      <Video/>
    </div>
  )
};

export default Home;
