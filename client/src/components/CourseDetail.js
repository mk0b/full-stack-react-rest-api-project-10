//stateful class component

import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
const ReactMarkdown = require('react-markdown');

//TODO: add the associated user info with userInfo (at least for the By) data or get it from who is authorized?
//TODO: redirects users to the /notfound path if the requested course isn't returned from the REST API.
//TODO: Update Course and Delete Course buttons only show if there is an authenticated user.
//TODO: The auth user id matches that of the user who owns the course.

class CourseDetail extends Component {
    //setting up state
    constructor(props) {
        super(props);
        this.state = {
            courseDetail: []
        }
    }

    componentDidMount() {
        const { context } = this.props;
        const { id } = this.props.match.params;
        context.data.getCourse(id)
        .then(course => {
            if (course) {
                console.log('Course data response: ', course);
                this.setState({
                    courseDetail: course
                });
            } else {
                this.props.history.push('/notfound');
            }
        })
        .catch(err => {
            console.log('Something went wrong: ', err);
            this.props.history.push('/error');
        });

    }

    onDelete = event => {
        //use the id and insert into the api call for the delete function.
        console.log('Clicked: ', event.target);
        if (window.confirm('Are you sure you want to delete this course? This action cannot be undone.')) {
            console.log('Delete Confirmed')
            //grabbing the id of the course from the url
            const { id } = this.props.match.params;
            const { context } = this.props;
            //getting the email and password of current auth user
            const emailAddress = context.authenticatedUser.emailAddress;
            const password = context.authenticatedUser.password

            //make the call using the method in data via context
            context.data.deleteCourse(id, emailAddress, password)
            .catch(err => {
                console.log('Something went wrong: ', err);
                this.props.history.push('/error');
            });
            //redirect back to home page
            this.props.history.push('/');
        } else {
            console.log('Delete Canceled');
            
        }
    }

    //FIXME: Switch the delete link to a button? Getting a warning in the log.
    render() {
        const { id, title, description, estimatedTime, materialsNeeded } = this.state.courseDetail;
        //TODO:  Add back user and put an if statement in the {} if user exists then display the first name and last name.
        //I don't know why it's showing up as undefined.
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
                            <a onClick={this.onDelete} className="button">
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
                        <p>By {}</p>
                        </div>
                        <div className="course--description">
                        <p>
                            <ReactMarkdown source={description} />
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
                                <ReactMarkdown source={materialsNeeded} />
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