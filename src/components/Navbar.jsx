import React from "react";
import { Link } from "react-router-dom";
import logo from "../resource/p1.png";

const Navbar = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div style={{ display: "flex", marginTop: "20px" }}>
          <Link to="/">
            <img src={logo} style={{ height: "40px", width: "130px" }} />
          </Link>
          <nav className="topp">
            <Link to="/individuals">Individuals</Link>
            <Link to="/teams">Enterprise</Link>
            <Link to="/enterprise">Teams</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
