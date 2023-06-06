import React from 'react'
import Style from "./Error.module.css"

import { useState, useEffect, useContext } from 'react'
import images from "../../img"
import Image from 'next/image'

import { NFTMarketplaceContext } from '../../../Context/NFTMarketplaceContext'

const Error = () => {
    const {error, setOpenError} = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.Error} onClick={()=> setOpenError(false)}>
        <div className={Style.Error_box}>
            <div className={Style.Error_box_info}>
                <Image src={images.error} alt='error' width={200} height={200} className={Style.Error_box_info_img}/>
                <p>{error}</p>
            </div>
        </div>
    </div>
  )
}

export default Error