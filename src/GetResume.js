import React from 'react'
import LoginActivity from './pages/LoginActivity';
import SignupActivity from './pages/SignupActivity';
import PageNotFound from './pages/PageNotFound';
import App from './App';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

const GetResume = () => {
  return (
    <div className="GetResume">
      <Header />
        <Router>
          <Route exact path="/getresume.io/" component={App} />
          <Route exact path="/getresume.io/home" component={App} />
          <Route exact path="/getresume.io" component={App} />
          <Route exact path="/getresume.io/login"  component={LoginActivity} />
          <Route exact path="/getresume.io/signup" component={SignupActivity} />

          {/* Setting up the 404 PAGE NOT FOUND module using Routes */}
          {/* <Route component={PageNotFound} /> */}
        </Router>
      <Footer />
    </div>
  )
};

export default GetResume;