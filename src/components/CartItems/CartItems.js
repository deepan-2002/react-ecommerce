import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
    const { all_product, addToCart, removeFromCart, cartItems } = useContext(ShopContext)
    return (
        <>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <img src={e.image} alt={e.name} width={'100px'} />
                        <p>{e.name}</p>
                        <p>{e.new_price}</p>
                        <Button variant='warning' onClick={() => addToCart(e.id)}>{cartItems[e.id]}</Button>
                        <p>{e.new_price * cartItems[e.id]}</p>
                        <Button onClick={() => removeFromCart(e.id)}>x</Button>
                    </div>
                }
                return null
            })}
        </>
    )
}

export default CartItems