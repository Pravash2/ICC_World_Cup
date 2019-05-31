import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import "../../resources/styles.css";
import SideDrawer from "./sideDrawer";

class Header extends Component {
  state = {
    drawer: false,
    headerShow: true
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handelScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handelScroll);
  }

  handelScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: false
      });
    } else {
      this.setState({
        headerShow: true
      });
    }
  };

  MenuIconHandeler = () => {
    this.setState({ drawer: !this.state.drawer ? true : false });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0px",
          color: this.state.headerShow ? "#fff" : "transparent"
        }}>
        <ToolBar>
          <div className="header_logo">
            <div style={{ display: "inline-block" }}>
              <Avatar
                src="http://www.holdingwilley.com/article/images/article-images/ICC_Cricket_Logo.png"
                style={{
                  width: "60px",
                  height: "60px",
                  margin: "0 10px",
                  display: this.state.headerShow ? "block" : "none"
                }}
              />
            </div>
            <div style={{ display: "inline-block" }}>
              <div className="font-righteous header_logo_venue">ICC</div>
              <div className="header_logo_title">
                International Cricket Council
              </div>
            </div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            style={{
              backgroundColor: this.state.headerShow ? "" : "#FFA800",
              color: "white"
            }}
            onClick={this.MenuIconHandeler}>
            <MenuIcon />
          </IconButton>

          <SideDrawer open={this.state.drawer} close={this.MenuIconHandeler} />
        </ToolBar>
      </AppBar>
    );
  }
}

export default Header;
