import React, { useContext } from 'react'
import './Item.css'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Item = (props) => {
    const { addToCart } = useContext(ShopContext)

    const handleAddToCart = (e) => {
        e.preventDefault()
        addToCart(props.id)
    }

    return (
        <>
            <div className="col-6 col-md-3 mb-4">
                <Link to={`/product/${props.id}`} >
                    <Card className="item-container h-100" onClick={() => window.scrollTo(0, 0)}>
                        <Card.Img variant="top" src={props.image} alt={props.name} />
                        <Card.Body style={{ borderTop: '1px solid #aaa' }}>
                            <Card.Title>{props.name}</Card.Title>
                            <hr />
                            <Card.Text className='price-container'>
                                <div className='new-price'>
                                    ₹ {props.new_price}
                                </div>
                                <div className='old-price'>
                                    ₹ {props.old_price}
                                </div>
                                <div className='cart-btn-container ms-lg-auto'>
                                    <button size='sm' onClick={handleAddToCart}>Add to Cart</button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        </>
    )
}

export default Item