
const bezierCurve = (dots = [], t = 0) => {
  const n = dots.length;
  if (n < 2) {
    return null;
  }
  const pow = n - 1;
  const cs = dots.map((e, i) => {
    const c = i !== 0 && i !== pow ? pow : 1;
    return c * ((1 - t) ** (pow - i)) * (t ** i);
  });
  return dots.reduce(([accX, accY], [x = 0, y = 0], i) =>
      [accX + (x * cs[i]), accY + (y * cs[i])],
    [0, 0]);
};

export const bezierCurve1 = t => bezierCurve([[0, 0], [1, 1]], t);
export const bezierCurve2 = (x, y, t) => bezierCurve([[0, 0], [x, y], [1, 1]], t);
export const bezierCurve3 = (x1, y1, x2, y2, t) => bezierCurve([[0, 0], [x1, y1], [x2, y2], [1, 1]], t);

export default bezierCurve
