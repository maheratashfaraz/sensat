import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import setSensorType from '../actions/setSensorType'



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },


}))

function SensorTypeDropdown(props) {
    const classes = useStyles()

    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        // setType(event.target.value);
        props.setSensorType(event.target.value)
    };
    useEffect(() => {
        setType(props.sensorType)
    }, [props.sensorType])

    return (
        <FormControl className={classes.formControl} color='secondary'>
            <InputLabel color='secondary' id="demo-simple-select-label">Sensor Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                onChange={handleChange}
            >
                <MenuItem value='O3'>O3</MenuItem>
                <MenuItem value='NO2'>NO2</MenuItem>
                <MenuItem value='CO'>CO</MenuItem>
                <MenuItem value='TEMP'>TEMP</MenuItem>
                <MenuItem value='RH'>RH</MenuItem>
            </Select>
        </FormControl>)
}

function mapStateToProps(state) {
    return {
        sensorType: state.sensorType.type,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({
            setSensorType: setSensorType
        }, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SensorTypeDropdown);