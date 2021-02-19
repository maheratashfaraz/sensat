import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
    AppBar,
    Toolbar,
    Typography,
} from "@material-ui/core";
import SensorTypeDropDown from './SensorTypeDropDown'
import SensorNameDropDown from './SensorNameDropdown'
import SortByDropDown from './SortByDropDown'



const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '36px'
    }


}))

function Header(props) {
    const classes = useStyles()

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Typography variant="h6">Sensat</Typography>
            </Toolbar>
            {props.currentPage === 'List' ? <div>
                <SensorTypeDropDown />
                <SensorNameDropDown />
            </div> : <SortByDropDown />}
        </AppBar>
    );
}


function mapStateToProps(state) {
    console.log('This is current page ', state.currentPage.page)
    return {
        currentPage: state.currentPage.page,
    }
}


export default connect(mapStateToProps, null)(Header);
