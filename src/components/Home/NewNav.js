import React from "react";
import "./Navbar.css";

import { Link } from 'react-router-dom';

// const logo = require("../../img/elegant photos/ee.png");

export default function Navbar() {
  return (
    <>
    
      <nav class="navbar fixed-top">
        <div class="navcont cont">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>

          <div class="logo">
            <img  alt="" srcset="" />
          </div>

          <ul class="menu-items">
            <li class="pulse">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            {/* <li>
              <a href="/services">Services</a>
            </li> */}
            <li>
              <a href="/venue">Venues</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            {/* <li>
              <a href="#sponsors">Gallery</a>
            </li> */}
            <li>
             <a href="/#directfeed"> <button className="milo2">Contact Us</button></a>
            </li>
          </ul>

          {/* <ul className="menu-items">
            <li>
              <button className="contact1">Contact Us</button>
            </li>
          </ul> */}
        </div>
      </nav>
      
    </>
  );
}
