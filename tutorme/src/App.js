import React from 'react';
import logo from './TutorMeLogo.png';
// import {applyMiddleware} from 'redux';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ReduxThunk from 'redux-thunk';
/*Pages components import*/
import Main from './Main';
import Menu from './Menu';
import AboutUs from './AboutUs';
import BeTutor from './BeTutor';
import Tutorlist from './Tutorlist';
import FAQs from './FAQs';
import Signup from "./Signup";






// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA-IMqgMCzH-13HIzHFZtZtHQH_VNt68V0",
    authDomain: "tutorme-5b529.firebaseapp.com",
    databaseURL: "https://tutorme-5b529.firebaseio.com",
    projectId: "tutorme-5b529",
    storageBucket: "tutorme-5b529.appspot.com",
    messagingSenderId: "868983935360",
    appId: "1:868983935360:web:2e389cac6bb76b347b3165",
    measurementId: "G-NTL9GBD7HB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


/*main section of the entire body*/
class App extends React.Component {
  constructor(props){
    super();

    this.loginState = this.loginState.bind(this);
  }
  state = {
    isLoggedIn : false,
  }
  loginState(value){
    this.setState({
      isLoggedIn: value,
    });
  }

  render(){ 
    return (
      <Router>
        <div>
          <header class="navbar navbar-light  navbar-expand flex-column flex-md-row bg-light">
            <a class="navbar-brand" id="title" href="/">
                <h2>TutorMe</h2>
            </a>
            {/* Menu of the navbar */}
            <Menu value={this.state.isLoggedIn} mutateState={this.loginState} />
          </header>
            <Switch>
              {/* Home page */}
              <Route path="/" exact component={Main} />
              {/* About us page */}
              <Route path="/AboutUs" component={AboutUs} />
              {/*BeTutor Page*/}
              <Route path="/BeTutor" component={BeTutor} />
              {/*Tutor list*/}
              <Route path="/Tutorlist" component={Tutorlist} />
              {/*FAQs*/}
              <Route path="/FAQs" component={FAQs} />
              {/*sign up*/}
              <Route path="/Signup" exact component={Signup}/>
            </Switch>
        </div>
      </Router>
   );
  }
}


// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//   }
// }

export default App;
export {firebase,};
