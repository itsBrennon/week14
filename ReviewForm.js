import React, { useState } from 'react';
import { Container, Col, Row, Button, Form, Accordion } from "react-bootstrap";
import {Rating} from '@mui/material';
import ReviewList from './ReviewList';


export default function ReviewForm({listOfReviews}) {
    const [review, setReview] = useState(""); 
    const [value, setValue] = useState(null);
    const [reviews, setReviews] = useState(listOfReviews);

    const submitReview = (e) => {
        e.preventDefault();
        const newReview = {
            stars: value,
            review: review,
        };
    
        setReviews([...reviews, newReview]);
    
        setValue(null);
        setReview("");
    };
    
    return ( 
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Reviews</Accordion.Header>
                            <Accordion.Body>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                            <Form.Group>
                            <Form.Control
                                 key="reviewForm"
                                 as="textarea"
                                 rows={3} value={review}
                                 onChange={(e) => setReview(e.target.value)} />    
                            </Form.Group>    
                             <Button 
                             key= "submitButton"
                             className='mt-2'
                             variant='success'
                             disabled={review === ""}
                             onClick={(e) => submitReview(e)}>Submit</Button>
                        <ReviewList individualMovieReviews={reviews}/>    
                        </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}





