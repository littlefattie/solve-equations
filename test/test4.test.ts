import test from "ava";
import { IComplex } from "../src/IComplex";
import { solveQuartic } from "../src/solveQuartic";

import { nearlyEqual, nearlyEqualC } from "../src/testUtils";

test("Test quartic solving:", t => {
  /**
   * Test the equation of $ (x^2 - 2x -1) ^ 2 = 0 $
   */
  let res = solveQuartic(1, -4, 2, 4, 1);
  t.is(res.length, 2);
  let c1: IComplex = {re: 1 + Math.sqrt(2), im: 0};
  let c2: IComplex = {re: 1 - Math.sqrt(2), im: 0};
  t.is(res.filter(r => nearlyEqualC(r, c1)).length, 1);
  t.is(res.filter(r => nearlyEqualC(r, c2)).length, 1);

  /**
   * Test the equation of $ (x - 1) ^ 4 = 0 $
   */
  res = solveQuartic(1, -4, 6, -4, 1);
  t.is(res.length, 1);
  t.true(nearlyEqual(1, res[0].re));

  /**
   * Test the equation of $ (x - 1) ^ 2 * (x + 1) ^ 2 = 0 $
   */
  res = solveQuartic(1, 0, -2, 0, 1);
  t.is(res.length, 2);
  t.true(res.filter(r => nearlyEqual(r.re,  1)).length === 1);
  t.true(res.filter(r => nearlyEqual(r.re, -1)).length === 1);
    
  /**
   * Test the equation of $ (x^2 + x + 1) * (x^2 - x - 1) = 0 $
   */
  res = solveQuartic(1, 0, -1, -2, -1);
  t.is(res.length, 4);
  c1 = {re: -0.5, im:  Math.sqrt(3) / 2};
  c2 = {re: -0.5, im: -Math.sqrt(3) / 2};
  let r1 = (1 + Math.sqrt(5)) / 2;
  let r2 = (1 - Math.sqrt(5)) / 2;
  t.true(res.filter(r => nearlyEqualC(r, c1)).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, c2)).length === 1);
  t.true(res.filter(r => nearlyEqual(r1, r.re) && r.im === 0).length === 1);
  t.true(res.filter(r => nearlyEqual(r2, r.re) && r.im === 0).length === 1);
  
  /**
   * Test the equation of $ (x^2 + x + 1) * (x^2 + x + 3)= 0 $
   */
  res = solveQuartic(1, 2, 5, 4, 3);
  t.is(res.length, 4);
  c1 = {re: -0.5, im:  Math.sqrt(3) / 2};
  c2 = {re: -0.5, im: -Math.sqrt(3) / 2};
  let c3: IComplex = {re: -0.5, im:  Math.sqrt(11) / 2};
  let c4: IComplex = {re: -0.5, im: -Math.sqrt(11) / 2};
  t.true(res.filter(r => nearlyEqualC(r, c1)).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, c2)).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, c3)).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, c4)).length === 1);

  /**
   * Test the equation of $ (x^2 - 1) * (x^2 + x + 1)= 0 $
   */
   res = solveQuartic(1, 1, 0, -1, -1);
   t.is(res.length, 4);
   c1 = {re: -0.5, im:  Math.sqrt(3) / 2};
   c2 = {re: -0.5, im: -Math.sqrt(3) / 2};
   r1 = 1;
   r2 = -1;
   t.true(res.filter(r => nearlyEqualC(r, c1)).length === 1);
   t.true(res.filter(r => nearlyEqualC(r, c2)).length === 1);
   t.true(res.filter(r => nearlyEqual(r1, r.re) && r.im === 0).length === 1);
   t.true(res.filter(r => nearlyEqual(r2, r.re) && r.im === 0).length === 1);

  /**
   * Test the equation of $ x^4 + x^3 + x^2 + x + 1 = 0 $
   */
  res = solveQuartic(1, 1, 1, 1, 1);
  t.is(res.length, 4);
  const rc1 = res[0].re ** 2 + res[0].im ** 2;
  const rb1 = -2 * res[0].re;
  const rc2 = res[2].re ** 2 + res[2].im ** 2;
  const rb2 = -2 * res[2].re;
  const rd = rc1 * rc2;
  const rb = rb1 * rb2 + rc1 + rc2;
  const ra = rb1 + rb2;
  const rc = rc1 * rb2 + rc2 * rb1;
  t.true(nearlyEqual(ra, 1));
  t.true(nearlyEqual(rb, 1));
  t.true(nearlyEqual(rc, 1));
  t.true(nearlyEqual(rd, 1));
  
  /**
   * Test the equation of $ (x^2 + x + 1) * (x^2 - x - 1) = 0 $
   */
  res = solveQuartic(0.029020358094805923, -0.17662264005593944, 0.6265310225729683, -0.5480581453927242, -0.2593871917180778);
  t.true(res.length === 4);
  c1 = { re: 2.3552041948343296, im: 3.1830919585888258 },
  c2 = { re: 2.3552041948343296, im: -3.1830919585888258 },
  c3 = { re: 1.7092697563993413, im: 0 },
  c4 = { re: -0.33351478864370154, im: 0 }
  t.true(res.filter(r => nearlyEqualC(r, c1)).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, c2)).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, c3)).length === 1);
  t.true(res.filter(r => nearlyEqualC(r, c4)).length === 1);
  
  t.pass();
})
