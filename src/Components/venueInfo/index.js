import React from "react";

import icon_calender from "../../resources/icons/calendar.png";
import icon_location from "../../resources/icons/location.png";

import { Fade } from "react-reveal";

const venueStyle = {
  flex: 1,
  allignItem: "center",
  justifyContent: "center",
  display: "flex",
  justifyContent: "space-around"
};

const marginStyle = { margin: 0 };

const Venue = () => {
  return (
    <div>
      <div className="bck_black">
        <div
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "600",
            margin: "10px",
            color: "white",
            padding: "50px"
          }}>
          KEY POINTS
        </div>{" "}
        <div className="vn_wrapper " style={marginStyle}>
          <div className="bck_black" style={venueStyle}>
            <Fade top>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_red" />
                    <div
                      className="vn_icon"
                      style={{
                        background: `url(${icon_calender})`
                      }}
                    />
                  </div>
                  <div className="vn_title">Event Date</div>
                  <div className="vn_desc">30 May to 14 July 2019</div>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_yellow" />
                    <div
                      className="vn_icon"
                      style={{
                        background: `url(${icon_location})`
                      }}
                    />
                  </div>
                  <div className="vn_title">Hosted</div>
                  <div className="vn_desc">England and Wales</div>
                </div>
              </div>
            </Fade>
            <Fade top>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_red" />
                    <div
                      className="vn_icon"
                      style={{
                        background: `url(${icon_calender})`
                      }}
                    />
                  </div>
                  <div className="vn_title">About</div>
                  <div className="vn_desc">10 Teams with 150 players</div>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_yellow" />
                    <div
                      className="vn_icon"
                      style={{
                        background: `url(${icon_location})`
                      }}
                    />
                  </div>
                  <div className="vn_title">Fixtures</div>
                  <div className="vn_desc">48 matches 11 Stadiums</div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
