import React from 'react';
import { TransBox, Text } from './PageElements';
import styled from "styled-components";
import about from '../images/about.jpg';

const AboutImage = styled.div`
	background-image: url(${about});
	height: 100vh;
	width: 80vw;
	background-repeat: no-repeat;
	background-size: 100%;
	display: block;
	margin-left: auto;
	margin-right: auto;
	`
let years = new Date().getFullYear() - 2014;

const About = () => {
return (
	<AboutImage>
		<TransBox>
			<Text>{`I have been a realtor for ${years} years`}</Text>
			<Text>Do you need help with buying or selling real estate?  Let me help you!
			Real estate transactions can be stressful.   The process can be complicated, and people become more stressed when their agent is hard to reach. That is why you need a trusted agent who is detail-oriented and represents your best interests. Your agent does not have your best interests at heart if you can never get them on the phone.
			
			The best realtors in Chattanooga are accessible. I am a realtor who answers the phone! If I do happen to miss your call, you can be assured that I will contact you promptly.
			
			Get a helpful partner for buying or selling a home:
			
			Trusted resource for answers about the process
			Strong negotiation skills
			Innovative marketing strategies
			Expertise about neighborhood features
			Ability to target home searches
			Honesty and integrity throughout every step of the process
			Support through the closing and beyond</Text>
			
		</TransBox>
	</AboutImage>
);
};

export default About;
