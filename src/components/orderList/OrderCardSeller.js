import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';



const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: 20,
    textAlign: "left",
    display: "inline-block"
  },
  media: {
    height: 100,
  },
  button: {
    margin: theme.spacing.unit,
  },
});


const buyer = [
    {
        "ICO": "term",
        "comments": "Viktor",
        "date": "2010-10-10",
        "id": 1,
        "product": {
            "certificate": "BFF",
            "currency": "usd",
            "description": "new",
            "expiration": "2019-10-10",
            "harvested": "2010-10-10",
            "id": 1,
            "name": "potato",
            "photo": "https://imagizer.imageshack.com/v2/280x200q90/922/a6Pawe.jpg",
            "price": 30,
            "volume": 10000
        },
        "status": "Pending",
        "userId": 1,
        "volume": "213213"
    },
    {
        "ICO": "term",
        "comments": "Viktor",
        "date": "2010-10-10",
        "id": 1,
        "product": {
            "certificate": "WWWAAAA",
            "currency": "usd",
            "description": "new",
            "expiration": "2019-10-10",
            "harvested": "2010-10-10",
            "id": 1,
            "name": "potato",
            "photo": "http://",
            "price": 30,
            "volume": 10000
        },
        "status": "Pending",
        "userId": 1,
        "volume": "213213"
    }
]



class Orders extends PureComponent {
  static propTypes = {
  classes: PropTypes.object.isRequired
  };



  render() {
    const { classes } = this.props;

    return (
      <div>
        {buyer.map(order =>


         <Card className={classes.card}>
           <CardMedia
            className={classes.media}
            image={order.product.photo}
            title="product name - redux"  />

           <CardContent>
             <Typography gutterBottom variant="headline" component="p">
               Order #{order.id}
             </Typography>

               <table>
                 <tr>
                    <th>Volume</th>
                    <td>{order.volume}</td>
                 </tr>

                 <tr>
                    <th>Comments</th>
                    <td>{order.comments}</td>
                 </tr>

                 <tr>
                    <th>Status</th>
                    <td>{order.status}</td>
                 </tr>

                 <tr>
                    <th>Ordered date</th>
                    <td>{order.date}</td>
                 </tr>

               </table>

           </CardContent>
           <CardActions>
             <Button size="small" color="primary">
               Go to buyer profile
             </Button>
           </CardActions>
           <Button variant="raised" color="primary" className={classes.button}>
           Accept
          </Button>
          <Button variant="raised" color="primary" className={classes.button}>
          Decline
          </Button>
         </Card>
         ) }
       </div>
    )
  }
}

export default withStyles(styles)(Orders);
