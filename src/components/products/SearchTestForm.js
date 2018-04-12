import React, { PureComponent } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    withMobileDialog,
} from 'material-ui/Dialog';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';

import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { withStyles } from 'material-ui/styles';

import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

import Paper from 'material-ui/Paper';

import Input, { InputLabel, InputAdornment } from 'material-ui/Input';

import { vegetables, fruits, beans } from '../../productCodes'

import { fetchCodes } from '../../actions/codes'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});


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

    componentWillMount = () => {
        this.props.fetchCodes()
    }



    render() {
       // const { fullScreen } = this.props;
        const { fullScreen, codes, vegetables, fruits, beans } = this.props

        if (codes)
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <Paper className="paper">

                <h2>Search Products</h2>

                <Button onClick={this.handleClickOpen}>Products</Button>


                    <Dialog
                        fullScreen={fullScreen}
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >

                   
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Vegetables</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            {/* <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography> */}


                                {/* <DialogTitle id="responsive-dialog-title">{"Pick product:"}</DialogTitle> */}
                                <DialogContent>
                                    <DialogContentText>
                                        <ul className="menu vertical nested">
                                            {vegetables.map(veg =>
                                                <li key={veg.code}>
                                                    <Button
                                                        size="small"
                                                        name="name"
                                                        color="secondary"
                                                        className="button"
                                                        value={veg.code}
                                                        type="button"
                                                        onClick={this.handleChange}
                                                    >
                                                        {veg.titleeng}
                                                    </Button>
                                                </li>
                                            )}
                                        </ul>
                                    </DialogContentText>
                                </DialogContent>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Fruits & Nuts </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>

                                {/* <Dialog
                                    fullScreen={fullScreen}
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    aria-labelledby="responsive-dialog-title"
                                > */}
                                    {/* <DialogTitle id="responsive-dialog-title">{"Pick product:"}</DialogTitle> */}
                                    <DialogContent>
                                        <DialogContentText>
                                            <ul className="menu vertical nested">
                                                {fruits.map(fruit =>
                                                    <li key={fruit.code}>
                                                        <Button
                                                            size="small"
                                                            name="name"
                                                            color="secondary"
                                                            className="button"
                                                            value={fruit.code}
                                                            type="button"
                                                            onClick={this.handleChange}
                                                        >
                                                            {fruit.titleeng}
                                                        </Button>
                                                    </li>
                                                )}
                                            </ul>
                                        </DialogContentText>
                                    </DialogContent>
                                
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Beans & Crop </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>

                                {/* <Dialog
                                    fullScreen={fullScreen}
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    aria-labelledby="responsive-dialog-title"
                                > */}
                                {/* <DialogTitle id="responsive-dialog-title">{"Pick product:"}</DialogTitle> */}
                                <DialogContent>
                                    <DialogContentText>
                                        <ul className="menu vertical nested">
                                            {beans.map(bean =>
                                                <li key={bean.code}>
                                                    <Button
                                                        size="small"
                                                        name="name"
                                                        color="secondary"
                                                        className="button"
                                                        value={bean.code}
                                                        type="button"
                                                        onClick={this.handleChange}
                                                    >
                                                        {bean.titleeng}
                                                    </Button>
                                                </li>
                                            )}
                                        </ul>
                                    </DialogContentText>
                                </DialogContent>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>



                </Dialog>




                    {/* <Dialog
                        fullScreen={fullScreen}
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">{"Pick product:"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <ul className="menu vertical nested">
                                    {fruits.map(fruit =>
                                        <li key={fruit.code}>
                                            <Button
                                                size="small"
                                                name="name"
                                                color="secondary"
                                                className="button"
                                                value={fruit.code}
                                                type="button"
                                                onClick={this.handleChange}
                                            >
                                                {fruit.titleeng}
                                            </Button>
                                        </li>
                                    )}
                                </ul>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog> */}


 {/* ----------------------------------------------------------                    */}
                        {/* <div>
                            <ul className="vertical menu drilldown"
                                data-drilldown
                                data-auto-height="true"

                            > */}
                              
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
                                {/* </div>
                            </ul>
                        </div> */}

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

           
        );
    }
}

ResponsiveDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => ({
    codes: state.codes,
    vegetables: state.codes.filter(x => x.code.match(/^07/)),
    fruits: state.codes.filter(x => x.code.match(/^08/)),
    beans: state.codes.filter(x => x.code.match(/^09/))
})

export default compose(
    withMobileDialog(), 
    connect(mapStateToProps, { fetchCodes })
)(ResponsiveDialog);



