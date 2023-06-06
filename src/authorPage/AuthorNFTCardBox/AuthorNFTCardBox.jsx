import React from 'react'
import Style from "./AuthorNFTCardBox.module.css"

import images from '../../img'
import { NFTCardTwo } from '@/collectionPage/collectionIndex'
import FollowerTabCard from '@/component/FollowerTab/FollowerTabCard/FollowerTabCard'
import { useState } from 'react'

const AuthorNFTCardBox = ({ collectiables,
    created,
    like,
    follower,
    following,
    nfts,
    myNFTs,
}) => {

    // const collectiablesArray = [
    //     images.nft_image_1,
    //     images.nft_image_2,
    //     images.nft_image_3,
    //     images.nft_image_1,
    //     images.nft_image_2,
    //     images.nft_image_3,
    //     images.nft_image_1,
    //     images.nft_image_2,
    // ];

    // const createdArray = [
    //     images.nft_image_1,
    //     images.nft_image_2,
    //     images.nft_image_3,
    //     images.nft_image_1,
    // ];

    const likeArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
    ];

    const followerArray = [
        {
            background: images.creatorbackground1,
            user: images.user1,
            seller: "abcdefghijklmnopqrstuvwxyz"
        },
        {
            background: images.creatorbackground2,
            user: images.user2,
            seller: "abcdefghijklmnopqrstuvwxyz"
        },
        {
            background: images.creatorbackground3,
            user: images.user3,
            seller: "abcdefghijklmnopqrstuvwxyz"
        },
        {
            background: images.creatorbackground4,
            user: images.user4,
            seller: "abcdefghijklmnopqrstuvwxyz"
        },
        {
            background: images.creatorbackground5,
            user: images.user5,
            seller: "abcdefghijklmnopqrstuvwxyz"
        },
        {
            background: images.creatorbackground6,
            user: images.user6,
            seller: "abcdefghijklmnopqrstuvwxyz"
        },
    ];

    const followingArray = [
        {
            background: images.creatorbackground3,
            user: images.user3,
            seller: "abcdefghijklmnopqrstuvwxyz"
        },
        {
            background: images.creatorbackground4,
            user: images.user4,
            seller: "abcdefghijklmnopqrstuvwxyz"
        },
        {
            background: images.creatorbackground5,
            user: images.user5,
            seller: "abcdefghijklmnopqrstuvwxyz"
        },
        {
            background: images.creatorbackground6,
            user: images.user6,
            seller: "abcdefghijklmnopqrstuvwxyz"
        },
        {
            background: images.creatorbackground1,
            user: images.user1,
            seller: "abcdefghijklmnopqrstuvwxyz"
        },
    ];

    return (
        <div className={Style.AuthorNFTCardBox}>
            {collectiables && <NFTCardTwo NFTData={nfts} />}
            {created && <NFTCardTwo NFTData={myNFTs} />}
            {like && <NFTCardTwo NFTData={likeArray} />}
            {follower && (
                <div className={Style.AuthorNFTCardBox_box}>
                    {followerArray.map((el, i) => (
                        <FollowerTabCard i={i} el={el} />
                    ))}
                </div>
            )}
            {following && (
                <div className={Style.AuthorNFTCardBox_box}>
                    {followingArray.map((el, i) => (
                        <FollowerTabCard i={i} el={el} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default AuthorNFTCardBox