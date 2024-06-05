// convert an object to a json string
module.exports = {
    json: function(context) {
        return encodeURI(JSON.stringify(context));
    },
    toFixed: function(value, decimals) {
        return parseFloat(value).toFixed(decimals);
    }
};