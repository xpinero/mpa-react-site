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
			<Text>Do you need help with buying or selling real estate?  Let me help you!<br></br>
			
			<p>Real estate transactions can be stressful. The process can be complicated, and people become more stressed when their agent is hard to reach.<br></br> That is why you need a trusted agent who is detail-oriented and represents your best interests. Your agent does not have your best interests at heart if you can never get them on the phone.</p>

			<p>The best realtors in Chattanooga are accessible. I am a realtor who answers the phone! If I do happen to miss your call, you can be assured that I will contact you promptly.</p>
	
			<p>Get a helpful partner for buying or selling your home who has these qualities:</p>
			<ol>
				<li>Trusted resource for answers about the process</li>
				<li>Strong negotiation skills</li>
				<li>Innovative marketing strategies</li>
				<li>Expertise about neighborhood features</li>
				<li>Ability to target home searches</li>
				<li>Honesty and integrity throughout every step of the process</li>
				<li>Support through the closing and beyond</li>
				<li>{years} + years of real estate experience</li>
			</ol>
			</Text>
		</TransBox>
	</AboutImage>
);
};

export default About;
