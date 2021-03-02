import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import './footer.css'
function Footer () {
  return (
    <div className="footer">
      <div className="container">
    <hr />
    </div>
      <div className="inline">
        <div className="icon">
          <a href="https://github.com/akwanmtl" target="_blank"  rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faGithubSquare}/>
          </a>
        </div>
        
        <div className="icon">
          <a href="www.linkedin.com/in/anniekwan1991" target="_blank"  rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </div>
        
        <div className="icon">
          <a href="mailto:akwan.mtl@gmail.com" target="_blank"  rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faEnvelopeSquare}/>
          </a>
        </div>
      </div>
      
      <div className="copyright">
      © Annie Kwan
      </div>
    </div>
  )
}

export default Footer;