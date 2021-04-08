/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let n = 1;
  let strNew = '';
  for (let i = 0; i < str.length; i++) {
    while (str[i] === str[i + 1]) {
      n++; i++;
    }
    if (n === 1) strNew += str[i];
    else {
      strNew = strNew + n + str[i];
      n = 1;
    }
  }
  return strNew;
}

module.exports = encodeLine;
