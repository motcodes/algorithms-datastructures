export function levenshteinDistance(a: string, b: string) {
  if (a.length === 0) b.length;
  if (b.length === 0) a.length;

  const matrix = new Array<number[]>(b.length + 1);

  for (let i = 0; i <= b.length; ++i) {
    matrix[i] = new Array<number>(a.length + 1);
    matrix[i][0] = i;
  }
  for (let j = 1; j <= a.length; ++j) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; ++i) {
    for (let j = 1; j <= a.length; ++j) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]; //replace
      } else {
        matrix[i][j] =
          Math.min(
            matrix[i][j - 1], //insert
            matrix[i - 1][j], //delete
            matrix[i - 1][j - 1] //replace
          ) + 1;
      }
    }
  }
  return matrix[b.length][a.length];
}
