//stateful class component
//TODO: redirects users to the /notfound path 
//if the requested course isn't returned from the REST API.

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';

//TODO: add the associated user info with userInfo (at least for the By) data or get it from who is authorized?
//TODO: Fix the formatting for description and materitals needed.
//TODO: Delete course needs to immediately send a delete to the API need to make it a mini form?

class CourseDetail extends Component {
    //setting up state
    constructor(props) {
        super(props);
        this.state = {
            courseDetail: {}
        }
    }

    //api call to get the specific course id that was clicked
    apiCall = (courseId) => {
        axios.get(`http://localhost:5000/api/courses/${courseId}`)
        .then(response => {
            console.log(response)
            this.setState({
                courseDetail: response.data
            });
        })
        .catch(error => {
            console.log('Error fetching and parsing data: ', error);
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params; 
        this.apiCall(id);
    }

    render() {
        console.log(this.state.courseDetail);
        const { id, title, description, estimatedTime, materialsNeeded } = this.state.courseDetail;
        return (
            <Fragment>
                <Header />
                <div>
                    <div className="actions--bar">
                    <div className="bounds">
                        <div className="grid-100">
                        <span>
                            <a className="button" href={`/courses/${id}/update`}>
                            Update Course
                            </a>
                            <a className="button" href="#">
                            Delete Course
                            </a>
                        </span>
                        <a className="button button-secondary" href="/">
                            Return to List
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="bounds course--detail">
                    <div className="grid-66">
                        <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <h3 className="course--title">{title}</h3>
                        <p>By person here</p>
                        </div>
                        <div className="course--description">
                        <p>
                            {description}
                        </p>
                        </div>
                    </div>
                    <div className="grid-25 grid-right">
                        <div className="course--stats">
                        <ul className="course--stats--list">
                            <li className="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <h3>{estimatedTime}</h3>
                            </li>
                            <li className="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <ul>
                                {materialsNeeded}
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CourseDetail;