import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { makeStyles } from '@material-ui/styles'
import data from '../data/sensor_readings'
import setSensors from '../actions/setSensors'
import CircleMarkerWithPopup from './CircleMarkerWithPopup'


const useStyles = makeStyles(() => ({
    map: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        overflow: 'none',
    }
}))

function MapWrapper(props) {
    const classes = useStyles()

    useEffect(() => {
        props.setSensors(data)
    }, [])

    return (
        <MapContainer className={classes.map} center={[51.5183828, -0.0688549]} zoom={16} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                {props.sensors && props.sensors.filter(item => {
                    return (item.sensor_type === props.sensorType && item.name === props.sensorName)
                }).map((item, index) => {
                    return <CircleMarkerWithPopup key={index} item={item} />
                })}
            </MarkerClusterGroup>
        </MapContainer >);
}

MapWrapper.propTypes = {
    sensors: PropTypes.array,
    sensorType: PropTypes.string,
    sensorName: PropTypes.string,
    setSensors: PropTypes.func
}

function mapStateToProps(state) {
    return {
        sensors: state.sensors.sensors,
        sensorType: state.sensorType.type,
        sensorName: state.sensorName.name,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({
            setSensors: setSensors
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);