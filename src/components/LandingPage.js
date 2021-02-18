import * as React from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Header from './Header'
import MapWrapper from './MapWrapper'
import "../style.css";

function LandingPage() {

    return (
        <>
            <Header />
            <MapWrapper />
        </>
    );
}

export default connect(null, null)(LandingPage);

LandingPage.propTypes = {}
