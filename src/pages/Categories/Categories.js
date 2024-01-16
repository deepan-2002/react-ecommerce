import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Item from '../../components/Item/Item'

const Categories = (props) => {
    const { all_product } = useContext(ShopContext)
    return (
        <>
            <img src={props.banner} alt={props.category} className='img-fluid' />
            <div className='container section-container'>
                <div>
                    <p className='title'>
                        {props.category} Section
                    </p>
                </div>
                <div className='row justify-content-center'>
                    {all_product.map((item, id) => {
                        if (props.category === item.category) {
                            return <Item key={id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        }
                        else {
                            return null
                        }
                    })}
                    <hr/>
                </div>
            </div>
        </>
    )
}

export default Categories