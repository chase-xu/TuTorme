import React from 'react';
import logo from './TutorMeLogo.png';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




/*Menu of the nar bar with toggle sign in modal*/
class Menu extends React.Component{
  state ={
    modalstatus: false
  }
  toggleModal(){
    this.setState({
      modalstatus: !this.state.modalstatus
    });
  }
  render(){
    return(
      <container class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="./index.html">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">FAQS<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BeTutor<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={this.toggleModal.bind(this)}>Sign In<span class="sr-only">(current)</span></a>
          </li>
        </ul>
        {/* modal implementation!!!! */}
        <Modal isOpen={this.state.modalstatus} className={"modal-dialog-centered"} toggle={this.toggleModal.bind(this)}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Sign In To Your Account</ModalHeader>
          <ModalBody>
            <form>
              <div className={"form-group"}>
                <lable>Email address</lable>
                <input type="email" class="form-control" aria-describedly="emailHelp" placeholder="Enter email"></input>
                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" placeholder="Password"></input>
              </div>
              <div class="row justify-content-center">
                <button className={"btn btn-success col-4 align-self-center"}>Sign In</button>
              </div>   
              <div class="d-flex mt-2">
                <a href="#" class="link p-2 bd-highlight">Don't have an account?</a>
                <a href="#" class="link ml-auto p-2 bd-highlight">Forgot your password?</a>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </container>
    );
  }
}


/*main section of the entire body*/
class App extends React.Component {
 render(){ 
   return (
    <div>
      <header class="navbar navbar-light  navbar-expand flex-column flex-md-row bg-light">
        <a class="navbar-brand " id="title" href="index.html">
            <h2>TutorMe</h2>
        </a>
        <Menu />
      </header>
      <Search />
    </div>
  );
 }
}

/*Search tutor section*/
class Search extends React.Component{
  render(){
    return(
      <div class="bg-light mt-3 mr-4 ml-4 p-5">
          <div class="row justify-content-center">
            <h2 class="align-self-center">Find a tutor nearby today!</h2>
          </div>
          <div class="">
            <p class="text-center">TutorMe is a faster, easier way to find local and online tutoring services. Contact a professional tutor for <b>FREE</b> to start in-person or online tutoring!</p>
          </div>
          <form>
            <div class="form-group ml-1 mr-1 row">
              <input class="form-control mr-sm-4 col-5" type="search" placeholder="Search Tutor" aria-label="Search Tutor"></input>
              <input class="form-control mr-sm-4 col-4" type="search" placeholder="Location" aria-label="Location"></input>
              <select class="form-control col-2">
                <option>In-person</option>
                <option>Online</option>
              </select>
            </div>
          </form>
          <div class="row justify-content-center">
            <button type="button" class="btn btn-outline-primary btn-lg col-4 align-self-center">Search</button>
          </div>
      </div>
    );
  }
}

export default App;
