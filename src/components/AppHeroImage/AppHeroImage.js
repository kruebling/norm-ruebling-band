import React from "react";
import LazyHero from "react-lazy-hero";
import hero from "../../assets/img/hero.jpeg"

function AppHeroImage() {
  return(
    <div>
      <LazyHero imageSrc={hero} />
    </div>
  )
}

export default AppHeroImage;