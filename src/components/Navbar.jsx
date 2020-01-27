import React from "react";

const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="google.com">
          Navbar
          <span className="badge badge-pill badge-primary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
