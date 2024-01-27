import React, { useContext, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

const SearchBar = (props) => {
    const { handleSearch } = useContext(ShopContext)
    const [searchItem, setSearchItem] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`search-result?query=${encodeURIComponent(searchItem)}`)
        handleSearch(searchItem, location.pathname)
        window.scrollTo(0,0)
    }
    return (
        <Form className="d-flex m-auto" onSubmit={handleSubmit}>
            <Form.Control
                type="search"
                name='search'
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
            <Button type="submit" variant="outline-dark" onClick={props.handleButtonClick}>Search</Button>
        </Form>
    )
}

export default SearchBar