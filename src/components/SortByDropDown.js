import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import setSortBy from '../actions/setSortBy'



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },


}))

function SensorTypeDropdown(props) {
    const classes = useStyles()

    const [kind, setKind] = React.useState('');

    const handleChange = (event) => {
        // setType(event.target.value);
        props.setSortBy(event.target.value)
    };
    useEffect(() => {
        setKind(props.sortBy)
    }, [props.sortBy])

    return (
        <FormControl className={classes.formControl} color='secondary'>
            <InputLabel color='secondary' id="demo-simple-select-label">Sort By:</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={kind}
                onChange={handleChange}
            >
                <MenuItem value='date'>Date</MenuItem>
                <MenuItem value='type'>Type</MenuItem>
            </Select>
        </FormControl>)
}

function mapStateToProps(state) {
    return {
        sensorType: state.sensorType.type,
        sortBy: state.sortBy.kind
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({
            setSortBy: setSortBy
        }, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SensorTypeDropdown);