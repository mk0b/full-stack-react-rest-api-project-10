//chose to make this a pure component modeling after the React Auth course
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

//TODO: Displays the top menu bar for the application and 
//includes buttons for signing in and signing up (if there's 
//not an authenticated user) or the user's first and last name 
//and a button for signing out (if there's an authenticated user).

//TODO: Use custom highlight and make the word color a different color when highlighted.
//TODO: Make a wand icon to go next to courses or to use in other places in the site. Favicon?!

//TODO: Add the needed if statement!!

//original course logo: <h1 className="header--logo">Courses</h1>

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
