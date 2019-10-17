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
    <div>
      <header class="navbar navbar-light  navbar-expand flex-column flex-md-row bg-light">
        <a class="navbar-brand " id="title" href="index.html">
            <h2>TutorMe</h2>
        </a>
        <Menu />
      </header>
      <Search />
    </div>
  );
 }
}

class Search extends React.Component{
  render(){
    return(
      <div class="bg-light mt-3 mr-4 ml-4 p-5">
          <form class="">
            <div class="form-group ml-1 mr-1 row">
              <input class="form-control mr-sm-4 col-5" type="search" placeholder="Search Tutor" aria-label="Search Tutor"></input>
              <input class="form-control mr-sm-4 col-4" type="search" placeholder="Location" aria-label="Location"></input>
              <select class="form-control col-2">
                <option>In-person</option>
                <option>Online</option>
              </select>
            </div>
          </form>
          <div class="row justify-content-center">
            <div></div>
            <button type="button" class="btn btn-outline-primary btn-lg col-4 align-self-center">Search</button>
          </div>
      </div>
    );
  }
}

export default App;
