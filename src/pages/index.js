import React from 'react';
import styled from "styled-components";
import landing from '../images/landing.jpg';

const LandingImage = styled.div`
	background-image: url(${landing})
	height: 700px;
	`

const Home = () => {
return (
	<LandingImage>
		<h1>Welcome to my Real-estate page!</h1>
	</LandingImage>
);
};

export default Home;
