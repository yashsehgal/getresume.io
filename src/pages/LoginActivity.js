
import '../css/LoginActivityStyle.css';

const LoginActivity = () => {
  return (
    <div className="LoginActivity">
      <div id="form-container">
        <h2 className="headline">We are glad to see you again!</h2>
        <p className="title-description">Please log in to your account and create wonderful resumes</p>
        <form method="GET" className="FormActivity">
          <p className="title-description">Don't have an account? <a href="/signup">Create one</a></p>
          <label for="user_id" className="form-input-label">Username or Email Address</label>
          <input type="email" className="form-input" name="user_id" placeholder="Enter your Username or Email Address" />
          <label for="password" className="form-input-label">Password</label>
          <input type="password" className="form-input" name="password" placeholder="Enter your Password" />
          <input type="checkbox" className="form-input-checkbox" name="check_to_keep_signed_in" />
          <span>
            Keep me Logged In
          </span>
          <div id="button_layer">
            <button type="submit" className="dark">Login</button>
            <input type="reset" value="Clear" className="light"/>
          </div>
        </form>
      </div>
    </div>
  )
};

export default LoginActivity;