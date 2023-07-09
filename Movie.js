import React, {useState} from 'react'
import { Accordion, Card } from 'react-bootstrap'

export default function Movie({movie}) {

    return (
        <Accordion>
            <Accordion.Item event key="0">
                <Accordion.Header><img src={movie.poster} /></Accordion.Header>
                <Accordion.Body>
                    <h1>Title: {movie.title}</h1>
                    <h2>Rating: {movie.rating}</h2>
                    <h3>Duration: {movie.runTime}</h3>
                    <Card style={{width:"600px"}}>
                        <Card.Body>
                        <h3>Synopsis:</h3><br></br>
                            {movie.synopsis}
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}