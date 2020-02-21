//stateless functional component
import React, { Fragment } from 'react';

//TODO: Displays the top menu bar for the application and 
//includes buttons for signing in and signing up (if there's 
//not an authenticated user) or the user's first and last name 
//and a button for signing out (if there's an authenticated user).

//TODO: Make everything in here a NavLink make Courses clickable back to /
//TODO: Use custom highlight and make the word color a different color when highlighted.
//TODO: Make a wand icon to go next to courses or to use in other places in the site. Favicon?!

//TODO: Add the needed if statement!!

const Header = () => (
    <Fragment>
        <div className="header">
            <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
                <span>Welcome Joe Smith!</span>
                <a className="signout" href="/signout">
                Sign Out
                </a>
            </nav>
            </div>
        </div>
        <hr />
    </Fragment>
);

export default Header;
