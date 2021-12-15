import { IComplex } from "./IComplex";

export function solveLinear(a: number, b: number): IComplex[] {
  if (a === 0) return [];
  return [
    {re: -b / a, im: 0}
  ];
}