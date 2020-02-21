//stateless functional component
//exceeds
import React, { Fragment } from 'react';
import Header from './Header';

const NotFound = () => (
    <Fragment>
        <Header />
        <div className="bounds">
            <h1>Not Found</h1>
            <p>Sorry! We couldn't find the page you're looking for.</p>
        </div>
    </Fragment>
);

export default NotFound;