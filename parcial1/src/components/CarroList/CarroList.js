import { useEffect, useState } from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { FormattedMessage } from 'react-intl';
import "./CarroList.css";

function CarroList() {

    const [carros, setCarros] = useState([]);

    const [selectedCarro, setSelectedCarro] = useState(null);

    const handleCarroClick = (carro) => {
        fetch(`http://localhost:3001/carros/${carro.id}`)
            .then(response => response.json())
            .then(data => setSelectedCarro(data))
    }

    useEffect(() => {
        fetch('http://localhost:3001/carros')
            .then(response => response.json())
            .then(data => setCarros(data))
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
                            {carros.map((carro) => (
                                <tr key={carro.id} onClick={() => handleCarroClick(carro)} className="carro-list">
                                    <td className='cs-id'>{carro.id}</td>
                                    <td>{carro.kilometraje}</td>
                                    <td>{carro.color}</td>
                                    <td>{carro.referencia}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
                {selectedCarro &&
                    <Col xs={12} md={12} xl={5} xxl={5} className="cs-col d-flex justify-content-center">
                        <Card className="cs-card">
                            <Card.Body className="cs-body">
                                <Card.Title className='cs-cardTitle'>{selectedCarro.marca +" " + selectedCarro.linea}</Card.Title>
                    
                                <div className="custom-img">
                                    <Card.Img variant="top" src={selectedCarro.imagen} className='cs-img' />
                                </div>

                                <div className="mb-3">
                                    <Row>
                                        <Card.Text>
                                            <FormattedMessage id="Mileage"></FormattedMessage>
                                        </Card.Text>
                                    </Row>
                                    <Row>
                                        <Card.Text>
                                            {selectedCarro.kilometraje}
                                        </Card.Text>
                                    </Row>
                                </div>
                                <div className="mb-2 custom-text">
                                    <Row>
                                        <Card.Text>
                                            <FormattedMessage id="Color"></FormattedMessage>
                                        </Card.Text>
                                    </Row>
                                    <Row>
                                        <Card.Text>
                                            {selectedCarro.color} <FormattedMessage id="masl"></FormattedMessage>
                                        </Card.Text>
                                    </Row>
                                </div>
                                <div className="mb-2 custom-text">
                                    <Row>
                                        <Card.Text>
                                            <FormattedMessage id="Reference"></FormattedMessage>
                                        </Card.Text>
                                    </Row>
                                    <Row>
                                        <Card.Text>
                                            {selectedCarro.referencia} <FormattedMessage id="masl"></FormattedMessage>
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

export default CarroList;