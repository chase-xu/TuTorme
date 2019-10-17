import React from 'react';
import logo from './TutorMeLogo.png';
import './App.css';



class nav extends React.Component{
  render(){
    return(
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li>About Us</li>
          <li>FAQS</li>
          <li>BeTutor</li>
          <li>Sign In</li>
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
 render(){ return (
    <header class="navbar navbar-light  navbar-expand flex-column flex-md-row bg-light">
      <a class="navbar-brand " id="title" href="index.html">
          <h2>TutorMe</h2>
      </a>
      <nav />
    </header>
  );
 }
}


export default App;
