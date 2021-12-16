import CPX from "./Complex.js";
import { IComplex } from "./IComplex";
import { solveQuadratic } from "./solveQuadratic.js";
import { isZero, sqrt3} from "./utils.js";

export function solveCubic(a: number, b: number, c: number, d: number): IComplex[] {
  if (a === 0) return solveQuadratic(b, c, d);
  const B = b / a,
        C = c / a,
        D = d / a;
  const p = C - B ** 2 / 3,
        q = D - B * C / 3 + 2 * B ** 3 /27;
  const Delta = q ** 2 + 4 * p ** 3 / 27;
  
  if (isZero(p) && isZero(q)) {
    return [
      {re: -B / 3, im: 0}
    ];
  }

  const b3 = -B /3;
  const ang2Pi3 = Math.PI * 2 / 3;
  if (isZero(Delta)) {
    return [
      {re: b3 - sqrt3(4 * q), im: 0 },
      {re: b3 + sqrt3(q / 2), im: 0 },
    ]
  } else if (Delta < 0) {
    const r = Math.sqrt(-p / 3);
    const u3: IComplex = {
      re: -q / 2,
      im: Math.sqrt(-Delta) / 2
    }
    const u3Ang = CPX.getAng(u3);
    return [0, 1, 2]
      .map(k => {return {
        re: b3 + 2 * r * Math.cos(u3Ang / 3 + ang2Pi3 * k),
        im: 0
      }});
  } else {
    const u1 = sqrt3((-q + Math.sqrt(Delta)) / 2);
    const v1 = -p / 3 / u1;
    const u2 = CPX.multiplyReal(CPX.fromLenAndAng(1,  ang2Pi3), u1);
    const v2 = CPX.multiplyReal(CPX.fromLenAndAng(1, -ang2Pi3), v1);
    const u3 = CPX.multiplyReal(CPX.fromLenAndAng(1, -ang2Pi3), u1);
    const v3 = CPX.multiplyReal(CPX.fromLenAndAng(1,  ang2Pi3), v1);
    return [
        { re: u1 + v1, im: 0 },
        CPX.add(u2, v2),
        CPX.add(u3, v3)
      ]
      .map(y => {return {re: y.re + b3, im: y.im }});
  }
  // For Delta > 0 and Delta < 0, we can unnify them, i.e. CPX.sqrtn(C, 3).
  // But condidering the calculation precision, it would be possible that
  // the result is truly some real, but it is presented as a complex with very small
  // imagenary part. So here we can split it to different case, to ensure that we get
  // very clear and definite results for "pure-real" roots, with imagenry part being 0.
}
