import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
border-radius: 25px;
background-image: linear-gradient(to right, #a08e82 , #8294a0);
height: 85px;
display: flex;
justify-content: center;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
font-family: serif;
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #A96136;
}
`;


export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px) {
	display: none;
}
`;
