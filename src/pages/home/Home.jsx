import React, { Component } from "react";
import NextShow from '../../components/NextShow'
import HomeCopy from "../../components/HomeCopy";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeCopy />
        <hr className="h-px mb-12 mt-20 bg-gray-lt w-full" />
        <NextShow />
      </div>
    );
  }
}

export default Home;
