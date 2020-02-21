//stateful class component
//TODO: If an unauthenticated user is redirected to the sign in page, the UserSignIn component redirects users back to 
//the previous screen after successfully signing in.

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';

//The defaultValue were causing things to be weird I took them out

class UserSignIn extends Component {
    //setting up state
    constructor(props) {
        super(props);
    }

    onCancel = event => {
        event.preventDefault(); 
        //FIXME: Figure out why this isn't working. Also once working fix in other places in app.
        //location.href = '/';
    }

    render() {

        return (
            <Fragment>
                <Header />
                <div className="bounds">
                    <div className="grid-33 centered signin">
                        <h1>Sign In</h1>
                        <div>
                        <form>
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
                            <div className="grid-100 pad-bottom">
                            <button className="button" type="submit">
                                Sign In
                            </button>
                            <button
                                className="button button-secondary"
                                onClick={this.onCancel}
                            >
                                Cancel
                            </button>
                            </div>
                        </form>
                        </div>
                        <p>&nbsp;</p>
                        <p>
                        Don't have a user account? <a href="/signup">Click here</a> to sign
                        up!
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default UserSignIn;