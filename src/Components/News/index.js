import React from "react";
import Slider from "react-slick";
import Cards from "./Card";
import Divider from "@material-ui/core/Divider";
import { Fade } from "react-reveal";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <Fade>
        <div style={{ margin: "150px 0" }}>
          <div
            style={{
              textAlign: "center",
              fontSize: "50px",
              fontWeight: "600",
              margin: "50px"
            }}>
            RECENTS RESULTS
          </div>
          <div
            style={{ margin: "50px auto", width: "90%", marginLeft: "100px" }}>
            <Slider {...settings}>
              <div>
                <h3>
                  <Cards image="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/04/14/Pictures/new-zealand-v-india-odi-game-5_a3ed0740-5e79-11e9-93dc-bd285d0e4b85.jpg" />
                </h3>
              </div>
              <div>
                <h3>
                  <Cards image="https://static01.nyt.com/images/2009/06/22/sports/22cricketA_xl.jpg" />
                </h3>
              </div>
              <div>
                <h3>
                  <Cards image="https://img.cricketworld.com/images/f-064956/fakhar-zaman--2.jpg" />
                </h3>
              </div>
              <div>
                <h3>
                  <Cards image="https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/bangladesh_cricket_team_8.jpg?itok=llhHnb7i" />
                </h3>
              </div>
              <div>
                <h3>
                  <Cards image="https://www.sporttechie.com/wp-content/uploads/2019/02/GettyImages-464468560.jpg" />
                </h3>
              </div>
              <div>
                <h3>
                  <Cards image="https://images.mid-day.com/images/2019/apr/amala_d.jpg" />
                </h3>
              </div>
              <div>
                <h3>
                  <Cards image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201901/australiaretrokits180119_0.jpeg?pJfBZdcYWLb_nu49UtWMvZaEMGxO6KhX" />
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </Fade>
    );
  }
}

export default SimpleSlider;
