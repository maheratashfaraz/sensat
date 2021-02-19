import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Sensor from './Sensor'
import sortList from '../helper/sortList'
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    root: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        height: '95%',
        width: '100%',
        padding: '40px 0 100px 0',
        backgroundColor: '#F6F6F6',
        overflowY: 'auto',
        top: '160px',
        left: '100px',

    },
    sensorListContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '38px'
    },
    paginator: {
        justifyContent: "center",
        paddingTop: "20px"
    }
}))


function ListWrapper(props) {
    const classes = useStyles()
    const itemsPerPage = 50;
    const [page, setPage] = React.useState(1);
    const [noOfPages] = React.useState(
        Math.ceil(props.sensors.length / itemsPerPage)
    );

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <div className={classes.sensorListContainer}>
                    {props.sensors && sortList(props.sensors, props.sortBy)
                        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                        .map((sensor, index) => {
                            return <Sensor key={index} data={sensor} />
                        })}
                </div>
            </div>
            <div>
                <Pagination
                    count={noOfPages}
                    page={page}
                    onChange={handlePageChange}
                    defaultPage={1}
                    color="primary"
                    size="large"
                    showFirstButton
                    showLastButton
                    classes={{ ul: classes.paginator }}
                />
            </div>
        </div>)
}

ListWrapper.propTypes = {
    sensors: PropTypes.array,
    sortBy: PropTypes.string,
}

function mapStateToProps(state) {
    return {
        sensors: state.sensors.sensors,
        sortBy: state.sortBy.kind
    }
}

export default connect(mapStateToProps, null)(ListWrapper);
