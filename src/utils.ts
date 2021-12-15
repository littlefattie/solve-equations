
/**
 * To test is a real number is "nearly" equals to ZERO, due to the calculation precisison of Javascript,
 * there might be some reust which should be zero, but was presented as a non-zero value. The epsilon I
 * set here is 1e-15, but it could be adjustable, please modify it and adapt to your own requirements if
 * it is not proper.
 * @param x The number being tested
 * @returns If "very close to zero" or not
 */
export const isZero = (x: number) => {
  return Math.abs(x) < 1e-15;
}

/**
 * Because the Math.pow() function will return NaN if the input is negative, so I made some wrapper to
 * calculate the third sqaure root of number x, judge the sign before doing the pow().
 * @param x The number being made sqrt3 with
 * @returns third square root
 */
export const sqrt3 = (x: number) => {
   return x >= 0 ? Math.pow(x, 1/3) : -Math.pow(-x, 1/3);
}
