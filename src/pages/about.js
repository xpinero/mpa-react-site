import React from "react";

let years = new Date().getFullYear() - 2014;
//make variable to calculate amount of years as realtor
const About = () => {
return (
	<div>
    <h1>{`I have been a realtor for ${years} years`}</h1>
	</div>
);
};

export default About;
