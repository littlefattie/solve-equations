import { IComplex } from "./IComplex";
import { solveQuadratic } from "./solveQuadratic.js";
import { solveCubic } from "./solveCubic.js";
import { isZero } from "./utils.js";
import CPX from "./Complex.js";

export function solveQuartic(a: number, b: number, c: number, d: number, e: number): IComplex[] {
  if (a === 0) return solveCubic(b, c, d, e);
  const B = b / a,
        C = c / a,
        D = d / a,
        E = e / a;
  const p = C - 3 * B ** 2 / 8,
        q = B ** 3 / 8 - B * C / 2 + D,
        r = -3 * B ** 4 / 256 + B ** 2 * C / 16 - B * D / 4 + E;
  const b4 = -B / 4;
  // Now make some quick judgements
  let ys: IComplex[] = [];
  if (isZero(p) && isZero(q) && isZero(r)) {
    ys = [{re: 0, im: 0}];
  } else if (isZero(p) && isZero(q)) {
    ys = CPX.sqrtn({re: -4, im: 0}, 4);
  } else if (isZero(q) && isZero(r)) {
    ys = [
      {re: 0, im: 0},
      ...(CPX.sqrt2({re: -p, im: 0}))
    ]
  } else if (isZero(p) && isZero(r)) {
    ys = [
      {re: 0, im: 0},
      ...(CPX.sqrtn({re: -q, im: 0}, 3))
    ]
  } else if (isZero(r)) {
    ys = [
      {re: 0, im: 0},
      ...(solveCubic(1, 0, p, q))
    ]
  } else if (isZero(q)) {
    ys = [];
    solveQuadratic(1, p, r)
      .forEach(y => {
        ys.push(...(CPX.sqrt2(y)));
      });
  } else {
    ys = [];
    const ms = solveCubic(1, -p/2, -r, (4 * p * r - q ** 2) / 8);
    const m1 = ms.filter(m => isZero(m.im))[0].re;
    const alpha = q / (2 * (2 * m1 - p));
    // const cBeta =  new CNumber(2 * m1 -p, 0);
    CPX.sqrt2({re: 2 * m1 - p, im: 0})
      .forEach(beta => {
        const cRe: IComplex = {re: -2 * m1 - p, im: 0};
        const cIm: IComplex = CPX.multiplyReal(beta, -4 * alpha);
        const cInSqrt: IComplex = CPX.add(cRe, cIm);
        CPX.sqrt2(cInSqrt)
          .map(y => {
            return CPX.multiplyReal(CPX.add(beta, y), 0.5);
          })
          .forEach(y => {
            ys.push(y);
          });
      });
  }
  // convert from y to x
  return ys.map(y => {return {re: b4 + y.re, im: y.im}});
}
