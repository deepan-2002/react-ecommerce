import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item'

const Search = () => {
    const { filteredItems } = useContext(ShopContext)

    return (
        <>
            {filteredItems.map((item, id) => (
                <Item key={id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            ))}
        </>
    )
}

export default Search