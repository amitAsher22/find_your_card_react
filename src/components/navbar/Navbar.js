import React, { useState } from "react";
import "../Navbar.css";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Logo from "../../images/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <header className="navBar">
      <img src={Logo} alt="/" />
      <nav>
        <ul className={nav ? ["menu", "active"].join(" ") : ["menu"]}>
          <li>
            <a href="/">Learn More</a>
          </li>

          <li>
            <a href="/">Log in</a>
          </li>

          <li>
            <a href="/">Sign Up</a>
          </li>
          <li>
            <CiSearch size={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className="mobile_btn">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
}

export default Navbar;
