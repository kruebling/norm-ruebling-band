import React, { Component } from "react";
import Tabletop from "tabletop";

class NextShow extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1q7SX8vPcxu8ezNTuIUoYsxTFHh-Gu7TJJ4aUsgIEtm8",
      callback: googleData => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }

  render() {
    const { data } = this.state;
    let currentShow = data.slice(0, 1);
    return (
      <div className="NextShow">
        <h1 className="text-6xl font-black font-sans">NEXT SHOW</h1>
        <div>
          {currentShow.map(obj => {
            return (
              <div key={obj.Date}>
                <h1>{obj.Location}</h1>
                <p>{obj.Date}</p>
                <p>{obj.Type}</p>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NextShow;
