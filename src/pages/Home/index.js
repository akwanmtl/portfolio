import React from 'react';
import profilepic from "../../assets/profilepic.png";
import {Animated} from "react-animated-css";
import './home.css';
import Typed from 'react-typed';

function Home () {
  return(
    <div>
      
    <Animated animationIn="pulse" animationOut="fadeOut" isVisible={true}>
    
      <div className='text-center'>
      <h1 className="intro">Hi, I'm <span>Annie Kwan</span>.</h1>

      <img src={profilepic} alt="Annie Kwan" className="profile-pic img-fluid"></img>
      </div>
      <div className='home-bio'>
      I'm a full stack web developer.  
      </div>

      
      <div className='skills'>
      <Typed
          strings={["HTML" ,"CSS", "JavaScript", "JQuery" , "Bootstrap" ,"Node", "Express", "React", "MySQL", "MongoDB"]}
          typeSpeed={50}
          backSpeed={60}
          loop
        />
      </div>
    </Animated>
    </div>
  )
}

export default Home;