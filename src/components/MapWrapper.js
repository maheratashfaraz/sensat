import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    map: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        overflow: 'none',
    }
}))

export default function MapWrapper() {
    const classes = useStyles()
    return (
        <MapContainer className={classes.map} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
            </Marker>
        </MapContainer>);
}