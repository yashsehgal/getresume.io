
import '../css/main.css';

const CreateResume = () => {
  return (
    <div className="CreateResume">

      <div id="resume-application">
        {/* Resume Details Section */}
        <div className="ResumeDetailsSection">
          <form>
            
            {/* Layer 01 */}
            <div id="form-layer">
              <div id="form-block">
                <label className="form-input-label" for="first-name">First Name</label>
                <input type="text" name="first-name" className="form-input-signup" id="first-name" placeholder="Enter your First Name" />
              </div>
              <div id="form-block">
                <label className="form-input-label" for="last-name">Last Name</label>
                <input type="text" name="last-name" className="form-input-signup" placeholder="Enter your Last Name" />
              </div>
            </div>

            {/* Layer 02 */}
            <div id="form-layer">
              <div id="form-block">
                  <a>
                    <i className="fab fa-github"></i>
                  </a>
                  <a>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a>
                    <i className="far fa-envelope"></i>
                  </a>
                  <a>
                    <i class="fas fa-globe"></i>
                  </a>
              </div>
            </div>

          </form>
        </div>
        
        {/* Resume Demo Section */}
        <div className="ResumePreviewSection">

        </div>
      </div>
    </div>
  )

};

export default CreateResume;
