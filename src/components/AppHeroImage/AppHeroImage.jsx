import React from "react";
import LazyHero from "react-lazy-hero";
import Hero from "../../assets/img/hero.jpeg"
import Norm from "../../assets/img/norm.jpg";

function AppHeroImage() {
  return(
    <div>
      <LazyHero
        color="#000033"
        isCentered={false}
        opacity={0}
        parallaxOffset={15}
        minHeight='80vh'
        transitionDuration={600}
        imageSrc={Hero}
      >
        <img className="container h-102 mt-img ml-10 w-2/5" src={Norm} alt="Norm" />
      </LazyHero>
    </div>
  )
}

export default AppHeroImage;