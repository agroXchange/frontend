import React from 'react';
import * as combine from "lodash/fp/compose";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Dialog, { DialogContent, DialogContentText, withMobileDialog,} from 'material-ui/Dialog';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails,} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Search from '@material-ui/icons/Search';

import { fetchCodes } from '../../actions/codes'


const classes = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
        justify: 'center',
        textAlign: 'center',
    },
    menu: {
         width: '100%',
        justify: 'center',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        justify: 'center',
        alignItems: 'center'
    },
    dialog:{
        direction: 'row',
        justify: 'center',
        textAlign: 'center',
        color: "#588D61"
    },
    button: {
        justify: 'center',
        textAlign: 'center',
        backgroundColor: `#588D61`,
        color: "white",
        '&:hover': {
            backgroundColor: `#8FBC8F`,
        },
    },
        thinbutton: {
            justify: 'center',
            textAlign: 'center',
            display: 'block',
            margin: 'auto',
            marginTop: 10,
            marginBottom: 2,
            backgroundColor: `#white`,
            color: "#588D61",
            '&:hover': {
                backgroundColor: `#8FBC8F`,
            },
    },
}

const countries = [
    {
         value: '*',
        label: 'All',
    },
    {
        value: 'Colombia',
        label: 'Colombia',
    },
    {
        value: 'Panama',
        label: 'Panama'
    },
    {
        value: 'Ecuador',
        label: 'Ecuador',
    },
    {
        value: 'Venezuela',
        label: 'Venezuela',
    },
    {
        value: 'Guyana',
        label: 'Guyana',
    },
];


class SearchProductForm extends React.Component {
    state = {
        open: false,
        picked: false,
        country: '*',
        code: ''
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        delete this.state.country
        console.log("should close")
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange  = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = code => {
        this.setState({
            code: code,
            picked: true,
            open: false
        })
    }

    componentWillMount = () => {
        this.props.fetchCodes()
    }

    getName = (code) => {
        if(!this.state.picked) return
        let product = this.props.codes.filter(i => i.code.match(code))
        return product[0].titleeng
    }


    render() {
        const { fullScreen, codes, vegetables, fruits, beans } = this.props

        if (codes)
        return (

            <form onSubmit={this.handleSubmit} className="form-container"
                style={classes.form}
                justify="center"
            >

            <Paper className="paper">

                    <div style={{ textAlign: 'center'}}  >
                        <br/>
                        <Button
                            onClick={this.handleClickOpen}
                            variant="raised"
                            style={classes.button}
                             color="primary"
                           >
                            <Search/> Products
                        </Button>
                    </div>

                    <div>
                    <Dialog
                        fullScreen={fullScreen}
                        open={this.state.open}
                        aria-labelledby="responsive-dialog-title"
                        style = {classes.dialog}
                        justify="center"
                    >

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Vegetables ({vegetables.length})</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>

                                <DialogContent>
                                    <DialogContentText>
                                            {vegetables.map(veg =>
                                             {
                                               return  <div key={veg.code}>
                                                    <Button
                                                       color="primary"
                                                        className="button"
                                                        size="small"
                                                        type="button"
                                                        onClick={_ => this.handleClick(veg.code)}
                                                    >
                                                        {veg.titleeng}
                                                    </Button>
                                                </div>
                                            }
                                            )}
                                    </DialogContentText>
                                </DialogContent>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Fruits & Nuts ({fruits.length})</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>

                                    <DialogContent>
                                        <DialogContentText>
                                                {fruits.map(fruit =>
                                                    <div key={fruit.code}>
                                                        <Button
                                                            size="small"
                                                            color="primary"
                                                            className="button"
                                                            type="button"
                                                            onClick={_ => this.handleClick(fruit.code)}
                                                        >
                                                            {fruit.titleeng}
                                                        </Button>
                                                    </div>
                                                )}
                                        </DialogContentText>
                                    </DialogContent>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Beans & Crop ({beans.length})</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>

                                <DialogContent>
                                    <DialogContentText>
                                            {beans.map(bean =>
                                                <div key={bean.code}>
                                                    <Button
                                                        size="small"
                                                        color="primary"
                                                        className="button"
                                                        type="button"
                                                        onClick={_ => this.handleClick(bean.code)}
                                                    >
                                                        {bean.titleeng}
                                                    </Button>
                                                </div>
                                            )}
                                    </DialogContentText>
                                </DialogContent>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                </Dialog>
            </div>
            <br/>

                    <div style={classes.dialog}><h4>{!this.state.code ? "< select product >" : this.getName(this.state.code)}</h4></div>

            <div>
                        <TextField
                            id="code"
                            name="code"
                            label="HS Code"
                            style={classes.textField}
                            value={this.state.code}
                            onChange={this.handleChange}
                            // placeholder="HS Number"
                            margin="normal"
                        />
            </div>

            <div >
                        <TextField
                            id="country"
                            name="country"
                            select
                            label="From country"
                            style={classes.textField}
                            value={this.state.country}
                            onChange={this.handleChange}
                            margin="normal"
                        >
                            {countries.map(option => (
                                <MenuItem key={option.value} value={option.value} >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>


                        <Button
                            color="primary"
                            className="submit-btn"
                            type="submit"
                            style={classes.thinbutton}
                        >
                            Save
                        </Button>
                    </div>

                    </Paper>
                </form>

        );
    }
}

SearchProductForm.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => ({
    codes: state.codes,
    vegetables: state.codes.filter(x => x.code.match(/^07/)),
    fruits: state.codes.filter(x => x.code.match(/^08/)),
    beans: state.codes.filter(x => x.code.match(/^09/))
})

export default combine(
    withMobileDialog(),
    connect(mapStateToProps, { fetchCodes })
)(SearchProductForm);
