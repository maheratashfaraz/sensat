import * as React from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Header from './Header'
import MapWrapper from './MapWrapper'
import "../style.css";
import SwitchPageButton from './SwitchPageButton'
import ListWrapper from './ListWrapper'
function LandingPage(props) {

    return (
        <>
            <Header />
            <SwitchPageButton />
            {props.currentPage === 'List' ? <MapWrapper /> : <ListWrapper />}
        </>
    );
}

function mapStateToProps(state) {
    return {
        currentPage: state.currentPage.page,
    }
}

export default connect(mapStateToProps, null)(LandingPage);

LandingPage.propTypes = {}
