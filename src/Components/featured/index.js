import React from "react";
import Corrousel from "./Corrousel";

import Slide from "react-reveal/Fade";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Corrousel />

      <div className="artist_name">
        <TimeUntil />
      </div>
    </div>
  );
};

class TimeUntil extends React.Component {
  state = {
    deadline: "july, 16, 2019",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  render() {
    return (
      <Slide delay={1000}>
        <div className="wrapper">
          <div style={{ fontSize: "40px" }}>Men's Cricket World Cup 2019</div>

          <div style={{ fontSize: "35px", marginTop: "20px" }}>
            <span
              style={{
                backgroundColor: "#FF4801",
                border: "1px solid black",
                padding: "8px"
              }}>
              {this.state.days}
              <span style={{ fontSize: "15px" }}>Days</span>
            </span>
            <span
              style={{
                backgroundColor: "#FF4801",
                border: "1px solid black",
                padding: "8px"
              }}>
              {this.state.hours}
              <span style={{ fontSize: "15px" }}>Hours</span>
            </span>
            <span
              style={{
                backgroundColor: "#FF4801",
                border: "1px solid black",
                padding: "8px"
              }}>
              {this.state.minutes}
              <span style={{ fontSize: "15px" }}>Min</span>
            </span>
            <span
              style={{
                backgroundColor: "#FF4801",
                border: "1px solid black",
                padding: "8px"
              }}>
              {this.state.seconds}
              <span style={{ fontSize: "15px" }}>Sec</span>
            </span>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Featured;
