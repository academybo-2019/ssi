import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Table, Input, FormText } from 'reactstrap';
import axios from 'axios';
class HomeComponent extends Component {

    constructor() {
        super();
        this.state = {
            books: [],
            id:null,
            title:'',
            description:'',
            update:false
        }
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {   
                [name]: value
            }
        );
    }

    

    guardarLibro(e) {
        e.preventDefault();
        if(this.state.update){
            let {title, description} = this.state;
            axios.put('http://localhost:4000/books/' + this.state.id, {title,description})
                .then((response) => {
                    this._refreshBooks();
                    this.setState({
                        id:null,
                        title: '',
                        description: '',
                        update: false
                    });
                });
        }else{
            const newBook = {title: this.state.title, description: this.state.description};
            axios.post('http://localhost:4000/books', newBook)
            .then(response => {
                
                console.log("response ...",response)
                newBook.id=response.data.id;
                this.setState({
                    books: [...this.state.books,newBook],
                    title: '',
                    desription: ''
                });
            });
        }
        
    }

    editBook(id) {
        let {title, description} = this.state;
        let selectedBook = this.state.books.filter(item=>item.id === id)[0];
        this.setState({
            id: id,
            title: selectedBook.title,
            description: selectedBook.description,
            update: true
        });
    }
    
  _formBook() {
    return (
      <div className="row">
        <Form onSubmit={(e)=>this.guardarLibro(e)}>
          <FormGroup>
            <Label for="title">titulo</Label>
            <Input type="text" name="title" value={this.state.title} onChange={(e)=>this.handleChange(e)} placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="description">descripcion</Label>
            <Input type="text" name="description" value={this.state.description} onChange={(e)=>this.handleChange(e)} placeholder="password placeholder" />
          </FormGroup>
          <Button>Guardar</Button>
        </Form>
      </div>
    );
  }

    componentDidMount() {
        this._refreshBooks();
    }
    
    _refreshBooks(){
        axios.get('http://localhost:4000/books')
            .then((res) => {
                console.log(res);
                this.setState({
                    books: res.data
                });
            })
            .catch(e => {console.log(e)});
    }

    deleteBook(id) {
        axios.delete('http://localhost:4000/books/' + id)
        .then((response) => {
          this._refreshBooks();
        });
    }


    render() {


        return (
            <div className="container">
                {this._formBook()}
                <div className="row">
                </div>
                <div className="row">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Rating</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {this.state.books && this.state.books.map(book=>{
                                return(
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.description}</td>
                                    <td>
                                        <button onClick={this.editBook.bind(this,book.id)}>Edit</button>
                                        <button onClick={this.deleteBook.bind(this,book.id)}>Delete</button>
                                    </td>
                                </tr>);
                            }
                        )}
                    </tbody>
                </Table>
                </div>
            </div>
        );
    }

}

export default HomeComponent;