/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrS = n.toString().split('');
  let arr = [];

  arr = n.toString().split('').sort((a, b) => a - b);

  const N = n.toString().split('').indexOf(arr[0], 0);

  arrS.splice(N, 1);
  arrS = arrS.join('');
  return +arrS;
}

module.exports = deleteDigit;
