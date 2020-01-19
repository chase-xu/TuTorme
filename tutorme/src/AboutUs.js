import React from 'react';
import logo from './TutorMeLogo.png';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class AboutUs extends React.Component{
    render(){
        return(
            <div class="bg-light mt-3 mr-4 ml-4 p-5">
                <h2>About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ullamcorper placerat. Nunc congue ante vitae nulla venenatis, sit amet ornare tellus faucibus. Vestibulum erat nibh, hendrerit sit amet leo sit amet, tincidunt consequat risus. Phasellus elit dui, pellentesque nec rhoncus nec, luctus gravida felis. Sed ut ligula eu quam tempus bibendum quis vel lorem. Cras feugiat nec lorem at ullamcorper. Donec rutrum, purus non sollicitudin tempus, nibh leo porta lorem, a tristique velit risus sit amet arcu. Pellentesque non nisl id nisi iaculis interdum in ut lectus. Fusce eleifend quis dui sit amet sodales. Mauris felis nulla, consectetur ut aliquet a, vehicula et nisi.
                </p>
            </div>
        );
    }
}

export default AboutUs;