import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Login(){
    const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"});
  const [validationStates, setValidationStates] = useState({
    emailState: true,
    passwordState: true,
  });
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    setValidationStates({ ...validationStates, emailState: isValidEmail });
  });
 
  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d).{9,}$/.test(e.target.value);
    setValidationStates({ ...validationStates, passwordState: isValidPassword });
  });
 
  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });

  const clickSubmit = () => {
    if (validationStates.emailState && validationStates.passwordState) {
      alert(JSON.stringify(formValues));
    } else {
      setShowPasswordError(true);
      setShowEmailError(true);
    }
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
  
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={formValues.email}
          />
          {!validationStates.emailState && (
            <Form.Text className="text-danger">
              {showEmailError && "Your email should follow an established format"}
            </Form.Text>)}
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
          />
          {!validationStates.passwordState && (
            <Form.Text className="text-danger">
              {showPasswordError && "Your password should have at least 9 characters"}
            </Form.Text>)}
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange} value={formValues.favClass}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>
        <Button
          variant="primary"
          onClick={clickSubmit}
          disabled={validationStates.emailState || validationStates.passwordState}
        > Submit
        </Button>
      </Form>
    </div>
  );

}