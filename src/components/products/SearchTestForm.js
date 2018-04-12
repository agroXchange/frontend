import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    withMobileDialog,
} from 'material-ui/Dialog';


import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';

import { vegetables, fruits, beans } from '../../productCodes'

const classes = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        width: 200,
    },
    menu: {
        width: 200,
    },
}

const countries = [
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


class ResponsiveDialog extends React.Component {
    state = {
        open: false,
        country: 'Colombia'
    };

    handleClickOpen = () => {
        
        this.setState({ open: true });
    };

    handleClose = () => {
        
        this.setState({ open: false });
    };


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })

        this.setState({ open: false });
        console.log(e.target.value)
    }



    render() {
        const { fullScreen } = this.props;

        return (
            <div>
                <Button onClick={this.handleClickOpen}>Open responsive dialog</Button>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {/* <form onSubmit={this.handleSubmit} className="form-container"> */}
                            <ul className="menu vertical nested">
                                {fruits.map(fruit =>
                                    <li key={Object.getOwnPropertyNames(fruit)}>
                                        <button
                                            name="name"
                                            className="button"
                                            value={Object.getOwnPropertyNames(fruit)}
                                            type="button"
                                            onClick={this.handleChange}

                                        >
                                            {Object.getOwnPropertyNames(fruit)}

                                        </button>
                                    </li>

                                )}
                            </ul>
                            {/* </form> */}
            </DialogContentText>
                    </DialogContent>
                    {/* <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Agree
            </Button>
                    </DialogActions> */}
                </Dialog>


                <form onSubmit={this.handleSubmit} className="form-container">
                    <Paper className="paper">

                        <h2>Search Products</h2>

                        <div>
                            <ul className="vertical menu drilldown"
                                data-drilldown
                                data-auto-height="true"

                            >
                                <div id="test">
                                    {/* <li>
                                        <a href="#"> Vegetables   </a>
                                        <ul className="menu vertical nested">
                                            {vegetables.map(veg =>
                                                <li key={Object.getOwnPropertyNames(veg)}
                                                    name="name"
                                                    value={Object.getOwnPropertyNames(veg)}
                                                    onClick={this.handleChange}
                                                    type="button"
                                                    data-close-on-click="true"
                                                >

                                                    <a href="#"

                                                    >{Object.getOwnPropertyNames(veg)}</a>
                                                    <ul className="menu vertical nested">
                                                        <li><a href="#" >Two AAAA</a></li>
                                                    </ul>
                                                </li>
                                            )}
                                        </ul>
                                    </li> */}

                                    {/* <li>
                                        <a href="#"> Fruits & Nuts   </a>
                                        <ul className="menu vertical nested">
                                            {fruits.map(fruit =>
                                                <li key={Object.getOwnPropertyNames(fruit)}>
                                                    <button
                                                        name="name"
                                                        className="button"
                                                        value={Object.getOwnPropertyNames(fruit)}
                                                        type="button"
                                                        onClick={this.handleChange}

                                                    >
                                                        {Object.getOwnPropertyNames(fruit)}

                                                    </button>
                                                </li>

                                            )}
                                        </ul>
                                    </li> */}

                                    {/* <li>
                                        <a href="#"> Beans & Crop   </a>
                                        <ul className="menu vertical nested">
                                            {beans.map(bean =>
                                                <li key={Object.getOwnPropertyNames(bean)}>
                                                    <button
                                                        name="name"
                                                        className="button"
                                                        value={Object.getOwnPropertyNames(bean)}
                                                        type="button"
                                                        onClick={this.handleChange}
                                                    >
                                                        {Object.getOwnPropertyNames(bean)}

                                                    </button>
                                                </li>

                                            )}
                                        </ul>
                                    </li> */}
                                </div>
                            </ul>
                        </div>

                        <TextField
                            id="code"
                            name="code"
                            label="HS Code"
                            style={classes.textField}
                            value={this.state.code}
                            onChange={this.handleChange}
                            margin="normal"
                        />

                        <TextField
                            id="country"
                            name="country"
                            select
                            label="Please select your country"
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
                            style={{
                                display: 'block',
                                margin: 'auto',
                                marginTop: 20,
                                marginBottom: 20
                            }}
                        >
                            Save
        </Button>

                    </Paper>
                </form>

            </div>
        );
    }
}

ResponsiveDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);