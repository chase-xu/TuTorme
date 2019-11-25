import React, {Component} from 'react';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {firebase} from './App.js';
import {GoogleLogin} from "react-google-login";
import {PostData} from "./services/PostData";
import {Redirect} from 'react-router-dom';






class Menu extends Component{
  constructor(props){
    super(props);
    this.stats ={
      redirectToReferrer: false
    }

    // this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
  }
  
  signin(){
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    // window.alert(userEmail +' ' + userPassword);

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error " + errorMessage);
      // ...
    });
  }


    signup(res, type){
      let PostData;
      if(type === 'google' && res.w3.U3){

      }
      if(this.state.username && this.state.password){
        PostData('signup',this.state).then((result) => {
        let responseJson = result;
        if(responseJson.userData){
        sessionStorage.setItem('userData',JSON.stringify(responseJson));
        this.setState({redirectToReferrer: true});
        }
        });
        }
    }
    state ={
      modalstatus: false
    }
    toggleModal(){
      this.setState({
        modalstatus: !this.state.modalstatus
      });
    }


    render(){
      const responseGoogle = (response) =>{
        console.log(response);
        this.signup(response, 'google');
      }

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          window.alert("worked");
        } else {
          // No user is signed in.
        }
      });

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
              <a class="nav-link" href="/Signup">Sign Up<span class="sr-only">(current)</span></a>
            </li>
          </ul>
          {/* modal implementation!!!! */}
          <Modal isOpen={this.state.modalstatus} className={"modal-dialog-centered"} toggle={this.toggleModal.bind(this)}>
            <ModalHeader toggle={this.toggleModal.bind(this)}>Sign In To Your Account</ModalHeader>
            <ModalBody>
              <GoogleLogin
              clientId="868983935360-nea6nb8fsc8av1624umq3fepj0ffgihu.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              />
              <form>
                {/* <GoogleLoginButton onClick={() =>function(){}, log()} /> */}
                <div className={"form-group"}>
                  <lable>Email address</lable>
                  <input type="email" class="form-control" aria-describedly="emailHelp" placeholder="Enter email" id="email"></input>
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" placeholder="Password" id="password"></input>
                </div>
                <div class="row justify-content-center">
                  <button className={"btn btn-success col-4 align-self-center"} onClick={this.signin.bind(this)}>Sign In</button>
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