import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="nav-container">
      <h3>
        Code<span>Canvas</span>
      </h3>
      <ul className="nav-list">
        <li className="list">
          <a className="active" href="/">
            Home
          </a>
        </li>
        <li className="list">
          <a href="/about">About</a>
        </li>
        <li className="list">
          <a href="/skills">Skills</a>
        </li>
        <li className="list">
          <a href="/projects">Projects</a>
        </li>
        <li className="list">
          <a href="/price">Price</a>
        </li>
        <li className="list">
          <a href="/blog">Blog</a>
        </li>
        <li className="list">
          <a href="/contact">Contact Us</a>
        </li>
      </ul>

      {toggle && (
        <>
          <div
            onClick={() => setToggle(!toggle)}
            className="mobile-nav-container"
          >
            <ul className="mobile-nav-list">
              <div
                onClick={() => setToggle(!toggle)}
                className="mobile-nav-icon"
              >
                <HiX />
              </div>
              <li className="list">
                <a className="active" href="/">
                  Home
                </a>
              </li>
              <li className="list">
                <a href="/about">About</a>
              </li>
              <li className="list">
                <a href="/skills">Skills</a>
              </li>
              <li className="list">
                <a href="/projects">Projects</a>
              </li>
              <li className="list">
                <a href="/price">Price</a>
              </li>
              <li className="list">
                <a href="/blog">Blog</a>
              </li>
              <li className="list">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </>
      )}

      <div onClick={() => setToggle(!toggle)} className="mobile-nav-icon">
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
