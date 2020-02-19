//stateful class component
//TODO: redirects users to the /notfound path 
//if the requested course isn't returned from the REST API.

import React, { Component, Fragment } from 'react';
import axios from 'axios';

class CourseDetail extends Component {
    //setting up state
    constructor(props) {
        super(props);
    }

    apiCall = () => {
        axios.get('')
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
        return (
            <Fragment></Fragment>
        );
    }

}

export default CourseDetail;