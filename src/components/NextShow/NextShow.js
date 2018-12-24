import React, { Component } from "react";
import Tabletop from "tabletop";
import Grid from "@material-ui/core/Grid";
import ShowHeader from "../../assets/img/next-show2.jpeg";

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
    return <div className="NextShow mb-12">
        <h1 className="text-6xl font-black font-sans mb-12">NEXT SHOW</h1>
        <Grid container>
          <Grid item className="w-3/5">
            <img src={ShowHeader} className="show-header w-full h-80" alt="Show Header" />
          </Grid>
          <Grid item>
            {currentShow.map(obj => {
              return <div key={obj.Day}>
                  <Grid container className="pt-8 -ml-10">
                    <Grid item>
                      <h1 className="bg-primary pr-2 py-4 w-32 font-sans text-right font-black">
                        {obj.Day}
                      </h1>
                    </Grid>
                    <Grid item className="flex items-center">
                      <h4 className="uppercase tracking-wide pl-2 font-sans font-black">{obj.Month}</h4>
                    </Grid>
                  </Grid>
                  <h1 className="text-tan ml-10 mt-5">{obj.Location}</h1>
                </div>;
            })}
          </Grid>
        </Grid>
      </div>;
  }
}

export default NextShow;
