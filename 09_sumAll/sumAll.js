const sumAll = function (a, b) {
  if (
    a < 0 ||
    b < 0 ||
    !Number.isInteger(a) ||
    !Number.isInteger(b) ||
    !(typeof a === "number" || typeof b === "number")
  )
    return "ERROR";
  let aa = a < b ? a : b;
  let bb = b > a ? b : a;
  let sum = 0;
  for (i = aa; i <= bb; i++) sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
