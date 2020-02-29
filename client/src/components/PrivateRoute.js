//private route component
//stateless component
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

//destructuring component and using context. if authenticatedUser exists
//let user see the page. if auth user doesn't exist user gets redirected to sign in.
export default ({ component: Component, ...rest }) => {
    
    return (
        <Consumer>
            {context => (
                <Route 
                    {...rest}
                    render={props => context.autheticatedUser ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{
                            pathname: '/signin',
                            state: { from: props.location }
                            }} />
                        )
                    }
                />
            )}
        </Consumer>
    );
};

