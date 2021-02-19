import React from 'react'
import PropTypes from 'prop-types'
import {
    CircleMarker, Popup
} from 'react-leaflet';
import {
    Typography, Paper
} from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles'
import getDate from '../helper/getDate'

const useStyles = makeStyles((theme) => ({

    divider: {
        boxSizing: 'border-box',
        height: '1px',
        width: '191px',
        border: '0.5px solid #FFFFFF',
        opacity: 0.3,
        margin: '18.5px 0'
    },
    popupBody: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#007788',
        padding: '16px 32px',
        alignItems: 'flex-start',
    },
}))

function CircleMarkerWithPopup(props) {

    const classes = useStyles()
    return (
        <CircleMarker
            center={[props.item.latitude, props.item.longitude]}
            radius={4}
            stroke={true}
            weight={1}
            color={'#000000'}
            fillColor='#87CE3F'
            fillOpacity={0.8}
        >
            <Popup >
                <Paper className={classes.popupBody}>
                    <Typography color='primary' variant="body2">Name: <Typography color='primary' variant="caption">{props.item.name}</Typography></Typography>
                    <Typography color='primary' variant="caption">Latest Readings: {props.item.reading}</Typography>
                    <Typography color='primary' variant="caption">
                        Date: {getDate(props.item.reading_ts)}
                    </Typography>
                    <Divider classes={{ light: classes.divider }} className={classes.divider} light />
                    <Typography color='primary' variant="caption">ID: {props.item.id}</Typography>
                    <Typography color='primary' variant="caption">Type: {props.item.sensor_type}</Typography>
                </Paper>
            </Popup>
        </CircleMarker >)
}

CircleMarkerWithPopup.propTypes = {
    item: PropTypes.object,
}


export default CircleMarkerWithPopup