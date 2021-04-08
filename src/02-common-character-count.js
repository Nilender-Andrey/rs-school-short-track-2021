/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let N = 0;
  let set = [];
  set = new Set(set.concat(s1.split(''), s2.split('')));
  const f1 = s1.split('');
  const f2 = s2.split('');
  let n1 = 0;
  let n2 = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const value of set) {
    n1 = f1.filter((item) => item === value).length;
    n2 = f2.filter((item) => item === value).length;

    if (n1 <= n2) N += n1;
    else N += n2;
  }
  return N;
}

module.exports = getCommonCharacterCount;
