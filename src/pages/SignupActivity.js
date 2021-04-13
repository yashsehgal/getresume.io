
import '../css/main.css';

const SignupActivity = () => {
  return (
    <div className="SignupActivity">
      <div id="form-container-signup">
        <h2 className="headline">Welcome! Hope you'll enjoy making Resume</h2>
        <p className="title-description">Create your GetResume Account and make wonderful Resumes</p>
        <form method="GET" className="FormActivity">
          <p className="title-description">Already have an account? <a href="/getresume.io/login">Login Instead</a></p>
          <div id="form-layer">
            <div id="form-block">
              <label className="form-input-label" for="first-name">First Name</label>
              <input type="text" name="first-name" className="form-input-signup" placeholder="Enter your First Name" />
            </div>
            <div id="form-block">
              <label className="form-input-label" for="last-name">Last Name</label>
              <input type="text" name="last-name" className="form-input-signup" placeholder="Enter your Last Name" />
            </div>
            <div id="form-block">
              <label className="form-input-label" for="username">Create a Username</label>
              <input type="text" name="username" className="form-input-signup" placeholder="Create a username for eg. johndoe_" />
            </div>
          </div>
          <div id="form-layer">
            <div id="form-block">
              <label className="form-input-label" for="email">Email Address</label>
              <input type="email" name="email" className="form-input-signup" placeholder="johndoe@test.com" />
            </div>
            <div id="form-block">
              <label className="form-input-label" for="contact-number">Contact Number</label>
              <input type="tel" name="contact-number" className="form-input-signup" placeholder="+01 234567890" />
            </div>
            <div id="form-block">
              <label className="form-input-label" for="contact-number">Select your Gender</label>
              <select className="gender-select">
                <option value="0" id="gender-option">Gender</option>
                <option value="1" id="gender-option">Male</option>
                <option value="2" id="gender-option">Female</option>
                <option value="3" id="gender-option">Not Specified</option>
                <option value="4" id="gender-option">Prefer Not to Select</option>
              </select>
            </div>
          </div>
          <div id="form-layer">
            <div id="form-block">
              <label className="form-input-label" for="password">Create a Password</label>
              <input type="password" name="password" className="form-input-signup" placeholder="Create a password for your account" />
            </div>
            <div id="form-block">
              <label className="form-input-label" for="password_confirm">Confirm Password</label>
              <input type="password" name="password_confirm" className="form-input-signup" placeholder="Confirm the password you've created" />
            </div>
          </div>
          <div id="button_layer">
            <button type="submit" className="dark">Create an Account</button>
            <input type="reset" className="light" value="Clear Everything"/>
          </div>
        </form>
      </div>
    </div>
  )
};

export default SignupActivity;