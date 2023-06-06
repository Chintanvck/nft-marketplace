import React from 'react'
import Style from "../style/searchPage.module.css"

import { Slider, Brand } from '@/component/componentsindex'
import { Filter } from '@/component/componentsindex'
import images from "../img"
import { NFTCardTwo, Banner } from '@/collectionPage/collectionIndex'
import { SearchBar } from '@/searchPage/searchBarIndex'

//smart contract import
import { useState, useContext, useEffect } from 'react'
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext'
import { Loader } from '@/component/componentsindex'

const search = () => {

  const {fetchNFT} = useContext(NFTMarketplaceContext);

  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(()=>{
    fetchNFT().then((items)=>{
      setNfts(items.reverse());
      setNftsCopy(items);
    })
  },[])

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({name})=> name.toLowerCase().includes(value.toLowerCase()));

    if(filteredNFTS.length === 0){
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  }

  const onClearSearch = () =>{
    if(nfts.length && nftsCopy.length){
      setNfts(nftsCopy);
    }
  }

    // const collectionArray = [
    //     images.nft_image_1,
    //     images.nft_image_2,
    //     images.nft_image_3,
    //     images.nft_image_1,
    //     images.nft_image_2,
    //     images.nft_image_3,
    //     images.nft_image_1,
    //     images.nft_image_2,
    //   ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar 
      onHandleSearch = {onHandleSearch}
      onClearSearch = {onClearSearch}/>
      <Filter />
      {nfts.length == 0 ? <Loader/> : <NFTCardTwo NFTData={nfts} />}
      <Slider />
      <Brand />
    </div>
  )
}

export default search