/**
 * 
 * @param {Array} arr 
 * 
 */
const removeFromArray = function(arr) {
    const args = Array.prototype.slice.call(arguments, 1)
    return arr.filter(a => !args.includes(a))
    
};



// Do not edit below this line
module.exports = removeFromArray;
