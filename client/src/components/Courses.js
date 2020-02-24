//stateful class component
import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Courses extends Component {
    //setting up state
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    //all courses api call
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
    }
    
    componentDidMount() {
        this.apiCall();
    }

    render() {
        //TODO: Remove test
        console.log('Courses', this.state.courses);
        const courses = this.state.courses;
        //using map to create a new array that I can include below
        //to add all of the courses in the db
        //FIXME: I am getting a unique key prop warning but it's not a list so I can't figure out where it wants me to put it.
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
                <div className="bounds">
                    {coursesArray}
                    <div className="grid-33">
                    <a
                        className="course--module course--add--module"
                        href="/courses/create"
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