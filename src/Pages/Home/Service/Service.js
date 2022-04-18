import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, title, price, body, description, img } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{title}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <Button onClick={() => navigateToServiceDetail(id)} variant="primary">Start Now</Button>
        </div>
        // <Card style={{ width: 'w-100' }}>
        //     <Card.Img variant="top" src={img} />
        //     <Card.Body>
        //         <Card.Title>{title}</Card.Title>
        //         <p>Price: {price}</p>
        //         <Card.Text>
        //             {description}
        //         </Card.Text>
        //         <Button variant="primary">Start Now</Button>
        //     </Card.Body>
        // </Card>
    );
};

export default Service;