import React from 'react';
import {
    Fab
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import setCurrentPage from '../actions/setCurrentPage'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: '82px',
        left: '82px',
        zIndex: '10',
    }
}))


function SwitchPageButton(props) {
    const classes = useStyles()
    const handleClick = () => {
        props.setCurrentPage(props.currentPage === 'List' ? 'Map' : 'List')
    }
    return (
        <Fab
            color="secondary"
            variant="extended"
            className={classes.root}
            onClick={handleClick}
        >
            {props.currentPage}
        </Fab>)
}


function mapStateToProps(state) {
    return {
        currentPage: state.currentPage.page,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({
            setCurrentPage: setCurrentPage
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchPageButton);
