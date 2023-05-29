import React from 'react'
import Style from "../style/searchPage.module.css"

import { Slider, Brand } from '@/component/componentsindex'
import { Filter } from '@/component/componentsindex'
import images from "../img"
import { NFTCardTwo, Banner } from '@/collectionPage/collectionIndex'
import { SearchBar } from '@/searchPage/searchBarIndex'

const searchPage = () => {
    const collectionArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
      ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar/>
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  )
}

export default searchPage