import React from 'react'
import { Card } from 'react-bootstrap'
import { Rating } from '@mui/material'


export default function Review({individualReview}) {

    if (individualReview.stars === null) {
        return (
            <div></div>
        )
    } else {
        return ( 
            <div className='individual-review'>
                <Card>
                    <Card.Body>
                        <Rating
                        readOnly
                        value={individualReview.stars} />
                    <div>{individualReview.review}</div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}