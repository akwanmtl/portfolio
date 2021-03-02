import React from 'react';
import profilepic from "../../assets/profilepic.png";
import './home.css';

function Home () {
  return(
    <div>
      <div className='text-center'>
      <h1 className="intro">Hi, I'm Annie Kwan.</h1>

      <img src={profilepic} alt="Annie Kwan" className="profile-pic img-fluid"></img>
      </div>
      <div className='home-bio'>
      I'm a full stack web developer. 
      </div>
     
    </div>
  )
}

export default Home;