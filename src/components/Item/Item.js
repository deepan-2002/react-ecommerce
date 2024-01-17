import React from 'react'
import './Item.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <>
            <div className="col-6 col-md-3 mb-4">
                <Link to={`/product/${props.id}`} onClick={()=>window.scrollTo(0,0)}>
                    <Card style={{ boxShadow: '4px 4px 5px #ccc' }} className="item-container h-100 p-2">
                        <Card.Img variant="top" src={props.image} alt={props.name} />
                        <Card.Body style={{ borderTop: '1px solid #aaa' }}>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text className='d-flex justify-content-around'>
                                <div className='new-price'>
                                    ₹ {props.new_price}
                                </div>
                                <div className='old-price'>
                                    ₹ {props.old_price}
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        </>
    )
}

export default Item