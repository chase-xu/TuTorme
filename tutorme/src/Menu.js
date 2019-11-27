import React, {Component} from 'react';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {firebase, } from './App.js';
import {GoogleLogin} from "react-google-login";





var signInState;

class Menu extends Component{
  constructor(props){
    super(props);
    // this.signin = this.signin.bind(this);
    // this.signup = this.signup.bind(this);
    this.signin = this.signin.bind(this);
    this.signed = this.signed.bind(this);
    this.handleSign = this.handleSign.bind(this);
    signInState = this.props.value;
  }

  state ={
    redirectToReferrer: false,
    sign: signInState,
    modalstatus: false,
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
    this.signed();
  }
    // signup(res, type){
    //   let PostData;
    //   if(type === 'google' && res.w3.U3){

    //   }
    //   if(this.state.username && this.state.password){
    //     PostData('signup',this.state).then((result) => {
    //     let responseJson = result;
    //     if(responseJson.userData){
    //     sessionStorage.setItem('userData',JSON.stringify(responseJson));
    //     this.setState({redirectToReferrer: true});
    //     }
    //     });
    //     }
    // }

    toggleModal(){
      if(signInState == false){
        this.setState({
          modalstatus: !this.state.modalstatus
        });
      }
      else{
        this.props.mutateState(false);
        this.setState({
          sign: false,
        });
      }
    }

    createSign(){
      if(signInState == false){
        return(
          <li class="nav-item" id="signIn">
            <a className={"nav-link"} href="#" onClick={this.toggleModal.bind(this)}>{this.props.value ? 'Sign Out':'Sign In'}<span class="sr-only">(current)</span></a>
          </li>
        );
      }
      else{
        return(
          <li class="nav-item" id="signIn">
            <a className={"nav-link"} href="#" onClick={this.toggleModal.bind(this)}>{this.props.value ? 'Sign Out':'Sign In'}<span class="sr-only">(current)</span></a>
          </li>
        );
      }
    }
    render(){
      // const isLoggedIn = isLoggedIn;
      const responseGoogle = (response) =>{
        console.log(response);
        this.signup(response, 'google');
      }
      
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
            {this.createSign()}
            <li class ="nav-item">
              <a class="nav-link" href="/Signup" hidden>Sign Up<span class="sr-only">(current)</span></a>
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
                <div className={"form-group"}>
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" placeholder="Password" id="password"></input>
                </div>
                <div className={"row justify-content-center"}>
                  <button className={"btn btn-success col-4 align-self-center"} onClick={this.signin}>Sign In</button>
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

    signed(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        signInState = true;
        window.alert("worked");
        } else {
          // No user is signed in.
          signInState = false;
        }
      });

      window.alert("firebase signed " + signInState);
      this.handleSign(signInState);
    }
    // handle signed in state
    handleSign(value){
        this.props.mutateState(value);
        this.setState({
          sign: value
        });
        this.toggleModal();
        window.alert('handle sign ' + this.props.value);
    }

  }

  export default Menu;