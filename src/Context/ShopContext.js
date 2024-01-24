import { createContext, useState } from "react";
import all_product from '../Assets/Data/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    console.log(cartItems);
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartItem = () => {
        let totalAmount = 0
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === parseInt(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }

    // Search Form
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPath,setCurrentPath]=useState('')

    const handleSearch = (item,path) => {
        setSearchQuery(item)
        setCurrentPath(path)
    }

    const ContextValue = { all_product, cartItems, searchQuery,currentPath, addToCart, removeFromCart, getTotalCartItem, handleSearch }


    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ContextProvider