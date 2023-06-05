import React from 'react'
import Style from "./NFTDetailsPage.module.css"

import { NFTDetailsImg } from './NFTDetailIndex'
import { NFTDescription } from './NFTDetailIndex'

const NFTDetailsPage = ({nft}) => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailsImg nft={nft} />
        <NFTDescription nft={nft} />
      </div>
    </div>
  )
}

export default NFTDetailsPage