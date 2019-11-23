import React from 'react';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




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
              <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/AboutUs">About Us<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/FAQs">FAQS<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/BeTutor">BeTutor<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={this.toggleModal.bind(this)}>Sign In<span class="sr-only">(current)</span></a>
            </li>
            <li class ="nav-item">
              <a class="nav-link" href="/signup">Sign Up<span class="sr-only">(current)</span></a>
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

  export default Menu;