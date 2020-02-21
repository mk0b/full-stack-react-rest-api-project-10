//stateless functional component
//exceeds
import React, { Fragment } from 'react';
import Header from './Header';

const UnhandledError = () => (
    <Fragment>
        <Header />
        <div className="bounds">
            <h1>Error</h1>
            <p>Sorry! We just encountered an unexpected error.</p>
        </div>
    </Fragment>
);

export default UnhandledError;