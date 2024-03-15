import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import Carro from './Carro';

function Carros() {
    const [selectedCar, setSelectedCar] = useState(null);

    const devices = [
        { id: 1, name: 'Mazda', desired: { value: 'CX-5' }, image: 'mazda.jpg', mileage: '10000 km', color: 'Red', reference: '2023' },
        { id: 2, name: 'Toyota', desired: { value: 'Corolla' }, image: 'toyota.jpg', mileage: '20000 km', color: 'Blue', reference: '2022' },
        { id: 3, name: 'Chevrolet', desired: { value: 'Spark' }, image: 'chevrolet.jpg', mileage: '15000 km', color: 'Silver', reference: '2021' },
    ];

    const handleCarClick = (car) => {
        setSelectedCar(car);
    };

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Marca</th>
                        <th>Linea</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device, index) => (
                        <tr key={device.id} onClick={() => handleCarClick(device)}>
                            <td>{device.id}</td>
                            <td>{device.name}</td>
                            <td>{device.desired.value}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedCar && (
                <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
                    <Card.Img variant="top" src={require(`./images/${selectedCar.image}`).default} />
                    <Card.Body>
                        <Card.Title>{selectedCar.name}</Card.Title>
                        <Card.Text>
                            <strong>Kilometraje:</strong> {selectedCar.mileage}
                            <br />
                            <strong>Color:</strong> {selectedCar.color}
                            <br />
                            <strong>Referencia:</strong> {selectedCar.reference}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}

export default Carros;
