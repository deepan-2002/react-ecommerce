import React, { useContext } from 'react'
import './ProductDisplay.css'
import { Button } from 'react-bootstrap'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart, all_product } = useContext(ShopContext)

    const getRandomItems = (category, count, excludeProductId) => {
        const categoryItems = all_product.filter(item => item.category === category && item.id !== excludeProductId);
        const randomItems = [];
        while (randomItems.length < count && categoryItems.length > 0) {
            const randomIndex = Math.floor(Math.random() * categoryItems.length);
            randomItems.push(categoryItems.splice(randomIndex, 1)[0]);
        }
        return randomItems;
    };

    const relatedProducts = getRandomItems(product.category, 4, product.id);

    return (
        <>
            <div className='container product-details'>
                <div className="inner-container rounded">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={product.image} alt={product.name} className='img-fluid' />
                        </div>
                        <div className="col-md-6 my-auto">
                            <h2>{product.name}</h2>
                            <div className='d-flex'>
                                <p className='new_price'>₹ {product.new_price}</p>
                                <p className='old_price'>₹ {product.old_price}</p>
                            </div>
                            <Button variant='dark' onClick={() => addToCart(product.id)}>Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div className='related-products'>
                    <p className='title mt-4'>
                        Related Products
                    </p>
                    <div className='text-end'>
                        <a href={`/${product.category}`}>View all</a>
                    </div>
                    <div className='row justify-content-center'>
                        {relatedProducts.map((item, id) => (
                            <Item key={id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        ))}
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default ProductDisplay