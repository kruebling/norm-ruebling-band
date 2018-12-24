import React, { Component } from "react";
import NextShow from '../../components/NextShow'

class Home extends Component {
  render() {
    return (
      <div>
        <hr className="h-px bg-gray-lt w-full" />
        <NextShow />
      </div>
    );
  }
}

export default Home;
