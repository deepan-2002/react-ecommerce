import React, { useContext } from 'react'
import Search from '../../components/Search/Search'
import { ShopContext } from '../../Context/ShopContext'

const SearchResult = () => {
    const { searchQuery } = useContext(ShopContext)
    return (
        <>
            {searchQuery ? (
                <>
                    <div>
                        <p className='title'>Search Results for {searchQuery}</p>
                    </div>
                    <div className='row justify-content-center'>
                        <Search />
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <p className='title mt-3'>No Results Found</p>
                    </div>
                    <div className='text-center'>
                        <img src='https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?w=1060&t=st=1706101124~exp=1706101724~hmac=db29a005dde1b4a5afec8a03df0ca77322f356aaba0565c39828c80a66e971aa' alt='' className='img-fluid rounded my-3 col-5' />
                    </div>
                </>
            )
            }
        </>
    )
}

export default SearchResult