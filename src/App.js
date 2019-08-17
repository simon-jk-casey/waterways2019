import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';

import Login from './components/login/Login'
import Landing from './components/landing/Landing'

function App() {
  return (
  <Router>
    <Route exact path='/' component={Login} />
    <Route exact path='/landing' component={Landing} />
  </Router>
  );
}

export default App;
