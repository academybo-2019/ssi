import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FormularioComponent extends React.Component {

    constructor(){
        super();
        
    }

  render() {
    return (
      <Form className="col-12 col-md-5">
        <FormGroup>
          <Label for="firstname">Nombre</Label>
          <Input type="text" name="firstname"  placeholder="Nombre" />
        </FormGroup>
        
        <FormGroup>
          <Label for="lastname">Apellidos</Label>
          <Input type="text" name="lastname"  placeholder="Apellidos" />
        </FormGroup>
        
        <FormGroup>
          <Label for="telnum">Telefono</Label>
          <Input type="tel" name="telnum" placeholder="telefono" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" placeholder="user@gmail.com" />
        </FormGroup>
        <FormGroup check>
            <Label check>
              
              <Input type="checkbox" name="agree" />{' '}
              <strong>May we contact you?</strong>
            </Label>
          </FormGroup>
        <FormGroup>
          <Input type="select" name="select" >
            <option>Tel.</option>
            <option>Email</option>
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        
        
        <Button>Submit</Button>
      </Form>
    );
  }
}