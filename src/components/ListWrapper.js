import React from 'react';
import {
    Fab
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Sensor from './Sensor'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import sortList from '../helper/sortList'


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingRight: '36px'
    },
    root: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: '40px 50px 100px 40px',
        backgroundColor: '#F6F6F6',
        overflowY: 'auto',
        top: '130px',
        left: '100px',

    },
    sensorListContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '38px'
    },
    formControl: {
        margin: theme.spacing(1),
        maxWidth: 120,
    },
}))


function ListWrapper(props) {
    const classes = useStyles()
    const [sortBy, setSortBy] = React.useState('type');
    const handleChange = (event) => {
        setSortBy(event.target.value)
    };

    return (
        <div className={classes.container}>
            <FormControl className={classes.formControl} color='secondary'>
                <InputLabel color='secondary' id="demo-simple-select-label">Sort By:</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortBy}
                    onChange={handleChange}
                >
                    <MenuItem value='date'>Date</MenuItem>
                    <MenuItem value='type'>Type</MenuItem>
                </Select>
            </FormControl>

            <div className={classes.root}>
                <div className={classes.sensorListContainer}>
                    {props.sensors && sortList(props.sensors, sortBy).map((sensor, index) => {
                        return <Sensor key={index} data={sensor} />
                    })}
                </div>
            </div>
        </div>)
}


function mapStateToProps(state) {
    return {
        sensors: state.sensors.sensors,
    }
}



export default connect(mapStateToProps, null)(ListWrapper);
