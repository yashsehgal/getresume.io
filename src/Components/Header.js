
import { HashRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
    <HashRouter basename="/">
      <Link to="/">
        <a className="logo">GetResume.io</a>
      </Link>
      <div className="header_options">
        <Link to="/">
          <a className="option">Home</a>
        </Link>
        <Link to="/create-resume">
          <a className="option">Create Resume</a>
        </Link>
        <a href="https://www.github.com/DesignSystemsOSS/getresume.io" className="option" target="_blank">GitHub</a>
        <Link to="/login">
          <a className="option">Login</a>
        </Link>
        <Link to="/signup">
          <a className="option">Create an Account</a>
        </Link>
      </div>
    </HashRouter>
    </div>
  )
};

const ProfileHeader = () => {
  return (
    <div className="Header">
      <a href="/" className="logo">GetResume.io</a>
      <div className="header_options">
        <a href="/" className="option">Home</a>
        <a href="/create-resume" className="option">Create Resume</a>
        <a href="https://www.github.com/DesignSystemsOSS/getresume.io" className="option" target="_blank">GitHub</a>
      </div>
    </div>
  )
};

export default Header;