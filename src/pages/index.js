import React from 'react';
import styled from "styled-components";
import landing from '../images/landing.jpg';

const LandingImage = styled.div`
	background-image: url(${landing});
	height: 100vh;
	width: 80vw;
	background-repeat: no-repeat;
	background-size: 100%;
	display: block;
	margin-left: auto;
	margin-right: auto;
	`
const Home = () => {
return (
	<LandingImage>
		<h1>Welcome to my Real-estate page!</h1>
	</LandingImage>
);
};

export default Home;
