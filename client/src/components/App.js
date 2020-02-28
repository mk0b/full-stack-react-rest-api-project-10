import React from 'react';
import '../css/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//importing components
import Header from './Header';
import Courses from './Courses';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import CourseDetail from './CourseDetail';
import UserSignUp from './UserSignUp';
import UserSignIn from './UserSignIn';
import NotFound from './NotFound';
import UnhandledError from './UnhandledError';
import Forbidden from './Forbidden';
import UserSignOut from './UserSignOut';
import PrivateRoute from './PrivateRoute';

//importing for userauth
import withContext from './Context';
//connects user sign up with context api
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const HeaderWithContext = withContext(Header);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CourseDetailWithContext = withContext(CourseDetail);

//TODO: Components redirect users to the /error path when requests to 
//the REST API return a "500 Internal Server Error" HTTP status code.

//TODO: Put back PrivateRoute to create course and update course. Need to remove because it wont let me see this page even though I am signed in.

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <HeaderWithContext />
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route path="/signup" component={UserSignUpWithContext} />
          <Route path="/signin" component={UserSignInWithContext} />
          <Route path="/courses/create" component={CreateCourseWithContext} />
          <Route path="/courses/:id/update" component={UpdateCourseWithContext} />
          <Route path="/courses/:id" component={CourseDetailWithContext} />
          <Route path="/error" component={UnhandledError} />
          <Route path="/forbidden" component={Forbidden} />
          <Route path="/signout" component={UserSignOutWithContext} />
          <Route path="/notfound" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
