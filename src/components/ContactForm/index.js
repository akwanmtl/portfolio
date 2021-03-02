import React from 'react';
import './contactform.css'

function ContactForm () {
  return (
    <div className="row p-3">
      <div className="contact-text">
      If you have a question or would like to connect, you can fill the form below.
      You can also send an email directly at akwan.mtl@gmail.com.
      </div>
      <form className="col-xs-12 col-sm-9">

          <div className="form-group">
              <input type="name" className="form-control" id="contactnameid" aria-describedby="contactname" placeholder="Name" required/>
          </div>

          <div className="form-group">
              <input type="email" className="form-control" id="contactemailid" placeholder="Email" required/>
          </div>

          <div className="form-group">
              <textarea className="form-control" id="contactmessageid" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="div-button">

            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
      </form>

    </div>
  )
}

export default ContactForm;