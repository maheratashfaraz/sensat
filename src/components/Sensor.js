import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
    Typography
} from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import getDate from '../helper/getDate'


const useStyles = makeStyles(() => ({
    root: {
        width: '240px',
        height: '120px',
        margin: '0px 15px 100px 0px',
    },
    popupHeader: {
        backgroundColor: '#028EA2',
        borderRadius: '12px 12px 0 0',
        padding: '16px 32px'
    },
    popupBody: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#007788',
        padding: '16px 32px',
        alignItems: 'flex-start',
    },
    divider: {
        boxSizing: 'border-box',
        height: '1px',
        width: '191px',
        border: '0.5px solid #FFFFFF',
        opacity: 0.3,
        margin: '18.5px 0'
    }
}))
function Sensor(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.popupHeader}>
                <Typography color='primary' variant="body2">Name: <Typography color='primary' variant="caption">{props.data.name}</Typography></Typography>
            </div>
            <div className={classes.popupBody}>
                <Typography color='primary' variant="caption">Latest Readings: {props.data.reading}</Typography>
                <Typography color='primary' variant="caption">
                    Date: {getDate(props.data.reading_ts)}
                </Typography>
                <Divider classes={{ light: classes.divider }} className={classes.divider} light />
                <Typography color='primary' variant="caption">ID: {props.data.id}</Typography>
                <Typography color='primary' variant="caption">Type: {props.data.sensor_type}</Typography>
            </div>
        </div >)
}

Sensor.propTypes = {
    data: PropTypes.object,
}

export default Sensor