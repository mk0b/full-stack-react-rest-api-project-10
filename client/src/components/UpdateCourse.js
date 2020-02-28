//stateful class component

//TODO: Redirects users to the /notfound path 
//if the requested course isn't returned from the REST API.
//Redirects users to the /forbidden path if 
//the requested course isn't owned by the authenticated user.

import React, { Component, Fragment } from 'react';
import Form from './Form';

class UpdateCourse extends Component {
    //setting up state
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            estimatedTime: '',
            materialsNeeded: '',
            userId: null,
            errors: []
        }
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            }
        });
    }

    submit = () => {
        const { context } = this.props;
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded
        } = this.state;

        //updated course payload
        const updateCourse = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId: context.authenticatedUser.id
        }

        const emailAddress = context.authenticatedUser.emailAddress;
        const password = context.authenticatedUser.password;
        console.log('Creds: ', emailAddress, password);

        //TODO: Setup context api call here
    }

    cancel = () => {
        //redirecting back to the main public page /
        this.props.history.push('/');
    }

    render() {
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            errors
        } = this.state;
        
        //FIXME: half the form is supposed to be to the right. It's on the right but below the rest. Figure out what I funked up.
        return (
            <Fragment>
                <div className="bounds course--detail">
                    <h1>Create Course</h1>
                    <div className="grid-66">
                        <Form 
                            cancel={this.cancel}
                            errors={errors}
                            submit={this.submit}
                            submitButtonText="Create Course"
                            elements={() => (
                                <Fragment>
                                    <div className="course--header">
                                        <h4 className="course--label">Course</h4>
                                        <input 
                                            id="title"
                                            name="title"
                                            type="text"
                                            value={title}
                                            onChange={this.change}
                                            placeholder="Course title..." />
                                    <p>By Joe Smith</p>
                                    </div>
                                    <div className="course--description">
                                        <textarea 
                                            id="description"
                                            name="description"
                                            className="desc"
                                            value={description}
                                            onChange={this.change}
                                            placeholder="Course description..." />
                                    </div>
                                    <div className="grid-25 grid-right">
                                        <div className="course--stats">
                                            <ul className="course--stats--list">
                                                <li className="course--stats--list--item">
                                                    <h4>Estimated Time</h4>
                                                    <Fragment>
                                                        <input 
                                                            id="estimatedTime"
                                                            name="estimatedTime"
                                                            type="text"
                                                            className="course--time--input"
                                                            value={estimatedTime}
                                                            onChange={this.change}
                                                            placeholder="Hours" />
                                                    </Fragment>
                                                </li>
                                                <li className="course--stats--list--item">
                                                    <h4>Materials Needed</h4>
                                                    <Fragment>
                                                    <textarea 
                                                        id="materialsNeeded"
                                                        name="materialsNeeded"
                                                        className="materials"
                                                        value={materialsNeeded}
                                                        onChange={this.change}
                                                        placeholder="List materials..." />
                                                    </Fragment>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>   
                            </Fragment> )} />
                </div>
            </div>
        </Fragment>
        );
    }
}

export default UpdateCourse;