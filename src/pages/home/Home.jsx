import React, { Component } from "react";
import NextShow from '../../components/NextShow'
import HomeCopy from "../../components/HomeCopy";
import AppHeroImage from "../../components/AppHeroImage";

class Home extends Component {
  render() {
    return <div>
        <AppHeroImage />
        <HomeCopy />
        <hr className="container h-px mb-12 mt-8 bg-gray-lt w-full" />
        <NextShow />
      </div>;
  }
}

export default Home;
