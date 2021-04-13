import React from 'react'
import LoginActivity from './pages/LoginActivity';
import SignupActivity from './pages/SignupActivity';
import App from './App';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

const GetResume = () => {
  return (
    <div className="GetResume">
      <Header />
        <Router>
          <Route path="/" exact component={App} />
          <Route path="/home" exact component={App} />
          <Route path="/getresume.io" exact component={App} />
          <Route path="/login" exact component={LoginActivity} />
          <Route path="/signup" exact component={SignupActivity} />
        </Router>
      <Footer />
    </div>
  )
};

export default GetResume;