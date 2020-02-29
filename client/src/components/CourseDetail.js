//stateful class component

import React, { Component, Fragment } from 'react';
const ReactMarkdown = require('react-markdown');

//TODO: add the associated user info with userInfo (at least for the By) data or get it from who is authorized?
//TODO: Update Course and Delete Course buttons only show if there is an authenticated user.

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

    render() {
        console.log(this.state.courseDetail);
        const { context } = this.props;
        const authUser = context.authenticatedUser;
        console.log(authUser);
        const { id, title, description, estimatedTime, materialsNeeded, userInfo} = this.state.courseDetail;
        console.log(userInfo);
        //was able to figure out how to access the nested object because of this article: https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f
        const userName = userInfo ? `${userInfo.firstName} ${userInfo.lastName}` : null;
        console.log(userName);
        return (
            <Fragment>
                <div>
                    <div className="actions--bar">
                    {authUser ? (
                            <Fragment>
                            <div className="bounds">
                                <div className="grid-100">
                                <span>
                                    <a className="button" href={`/courses/${id}/update`}>
                                    Update Course
                                    </a>
                                    <button onClick={this.onDelete} className="button">
                                    Delete Course
                                    </button>
                                </span>
                                <a className="button button-secondary" href="/">
                                    Return to List
                                </a>
                                </div>
                            </div>
                            </Fragment>
                        ) : (
                            <Fragment>
                            <div className="bounds">
                                <div className="grid-100">
                                <a className="button button-secondary" href="/">
                                    Return to List
                                </a>
                                </div>
                            </div>
                            </Fragment>
                        )}
                    </div>
                    <div className="bounds course--detail">
                    <div className="grid-66">
                        <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <h3 className="course--title">{title}</h3>
                        <p>By {userName} </p>
                        </div>
                        <div className="course--description">
                        <div>
                            <ReactMarkdown source={description} />
                        </div>
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

export default CourseDetail;