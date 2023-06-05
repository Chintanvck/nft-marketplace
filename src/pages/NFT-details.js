import { NFTDetailsPage } from '@/NFTDetailsPage/NFTDetailIndex'
import { Brand, Category } from '@/component/componentsindex'
import React from 'react'

import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext'

const NFTDetails = () => {

  const {currentAccount} = useContext(NFTMarketplaceContext);

  const [nft, setNft] = useState({
    image:"",
    tokenId:"",
    name:"",
    owner:"",
    price:"",
    seller:"",
  })

  const router = useRouter();

  useEffect(()=>{
    if(!router.isReady) return;
    setNft(router.query);
  },[router.isReady])

  return (
    <div>
        <NFTDetailsPage nft={nft}/>
        <Category/>
        <Brand/>
    </div>
  )
}

export default NFTDetails