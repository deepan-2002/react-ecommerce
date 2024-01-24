import React from 'react'
import CartItems from '../../components/CartItems/CartItems'

const Cart = () => {
    return (
        <>
            <div className='cart-page container'>
                <div className='d-flex justify-content-around'>
                    <p>Product</p>
                    <p>Title</p>
                    <p>Rate</p>
                    <p>Quantity</p>
                    <p>Amount</p>
                </div>
                <CartItems />
            </div>
        </>
    )
}

export default Cart