import React from 'react'
import './Item.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = (props) => {

    return (
        <>
            <div className="col-6 col-md-3 g-4">
                <Link to={`/product/${props.id}`}>
                    <Card className="item-container h-100" onClick={() => window.scrollTo(0, 0)}>
                        <Card.Img variant="top" src={props.image} alt={props.name} />
                        <Card.Body style={{ borderTop: '1px solid #aaa' }}>
                            <Card.Title>{props.name}</Card.Title>
                            <hr />
                            <div className='price-container'>
                                <p className='new-price'>₹ {props.new_price}</p>
                                <p className='old-price'>₹ {props.old_price}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        </>
    )
}

export default Item