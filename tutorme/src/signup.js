import React from 'react';
import './App.css';
import {firebase} from './App.js';
import './Menu.js';


class Signup extends React.Component{
    render(){
        return(
            <div class="bg-light mt-3 mr-4 ml-4">
                <form class="p-2">
                    <div class="g-signin2" data-onsuccess="onSignIn"></div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    
                </form>

            </div>
        );
    }


}


export default Signup;