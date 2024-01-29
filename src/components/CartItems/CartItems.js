import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartOffcanvas.css';
import './CartItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup } from 'react-bootstrap';

const CartItems = () => {
    const { all_product, addToCart, removeFromCart, cartItems, getTotalCartItem } = useContext(ShopContext);

    const noItemsAdded = Object.values(cartItems).every(quantity => quantity === 0);

    const ShippingPrice = () =>{
        const totalPrice = getTotalCartItem()
        if (totalPrice < 500){
            return '₹ 40'
        }
        else return 'Free'
    }

    const TotalPrice=()=>{
        let totalPrice = getTotalCartItem()
        if (totalPrice < 500){
            return totalPrice + 40
        }
        else return totalPrice
    }

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
                                    <p className='cart-title'>{e.name}</p>
                                    <p className='cart-price'>₹ {e.new_price}</p>
                                    <ButtonGroup size='sm'>
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
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })
            )}

            <div className='total-cart-container bg-light rounded p-3 mb-3 offset-md-6 col-12 col-md-6 text-end'>
                <div className='total-flex'>
                    <p>Price: </p>
                    <p>₹ {getTotalCartItem()}</p>
                </div>
                <div className='total-flex'>
                    <p>Shipping</p>
                    <p>{ShippingPrice()}</p>
                </div>
                <hr />
                <p>Total Amount: ₹ {TotalPrice()}</p>
                <Button variant='dark'>Checkout <FontAwesomeIcon icon={faArrowRight}/></Button>
            </div>
        </>
    );
};

export default CartItems;
