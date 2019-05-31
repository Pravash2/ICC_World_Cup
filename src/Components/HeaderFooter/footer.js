import React from "react";
import { Fade } from "react-reveal";
import Avatar from "@material-ui/core/Avatar";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">
          <div style={{ display: "inline-block" }}>
              <Avatar
                src="http://www.holdingwilley.com/article/images/article-images/ICC_Cricket_Logo.png"
                style={{ width: "40px", height: "40px", margin: "0 10px" }}
              />
            </div>
            <div style={{ display: "inline-block" }}>
              <div className="font-righteous header_logo_venue">ICC</div>
            
              </div>
        </div>
        <div className="footer_copyright">
         International Cricket Council 2019.All right reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
