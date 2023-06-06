import React from 'react'
import Style from "./loader.module.css"

import Image from 'next/image'
import images from "../../img"

const loader = () => {
  return (
    <div className={Style.Loader}>
        <div className={Style.Loader_box}>
            <div className={Style.Loader_box_img}>
                <Image src={images.loader} alt='loader' width={200} height={200} className={Style.Loader_box_img_img}/>
            </div>
        </div>
    </div>
  )
}

export default loader