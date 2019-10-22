import React from 'react';
import logo from './TutorMeLogo.png';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*Pages components import*/
import Main from './Main';
import Menu from './Menu';
import AboutUs from './AboutUs';
import BeTutor from './BeTutor';
import Tutorlist from './Tutorlist';
import FAQs from './FAQs';
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
            </Switch>
        </div>
      </Router>
   );
  }
}

export default App;
