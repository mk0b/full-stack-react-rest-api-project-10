import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

//TODO: Components redirect users to the /error path when requests to 
//the REST API return a "500 Internal Server Error" HTTP status code.

//testing the the CORS worked and I can get data from the backend api
const apiCall = () => {
  axios.get('http://localhost:5000/api/courses')
  .then(course => console.log(course))
  .catch(error => {
    console.log('Error fetching and parsing data: ', error);
  });
};

//making the test api call
apiCall();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
