import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleInfo,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  const [click, setClick] = useState(false)
  const SetButton = () => useState(true)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 1500) {
      SetButton(false)
    } else {
      SetButton(true)
    }
  }

  window.addEventListener("resize", showButton)
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          TSW <FontAwesomeIcon icon={faCircleInfo} className="fab fa-Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon
            icon={click ? faTimes : faBars}
            className={click ? "fa-xmark" : "fa-bars"}
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/Chichen_Itza" className="nav-links">
              Chichén Itzá
            </Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/Christ_The_Redeemer" className="nav-links">
              Christ the Redeemer
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Colosseum"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {" "}
              Colosseum
            </Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/Great_Wall" className="nav-links">
              Great Wall
            </Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/Machu_Picchu" className="nav-links">
              Machu Picchu
            </Link>
          </li>

          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/Petra" className="nav-links">
              Petra
            </Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/Taj_Mahal" className="nav-links">
              Taj Mahal
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
