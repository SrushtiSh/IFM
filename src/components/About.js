import React from 'react'
import Hero from "../components/Hero";
import AboutImge from "../assets/About1.jpg"
function About() {
  return (
    <>
    <div>
      <Hero
      pgName="pagesizeAbout"
      cName="About"
      heroImg={AboutImge}
      pgTitle="About Us"
      btn="buttonAbout"
     
     />
    </div>
    </>
  )
}

export default About
