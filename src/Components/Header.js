
const Header = () => {
  return (
    <div className="Header">
      <a href="/home" className="logo">GetResume.io</a>
      <div className="header_options">
        <a href="/home" className="option">Home</a>
        <a href="" className="option">Create Resume</a>
        <a href="https://www.github.com/DesignSystemsOSS/getresume.io" className="option" target="_blank">GitHub</a>
        <a href="/login" className="option">Login</a>
        <a href="/signup" className="option">Create an Account</a>
      </div>
    </div>
  )
};

export default Header;