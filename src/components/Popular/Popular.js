import React from 'react'
import data_product from '../../Assets/Data/data'
import Item from '../Item/Item'

const Popular = () => {
    return (
        <>
        <div>
            <p>
            POPULAR IN WOMEN
            </p>
        </div>
            <div className='row justify-content-center'>
                {data_product.map((item, id) => (
                    <Item key={id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
        </>
    )
}

export default Popular