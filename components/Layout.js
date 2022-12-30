import React from "react";
import Link from "next/link";

const linkStyle = {
  marginRight: 35,
  fontFamily: "Press Start 2P", 
  textDecoration: "none",
  color: "white",
  fontSize: "2rem"
};


const header = {
  padding: "1rem",
  width: "100%",
  height: "1rem",
  color: "white",
};

const navContainer = {
  fontFamily: "Press Start 2P"
}

const Layout = () => {
  return (
  <nav className={navContainer}>
      <Link href="/">
        <a>Developers</a>
      </Link>
      <Link href="/pricing">
        <a className="ml-2">Mission</a>
      </Link>
    </nav>
    
  )
};

export default Layout;