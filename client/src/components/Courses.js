//stateful class component
import React, { Component, Fragment } from 'react';
import axios from 'axios';

//TODO: Use NavLink in here? Maybe not.
//TODO: Make the courses call. 
//Iterate for every course the JSX for showing the course.

class Courses extends Component {
    //setting up state
    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
    }

    //api call
    apiCall = () => {
        axios.get('http://localhost:5000/api/courses')
        .then(response => {
            console.log(response)
            this.setState({
                courses: response.data
            });
        })
        .catch(error => {
            console.log('Error fetching and parsing data: ', error);
        });
    };
    //component did mount?
    componentDidMount() {
        this.apiCall();
    }

    render() {
        console.log('Courses', this.courses);
        const courses = this.courses;
        const coursesArray = courses.map(course => {
            return (
                <div className="grid-33">
                <a className="course--module course--link" href={`/courses/${course.id}`}>
                    <h4 className="course--label">Course</h4>
                    <h3 className="course--title">{course.title}</h3>
                </a>
                </div>
            );
        });



        return (
            <Fragment>
                <div className="header">
                    <div className="bounds">
                    <h1 className="header--logo">Courses</h1>
                    <nav>
                        <a className="signup" href="sign-up.html">
                        Sign Up
                        </a>
                        <a className="signin" href="sign-in.html">
                        Sign In
                        </a>
                    </nav>
                    </div>
                </div>
                <hr />
                {coursesArray}
                <div className="bounds">
                    <div className="grid-33">
                    <a className="course--module course--link" href="course-detail.html">
                        <h4 className="course--label">Course</h4>
                        <h3 className="course--title">Build a Basic Bookcase</h3>
                    </a>
                    </div>
                    <div className="grid-33">
                    <a className="course--module course--link" href="course-detail.html">
                        <h4 className="course--label">Course</h4>
                        <h3 className="course--title">Learn How to Program</h3>
                    </a>
                    </div>
                    <div className="grid-33">
                    <a className="course--module course--link" href="course-detail.html">
                        <h4 className="course--label">Course</h4>
                        <h3 className="course--title">Learn How to Test Programs</h3>
                    </a>
                    </div>
                    <div className="grid-33">
                    <a
                        className="course--module course--add--module"
                        href="create-course.html"
                    >
                        <h3 className="course--add--title">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 13 13"
                            className="add"
                        >
                            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 " />
                        </svg>
                        New Course
                        </h3>
                    </a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Courses;