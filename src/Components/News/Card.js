import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 350,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        "It's a relief to be off and running. It's great to get a win. It's even better to produce a performance like tha
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          Game one - check! Game two - West Indies v Pakistan at TrentBridge (the run-making orbit as I'd love to call). Do remember to join us tomorrow @ 09:00 local for all the action from Nottingham. Until then, this is Raju Peethala waving goodbye on behalf of my exalted crew: Ramakrishnan MS, Sagar Chawla, Vineet Anantharaman, Akshay Maanay, Hariprasad Sadanandan and, the ever-cheery scoring duo Venkatesh AV and Vinod Kumar.
          </Typography>
          <Typography paragraph>
          SA Skipper, Faf: I think we have been outplayed in all three departments. Basically we were 3 down in 12 overs and I think we were looking for 330-340 but when we took the pace off we thought 300 was par. It was a plan (to start with Tahir). We wanted to target those two openers with leg spin, especially Roy. It worked today. Their batting was really good. They are a top-quality team and they showed that with the bat today. You need a bit of momentum in the first two games. He (Amla) is okay now and when he came back to the dressing room, he looked fine and hopefully that's a good sign for the next game. When we have Dale and all our resources, we back our bowling to restrict teams under 300.
          </Typography>
          <Typography paragraph>
          Ben Stokes, Man of the Match: (On the catch) I was a little further in than I should have been. I panicked a bit I guess but it stuck. I shouldn't have been there (initially) and it was probably a regulation catch but I was in the wrong position. (On the pitch) The message from the batsmen in the middle was that it was a tricky pitch to bat on, so the aim was to get to 300-310. Maybe 330. I was looking to just pace it. The hard length was difficult and obviously, the slower balls and all. Towards the end, they (SA bowlers) were really hard to get away. I guess psychologically getting over the 300-run mark really helped. And then, our bowlers knew what to do and they executed well. (On the crowd support) It was unbelievable, excellent turnaround for the first World Cup and hope it continues
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeReviewCard;
