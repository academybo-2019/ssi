import React from 'react';
import { Button, Form, FormGroup, Label, FormFeedback, Input, FormText } from 'reactstrap';

export default class FormularioComponent extends React.Component {

    constructor(){
        super();
        this.state={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            errores: {
                firstname:false
            },
            touched:{
                firstname:false
            }
        }
    
    }

    handleOnChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        });
        console.log(name,value);
    }

    errores(firstname) {
        const errores = {
            firstname:""
        }
        console.log(firstname);
        if(this.state.touched.firstname && firstname.length < 3)
            errores.firstname = "Inserte un nombre mayor a 3 caracteres";
        return errores;
    }

    handleBlur(e){
        const name = e.target.name;
        this.setState({
            touched: { ...this.state.touched, [name]: true },
        });
    }

  render() {
    const errores = this.errores(this.state.firstname);
    return (
      <Form className="col-12 col-md-5">
        <FormGroup>
          <Label for="firstname">Nombre</Label>
          <Input type="text" name="firstname" placeholder="Nombre" 
          onChange={(e)=>this.handleOnChange(e)}
          onBlur={(e)=>this.handleBlur(e)} />
          <p>{errores.firstname}</p>
        </FormGroup>
        
        <FormGroup>
          <Label for="lastname">Apellidos</Label>
          <Input type="text" name="lastname"  placeholder="Apellidos" onChange={(e)=>this.handleOnChange(e)}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="telnum">Telefono</Label>
          <Input type="tel" name="telnum" placeholder="telefono" onChange={(e)=>this.handleOnChange(e)}/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" placeholder="user@gmail.com" onChange={(e)=>this.handleOnChange(e)}/>
        </FormGroup>
        <FormGroup check>
            <Label check>
              
              <Input type="checkbox" name="agree" onChange={(e)=>this.handleOnChange(e)}/>{' '}
              <strong>May we contact you?</strong>
            </Label>
          </FormGroup>
        <FormGroup>
          <Input type="select" name="select" onChange={(e)=>this.handleOnChange(e)}>
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