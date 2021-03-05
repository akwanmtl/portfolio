import React from 'react';
import './contactform.css'

function ContactForm (props) {
  return (
    <div className="row p-3">
      <div className="contact-text">
      If you have a question or would like to connect, you can fill the form below.
      You can message me directly at <span>akwan.mtl@gmail.com</span> or at <span>514-961-3104</span>.
      </div>
      <form className="col-xs-12 col-sm-9" onSubmit={props.submitForm}
      action="https://formspree.io/f/xknplpze"
      method="POST"
      >

          <div className="form-group">
              <input type="name" className="form-control" name="name" aria-describedby="contactname" placeholder="Name" vonChange={props.handleInputChange} required/>
          </div>

          <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email" onChange={props.handleInputChange}  required/>
          </div>

          <div className="form-group">
              <textarea className="form-control" name="message" rows="3" placeholder="Message" onChange={props.handleInputChange} required></textarea>
          </div>
          <div className="div-button">

            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
      </form>

    </div>
  )
}

export default ContactForm;