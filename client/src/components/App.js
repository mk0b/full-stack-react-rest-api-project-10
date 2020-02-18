import React from 'react';
import '../css/index.css';
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
      <p>Project 10.</p>
    </div>
  );
}

export default App;
