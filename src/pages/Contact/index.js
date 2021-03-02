import React, {useState} from "react";
import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';
import {Animated} from "react-animated-css";
function Contact () {

  const [status, setStatus] = useState("");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const submitForm= (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setContact({
          name: "",
          email: "",
          message: ""
        })
        setStatus({ status: "SUCCESS" });
      } else {
        setStatus({ status: "ERROR" });
      }
      console.log(status)
    };
    xhr.send(data);
  }

  const handleInputChange = event => {
    const {name, value} = event.target;
    console.log(name, value)
    setContact({ [name]: value});
  };
  return(
    <div>
      
      <Animated animationIn="pulse" animationOut="fadeOut" isVisible={true}>
    
      <Header title="Contact"/>
      <ContactForm submit={submitForm} onchange={handleInputChange} name={contact.name} email={contact.email} message={contact.message}/>
      </Animated>
    </div>
  )
}

export default Contact;