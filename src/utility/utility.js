const createAddress = (forumName, topicName) => {
    return "./" + fitNameToUrl(forumName) + topicName !== ""
        ? "/" + fitNameToUrl(topicName)
        : "";
};

const fitNameToUrl = name => {
    if (name) {
        return name
            .replace(/[\s.,'"!?()]+/g, " ")
            .trim()
            .replace(/\s+/g, "-");
    } else {
        return "";
    }
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

const formatDate = (now, at) => {
    if (now - at < 86400000) {
        if (now - at > 3600000) {
            return Math.round((now - at) / 3600000) + " h";
        }
        if (now - at > 60000) {
            return Math.round((now - at) / 60000) + " min";
        }
        return Math.round((now - at) / 1000) + " sec";
    } else {
        return monthNames[at.getMonth()] + " '" + at.getDay().toString();
    }
};

module.exports = { createAddress, fitNameToUrl, getColor, formatDate };
