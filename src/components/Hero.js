import React from 'react'
import"../components/styles/Hero.css";

function Hero(props) {
  return (
    <>
    <div className={props.cName}>
         <img alt="HeroImg"  className={props.pgName} src={props.heroImg}/>
    </div>

    <div className="hero-text">
        <h1>{props.pgTitle}</h1>
        <p>{props.text}</p>
        <button className={props.btn}><i class="fa-solid fa-magnifying-glass"></i>Search</button>
    </div>
    </>
  );
}

export default Hero

