import test from "ava";
import { IComplex } from "../src/IComplex";
import { solveCubic } from "../src/solveCubic";

import { nearlyEqual, nearlyEqualC } from "../src/testUtils";

test("Test cubic solving:", t => {
  let res: IComplex[] = [];
  /**
   * Test the equation of $ (x - 1) ^ 3 = 0 $
   */
  res = solveCubic(1, -3, 3, -1);
  t.is(res.length, 1);
  t.true(nearlyEqual(1, res[0].re));

  /**
   * Test the equation of $ (x - 1) ^ 2 * (x + 1) = 0 $
   */
  res = solveCubic(1, -1, -1, 1);
  t.is(res.length, 2);
  t.true(res.filter(r => nearlyEqual(r.re,  1)).length === 1);
  t.true(res.filter(r => nearlyEqual(r.re, -1)).length === 1);
    
  /**
   * Test the equation of $ (x^2 + x + 1) * (x - 1) = 0 $
   */
  res = solveCubic(1, 0, 0, -1);
  t.is(res.length, 3);
  let c1: IComplex = {re: -0.5, im:  Math.sqrt(3) / 2};
  let c2: IComplex = {re: -0.5, im: -Math.sqrt(3) / 2};
  let r1 = 1;
  t.true(res.filter(r => nearlyEqualC(r, c1)).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, c2)).length === 1);
  t.true(res.filter(r => nearlyEqual(r.re, r1) && r.im === 0).length === 1);
  
  /**
   * Test the equation of $ x^3 + x^2 + x + 1 = 0 $
   * This actually is (x+1)*(x^2 + 1) = 0, and it has roots of [-1, i, -i]
   */
  res = solveCubic(1, 1, 1, 1);
  t.is(res.length, 3);
  t.true(res.filter(r => nearlyEqualC(r, {re: 0, im: 1})).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, {re: 0, im: -1})).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, {re: -1, im: 0})).length === 1);

  /**
   * Test the equation of $ (x^2 + 1)(x - 1) = 0 $
   */
   res = solveCubic(1, -1, 1, -1);
   t.is(res.length, 3);
   t.true(res.filter(r => nearlyEqual(r.re, 1) && r.im === 0).length === 1);
   t.true(res.filter(r => nearlyEqualC(r, {re: 0, im: 1})).length === 1);
   t.true(res.filter(r => nearlyEqualC(r, {re: 0, im: -1})).length === 1);
  
  /**
   * Test the equation of $ (x^2 + x + 1) * (x^2 - x - 1) = 0 $
   */
  res = solveCubic(0.029020358094805923, -0.17662264005593944, 0.6265310225729683, -0.5480581453927242);
  t.true(res.length === 3);
  
  c1 = { re: 2.4424559952929923, im: 3.1234217970653613 };
  c2 = { re: 2.4424559952929923, im: -3.1234217970653613 };
  r1 = 1.2012513668383145;
  // c4 = { re: -0.33351478864370154, im: 0 }
  t.true(res.filter(r => nearlyEqualC(r, c1)).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, c2)).length === 1);
  t.true(res.filter(r => nearlyEqual(r.re, r1) && r.im === 0).length === 1);
  
  t.pass();
})
