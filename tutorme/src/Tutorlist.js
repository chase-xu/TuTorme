import React from 'react';
import logo from './TutorMeLogo.png';
import './App.css';
import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class Tutorlist extends React.Component{
    render(){
        return(
            <div class="m-4">
                <div>
                    <img></img>
                </div>
                <div>
                    <div>
                        <label>First Name</label>
                        <label>Last Name</label>
                        <label>Reviews:</label>
                    </div>
                    
                </div>

            </div>
        );
    }
}









export default Tutorlist;