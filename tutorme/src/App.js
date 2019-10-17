import React from 'react';
import logo from './TutorMeLogo.png';
import './App.css';



class Menu extends React.Component{
  render(){
    return(
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
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
            <a class="nav-link" href="#">Sign In<span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
 render(){ 
   return (
    <header class="navbar navbar-light  navbar-expand flex-column flex-md-row bg-light">
      <a class="navbar-brand " id="title" href="index.html">
          <h2>TutorMe</h2>
      </a>
      <Menu />
    </header>
  );
 }
}


export default App;
