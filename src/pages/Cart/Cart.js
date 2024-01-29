import React from 'react'
import CartItems from '../../components/CartItems/CartItems'

const Cart = () => {
    return (
        <>
            <div className='cart-page container bg-light my-3'>
                <CartItems />
            </div>
        </>
    )
}

export default Cart