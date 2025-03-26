import { createContext, useEffect, useState } from "react";


export const WishlistContext = createContext();


export const WishlistProvider = ({ children }) => {
    useEffect(() => {
        !localStorage.getItem('react-my-wishlist') ? localStorage.setItem('react-my-wishlist', '{items:[]}') : ""
    }, [])
    const [wishlistdata, setWishlistdata] = useState(JSON.parse(localStorage.getItem('react-my-wishlist')) || { items: [] });
    const inWishlist = (id) => {
        let result = false
        wishlistdata.items.map((item) => {
            if (item.id === id) {
                result = true;
            }
        })
        return result
    }
    const removeWishlistItem = (id) => {
        setWishlistdata({ items: wishlistdata.items.filter(item => item.id !== id) });
    }

    const addWishlistItem = (item) => {
        setWishlistdata({ items: [...wishlistdata.items, item] })
    }

    const isEmpty = () => {
        return wishlistdata.items.length === 0 ? true : false;
    }
    useEffect(() => {
        localStorage.setItem('react-my-wishlist', JSON.stringify(wishlistdata));
    }, [wishlistdata])
    return <WishlistContext.Provider value={{ wishlistdata: wishlistdata, setWishlistdata: setWishlistdata, inWishlist: inWishlist, removeWishlistItem: removeWishlistItem, addWishlistItem: addWishlistItem, isEmpty: isEmpty }}>{children}</WishlistContext.Provider>
}