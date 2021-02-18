import React, { Fragment, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import {
    Typography
} from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import getDate from '../helper/getDate'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '240px',
        height: '120px',
        margin: '0px 15px 100px 0px',
    },
    popupHeader: {
        backgroundColor: '#028EA2',
        borderRadius: '12px 12px 0 0',
        padding: '10px',
        boxShadow: '0 2px 7px 0 rgba(0,0,0,0.13)',
    },
    popupPaper: {
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        borderRadius: '12px',
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
    popupFooter: {
        borderRadius: '0 0 12px 12px',
        padding: theme.spacing(2),
        backgroundColor: 'white',
        boxShadow: '0 2px 7px 0 rgba(0,0,0,0.13)',
        "&& img": {
            width: '99px',
            height: '37px',
            '&:hover': {
                opacity: 0.8,
                transition: 'opacity .25s ease-in-out',
            }
        }
    },
    respondText: {
        display: 'inline',
        opacity: 0.5,
    },
    divider: {
        boxSizing: 'border-box',
        height: '1px',
        width: '191px',
        border: '0.5px solid #FFFFFF',
        opacity: 0.3,
        margin: '18.5px 0'
    },
    respondTextValues: {
        display: 'inline',
        opacity: 0.5,
    },
    valuesContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingBottom: '30px'
    },
    valuesColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '50%'
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

                {/* <Typography key={i} color='primary' variant="caption">{item.name}: </Typography> */}
            </div>
        </div >)
}


export default Sensor