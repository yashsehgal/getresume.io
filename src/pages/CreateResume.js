
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
                <form action="getProfileURL();">
                  <a onClick="getProfileURL('github');">
                    <i className="fab fa-github"></i>
                  </a>
                  <a onClick="getProfileURL('linkedin');">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a onClick="getProfileURL('twitter');">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a onClick="getProfileURL('portfolio');">
                    <i class="fas fa-globe"></i>
                  </a>
                  <a onClick="getProfileURL('behance');">
                    <i className="fab fa-behance"></i>
                  </a>
                  <a onClick="getProfileURL('dribble');">
                    <i className="fab fa-dribbble"></i>
                  </a>
                  </form>
              </div>
            </div>
            <input type="url" className="form-input" id="profile_url" />

          </form>
        </div>
        
        {/* Resume Demo Section */}
        <div className="ResumePreviewSection">

        </div>
      </div>
    </div>
  )
  
};

const getProfileURL = (profile_name) => {
  if (profile_name != '\0' && profile_name =='github') {
    document.getElementById('profile_url').placeholder = "Enter your GitHub Profile URL";
    console.log("this block is running");
  }
}

export default CreateResume;
