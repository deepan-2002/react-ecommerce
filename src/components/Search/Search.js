import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item'

export const SearchBar = () => {
    const { handleSearch } = useContext(ShopContext)
    const [searchItem, setSearchItem] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`search-result?query=${encodeURIComponent(searchItem)}`)
        handleSearch(searchItem, location.pathname)
    }
    return (
        <Form className="d-flex m-auto" onSubmit={handleSubmit}>
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
            <Button type="submit" variant="outline-dark">Search</Button>
        </Form>
    )
}

const Search = () => {
    const { all_product,searchQuery } = useContext(ShopContext)

    const filteredItems = all_product.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <>
            {filteredItems.map((item, id) => (
                <Item key={id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            ))}
        </>
    )
}

export default Search