import React from 'react'
import Hero from "../components/Hero";
import HeroImge from "../assets/hero1.jpg"


function Home() {
  return (
    <>
    <div>
      <Hero 
      cName="home"
      pgName="pagesizeHome"
      heroImg={HeroImge}
      pgTitle="Your Influencers"
      text="Lorem Ipsum is simpl. It was popularised in the 1960s with the release of Letraset sheets"
      btn="buttonHome"
     />
    </div>
    </>
  )
}

export default Home
