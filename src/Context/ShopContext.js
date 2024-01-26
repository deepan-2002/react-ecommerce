import { createContext, useEffect, useState } from "react";
import all_product from '../Assets/Data/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i <= all_product.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())


    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('cart-items'))
        if (storedItems) {
            setCartItems(storedItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart-items', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
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
    const [currentPath, setCurrentPath] = useState('')

    const handleSearch = (item, path) => {
        setSearchQuery(item)
        setCurrentPath(path)
    }

    const filteredItems = all_product.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase()))

    const storedItems = JSON.parse(localStorage.getItem('cart-items')) || getDefaultCart()

    const ContextValue = { all_product, cartItems, searchQuery, currentPath, filteredItems, storedItems, addToCart, removeFromCart, getTotalCartItem, handleSearch }


    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ContextProvider