import React, { useState, useEffect, useCallback } from 'react'
import Style from "./BigNFTSlider.module.css"

import Image from 'next/image'
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { MdVerified, MdTimer } from 'react-icons/md'
import { TbArrowBigLeftLines, TbArrowBigRightLines } from 'react-icons/tb'
import images from "../../img"
import Button from "../Button/Button"


const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(0);

    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Chintan Kotadiya",
            collection: "GYm",
            price: "0000000006969 ETH",
            like: 469,
            image: images.user1,
            nftImages: images.nft_image_1,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 44,
            }
        },
        {
            title: "Hello NFT",
            id: 2,
            name: "Chintan Kotadiya",
            collection: "GYm",
            price: "0000000006969 ETH",
            like: 469,
            image: images.user2,
            nftImages: images.nft_image_2,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 44,
            }
        },
        {
            title: "Hello NFT",
            id: 3,
            name: "Chintan Kotadiya",
            collection: "GYm",
            price: "0000000006969 ETH",
            like: 469,
            image: images.user3,
            nftImages: images.nft_image_3,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 44,
            }
        },
        {
            title: "Hello NFT",
            id: 4,
            name: "Chintan Kotadiya",
            collection: "GYm",
            price: "0000000006969 ETH",
            like: 469,
            image: images.user4,
            nftImages: images.nft_image_3,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 44,
            }
        },
    ]

    const inc = useCallback(()=> {
        if(idNumber + 1 < sliderData.length){
            setIdNumber(idNumber + 1);
        }
    }, [idNumber, sliderData.length])

    const dec = useCallback(()=> {
        if(idNumber > 0){
            setIdNumber(idNumber - 1);
        }
    }, [idNumber])

    return (
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <div className={Style.bigNFTSlider_box_left_creator_profile}>
                            <Image
                                className={Style.bigNFTSlider_box_left_creator_profile_img}
                                src={sliderData[idNumber].image}
                                alt="profile image"
                                width={50}
                                height={50}
                            />
                            <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                                <p>Creator</p>
                                <h4>
                                    {sliderData[idNumber].name}{" "}
                                    <span>
                                        <MdVerified />
                                    </span>
                                </h4>
                            </div>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <AiFillFire
                                className={Style.bigNFTSlider_box_left_creator_collection_icon}
                            />

                            <div
                                className={Style.bigNFTSlider_box_left_creator_collection_info}
                            >
                                <p>Collection</p>
                                <h4>{sliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_bidding}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>
                                {sliderData[idNumber].price} <span>$221,21</span>
                            </p>
                        </div>

                        <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                            <MdTimer
                                className={Style.bigNFTSlider_box_left_bidding_box_icon}
                            />
                            <span>Auction ending in</span>
                        </p>

                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                            <div
                                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                            >
                                <p>{sliderData[idNumber].time.days}</p>
                                <span>Days</span>
                            </div>

                            <div
                                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                            >
                                <p>{sliderData[idNumber].time.hours}</p>
                                <span>Hours</span>
                            </div>

                            <div
                                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                            >
                                <p>{sliderData[idNumber].time.minutes}</p>
                                <span>Minutes</span>
                            </div>

                            <div
                                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                            >
                                <p>{sliderData[idNumber].time.seconds}</p>
                                <span>Seconds</span>
                            </div>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_button}>
                            <Button btnName="Place" handleClick={() => { }} />
                            <Button btnName="View" handleClick={() => { }} />
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLines
                            className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                            onClick={() => dec()}
                        />
                        <TbArrowBigRightLines
                            className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                            onClick={() => inc()}
                        />
                    </div>
                </div>

                <div className={Style.bigNFTSlider_box_right}>
                    <div className={Style.bigNFTSlider_box_right_box}>
                        <Image
                            src={sliderData[idNumber].nftImages}
                            alt="NFT IMAGE"
                            className={Style.bigNFTSlider_box_right_box_img}
                        />

                        <div className={Style.bigNFTSlider_box_right_box_like}>
                            <AiFillHeart />
                            <span>{sliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigNFTSlider