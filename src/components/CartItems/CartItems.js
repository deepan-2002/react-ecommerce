import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartOffcanvas.css';
import './CartItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup } from 'react-bootstrap';

const CartItems = () => {
    const { all_product, addToCart, removeFromCart, cartItems, getTotalCartItem } = useContext(ShopContext);

    const noItemsAdded = Object.values(cartItems).every(quantity => quantity === 0);

    return (
        <>
            {noItemsAdded ? (
                <p>No Items Added</p>
            ) : (
                all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div className='cart' key={e.id}>
                                <div className='cart-items'>
                                    <img src={e.image} alt={e.name} className='cart-img' />
                                    <p className='cart-title w-25'>{e.name}</p>
                                    <p className='cart-price'>₹ {e.new_price}</p>
                                    <ButtonGroup>
                                        <Button variant="dark" onClick={() => removeFromCart(e.id)}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </Button>
                                        <Button variant='dark'>
                                            {cartItems[e.id]}
                                        </Button>
                                        <Button variant="dark" onClick={() => addToCart(e.id)}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>
                                    </ButtonGroup>
                                    <p className='item-total'>₹ {e.new_price * cartItems[e.id]}</p>
                                </div>
                                <hr/>
                            </div>
                        );
                    }
                    return null;
                })
            )}

            <div className='total-cart-container bg-light rounded p-3 mb-3 col-6'>
                <p>Price: ₹ {getTotalCartItem()}</p>
                <p>Shipping : Free</p>
                <hr/>
                <p>Total Amount: ₹ {getTotalCartItem()}</p>
            </div>

        </>
    );
};

export default CartItems;
