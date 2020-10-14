export default function getAverageScore(list) {
    const total = list.reduce((acc, item) => acc + item.risk_score, 0);
    return ((total / list.length).toFixed(1))
}
