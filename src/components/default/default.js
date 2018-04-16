import React, {PureComponent} from "react";
import {withStyles} from "material-ui/styles";
import Button from "material-ui/Button";
import compose from "lodash/fp/compose";
import {translate} from "react-i18next";
import {Link} from 'react-router-dom'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import './default.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 150
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    width: 320,
    alignItem: "center"
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper
  }
});

class defaultPage extends PureComponent {
  state = {}

  render() {
    const {t} = this.props;
    const {classes} = this.props;

    return (<div>
      <header>
        <div class="container">
          <div class="row"></div>

          <div class="row header-info">
            <div class="col-sm-10 col-sm-offset-1 text-center">
              <h1 class="wow fadeIn">We connect farmers with buyers</h1>
              <br/>
              <p class="lead wow fadeIn" data-wow-delay="0.5s">Thousands of buyers and thousands of farmers</p>

              <form className={classes.container} onSubmit={this.handleSubmit}>

                <Button type="button" variant="raised" color="primary" label="Recents" onClick={() => this.props.history.push('/signup')}>

                  {t("Sign up")}
                </Button>

                <Button type="button" variant="raised" color="primary" label="Recents" onClick={() => this.props.history.push('/signin')}>

                  {t("Log in")}
                </Button>

              </form>
            </div>
          </div>
        </div>
      </header>

    </div>);
  }
}

export default compose(translate("user"), withStyles(styles))(defaultPage);
