import React from 'react';
import Header from '../../components/Header';
function Contact () {
  return(
    <div>
      
      <Header title="Contact"/>
      <div className="row p-3">
          
          <form className="col-xs-12 col-sm-9">

              <div className="form-group">
                  <label for="contactname">Name</label>
                  <input type="name" className="form-control" id="contactnameid" aria-describedby="contactname" placeholder="Name"/>
              </div>

              <div className="form-group">
                  <label for="contactemail">Email</label>
                  <input type="email" className="form-control" id="contactemailid" placeholder="Email"/>
              </div>

              <div className="form-group">
                  <label for="contactmessage">Message</label>
                  <textarea className="form-control" id="contactmessageid" rows="3" placeholder="Message"></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
          </form>

      </div>
    </div>
  )
}

export default Contact;