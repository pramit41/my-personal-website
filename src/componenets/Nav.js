import React from "react"
import "./nav.css"

export default function Nav(){
    return(
        <nav className='nav'>
          <h1 className="header">Hi! I am Pramit Thapa</h1>
          <ul className='nav-items'>
            <li>About</li>
            <li>Projects</li>
            <li>Resume</li>
          </ul>
        </nav>
    )
}