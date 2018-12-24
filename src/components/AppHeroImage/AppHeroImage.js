import React from "react";
import LazyHero from "react-lazy-hero";
import hero from "../../assets/img/hero.jpeg"

function AppHeroImage() {
  return(
    <div>
      <LazyHero
        color="#000033"
        opacity={0.15}
        parallaxOffset={15}
        minHeight='80vh'
        transitionDuration={600}
        imageSrc={hero}
      />
    </div>
  )
}

export default AppHeroImage;