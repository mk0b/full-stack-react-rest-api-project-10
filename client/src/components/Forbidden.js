//stateless functional component
//exceeds
import React, { Fragment } from 'react';
import Header from './Header';

const Forbidden = () => (
    <Fragment>
        <Header />
        <div className="bounds">
            <h1>Forbidden</h1>
            <p>Oh oh! You can't access this page.</p>
        </div>
    </Fragment>
);

export default Forbidden;