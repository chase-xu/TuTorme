import React from 'react';
import './App.css';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {SignUp} from './actions/authActions';
import {connect } from 'react-redux'
class Signup extends React.Component{
    render(){
        return(
            <div class="bg-light mt-3 mr-4 ml-4 p-5">
                <Form>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">Address</Label>
                        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="exampleAddress2">Address 2</Label>
                        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                    </FormGroup> */}
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleCity">City</Label>
                            <Input type="text" name="city" id="exampleCity"/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="exampleState">State</Label>
                            <Input type="text" name="state" id="exampleState"/>
                        </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="exampleZip">Post Code</Label>
                            <Input type="text" name="zip" id="exampleZip"/>
                        </FormGroup>  
                        </Col>
                    </Row>
                    {/* <FormGroup check>
                        <Input type="checkbox" name="check" id="exampleCheck"/>
                        <Label for="exampleCheck" check>Check me out</Label>
                    </FormGroup> */}
                    <Button>Sign in</Button>
                </Form>
            </div>
            
        );
    }
}


const mapStateToProps = (state) =>{
    console.log(state);
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth,
    }
  }
  const mapDispatchToProps = (dispatch) =>{
    return{
    //   signIn: (creds) => dispatch(signIn(creds)),
    //   signOut: () => dispatch(signOut())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Signup);