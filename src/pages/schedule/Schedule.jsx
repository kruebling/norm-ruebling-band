import React, { Component } from "react";
import Tabletop from "tabletop";

class Schedule extends Component {
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
    return (
      <div className="Schedule">
        <div id="gig-list">
          {data.map(obj => {
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

export default Schedule;
