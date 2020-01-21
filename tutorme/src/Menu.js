import React, {Component} from 'react';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {firebase, user } from './App.js';
import {GoogleLogin} from "react-google-login";
import {connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {signIn} from './actions/authActions'
import {signOut} from './actions/authActions'
// import {authError} from './reducers/authReducer'
import {useSelector} from 'react-redux'
import {isLoaded} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'

class Menu extends Component{
  constructor(props){
    super(props);
    // this.signin = this.signin.bind(this);
    // this.Signed = this.Signed.bind(this);
    // this.notSigned = this.notSigned.bind(this);
    this.signed = this.signed.bind(this);
    // this.signOut = this.signOut.bind(this);
    // this.getAuthStatus= this.getAuthStatus.bind(this);
  }
  state ={
    modalstatus: false,
    userName: null,
    userEmail: null,
    userPassword: null,
    firebase: null,
  }


  handleChange=(e)=>{
    
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
    console.log(this.state.userEmail);
    console.log(this.state.userPassword);
  }

    toggleModal(){
        this.setState({
          modalstatus: !this.state.modalstatus
        });
    }

  handleSubmit=(e)=>{
    e.preventDefault();
    console.log("submitted");
    console.log(this.state.userEmail);
    this.props.signIn(this.state);
    this.toggleModal();
  }

    // Signed(auth){
    //   const id = auth.email;
    //   console.log(id)
    //   if(!id){
    //     return(
    //       <ul class="nav justify-content-end">
    //         <li className={"nav-item "} id="signIn">
    //           <a className={"nav-link"} href="#" onClick={this.toggleModal.bind(this)}>Hello, Sign In Here!<span class="sr-only">(current)</span></a>
    //         </li>
    //       </ul>
    //     );
    //   }
    // }

    // notSigned(auth){
    //   const id = auth.email;
    //   return(
    //     <ul class="nav justify-content-end">
    //       <li class="nav-item">
    //   <a className={"nav-link"}>Welcome Back, {id}</a>
    //       </li>
    //       <li class="nav-item" id="signIn">
    //         <a className={"nav-link"} href="#" onClick={this.props.signOut}>Sign Out<span class="sr-only">(current)</span></a>
    //       </li>
    //     </ul>
    //   );
    // }
    signed(auth){
      const id = auth.email;
      console.log(id)
      if(!id){
        return(
          <ul class="nav justify-content-end">
            <li className={"nav-item "} id="signIn">
              <a className={"nav-link"} href="#" onClick={this.toggleModal.bind(this)}>Hello, Sign In Here!<span class="sr-only">(current)</span></a>
            </li>
          </ul>
        );
      }else{
        return(
          <ul class="nav justify-content-end">
            <li class="nav-item">
        <a className={"nav-link"}>Welcome Back, {id}</a>
            </li>
            <li class="nav-item" id="signIn">
              <a className={"nav-link"} href="#" onClick={this.props.signOut}>Sign Out<span class="sr-only">(current)</span></a>
            </li>
          </ul>
        );
      }
    }

  
    render(){
      // const isLoggedIn = isLoggedIn;
      // const responseGoogle = (response) =>{
      //   console.log(response);
      //   this.signup(response, 'google');
      // }
      const {authError} = this.props;
      const {auth} = this.props;

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
              <a class="nav-link" href="/Signup" >Sign Up<span class="sr-only">(current)</span></a>
            </li>
          </ul>
          {/* {isLoaded(auth) ? this.notSigned(auth) : this.Signed(auth)} */}
          {this.signed(auth)}
          {/* modal implementation!!!! */}
          <Modal isOpen={this.state.modalstatus} className={"modal-dialog-centered"} toggle={this.toggleModal.bind(this)}>
            <ModalHeader toggle={this.toggleModal.bind(this)}>Sign In To Your Account</ModalHeader>
            <ModalBody>
              {/* <GoogleLogin
              clientId="868983935360-nea6nb8fsc8av1624umq3fepj0ffgihu.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              /> */}
              <form onSubmit={this.handleSubmit}>
                {/* <GoogleLoginButton onClick={() =>function(){}, log()} /> */}
                <div className={"form-group"}>
                  <lable>Email address</lable>
                  <input type="email" class="form-control" aria-describedly="emailHelp" placeholder="Enter email" id="userEmail" onChange={this.handleChange.bind(this)}></input>
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className={"form-group"}>
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" placeholder="Password" id="userPassword" onChange={this.handleChange.bind(this)}></input>
                </div>
                <div className={"row justify-content-center"}>
                  <button className={"btn btn-success col-4 align-self-center"} >Sign In</button>
                </div>   
                <div class="d-flex mt-2">
                  <a href="/Signup" class="link p-2 bd-highlight">Don't have an account?</a>
                  <a href="#" class="link ml-auto p-2 bd-highlight">Forgot your password?</a>
                </div>
              </form>
            </ModalBody>
          </Modal>
        </Container>
      );
    }
  }

  const mapStateToProps = (state) =>{
    console.log(state);
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth,
    }
  }
  const mapDispatchToProps = (dispatch) =>{
    return{
      signIn: (creds) => dispatch(signIn(creds)),
      signOut: () => dispatch(signOut())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Menu);