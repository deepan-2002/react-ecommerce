import React from 'react'
import './ProductDisplay.css'

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
                            <h4>₹ {product.old_price}</h4>
                            <h5>₹ {product.new_price}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay