//stateful class component
import React, { Component, Fragment } from 'react';
import Header from './Header';
//TODO: Do I need axios here?

//The defaultValue were causing things to be weird I took them out

//TODO: Do something with the Validation erros code. 
//TODO: Can't test this without being logged in first.
//TODO: Fix onclick for the cancel button.

class CreateCourse extends Component {
    //setting up state
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {

        return (
            <Fragment>
                <Header />
                <div className="bounds course--detail">
                    <h1>Create Course</h1>
                    <div>
                    <div>
                        <h2 className="validation--errors--label">Validation errors</h2>
                        <div className="validation-errors">
                        <ul>
                            <li>Please provide a value for "Title"</li>
                            <li>Please provide a value for "Description"</li>
                        </ul>
                        </div>
                    </div>
                    <form action="http://localhost:5000/api/courses" method="post">
                        <div className="grid-66">
                        <div className="course--header">
                            <h4 className="course--label">Course</h4>
                            <div>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                className="input-title course--title--input"
                                placeholder="Course title..."
                            />
                            </div>
                            <p>By Joe Smith</p>
                        </div>
                        <div className="course--description">
                            <div>
                            <textarea
                                id="description"
                                name="description"
                                className="desc"
                                placeholder="Course description..."
                            />
                            </div>
                        </div>
                        </div>
                        <div className="grid-25 grid-right">
                        <div className="course--stats">
                            <ul className="course--stats--list">
                            <li className="course--stats--list--item">
                                <h4>Estimated Time</h4>
                                <div>
                                <input
                                    id="estimatedTime"
                                    name="estimatedTime"
                                    type="text"
                                    className="course--time--input"
                                    placeholder="Hours"
                                />
                                </div>
                            </li>
                            <li className="course--stats--list--item">
                                <h4>Materials Needed</h4>
                                <div>
                                <textarea
                                    id="materialsNeeded"
                                    name="materialsNeeded"
                                    className="materials"
                                    placeholder="List materials..."
                                />
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="grid-100 pad-bottom">
                        <button className="button" type="submit">
                            Create Course
                        </button>
                        <button
                            className="button button-secondary"
                            onclick="event.preventDefault(); location.href='/api/courses';"
                        >
                            Cancel
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default CreateCourse;