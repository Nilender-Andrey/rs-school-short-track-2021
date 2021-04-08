/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const n = arr.slice();

  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] === -1) n.splice(i, 1);
  }
  n.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      if (n[i] === undefined) n.splice(i, 1, arr[i]);
      else n.splice(i, 1, arr[i], n[i]);
    }
  }

  return n;
}

module.exports = sortByHeight;
