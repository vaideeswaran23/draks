import React from "react"

function NavBar(props) {

  const [isBurgerMenuActive, setIsBurgerMenuActive] = React.useState(false);


    return(  
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/brand-assets/Logos/0099ec3754bf473d2bbf317204ab6fea/trello-logo-blue.png" width="112" height="28" />
          </a>
      
          <a role="button" className="navbar-burger burger" data-target="navbarBasicExample" 
            className={`navbar-burger burger ${isBurgerMenuActive ? "is-active": ""}`}
            onClick = {setIsBurgerMenuActive.bind(this, !isBurgerMenuActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" 
        className={`navbar-menu ${isBurgerMenuActive ? "is-active": ""}`}>
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>
      
            <a className="navbar-item" href="/profile/vaidee">
              Profile
            </a>
      
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>
      
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default NavBar