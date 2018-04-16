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
      <div class="header-default">
        <div class="container">
          <div class="row"></div>

          <div class="row header-info">
            <div class="col-sm-10 col-sm-offset-1 text-center">
              <h1 class="wow fadeIn" style={{"color":"#f2f2f2"}}>We connect farmers with buyers</h1>
              <br/>
              <p class="lead wow fadeIn" data-wow-delay="0.5s">Ensuring safe and healthy food in a competing world can be a challenge.
On Agro Xchange, we provide the necessary tools to make your job easier.</p>


                <br/>
                <div class="row">
              <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                <div class="row">
                  <div class="col-xs-6 text-right wow fadeInUp" data-wow-delay="1s">
                    <a href="/login" class="btn btn-secondary btn-lg scroll"> {t("Log in")}</a>
                  </div>
                    <br/>
                    <br/>
                  <div class="col-xs-6 text-left wow fadeInUp" data-wow-delay="1.4s">
                    <a href="/signup" class="btn btn-primary btn-lg scroll">  {t("Sign up")}</a>
                  </div>
                </div>
              </div>
            </div>





            </div>
          </div>
        </div>
        </div>
      </header>

      <footer>
  <div class="container">

  <div class="row">
   <div class="col-sm-8 margin-20">
     <ul class="list-inline social">
       <p>Connect with us on</p>
       <li>777112233</li>
       <li>email</li>
       <li>home</li>
     </ul>
   </div>

   <div class="col-sm-4 text-right">
     <p><small>Copyright &copy; 2018. All rights reserved. <br/>
       Created by dream team corporation</small></p>
   </div>
  </div>

  </div>
  </footer>

    </div>);
  }
}

export default compose(translate("user"), withStyles(styles))(defaultPage);
