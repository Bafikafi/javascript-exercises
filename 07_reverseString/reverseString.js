/**@param {String} string */
const reverseString = function(string) {
    let s = ''
    for (let i = string.length; i >=0; i--){
        s += string.charAt(i)
    }
    return s
};

// Do not edit below this line
module.exports = reverseString;
