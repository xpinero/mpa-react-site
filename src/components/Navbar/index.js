import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
      
      <NavLink to="/about" activeStyle>
        About
      </NavLink>
      <NavLink to="/sold" activeStyle>
        Sold
      </NavLink>
      <NavLink to="/search" activeStyle>
        Search MLS
      </NavLink>
      <NavLink to="/buyers" activeStyle>
        Buyers
      </NavLink>
      <NavLink to="/sellers" activeStyle>
        Sellers
      </NavLink>
      <NavLink to="/contact" activeStyle>
        Contact Us
      </NavLink>
      <NavLink to="/blogs" activeStyle>
        Blogs
      </NavLink>
      <NavLink to="/sign-up" activeStyle>
        Sign Up
      </NavLink>
      
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
