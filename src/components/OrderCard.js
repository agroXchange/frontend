import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';



const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

const buyer = [
    {
        "approved": true,
        "email": "yoonjioh90@gmail.com",
        "id": 1,
        "orders": [
            {
                "ICO": "alskdjf",
                "comments": "quick delievery, please",
                "date": "2018-04-10",
                "id": 1,
                "status": "pending",
                "volume": "200"
            },
            {
                "ICO": "akjsdf",
                "comments": "quick delievery, please",
                "date": "2018-04-08",
                "id": 2,
                "status": "pending",
                "volume": "150"
            }
        ],
        "products": [],
        "profile": {
            "address": "Seoul, Korea",
            "chamberOfCommerce": "1234",
            "city": "Amsterdam",
            "field": "buyer",
            "id": 1,
            "link": "123adf",
            "name": "yoonji",
            "phone": "010-202-0102",
            "type": "CJKS"
        },
        "role": "lkdjf"
    }
]



class OrderCard extends PureComponent {
  static propTypes = {
  classes: PropTypes.object.isRequired
  };



  render() {
    const { classes } = this.props;

    return (
      <div>
        {buyer[0].orders.map(order =>
         <Card className={classes.card}>
           <CardContent>
             <Typography gutterBottom variant="headline" component="p">
               Order #{order.id}
             </Typography>

               <table>
                 <tr>
                    <th>Order Volume</th>
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
               Go to seller profile
             </Button>
           </CardActions>
         </Card>
         ) }
       </div>
    )
  }
}

export default withStyles(styles)(OrderCard);
