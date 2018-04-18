import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import { fetchOrder } from "../../actions/orders";
import { connect } from "react-redux";
import compose from "lodash/fp/compose";
import "../../styles/OrderList.css";
import { translate } from "react-i18next";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  card: {
    maxWidth: 400,
    margin: 50,
    textAlign: "left",
    display: "inline-block"
  },
  table: {
    width: "15px",
    fontSize: "12px"
  },
  number: {
    fontSize: "15px"
  },
  button: {
    margin: theme.spacing.unit
  }
});

class OrderDetail extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.fetchOrder(this.props.match.params.id);
  }

  render() {
    const { classes, order } = this.props;
    const { t } = this.props;
    if (!order) return null;

    return (
      <div className={classes.root}>
        <Button
          onClick={() => this.props.history.goBack()}
          size="medium"
          color="primary"
          style={{ display: "flex", flex: 1 }}
        >
          Go Back
        </Button>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              gutterBottom
              variant="headline"
              component="p"
              className={classes.number}
            >
              {t("Order")} #{order.id}
            </Typography>
            <table className={classes.table}>
              <tr>
                <th>{t("Organization name")}</th>
                <td>{order.buyer.name}</td>
              </tr>
              <tr>
                <th>{t("Field")}</th>
                <td>{order.buyer.field}</td>
              </tr>
              <tr>
                <th>{t("Type")}</th>
                <td>{order.buyer.type}</td>
              </tr>
              <tr>
                <th>{t("COC")}</th>
                <td>{order.buyer.chamberOfCommerce}</td>
              </tr>
              <tr>
                <th>{t("Address")}</th>
                <td>{order.buyer.address}</td>
              </tr>
              <tr>
                <th>{t("Country")}</th>
                <td>{order.buyer.country}</td>
              </tr>
              <tr>
                <th>{t("Phone")}</th>
                <td>{order.buyer.phone}</td>
              </tr>
              <tr>
                <th>{t("email")}</th>
                <td>{order.buyer.email}</td>
              </tr>
              <tr>
                <th>{t("ICO")}</th>
                <td>{order.ICO}</td>
              </tr>
              <tr>
                <th>{t("volume")}</th>
                <td>{order.volume}</td>
              </tr>
              <tr>
                <th>{t("Comments")}</th>
                <td>{order.comments}</td>
              </tr>
              <tr>
                <th>{t("Status")}</th>
                <td>{order.status}</td>
              </tr>
            </table>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order
});

export default compose(
  translate("detail"),
  withStyles(styles),
  connect(mapStateToProps, { fetchOrder })
)(OrderDetail);
