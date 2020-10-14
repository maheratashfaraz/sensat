import * as React from "react";
import {
    Typography,
} from "@material-ui/core";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

function SearchResultInfo(props) {
    return (
        <Typography>Results count: {props.resultCount} | Average risk: {props.averageScore}</Typography>
    );
}


function mapStateToProps(state) {
    return {
        averageScore: state.averageScore.value,
        resultCount: state.resultCount.value
    }
}

export default connect(mapStateToProps, null)(SearchResultInfo);

SearchResultInfo.propTypes = {
    averageScore: PropTypes.number,
    resultCount: PropTypes.number,
}