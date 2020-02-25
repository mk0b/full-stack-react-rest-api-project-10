//stateless functional component

//TODO: The component signs out the authenticated 
//user and redirects the user to the default route 
//(i.e. the list of courses).

import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

const UserSignOut = ({ context }) => {
    context.actions.signOut();

    return(
        <Redirect to="/" />
    );
}

export default UserSignOut;