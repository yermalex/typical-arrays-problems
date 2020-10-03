
exports.min = function min (array) {
  if (arguments.length && array.length) {
    return Math.min(...array);
  } else return 0;
}

exports.max = function max (array) {
  if (arguments.length && array.length) {
    return Math.max(...array);
  } else return 0;
}

exports.avg = function avg (array) {
  if (arguments.length && array.length) {
    return array.reduce((total, amount, index, array) => {
      total += amount;
      if( index === array.length-1) { 
        return total/array.length;
      }else { 
        return total;
      }
    }, 0);
  } else return 0;
}
