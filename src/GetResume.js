import React from 'react'
import LoginActivity from './pages/LoginActivity';
import SignupActivity from './pages/SignupActivity';
import PageNotFound from './pages/PageNotFound';
import App from './App';
import Header from './Components/Header';
import CreateResume from './pages/CreateResume';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter, Link } from "react-router-dom";


const GetResume = () => {
  return (
    <div className="GetResume">
      <Header />
        <HashRouter basename="/">
          <Route path="/" exact component={App} />
          <Route path="/login" exact component={LoginActivity} />
          <Route path="/signup" exact component={SignupActivity} />
          <Route path="/create-resume" exact component={CreateResume} />
          <Route path="/profile" exact component />
        </HashRouter>
          
      <Footer />
    </div>
  )
};

export default GetResume;