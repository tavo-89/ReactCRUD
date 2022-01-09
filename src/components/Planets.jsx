import React from "react";
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

const Planets = ({ datos }) => {
    return (
        <div>
        <Card style={{ width: "18rem" }}>
            
            <Card.Body>
            <Card.Title>{datos.name}</Card.Title>
            
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>Diametro: {datos.diameter}</ListGroupItem>
            <ListGroupItem>Clima: {datos.climate}</ListGroupItem>
            <ListGroupItem>Terreno: {datos.terrain}</ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Card.Link href="#">Añadir a favoritos</Card.Link>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Planets;
