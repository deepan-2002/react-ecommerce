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
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <img src={product.image} alt={product.name} className='img-fluid rounded' />
                        </div>
                        <div className="col-md-6 my-auto">
                            <h2 className='product-title mb-2'>{product.name}</h2>
                            <div className='review-container'>
                                <p><img src='https://lh3.googleusercontent.com/proxy/glArr1ugIiJ96jkD7xeJdjS-7AEzxqKcoQtlNpJJIfxXHbmkoGfuFbse_Uk6KLywUgsmPqsRzOZ5aL8u' alt='review' width={'100px'} />(762)</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='old_price'>₹ {product.old_price}</p>
                                <p className='new_price'>₹ {product.new_price}</p>
                            </div>
                            <p className='description my-3'>
                                A Casual Wear, typically worn by {product.category} that combines a top and bottom, creating a one-piece outfit. It comes in various styles, lengths, and designs, suitable for different occasions.
                            </p>
                            <Button variant='dark' onClick={() => addToCart(product.id)}>Add to Cart</Button>
                            <div className='category-container mt-3'>
                                <p>Category: {product.category}, Top, Casuals</p>
                                <p>Tags: Modern, Latest</p>
                            </div>
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