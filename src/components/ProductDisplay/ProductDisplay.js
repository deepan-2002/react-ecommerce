import React from 'react'
import './ProductDisplay.css'
import { Button } from 'react-bootstrap'

const ProductDisplay = (props) => {
    const { product } = props
    return (
        <>
            <div className='product-details'>
                <div className="container rounded">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={product.image} alt={product.name} className='img-fluid' />
                        </div>
                        <div className="col-md-6 my-auto">
                            <h2>{product.name}</h2>
                            <div className='d-flex'>
                                <p className='new_price'>₹ {product.new_price}</p>
                                <p className='old_price'>₹ {product.old_price}</p>
                            </div>
                            <Button variant='danger'>Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay