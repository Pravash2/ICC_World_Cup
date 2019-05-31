import React, { Component } from "react";

import Header from "./Components/HeaderFooter/header";
import Featured from "./Components/featured/index";
import VenueInfo from "./Components/venueInfo/index";
import HighLights from "./Components/HighLights/index";
import Matches from "./Components/Matches/index";
import Location from "./Components/Location/location";
import Footer from "./Components/HeaderFooter/footer";
import Teams from "./Components/Teams/Index";
import News from "./Components/News/index";
import PointTable from "./Components/PointTable/index";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Featured />

        <News />

        <Teams />
        <Matches />

        <HighLights />

        <VenueInfo />

        <Location />

        <Footer />
      </div>
    );
  }
}

export default App;
