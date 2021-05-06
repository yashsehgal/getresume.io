
import './css/main.css';
import { HashRouter, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <div id="landing-section" className="section">
          <h1 className="center">Get Perfect Resumes in <br /> just one click</h1>
          <Link to="/create-resume/">
            <button className="dark center-button">Create your first Resume <i className="fas fa-arrow-right" id="arrow-in-button"></i></button>
          </Link>
          {/* Demo Resume Container */}
          <div className="demo_resume">
            <div id="demo-resume-header">
              <h2 id="demo-name">John Doe</h2>
              <p id="demo-title">Software Developer. UI Designer</p>
              <div id="social-icons">
                <i className="fab fa-github"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-behance"></i>
                <i className="fab fa-twitter"></i>
                <i className="far fa-envelope"></i>
              </div>
            </div>
            <div className="demo-resume-inner-content">
              <div id="skills-section">
                <h2 id="demo-skill-title">Skills</h2>
                <p id="demo-skills">Python, JavaScript, C/C++, HTML, CSS/SCSS</p>
                <p id="demo-skills">Frontend, JSON, Git/GitHub</p>
              </div>  {/** End of Skills Container */}
              <div id="demo-educational-details">
                <h2 id="demo-educational-title">Education</h2>
                <div id="demo-education-container">
                  <h3>Bachelors of Technology (Computer Science and Engineering)</h3>
                  <p id="demo-college-name">By, University Name</p>
                </div>
              </div>
            </div>
          </div>    {/* End of Demo Resume Container */}

          <div id="features-section" className="section">
            <div id="inner-feature-section">
              <h2>Easy PDF Downloading feature. Create and Download <br />in PDF Format.</h2>
              <p className="description left">
                Create resumes which are pleasant in design and looks good to the recruiters. 
                You can select from various color options and themes, layouts and download for 
                free. You just need to log in first.
              </p><br /><br /><br /><br /><br /><br />
              <Link to="/create-resume">
                <button className="dark" id="demo-button">Create your first Resume <i className="fas fa-arrow-right" id="arrow-in-button"></i></button>
              </Link>
            </div>
            <div id="inner-feature-section">
              <div className="demo-card">
                <div className="flex">
                  <i className="fas fa-file-pdf"></i>
                  <i className="fas fa-download"></i>
                </div>
                <b>
                  <p id="demo-card-title">Save as PDF</p>
                </b>
              </div> {/** End of Demo Card */}
            </div>
          </div>    {/** End of Features Section */}

          {/* Notification Section for Open Source Contribution */}
          <div className="notification">
            <h2>Want to Contribute to this project? 👀</h2>
            <p>Well, I should tell you that this project is open sourced under The DesignSystems Community. Feel free, It's your project!
              Visit the GitHub Repository of this project and read the contribution guidelines and Let's get started! 👍
            </p>
            <div id="button_layer">
              <Link to="https://github.com/DesignSystemsOSS/getresume.io">
                <button className="dark">
                  Check GitHub Source Code
                </button>
              </Link>
              <button className="light">
                <a href="">
                  Read CONTRIBUTING.md <i className="fas fa-arrow-right" id="arrow-in-button-dark"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
