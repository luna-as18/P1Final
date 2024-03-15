import React from 'react';
import Table from 'react-bootstrap/Table';
import { FormattedMessage } from 'react-intl';
function Carro(props) {
  
    return (
        <div>
        <td>{props.marca}</td>
        <td>{props.content}</td>
        <td>{props.linea}</td>
      </div>  
    );
  }
  
  export default Carro;
  








