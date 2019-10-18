import React from 'react';
import logo from './TutorMeLogo.png';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




/*Menu of the nar bar*/
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
        <Modal isOpen={this.state.modalstatus}className={"modal-dialog-centered"} backdrop={backdrop}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Sign In</ModalHeader>
          <ModalBody>
          
          </ModalBody>
          <ModalFooter>
            <button className={"btn btn-primary"}>Sign In</button>
            <button onClick={this.toggleModal.bind(this)} className={"btn btn-secondary"}>Cancel</button>
            <button className={"btn btn-primary"} >Sign Up</button>
          </ModalFooter>
        </Modal>
      </container>
    );
  }
}


/*main section of the entire body*/
class App extends React.Component {
  // constructor(){
  //   this.state={
  //     sign = "off"
  //   };
  // }
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
