import React from 'react'
import './Item.css'
import { Card } from 'react-bootstrap'

const Item = (props) => {
    return (
        <>
            <div className="col-md-4 mb-4">
                <Card style={{ width: '18rem', boxShadow: '4px 4px 5px #ccc' }} className="item-container h-100 p-2">
                    <Card.Img variant="top" src={props.image} alt={props.name} style={{ height: '250px' }} className="p-3" />
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
            </div>
        </>
    )
}

export default Item