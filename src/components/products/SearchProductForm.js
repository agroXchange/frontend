import React, { PureComponent } from 'react';
import { compose } from 'redux'
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
import Icon from 'material-ui/Icon';
import Search from '@material-ui/icons/Search';

import { fetchCodes } from '../../actions/codes'


const classes = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 5,
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


class SearchProductForm extends React.Component {
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

    handleChange  = (e) => {     
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = code => {
        this.setState({
            code: code,
            open: false
        })
    }

    componentWillMount = () => {
        this.props.fetchCodes()
    }

    getName = (code) => {
        let product = this.props.codes.filter(i => i.code.match(code))
        return product[0].titleeng
    }
    

    render() {
        const { fullScreen, codes, vegetables, fruits, beans } = this.props

        let product = codes.filter(i => i.code.match(this.state.code))

        let title = ''
        if (product[0]) { title = (product[0].titleeng) }

        if (codes)
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
            
                <Paper className="paper">
             <div id="search">    

                <h2>Product Search</h2>

                        <Button 
                            onClick={this.handleClickOpen}
                            variant="raised" 
                           >
                            <Search/> Products 
                        </Button>

                    <Dialog
                        fullScreen={fullScreen}
                        open={this.state.open}
                        aria-labelledby="responsive-dialog-title"
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

                    <div><h3>{!this.state.code ? "< pick a product >" : this.getName(this.state.code)}</h3></div>

            <div> 
                        <TextField
                            id="code"
                            name="code"
                            // label="HS Code"
                            style={classes.textField}
                            value={this.state.code}
                            onChange={this.handleChange}
                            placeholder="HS Number"
                            margin="normal"
                        />
            </div>

            <div >
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

export default compose(
    withMobileDialog(), 
    connect(mapStateToProps, { fetchCodes })
)(SearchProductForm);



