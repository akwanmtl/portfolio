import React from 'react';
import "bootstrap/js/src/modal.js";

function Modal (props) {
  return (
    <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby={props.id} aria-hidden="true">
    <div className="modal-dialog" role="document" >
        <div className="modal-content" >

            <div className="modal-header">
                <h5 className="modal-title">{props.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div className="modal-body">
                <img src={props.img}/>
            </div>
            
          </div>
      </div>                        
  </div>
  )
}

export default Modal;