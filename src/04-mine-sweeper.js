/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];
  let n = 0;
  let v = [];

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (j - 1 >= 0 && i - 1 >= 0 && matrix[j - 1][i - 1] === true) n++;
      if (j - 1 >= 0 && matrix[j - 1][i] === true) n++;
      if (j - 1 >= 0 && i + 1 < matrix[j].length && matrix[j - 1][i + 1] === true) n++;

      if (i - 1 >= 0 && matrix[j][i - 1] === true) n++;
      if (i + 1 < matrix[j].length && matrix[j][i + 1] === true) n++;
      if (j + 1 < matrix.length && i - 1 >= 0 && matrix[j + 1][i - 1] === true) n++;
      if (j + 1 < matrix.length && matrix[j + 1][i] === true) n++;
      if (j + 1 < matrix.length && i + 1 < matrix[j].length && matrix[j + 1][i + 1] === true) n++;
      v.push(n);
      if (i >= matrix[j].length - 1) {
        arr.push(v); v = [];
      }
      n = 0;
    }
  }

  return arr;
}

module.exports = minesweeper;
