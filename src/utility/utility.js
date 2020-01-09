const fitNameToUrl = name => {
    return name
        .replace(/[\s.,'"!?()]+/g, " ")
        .trim()
        .replace(/\s+/g, "-");
};

const getColor = str => {
    let hash = 0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    return "hsl(" + (hash % 360) + ",60%,60%)";
};

const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const formatDate = (now, updatedAt) => {
    if (now - updatedAt < 8.64e7) {
        if (now - updatedAt < 3.6e6) {
            return (now - updatedAt).getMinute().toString();
        } else {
            return (now - updatedAt).getHour().toString();
        }
    } else {
        return (
            monthNames[updatedAt.getMonth()] +
            " '" +
            updatedAt.getDay().toString()
        );
    }
};

module.exports = { fitNameToUrl, getColor, formatDate };
