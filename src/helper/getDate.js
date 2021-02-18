
export default function getDate(input) {
    let date = new Date(input)

    return (date.getDate() + "/"
        + (date.getMonth() + 1) + "/"
        + date.getFullYear() + " @ "
        + date.getHours() + ":"
        + date.getMinutes() + ":"
        + date.getSeconds())

}

