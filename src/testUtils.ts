import { IComplex } from "./IComplex";
import { isZero } from "./utils.js";

export const nearlyEqual = (x1: number, x2: number) => {return isZero(x1 - x2);}
export const nearlyEqualC = (c1: IComplex, c2: IComplex) => {
  return nearlyEqual(c1.re, c2.re) && nearlyEqual(c1.im, c2.im);
}