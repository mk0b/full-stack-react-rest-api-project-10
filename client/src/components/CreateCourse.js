//stateful class component
import React, { Component, Fragment } from 'react';
import Form from './Form';

//The defaultValue were causing things to be weird I took them out

//TODO: Do something with the Validation erros code. 
//TODO: Can't test this without being logged in first.
//TODO: Fix onclick for the cancel button.
//TODO: Implement form here

class CreateCourse extends Component {
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
            };
        });
    }

    submit = () => {
        const { context } = this.props;
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId,
        } = this.state;

        //new course payload
        const newCourse = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId
        }

        //TODO: create new user using context 
    }

    render() {
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId,
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
                                        <h4 className="course--label">Course</h4>
                                        <textarea 
                                            id="description"
                                            name="description"
                                            className="desc"
                                            value={description}
                                            onChange={this.change}
                                            placeholder="Cousre description..." />
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

export default CreateCourse;