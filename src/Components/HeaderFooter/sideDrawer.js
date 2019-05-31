import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

//icons
import MatchesIcon from '@material-ui/icons/FormatListNumbered'
import ResultsIcon from '@material-ui/icons/InsertChart'
import PointIcon from '@material-ui/icons/GridOn'
import TeamIcon from '@material-ui/icons/Group'
import AboutIcon from '@material-ui/icons/LocalLibrary'

import { scroller } from "react-scroll";

const sideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  };

  const AnchorItem = (
    <List component="nav">
      <ListItem button>
      <ListItemIcon><MatchesIcon /></ListItemIcon>
        <ListItemText
          primary="Matches"
      
        />
      </ListItem>
      <ListItem button>
      <ListItemIcon><TeamIcon /></ListItemIcon>
        <ListItemText
          primary="Teams"
        
        />
      </ListItem>
    
      <ListItem button>
      <ListItemIcon><ResultsIcon /></ListItemIcon>
        <ListItemText
          primary="Results"
          
        />
      </ListItem>
      <ListItem button>
      <ListItemIcon><PointIcon /></ListItemIcon>
        <ListItemText
          primary="Point Table"
        
        />
      </ListItem>
      <ListItem button>
      <ListItemIcon><AboutIcon /></ListItemIcon>
        <ListItemText
          primary="About"
          
        />
      </ListItem>
    </List>
  );

  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={props.close}>
        {AnchorItem}
      </Drawer>
    </div>
  );
};

export default sideDrawer;
