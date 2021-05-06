
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-upper-section">
        <div id="footer-option-list">
          <h5 className="light-text">Open Source</h5>
          <ul type="none">
            <li>
              <a href="https://www.github.com/DesignSystemsOSS/getresume.io" target="_blank" className="footer-option">GitHub</a>
            </li>
            <li>
              <a href="#" className="footer-option">Community Guidelines</a>
            </li>
            <li>
              <a href="https://designsystemsoss.github.io" target="_blank" className="footer-option">The DesignSystems</a>
            </li>
            <li>
              <a href="#" target="_blank" className="footer-option">Contribution</a>
            </li>
            <li>
              <a href="#" target="_blank" className="footer-option">License</a>
            </li>
          </ul>
        </div>

        <div id="footer-option-list">
          <h5 className="light-text">The DesignSystems</h5>
          <ul type="none">
            <li>
              <a href="https://www.github.com/DesignSystemsOSS/" className="footer-option">GitHub</a>
            </li>
            <li>
              <a href="#" target="_blank" className="footer-option">Community Guidelines</a>
            </li>
            <li>
              <a href="https://designsystemsoss.github.io/eccentrictouch.website.frontend" target="_blank" className="footer-option">Eccentric Touch</a>
            </li>
            <li>
              <a href="https://designsystemsoss.github.io/eccentrictouch.docs" target="_blank" className="footer-option">Eccentric Touch Docs</a>
            </li>
            <li>
              <a href="https://github.com/DesignSystemsOSS/eccentrictouch/blob/master/LICENSE" target="_blank" className="footer-option">License</a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="Footer-lower-section">
        Designed and Developed by The DesignSystems Community
      </div> */}
    </div>
  )
};

export default Footer;