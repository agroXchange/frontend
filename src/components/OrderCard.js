import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';



const styles = {
  card: {
    maxWidth: 345,
    margin: 20,
    textAlign: "left",
    display: "inline-block"
  },
  media: {
    height: 100,
  },
};

const buyer = [
    {
        "approved": true,
        "email": "email@email.com",
        "id": 1,
        "orders": [
            {
                "ICO": "term",
                "comments": "good choice",
                "date": "2010-10-10",
                "id": 1,
                "status": "Pending",
                "volume": "213213"
            },
            {
                "ICO": "ICOterm",
                "comments": "bad choice",
                "date": "2010-10-10",
                "id": 2,
                "status": "Arrived",
                "volume": "7654"
            }],
        "products": [
            {
                "certificate": "BFF",
                "city": "Amsterdam",
                "currency": "usd",
                "description": "new",
                "expiration_date": "2019-10-10",
                "harvested": "2010-10-10",
                "id": 2,
                "name": "apple",
                "photo": "https://imagizer.imageshack.com/v2/280x200q90/922/aQ7YfK.jpg",
                "price": 90,
                "volume": "500"
            },
            {
                "certificate": "BFF",
                "city": "Amsterdam",
                "currency": "usd",
                "description": "new",
                "expiration_date": "2019-10-10",
                "harvested": "2010-10-10",
                "id": 3,
                "name": "banana",
                "photo": "http://",
                "price": 4,
                "volume": "2000"
            },
            {
                "certificate": "BFF",
                "city": "Amsterdam",
                "currency": "usd",
                "description": "new",
                "expiration_date": "2019-10-10",
                "harvested": "2010-10-10",
                "id": 1,
                "name": "mandarin",
                "photo": " https://imagizer.imageshack.com/v2/280x200q90/922/a6Pawe.jpg",
                "price": 30,
                "volume": "1000"
            }
        ],
        "profile": {
            "address": "Buurgerstraat",
            "chamberOfCommerce": "COC",
            "city": "Amsterdam",
            "field": "field",
            "id": 1,
            "link": "http://",
            "name": "Codaissuer",
            "phone": "11223344",
            "type": "type"
        },
        "role": "buyer"
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
           <CardMedia
            className={classes.media}
            image="https://imagizer.imageshack.com/v2/280x200q90/922/a6Pawe.jpg"
            title="product name - redux"
          />
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
