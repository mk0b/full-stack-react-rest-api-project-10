//stateful class component

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

//TODO: add the associated user info with userInfo (at least for the By) data or get it from who is authorized?
//TODO: Do the markdown formattingthing.
//TODO: redirects users to the /notfound path if the requested course isn't returned from the REST API.
//TODO: Update Course and Delete Course buttons only show if there is an authenticated user.
//TODO: The auth user id matches that of the user who owns the course.

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

    onDelete = event => {
        //use the id and insert into the api call for the delete function.
        console.log('Clicked: ', event.target);
        //send back to the / page after deletion
        if (window.confirm('Are you sure you want to delete this course? This action cannot be undone.')) {
            console.log('Delete Confirmed')
            const { id } = this.props.match.params;
            axios.delete(`http://localhost:5000/api/courses/${id}`)
            .then(response => {
                console.log('Response: ', response);
            })
            .catch(error => {
                console.log('Error deleting data: ', error);
            });
            //redirect back to home page
            //this.props.history.push('/');
        } else {
            console.log('Delete Canceled');
            
        }
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
                <div>
                    <div className="actions--bar">
                    <div className="bounds">
                        <div className="grid-100">
                        <span>
                            <a className="button" href={`/courses/${id}/update`}>
                            Update Course
                            </a>
                            <a onClick={this.onDelete} className="button" href="#">
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

export default withRouter (CourseDetail);