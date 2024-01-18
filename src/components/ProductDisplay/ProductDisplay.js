import React, { useContext } from 'react'
import './ProductDisplay.css'
import { Button } from 'react-bootstrap'
import data_product from '../../Assets/Data/data'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart } = useContext(ShopContext)

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
                            <Button variant='danger' onClick={()=>addToCart(product.id)}>Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div className='container related-products'>
                    <div>
                        <p className='title'>
                            Related Products
                        </p>
                    </div>
                    <div className='row justify-content-center'>
                        {data_product.map((item, id) => (
                            <Item key={id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay