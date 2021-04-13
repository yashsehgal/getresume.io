
const Header = () => {
  return (
    <div className="Header">
      <a href="/getresume.io/" className="logo">GetResume.io</a>
      <div className="header_options">
        <a href="/getresume.io/" className="option">Home</a>
        <a href="/getresume.io/create-resume" className="option">Create Resume</a>
        <a href="https://www.github.com/DesignSystemsOSS/getresume.io" className="option" target="_blank">GitHub</a>
        <a href="/getresume.io/login" className="option">Login</a>
        <a href="/getresume.io/signup" className="option">Create an Account</a>
      </div>
    </div>
  )
};

export default Header;