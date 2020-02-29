//chose to make this a pure component modeling after the React Auth course
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.PureComponent {

    render () {
        const { context } = this.props;
        const authUser = context.authenticatedUser;

        return (
            <Fragment>
                <div className="header">
                    <div className="bounds">
                    <NavLink className="header--logo" to="/">Courses</NavLink>
                    <nav>
                        {authUser ? (
                            <Fragment>
                                <span>Welcome, {`${authUser.firstName}  ${authUser.lastName}`}! </span>
                                <NavLink className="signout" to="/signout">Sign Out</NavLink>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <NavLink className="signup" to="/signup">Sign Up</NavLink>
                                <NavLink className="signin" to="/signin">Sign In</NavLink>
                            </Fragment>
                        )}
                    </nav>
                    </div>
                </div>
                <hr />
            </Fragment>
        );
    }
}

export default Header;
