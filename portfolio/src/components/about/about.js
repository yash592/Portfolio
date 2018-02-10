//

import React from "react";
import "./about.css";

const About = () => (
  <div className = "about" id="abt">
        <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</h6>
            <div class="social-icons">
              <a href="https://github.com/yash592"><img className="social" src = "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_gray-64.png" /></a>
              <a href="https://www.linkedin.com/in/yashrajgor/"><img className="social" src = "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_gray-64.png" /></a>
              <a href="https://www.facebook.com/YashRajgor"><img className="social" src = "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_gray-64.png" /></a>
            </div>
  </div>
)

export default About;
