import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup/Signup.js';
import Login from './pages/Login/Login';
import HomePage from './pages/HomePage/HomePage.js';
import DoctorDetails from './pages/Doctor_details/Doctor_details.js';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={HomePage} />
          <Route exact path="/profile" component={DoctorDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
