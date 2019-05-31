import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../utils/button";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    this.timer = setTimeout(() => {
      this.porcentage();
    }, 30);
  }
  componentWillMount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 30th MAY</h3>
              <p>
                We have started the dispatch process and tickets will be sent
                out by Royal Mail Tracked, or DHL Tracked for overseas delivery.
                Once your tickets are on the way you will receive a tracking
                number from either Royal Mail/DHL The latest you should receive
                your tickets is 5 days before your match.
              </p>
              <MyButton
                text="Purchase Ticket"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
