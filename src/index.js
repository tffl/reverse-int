module.exports = function reverse (n) {
      const numToStr = n.toString();
      const rvrsdStr = numToStr.split('').reverse().join('');
      return parseInt(rvrsdStr, 10);
  }