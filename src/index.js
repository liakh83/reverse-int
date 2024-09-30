module.exports = function reverse (number) {
    const absoluteNumber = Math.abs(number);
   const result = parseInt(absoluteNumber.toString().split('').reverse().join(''));
  return result;
} 

