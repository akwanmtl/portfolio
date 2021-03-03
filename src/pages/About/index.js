import React from 'react';
import './about.css';
import { Link } from "react-router-dom"; 
import Header from '../../components/Header';
import {Animated} from "react-animated-css";

function About () {
  return(
    <div>
      <Animated animationIn="pulse" animationOut="fadeOut" isVisible={true}>
    
      <Header title="About Me"/>
      <div className='profile-bio'>
      I'm a full stack web developer with a vast experience in customer support and troubleshooting. Originally from Montréal, I'm currently based in Toronto. Currently enrolled in Coding Bootcamp at UofT, I have gained skills in full stack development and highly proficient in React, Javascript, NodeJS, APIs, Express and MySQL.
      </div>
      <div className='profile-bio'>
      I have always had an interest in developing applications that simplify tasks. Prior to the Bootcamp, I have built a website with a goal to make language-exchange more interactive and a Matlab-based GUI to visualize and analyze data. Now, I have gained more knowledge and skills and have built applications geared towards aspiring cooks and book lovers to further expand their hobbies. You can find all my projects <span><Link to="/projects">here</Link></span>
      </div>
      <div className='profile-bio'>
      When you don't find me working, you can find me in the kitchen baking sweet treats or outside enjoying a nice long walk. I also enjoy playing video games, in particular, Smash Bros and I'm always looking for a friendly competition.
      </div>
      
    </Animated>
    </div>
  )
}

export default About;