import React from 'react';
import profilepic from "../../assets/profilepic.png";
import './home.css';

function Home () {
  return(
    <div>
      <div className='text-center'>
      <h1 className="intro">Hi, I'm Annie Kwan!</h1>

      <img src={profilepic} alt="Annie Kwan" className="profile-pic"></img>
      </div>
      <div className='profile-bio'>
      I'm a full stack web developer with a vast experience in customer support and troubleshooting. Originally from Montréal, I am currently based in Toronto. Currently enrolled in Coding Bootcamp at UofT, I have gained skills in full stack development and highly proficient in Javascript, NodeJS, APIs, Express and MySQL.
      </div>
      <div className='profile-bio'>
      I have always had an interest in developing applications that simplify tasks. Prior to the Bootcamp, I have built a website with a goal to make language-exchange more interactive and a Matlab-based GUI to visualize and analyze data. Now, I have gained more knowledge and skills and have built applications geared towards aspiring cooks and book lovers to further expand their hobbies. You can find all my projects here
      </div>
      <div className='profile-bio'>
      When you don't find me working, you can find me in the kitchen baking sweet treats or outside enjoying a nice long walk. I also enjoy playing video games, in particular, Smash Bros and I'm always looking for friendly competition.
      </div>
    </div>
  )
}

export default Home;