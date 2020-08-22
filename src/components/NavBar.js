import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [isBurgerMenuActive, setIsBurgerMenuActive] = React.useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuActive(!isBurgerMenuActive);
  };

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xlink="http://www.w3.org/1999/xlink"
            xmlnssvgjs="http://svgjs.com/svgjs"
            width="100px"
            height="50px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 299.9984436035156 79.41398620605469"
            overflow="visible">
            <defs id="SvgjsDefs74419"></defs>
            <g
              id="SvgjsG74420"
              transform="scale(0.6493506493506493)"
              opacity="1">
              <g
                id="SvgjsG74421"
                className="ZnS7rEv9B"
                transform="translate(-1.4675702517275013, -1.4675702517275013) scale(0.24459504195458354)"
                light-content="false"
                non-strokable="true"
                fill="#00d1b2">
                <path
                  d="M256 6C117.9 6 6 117.9 6 256s111.9 250 250 250 250-111.9 250-250S394.1 6 256 6zm115.3 313.2c0 25.5-20.7 46.2-46.2 46.2H152.2c-25.5 0-46.2-20.7-46.2-46.2V192.8c0-25.5 20.7-46.2 46.2-46.2h156.1c2.6 0 4.8 2.2 4.8 4.8s-2.1 4.8-4.8 4.8H152.2c-20.1 0-36.5 16.4-36.5 36.5v126.4c0 20.1 16.4 36.5 36.5 36.5h172.9c20.1 0 36.5-16.4 36.5-36.5v-63.2c0-2.6 2.1-4.8 4.8-4.8s4.9 2.1 4.9 4.8v63.3h0zm32.8-152.3L233 295.2l-44.1-88.4c-1.2-2.4-.2-5.3 2.2-6.5s5.3-.2 6.5 2.2l38.9 78 161.8-121.4c2.1-1.6 5.2-1.2 6.8 1s1.2 5.2-1 6.8z"
                  stroke="#00d1b2"
                  strokeMiterlimit="10"></path>
              </g>
              <g
                id="SvgjsG74422"
                className="text"
                transform="translate(310.0175384367375, 95.39337882625527) scale(1)"
                light-content="false"
                fill="#262626">
                <path d="M-147.01 -66.58L-147.01 0L-123.85 0C-117.76 0 -112.16 -1.31 -107.07 -3.94C-101.97 -6.56 -97.92 -10.31 -94.9 -15.2C-91.88 -20.08 -90.38 -25.72 -90.38 -32.12C-90.38 -38.09 -91.63 -43.68 -94.13 -48.9C-96.63 -54.11 -100.63 -58.37 -106.12 -61.65C-111.61 -64.94 -118.6 -66.58 -127.11 -66.58ZM-126.11 -12.67L-133.89 -12.67L-133.89 -54.01L-123.22 -54.01C-120.62 -54.01 -117.86 -53.41 -114.94 -52.2C-112.01 -50.99 -109.45 -48.82 -107.25 -45.69C-105.05 -42.55 -103.95 -38.33 -103.95 -33.02C-103.95 -26.45 -105.94 -21.41 -109.92 -17.91C-113.9 -14.41 -119.3 -12.67 -126.11 -12.67Z M-41.34 0L-26.05 0L-41.52 -24.15C-37.97 -26.21 -35.33 -29.02 -33.61 -32.61C-31.89 -36.2 -31.03 -40.05 -31.03 -44.15C-31.03 -51.08 -33.31 -56.56 -37.86 -60.57C-42.41 -64.58 -48.82 -66.58 -57.08 -66.58L-77.26 -66.58L-77.26 0L-64.14 0L-64.14 -21.17L-55.37 -21.17ZM-64.14 -33.83L-64.14 -53.92L-54.73 -53.92C-50.75 -53.92 -48.07 -52.82 -46.68 -50.62C-45.29 -48.41 -44.6 -46.11 -44.6 -43.7C-44.6 -41.28 -45.41 -39.04 -47.04 -36.96C-48.67 -34.87 -51.26 -33.83 -54.82 -33.83Z M17.73 -13.03L22.89 0L38.09 0L8.05 -69.21L7.33 -69.21L-22.71 0L-9.77 0L-4.34 -13.03ZM13.39 -24.06L0.27 -24.06L6.97 -40.26Z M60.7 -39.53L61.07 -42.88L61.07 -66.58L47.77 -66.58L47.77 0L61.07 0L61.07 -25.15L64.32 -28.41L84.86 0L101.5 0L73.91 -36.73L101.41 -66.58L84.41 -66.58L62.69 -42.07Z M131.9 -55.28C136.18 -55.28 141.22 -53.68 147.01 -50.48L151.98 -60.52C148.85 -62.57 145.62 -64.16 142.3 -65.27C138.99 -66.39 134.86 -66.95 129.91 -66.95C123.64 -66.64 118.62 -64.74 114.85 -61.25C111.08 -57.75 109.19 -53.13 109.19 -47.4C109.19 -43.48 110.11 -40.23 111.95 -37.63C113.79 -35.04 115.98 -33.05 118.51 -31.66C121.04 -30.28 124.21 -28.83 128.01 -27.32C134.46 -24.79 137.69 -21.8 137.69 -18.36C137.69 -15.71 136.67 -13.8 134.61 -12.62C132.56 -11.44 130.15 -10.86 127.38 -10.86C125.02 -10.86 122.37 -11.4 119.42 -12.48C116.46 -13.57 113.84 -14.96 111.55 -16.65L105.76 -6.42C109.13 -4.01 112.78 -2.22 116.7 -1.04C120.62 0.14 124.57 0.72 128.55 0.72C133.32 0.72 137.42 -0.14 140.86 -1.85C144.29 -3.57 146.9 -5.9 148.68 -8.82C150.46 -11.75 151.35 -14.93 151.35 -18.36C151.35 -22.35 150.61 -25.63 149.13 -28.23C147.66 -30.82 145.8 -32.85 143.57 -34.33C141.34 -35.81 138.66 -37.12 135.52 -38.27C131.66 -39.71 128.57 -41.24 126.25 -42.84C123.92 -44.43 122.76 -46.29 122.76 -48.4C122.76 -50.69 123.56 -52.41 125.16 -53.56C126.76 -54.7 129.01 -55.28 131.9 -55.28Z"></path>
              </g>
            </g>
          </svg>
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          data-target="navbarBasicExample"
          className={`navbar-burger burger ${
            isBurgerMenuActive ? "is-active" : ""
          }`}
          onClick={toggleBurgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isBurgerMenuActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home{" "}
          </Link>
          <Link
            to="/profile/vaidee"
            className="navbar-item"
            href="/profile/vaidee">
            Profile
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Save</strong>
              </a>
              <a className="button is-light">Sign Out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
