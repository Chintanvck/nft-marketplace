import { NFTDetailsPage } from '@/NFTDetailsPage/NFTDetailIndex'
import { Brand, Category } from '@/component/componentsindex'
import React from 'react'

const NFTDetails = () => {
  return (
    <div>
        <NFTDetailsPage/>
        <Category/>
        <Brand/>
    </div>
  )
}

export default NFTDetails