import test from "ava";
import { IComplex } from "../src/IComplex";
import { solveLinear } from "../src/solveLinear";


import { nearlyEqual, nearlyEqualC } from "../src/testUtils";

test("Test Linear solving:", t => {
  
  /**
   * Test the equation of $ 3x + 6 = 0 $
   */
  let res: IComplex[] = solveLinear(3, 6);
  t.is(res.length, 1);
  t.true(res.filter(r =>nearlyEqual(r.re, -2) && r.im === 0).length === 1);
  
  /**
   * Test invalid equation $ 0 * x + 3 = 0 $
   */
  res = solveLinear(0, 3);
  t.true(res.length === 0);
  
  t.pass();
})
