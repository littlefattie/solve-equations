# Solve equations

This is a simple libary for solving equations of linear($x$), quadratic($x^2$), cubic($x^3$), and quartic($x^4$) equations.

# Install

```shell
npm install -S @littlefattie/solve-equations
```

# Usage

```typescript
import { solveLinear, solveQuadratic, solveCubic, solveQuartic } from "@littlefattie/solve-equations";

// This should be x = -0.5
const res1 = solveLinear(2, 1);

// This should be
//   x1,2 = -1/2 +/- sqrt(3)/2 i
// for equation $x^2+x+1=0$
const res2 = solveQuadratic(1, 1, 1);

// This should be
//   x1 = 1
//   x2,3 = -1/2 +/- sqrt(3)/2 i
// for equation (x-1)(x^2+x+1) = 0 = x^3 -1
const res3 = solveCubic(1, 0, 0, 1);

// This should be
//   x1 = 1
//   x2 = -1
//   x3,4 = -1/2 +/- sqrt(3)/2 i
// for equation (x^2 - 1)(x^2 + x + 1) = 0 = x^4+x^3 -x-1
const res4 = solveQuartic(1, 1, 0, -1, -1);
```

# Notes

- You are free to examine the source code at `src` folder, and you can test them with command `npm test`
- To see how to solve the equation of $x^3$ and $x^4$, please read the docs under the folder `./docs/` of the package.
- To make it no-dependency, I wrote a small libary of Complex number operations, all the functions are static, please find them under the `src` folder if you are interested.
  Of cource we could import and use other packages like `math.js`, or `complex,js` to enpower the complex number calculations.
