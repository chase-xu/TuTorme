import React, {Component} from 'react';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {firebase, user } from './App.js';
import {GoogleLogin} from "react-google-login";



class Menu extends Component{
  constructor(props){
    super(props);
    this.signin = this.signin.bind(this);
    this.createSign = this.createSign.bind(this);
    this.signOut = this.signOut.bind(this);
    // this.getAuthStatus= this.getAuthStatus.bind(this);
  }
  state ={
    signInState : false,
    modalstatus: false,
    userName: null,
    userEmail: null,
    useremailVerified: null,
    userphotoURL: null,
    userisAnonymous: null,
    userId: null,
    userproviderData: null, 
  }

  // // On component load.
  // componentDidMount(){
  //   this.getAuthStatus();
  // }
  // // Get firebase auth status.
  // getAuthStatus(){
  //   firebase.auth().onAuthStateChanged(function(user) {
  //       // Pass response to a call back func to update state
  //       let u;
  //       if(user){
  //         u = true;
  //       }
  //       else{
  //         u = false;
  //       }
  //       this.updateUserState(u);
  //   });
  // }

  // // update state
  // updateUserState = (resp) => {
  //    this.setState({
  //        signInState: resp
  //    })
  // }



  signin(){
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      window.alert("Error " + errorMessage);
      // ...
    });

    if(user){
      // User is signed in.    
      this.toggleModal();
      let u = firebase.auth().currentUser;
      if (u != null) {
        this.setState({
          signInState:true,
          userName: u.displayName,
          userEmail: u.email,
          useremailVerified: u.emailVerified,
          userphotoURL: u.photoURL,
          userisAnonymous: u.isAnonymous,
          userId: u.uid,
          userproviderData: u.providerData,         
        })
      }
      else{
        console.log("did not get user info");
      }
    }
    else{
      console.log("not logged in");
    }
  }

    toggleModal(){
        this.setState({
          modalstatus: !this.state.modalstatus
        });
    }

    createSign(){
      if(this.state.signInState == false){
        return(
          <ul class="nav justify-content-end">
            <li className={"nav-item "} id="signIn">
              <a className={"nav-link"} href="#" onClick={this.toggleModal.bind(this)}>Hello, Sign In Here!<span class="sr-only">(current)</span></a>
            </li>
          </ul>
        );
      }
      else{
        return(
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a className={"nav-link"}>Welcome Back, {this.state.userEmail}</a>
            </li>
            <li class="nav-item" id="signIn">
              <a className={"nav-link"} href="#" onClick={this.signOut}>Sign Out<span class="sr-only">(current)</span></a>
            </li>
          </ul>
        );
      }
    }

    signOut(){
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
      this.setState({
        signInState : false,
        userName: null,
        userEmail: null,
        useremailVerified: null,
        userphotoURL: null,
        userisAnonymous: null,
        userId: null,
        userproviderData: null, 
      })
    }
    render(){
      // const isLoggedIn = isLoggedIn;
      const responseGoogle = (response) =>{
        console.log(response);
        this.signup(response, 'google');
      }
      
      return(
        <Container class="collapse navbar-collapse" id="navbarSupportedContent">
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
            <li class ="nav-item">
              <a class="nav-link" href="/Signup" hidden>Sign Up<span class="sr-only">(current)</span></a>
            </li>
          </ul>
          {this.createSign()}
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
        </Container>
      );
    }
  }

  export default Menu;