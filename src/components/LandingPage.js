import * as React from "react";
import { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import updateAverageScore from '../actions/updateAverageScore'
import updateResultCount from '../actions/updateResultCount'
import { getSearchResult } from '../services/getSearchResult'
import getAverageScore from '../helper/getAverageScore'
import Header from './Header'
import SearchResultInfo from './SearchResultInfo'
import SearchResult from './SearchResult'
import {
    Grid,
    TextField,
    Box,
    Typography
} from "@material-ui/core";
import "../style.css";



function LandingPage(props) {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    let input = ""

    const handleChange = e => {

        input = e.target.value  // current search input 
        if (input === "") {
            props.updateResultCount(0)
            props.updateAverageScore(0)
            setResult(null)
        }
        else {
            getSearchResult(input).then(res => {
                if (res.config.params.query === input) { // check query matches lastest input
                    setResult(res.data.results)
                    props.updateResultCount(res.data.results.length)
                    props.updateAverageScore(parseInt(getAverageScore(res.data.results)))
                }
            }).catch(error => {
                setError(error)
            })
        }
    }

    return (
        <>
            <Header />
            <Box mt={1}>
                <Grid
                    alignItems="center"
                    container
                    direction="column"
                    justify="center"
                    spacing={3}
                >
                    <Grid item md={6} sm={9} xs={12}>
                        <TextField label="Search" onChange={handleChange} />
                    </Grid>
                    <Grid item md={6} sm={9} xs={12}>
                        <SearchResultInfo />
                    </Grid>
                    <Grid item md={6} sm={9} xs={12}>
                        {result && result.map((item, index) => {
                            return (<SearchResult key={index} item={item} />)
                        })}
                    </Grid>
                    <Grid item md={6} sm={9} xs={12}>
                        {error && <Typography>{error}</Typography>}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
function mapStateToProps(state) {
    return {
        averageScore: state.averageScore.value,
        resultCount: state.resultCount.value
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({
            updateAverageScore: updateAverageScore,
            updateResultCount: updateResultCount
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

LandingPage.propTypes = {
    averageScore: PropTypes.number,
    updateAverageScore: PropTypes.func
}
