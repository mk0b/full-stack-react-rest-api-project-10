//stateful class component
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Form from './Form';

//The defaultValue were causing things to be weird I took them out

//TODO: Get the form working
//TODO: Figure out why this isn't rendering

class UserSignUp extends Component {
    //setting up state
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: '',
            confirmedPassword: '',
            errors: []
        }
    }

    submit = () => {
        const { context } = this.props;
        //destructuring to make assigning these easier in user
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmedPassword
        } = this.state;

        //new user payload
        //will be passed to createUser()
        const user = {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmedPassword
        };

        //create new user async returns a promise
        context.data.createUser(user)
        .then(errors => {
            if (errors.length) {
                this.setState({ errors });
            } else {
                console.log(`${emailAddress} is succesfully signed up and authenticated!`);
            }
        })
        .catch(err => {
            //handle rejected promises
            console.log('Something went wrong: ', err)
            //redirect to error page
            this.props.history.push('/error');
        });
    }

    cancel = () => {
        //redirecting back to the main public page /
        this.props.history.push('/');
    }

    render() {
        //setting up state here to use in the form to capture input
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmedPassword,
            errors
        } = this.state;

        return (
            <Fragment>
                <Header />
                <div className="bounds">
                    <div className="grid-33 centered signin">
                        <h1>Sign Up</h1>
                        <Form 
                            cancel={this.cancel}
                            errors={errors}
                            submit={this.submit}
                            submitButtonText="Sign Up"
                            elements={() => (
                                <Fragment>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={firstName}
                                        onchange={this.change}
                                        placeholder="First Name" />
                                    <input 
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={lastName}
                                        onChange={this.change}
                                        placeholder="Last Name" />
                                    <input 
                                        id="emailAddress"
                                        name="emailAddress"
                                        type="text"
                                        value={emailAddress}
                                        onChange={this.change}
                                        placeholder="Email Address" />
                                    <input 
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        placeholder="Password" />
                                    <input 
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        value={confirmedPassword}
                                        placeholder="Confirm Password" />
                                </Fragment>
                            )} />
                        <p>&nbsp;</p>
                        <p>
                        Already have a user account? <Link to="/signin">Click here</Link> to sign
                        in!
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default UserSignUp;