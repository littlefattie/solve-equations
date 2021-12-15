import { IComplex } from "./IComplex";
import { solveLinear } from "./solveLinear";
import { isZero } from "./utils";

export function solveQuadratic(a: number, b: number, c: number): IComplex[]
{
  if (a === 0) return solveLinear(b, c);
  const delta = b ** 2 - 4 * a * c;
  const sqrtDelta = Math.sqrt(Math.abs(delta));
  if (isZero(delta)) {
    return [
      { re: -b / (2 * a), im: 0 },
    ];
  } else if(delta > 0) {
    return [
      { re: (-b + sqrtDelta) / (2 * a), im: 0 },
      { re: (-b - sqrtDelta) / (2 * a), im: 0 },
    ]
  } else {
    return [
      {re: -b / (2 * a), im:  sqrtDelta / (2 * a) },
      {re: -b / (2 * a), im: -sqrtDelta / (2 * a) },
    ]
  }
}
