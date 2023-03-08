import { Link } from "react-router-dom";

import React from "react";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/menu">Menu</Link>
    </div>
  );
};
