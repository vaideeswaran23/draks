import React from "react"
import { Link } from "react-router-dom"

function NavBar(props) {

  const [isBurgerMenuActive, setIsBurgerMenuActive] = React.useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuActive(!isBurgerMenuActive)
  }

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="/assets/logo.png"/>
        </Link>

        <a role="button" className="navbar-burger burger" data-target="navbarBasicExample"
          className={`navbar-burger burger ${isBurgerMenuActive ? "is-active" : ""}`}
          onClick={toggleBurgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div id="navbarBasicExample"
        className={`navbar-menu ${isBurgerMenuActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link to="/"  className="navbar-item">Home </Link>
          <Link to="/profile/vaidee" className="navbar-item" href="/profile/vaidee">Profile</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Save</strong>
              </a>
              <a className="button is-light">
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar