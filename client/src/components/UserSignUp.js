//stateful class component
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';

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
            password
        } = this.state;

        //new user payload
        //will be passed to createUser()
        const user = {
            firstName,
            lastName,
            emailAddress,
            password
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
        return (
            <Fragment>
                <Header />
                <div className="bounds">
                    <div className="grid-33 centered signin">
                        <h1>Sign Up</h1>
                        <div>
                        <form>
                            <div>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                className
                                placeholder="First Name"
                            />
                            </div>
                            <div>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                className
                                placeholder="Last Name"
                            />
                            </div>
                            <div>
                            <input
                                id="emailAddress"
                                name="emailAddress"
                                type="text"
                                className
                                placeholder="Email Address"
                            />
                            </div>
                            <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className
                                placeholder="Password"
                            />
                            </div>
                            <div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                className
                                placeholder="Confirm Password"
                            />
                            </div>
                            <div className="grid-100 pad-bottom">
                            <button className="button" type="submit">
                                Sign Up
                            </button>
                            <button
                                className="button button-secondary"
                                onclick="event.preventDefault(); location.href='/';"
                            >
                                Cancel
                            </button>
                            </div>
                        </form>
                        </div>
                        <p>&nbsp;</p>
                        <p>
                        Already have a user account? <a href="/signin">Click here</a> to sign
                        in!
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default UserSignUp;