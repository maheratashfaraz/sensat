import * as React from "react";
import {
    Card,
    CardContent,
    Link,
    Typography,
} from "@material-ui/core";
import PropTypes from 'prop-types'


export default function SearchResult(props) {
    let date = new Date(props.item.date_published)

    return (<Card>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
                {date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate())}
            </Typography>
            <Typography variant="h5" component="h2">
                {props.item.title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
                <Link
                    href="http://sigmund.com"
                    rel="noopener"
                    target="_blank"
                >
                    {props.item.url}
                </Link>
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
                {props.item.snippet}
            </Typography>
            <Typography align="right" color="textSecondary" variant="body2">
                Risk score: {props.item.risk_score}
            </Typography>
        </CardContent>
    </Card>
    );
}


SearchResult.propTypes = {
    item: PropTypes.object
}