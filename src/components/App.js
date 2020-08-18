import React from "react";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <>
      <button className="button is-primary">LOL DAI</button>
      <Link to="/profile">Profile</Link>
      <Link to="/King/Vaidee">King</Link>
    </>
  );
}
