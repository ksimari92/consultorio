import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contacto.css'

const Contacto = () => {
    return (
        <>
            <Form className="contacto">
                <Form.Group className="mb-3 ancho-input" controlId="formBasicName">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre y apellido" />
                </Form.Group>

                <Form.Group className="mb-3 ancho-input" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Contacto