import { useEffect, useState } from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { FormattedMessage } from 'react-intl';
import { FaArrowRight } from 'react-icons/fa';
import "./CarList.css";
function CarList() {

    const [cars, setCars] = useState([]);

    const [selectedCar, setSelectedCar] = useState(null);

    const handleCarClick = (car) => {
        fetch(`http://localhost:3001/cars/${car.id}`)
            .then(response => response.json())
            .then(data => setSelectedCar(data))
    }

    useEffect(() => {
        fetch('http://localhost:3001/cars')
            .then(response => response.json())
            .then(data => setCars(data))
    }
        , [])

    return (
        <>
            <Row className="cs-tb-row">
                <Col xs={12} md={12} xl={7} xxl={7}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="cs-tr-titles">
                                    #
                                </th>
                                <th className="cs-tr-titles">
                                    <FormattedMessage id="Brand"></FormattedMessage>
                                </th>
                                <th className="cs-tr-titles">
                                    <FormattedMessage id="Line"></FormattedMessage>
                                </th>
                                <th className="cs-tr-titles">
                                    <FormattedMessage id="Model"></FormattedMessage>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map((car) => (
                                <tr key={car.id} onClick={() => handleCarClick(car)} className="car-list">
                                    <td className='cs-id'>{car.id}</td>
                                    <td>{car.marca}</td>
                                    <td>{car.linea}</td>
                                    <td>{car.modelo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
                {selectedCar &&
                    <Col xs={12} md={12} xl={5} xxl={5} className="cs-col d-flex justify-content-center">
                        <Card className="cs-card border-dark">
                            <Card.Body className="cs-body">
                            <h5 className="cs-cardTitle">{selectedCar.marca + " " + selectedCar.linea}</h5>
   
                                <div className="custom-img">
                                    <Card.Img variant="top" src={selectedCar.imagen} className='cs-img' />
                                </div>

                                <div className="mb-3">
                                    <Row>
                                        <Card.Text>
                                        <FaArrowRight /> <FormattedMessage id="Mileage"></FormattedMessage>: {selectedCar.kilometraje}
                                        </Card.Text>
                                    </Row>
                                    <Row>
                                        <Card.Text>
                                        <FaArrowRight /> <FormattedMessage id="Color"></FormattedMessage>: {selectedCar.color}
                                        </Card.Text>
                                    </Row>
                                    <Row>
                                        <Card.Text>
                                        <FaArrowRight /> <FormattedMessage id="Reference"></FormattedMessage>: {selectedCar.referencia}
                                        </Card.Text>
                                    </Row>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
        </>
    )
}

export default CarList;