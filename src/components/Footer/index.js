import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt, faMobileAlt, faSms, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Resume from '../../assets/Annie_Kwan_Resume.pdf'
import './footer.css'

function Footer () {
  return (
    <div className="footer">
      <div className="container">
    <hr />
    </div>
      <div className="inline">
      <div className="icon">
          <a href="https://github.com/akwanmtl" target="_blank"  rel="noopener noreferrer"  title="Github">
          <FontAwesomeIcon icon={faGithub}/>
          </a>
        </div>
        
        <div className="icon">
          <a href="https://www.linkedin.com/in/annie--kwan/" target="_blank"  rel="noopener noreferrer"  title="Linkedin">
          <FontAwesomeIcon icon={faLinkedinIn}/>
          </a>
        </div>
        
        <div className="icon">
          <a href="mailto:akwan.mtl@gmail.com" target="_blank"  rel="noopener noreferrer" title="Email" >
          <FontAwesomeIcon icon={faAt}/>
          </a>
        </div>
        
        <div className="icon">
          <a href="tel:514-961-3104" target="_blank"  rel="noopener noreferrer" title="Phone">
          <FontAwesomeIcon icon={faMobileAlt}/>
          </a>
        </div>

        <div className="icon">
          <a href="sms:514-961-3104" target="_blank"  rel="noopener noreferrer" title="SMS">
          <FontAwesomeIcon icon={faSms}/>
          </a>
        </div>

        <div className="icon">
        <a href={Resume} target="_blank"  rel="noopener noreferrer" className="cv" title="CV">
          <FontAwesomeIcon icon={faFilePdf}/>
          </a>
        </div>
      </div>
      
      <div className="copyright">
      Annie Kwan <span>© 2021 </span>
      </div>
    </div>
  )
}

export default Footer;
