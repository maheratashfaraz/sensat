import * as React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
} from "@material-ui/core";
import SensorTypeDropDown from './SensorTypeDropDown'
import SensorNameDropDown from './SensorNameDropdown'
import { makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '36px'
    }


}))

export default function Header() {
    const classes = useStyles()

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Typography variant="h6">Sensat</Typography>
            </Toolbar>
            <div>
                <SensorTypeDropDown />
                <SensorNameDropDown />
            </div>
        </AppBar>
    );
}

