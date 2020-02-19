import React from 'react';
import '../css/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//TODO: Add back Redirect if needed ^


//importing components
import Courses from './Courses';
import CreateCourse from './CreateCourse';
/* 
import UpdateCourse from './UpdateCourse';
import CourseDetail from './CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';
import UserSignOut from './UserSignOut';
import NotFound from './NotFound';
import Forbidden from './Forbidden';
import UnhandledError from './UnhandledError'; */

//TODO: Components redirect users to the /error path when requests to 
//the REST API return a "500 Internal Server Error" HTTP status code.

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Courses}/>
          <Route path="/courses/create" component={CreateCourse}/>
{/*           
          <Route path="/courses/:id/update" component={UpdateCourse}/>
          <Route path="/courses/:id" component={CourseDetail}/>
          <Route path="/signin" component={UserSignIn}/>
          <Route path="/singup" component={UserSignUp}/>
          <Route path="/signout" component={UserSignOut}/>
          <Route path="/forbidden" component={Forbidden}/>
          <Route path="/error" component={UnhandledError}/>
          <Route path="/notfound" component={NotFound}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
