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

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://tutorme-5b529.firebaseio.com/",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firebase = require('firebase');
var firebaseui = require('firebaseui');
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      requireDisplayName: false
    }
  ]
});

// // Is there an email link sign-in?
// if (ui.isPendingRedirect()) {
//   ui.start('#firebaseui-auth-container', uiConfig);
// }
// // This can also be done via:
// if ((firebase.auth().isSignInWithEmailLink(window.location.href))){
//   ui.start('#firebaseui-auth-container', uiConfig);
// }






/*main section of the entire body*/
class App extends React.Component {
  render(){ 
    return (
      <Router>
        <div>
          <header class="navbar navbar-light  navbar-expand flex-column flex-md-row bg-light">
            <a class="navbar-brand" id="title" href="/">
                <h2>TutorMe</h2>
            </a>
            {/* Menu of the navbar */}
            <Menu />
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

export default App;
export {firebase};
