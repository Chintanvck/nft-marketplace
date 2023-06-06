import React from 'react'

import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Web3Modal from "web3modal"
import { ethers } from "ethers"
import Router from 'next/router'
import axios from 'axios'
import { create as ipfsHttpClient } from "ipfs-http-client"

// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0")

const projectId = "2QdgncBYKZCkUL4UgHMSofQk7GQ";
const projectSecretKey = "2510233fa4d08eb5828d61cefd7d518e";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString("base64")}`;
const subdomain = "https://ck-nft-marketplace.infura-ipfs.io";

const client = ipfsHttpClient({
    host: "infura-ipfs.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    },
})

import { NFTMarketplaceAddress, NFTMarketplaceABI } from './constants'

//Fetch smart contract
const fetchContract = (signerOrProvider) => new ethers.Contract(NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
);

//Connecting with smart contract

const connectingWithSmaerContract = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log("Something went wrong while connecting with contract.")
    }
}

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = (({ children }) => {

    const titleData = "Discover, collect, and sell NFTs"

    //usestate
    const [error, setError] = useState("");
    const [openError, setOpenError] = useState(false)
    const [currentAccount, setCurrentAccount] = useState("");
    const router = useRouter();

    //Check if wallet is connected
    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum) return(
                setOpenError(true), setError("Install Metamask")
            )

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length) {
                setCurrentAccount(accounts[0])
            } else {
                setOpenError(true), setError("No account Found");
            }

        } catch (error) {
            setOpenError(true); 
            setError("Something wrong while connecting to wallet");
        }

    }

    useEffect(() => {
        checkIfWalletConnected();
    }, []);

    //Connect wallet function
    const connectWallet = async () => {
        try {
            if (!window.ethereum) return(
                setOpenError(true), setError("Install Metamask")
            )

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            setCurrentAccount(accounts[0]);
            // window.location.reload();
        } catch (error) {
            setOpenError(true);
            setError("Error while connecting to wallet");
        }
    }

    //upload to ipfs function
    const uploadToIPFS = async (file) => {
        try {
            const added = await client.add({ content: file });
            const url = `${subdomain}/ipfs/${added.path}`;
            return url;
        } catch (error) {
            setOpenError(true);
            setError("Error uploading to IPFS");
        }
    }

    //createNFT function
    const createNFT = async (name,
        price,
        image,
        description,
        router
    ) => {

        if (!name || !description || !price || !image) return (setOpenError(true) ,setError("Data is Missing"));

        const data = JSON.stringify({ name, description, image })

        try {
            const added = await client.add(data);

            const url = `https://infura-ipfs.io/ipfs/${added.path}`;

            await createSale(url, price)
            router.push('/search')
        } catch (error) {
            setOpenError(true);
            setError("Error while creating NFT");
        }
    }

    //createSale function
    const createSale = async (url, formInputPrice, isReselling, id) => {
        try {
            const price = ethers.utils.parseUnits(formInputPrice, "ether");
            const contract = await connectingWithSmaerContract();

            const listingPrice = await contract.getListingPrice();

            const transaction = !isReselling ? await contract.createToken(url, price, {
                value: listingPrice.toString(),
            }) : await contract.resellToken(id, price, {
                value: listingPrice.toString(),
            });

            await transaction.wait();
            
        } catch (error) {
            setOpenError(true);
            setError("Error while creating sale");
        }
    }

    //Fetch NFT function
    const fetchNFT = async () => {
        try {
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);

            const data = await contract.fetchMarketItems();

            const items = await Promise.all(
                data.map(
                    async ({ tokenId, seller, owner, price: unformattedPrice }) => {
                        const tokenURI = await contract.tokenURI(tokenId);

                        const {
                            data: { image, name, description },
                        } = await axios.get(tokenURI);
                        const price = ethers.utils.formatUnits(
                            unformattedPrice.toString(),
                            "ether"
                        );

                        return {
                            price,
                            tokenId: tokenId.toNumber(),
                            seller,
                            owner,
                            image,
                            name,
                            description,
                            tokenURI
                        }
                    }
                )
            );
            return items;

        } catch (error) {
            setOpenError(true);
            setError("Error while fetching NFTs");
        }
    }

    useEffect(()=>{
        fetchNFT()
    },[])

    //Fetch my nft or listed nft
    const fetchMyNFTsOrListedNFTs = async (type) => {
        try {
            const contract = await connectingWithSmaerContract();

            const data = type == "fetchItemsListed" ? await contract.fetchItemsListed() : await contract.fetchMyNFTs();

            const items = await Promise.all(
                data.map(
                    async (
                        { tokenId, seller, owner, price: unformattedPrice }
                    ) => {
                        const tokenURI = await contract.tokenURI(tokenId);
                        const {
                            data: { image, name, description },
                        } = await axios.get(tokenURI);
                        const price = ethers.utils.formatUnits(
                            unformattedPrice.toString(),
                            "ether"
                        );

                        return {
                            price,
                            tokenId: tokenId.toNumber(),
                            seller,
                            owner,
                            image,
                            name,
                            description,
                            tokenURI
                        }
                    }
                )
            )

            return items;
        } catch (error) {
            setOpenError(true);
            setError("Error while fetching listed NFTs");
        }
    }

    //Buy NFTs function
    const buyNFT = async (nft) => {
        try {
            const contract = await connectingWithSmaerContract();

            const price = ethers.utils.parseUnits(
                nft.price.toString(),
                "ether"
            );

            const transaction = await contract.createMarketSale(nft.tokenId, {
                value: price,
            });

            await transaction.wait();
            router.push('/author')
        } catch (error) {
            setOpenError(true);
            setError("Error while buying NFTs");
        }
    }

    return (
        <NFTMarketplaceContext.Provider
            value={{
                checkIfWalletConnected,
                connectWallet,
                uploadToIPFS,
                createNFT,
                fetchNFT,
                fetchMyNFTsOrListedNFTs,
                buyNFT,
                createSale,
                setOpenError,
                openError,
                error,
                currentAccount,
                titleData
            }}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
})