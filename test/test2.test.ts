import test from "ava";
import { IComplex } from "../src/IComplex";
import { solveQuadratic } from "../src/solveQuadratic.js";

import { nearlyEqual, nearlyEqualC } from "../src/testUtils.js";

test("Test Quadratic solving:", t => {
  let res: IComplex[] = [];
  /**
   * Test the equation of $ (x - 1) ^ 2 = 0 $
   */
  res = solveQuadratic(1, -2, 1);
  t.is(res.length, 1);
  t.true(nearlyEqual(1, res[0].re));

  /**
   * Test the equation of $ x^2  + 1 = 0 $
   */
  res = solveQuadratic(1, 0, 1);
  t.is(res.length, 2);
  t.true(res.filter(r => nearlyEqual(r.im,  1)).length === 1);
  t.true(res.filter(r => nearlyEqual(r.im, -1)).length === 1);
    
  /**
   * Test the equation of $ (x^2 + x + 1) = 0 $
   */
  res = solveQuadratic(1, 1, 1);
  t.is(res.length, 2);
  let c1: IComplex = {re: -0.5, im:  Math.sqrt(3) / 2};
  let c2: IComplex = {re: -0.5, im: -Math.sqrt(3) / 2};
  t.true(res.filter(r => nearlyEqualC(r, c1)).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, c2)).length === 1);
  
  t.pass();
})
