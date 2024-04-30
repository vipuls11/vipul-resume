import React from 'react';
import AboutUs from '../components/AboutUs';

const AboutUsList = () =>{
    const Name='VIPUL VISHWAKARMA';
    const Designation='Software Developer'
    const About='As a Front-End and Back-End Developer, I will play a crucial role in designing, implementing, and maintaining web applications. I will be responsible for creating visually appealing and user-friendly interfaces on the front end, as well as ensuring seamless functionality and performance on the back end. expertise in both areas will be essential in delivering high-quality, interactive websites and applications.'

    return(
        <>
        <AboutUs Name={Name} Designation={Designation} About={About}/>
        </>
    );
}

export default AboutUsList;