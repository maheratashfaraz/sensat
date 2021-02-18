
export default function sortList(list, kind) {
    return list.sort(function (a, b) {
        if (kind === 'type') {
            if (a.sensor_type < b.sensor_type) { return -1; }
            if (a.sensor_type > b.sensor_type) { return 1; }
            return 0;
        }
        if (kind === 'date') {
            if (a.reading_ts < b.reading_ts) { return -1; }
            if (a.reading_ts > b.reading_ts) { return 1; }
            return 0;
        }

    })
}

