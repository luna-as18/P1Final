// Header.js
import React from 'react';
import Row from 'react-bootstrap/Row';
import { FormattedMessage } from 'react-intl';
import "./Header.css";

function Header() {
    return (
        <Row className="justify-content-center">
            <h3 className="cs-h3-header">
                <FormattedMessage id="YourRefurbished.com"></FormattedMessage>
            </h3>
            <img src="/header.png" alt="Header" className="img-header" />
        </Row>
    );
}

export default Header;
