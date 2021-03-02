import React from 'react';
import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';
import {Animated} from "react-animated-css";
function Contact () {
  return(
    <div>
      
      <Animated animationIn="pulse" animationOut="fadeOut" isVisible={true}>
    
      <Header title="Contact"/>
      <ContactForm/>
      </Animated>
    </div>
  )
}

export default Contact;