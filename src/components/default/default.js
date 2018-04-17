import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
import compose from "lodash/fp/compose";
import { translate } from "react-i18next";
import List, { ListItem, ListItemText } from "material-ui/List";
import Card, { CardActions, CardContent, CardMedia, CardTitle } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";

const styles = theme => ({
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
    display: "inline-block"
  },
  foot: {
    textAlign: "center"
  },
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper
  },
  card: {
  width:"100%",
  height: '700px',
  backgroundImage: `url(${"/default/farmer.jpg"})`,
  display:'inline-block',
  backgroundSize:'cover'
},
media: {
  height: 0,
  paddingTop: '56.25%', // 16:9
},
buttonContainer: {
  marginTop: "40px",
    marginBottom: "70px",
    textAlign:'center'
},
button : {
   margin: theme.spacing.unit,
   backgroundColor: `#588D61`,
   color: "white",
   '&:hover': {
      backgroundColor: `#8FBC8F`,
    },
},
motto: {
  fontSize:"60px",
  color:"white",
  textShadow:" 2px 2px black",
   fontWeight: 900
},
secondaryText: {
  fontSize: "30px",
  color:"white",
  textShadow:" 2px 2px black"
},
titleContainer: {
  marginTop:"80px",
  fontWeight: 900
}
});

class defaultPage extends PureComponent {
  state = {};

  render() {
    const { t, classes } = this.props;

    return (
      <div>
        <div>
          <Paper className={classes.card}>
          <CardContent className={classes.titleContainer}>
            <Typography className={classes.motto} gutterBottom variant="headline" component="h2">
              We connect farmers with buyers
            </Typography>
            <Typography className={classes.secondaryText}component="p">
              A MarketPlace for producer
            </Typography>
          </CardContent>


          </Paper>
          <div className={classes.buttonContainer}>
          <Button
            onClick={() => this.props.history.push('/login')}
             size="large"
             className={classes.button}
             >
          Log In
         </Button>
         <Button
             onClick={() => this.props.history.push('/signup')}
             variant="raised"
             size="large"
             className={classes.button}
             >
          Sign Up
         </Button>
         </div>
         <Divider />
        </div>
        <div>
          <div>
            <Paper className={classes.container}>
              <div className={classes.list}>
                <List component="nav">
                  <ListItem className={classes.foot}>
                    <ListItemText primary="Connect with us on" />
                  </ListItem>
                  <ListItem className={classes.foot} component="a">
                    <ListItemText primary="Juan R. Serrano Ochoa" />
                  </ListItem>

                    <ListItemText primary="+31 (0)6 1460 6798" />

                  <ListItem className={classes.foot} component="a">
                    <ListItemText primary="jserrano@contenemos.com" />
                  </ListItem>

                    <ListItemText primary="www.contenemos.com" />

                  <ListItem className={classes.foot} component="a">
                    <ListItemText secondary="Copyright 	&copy; 2018. All rights reserved." />
                  </ListItem>
                </List>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(translate("user"), withStyles(styles))(defaultPage);
