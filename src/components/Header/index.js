import React from 'react';
import './header.css'

function Header(props) {
  return (
    <div className="maintitle">
      <h1>{props.title}</h1>
      <hr/>
    </div>
  )
}

export default Header;