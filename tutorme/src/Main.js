import React from 'react';
import logo from './TutorMeLogo.png';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/*main section of the entire body*/
class Main extends React.Component {
  render(){ 
    return (
     <div>
        <Search />
     </div>
   );
  }
}



/*Search tutor section*/
class Search extends React.Component{
  render(){
    return(
      <div class="bg-light mt-3 mr-4 ml-4 p-5">
          <div class="row justify-content-center">
            <h2 class="align-self-center">Find a tutor nearby today!</h2>
          </div>
          <div class="">
            <p class="text-center">TutorMe is a faster, easier way to find local and online tutoring services. Contact a professional tutor for <b>FREE</b> to start in-person or online tutoring!</p>
          </div>
          <form>
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
            <button type="button" class="btn btn-outline-primary btn-lg col-4 align-self-center">Search</button>
          </div>
      </div>
    );
  }
}

export default Main;