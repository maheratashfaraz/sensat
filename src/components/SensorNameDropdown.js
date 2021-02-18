import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import setSensorName from '../actions/setSensorName'



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },


}))

function SensorDateDropdown(props) {
    const classes = useStyles()

    const [name, setName] = React.useState('');

    const handleChange = (event) => {
        props.setSensorName(event.target.value)
    };
    useEffect(() => {
        setName(props.sensorName)
    }, [props.sensorName])

    return (
        <FormControl className={classes.formControl} color='secondary'>
            <InputLabel color='secondary' id="demo-simple-select-label">Sensor Name</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                onChange={handleChange}
            >
                <MenuItem value='Ozone'>Ozone</MenuItem>
                <MenuItem value='Nitrogen dioxide'>Nitrogen dioxide</MenuItem>
                <MenuItem value='Carbon monoxide'>Carbon monoxide</MenuItem>
                <MenuItem value='Ambient temperature'>Ambient temperature</MenuItem>
                <MenuItem value='Relative humidity'>Relative humidity</MenuItem>
            </Select>
        </FormControl>)
}

function mapStateToProps(state) {
    return {
        sensorName: state.sensorName.name,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({
            setSensorName: setSensorName
        }, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SensorDateDropdown);