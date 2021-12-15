# How to solve an arbitrary quartic equation

For any quartic equation with a standard form of

$$
ax^4 + bx^3 + cx^2 + dx + e = 0 \quad (a \neq 0)   \qquad (1)
$$

we can solve it this way.

At first, we make the coefficients be unified, i.e. make the coefficient of $x^4$ to be 1. Bceause $a\neq 0$, we can devide the both sides of equation (1) with $a$, then we get

$$
x^4 + \frac{b}{a}x^3 + \frac{c}{a}x^2 + \frac{d}{a} x + \frac{e}{a} = 0 
$$

to describe easily, we make new annotations for the coefficients. We mark $B = b / a$, $C = c / a$, $D = d/a$, and $E = e/a$. Then we got a new equation with cleaner form, we number it as (2), obviously, the equation (2) has identical roots with equation (1).

$$
x^4 + Bx^3 + Cx^2 + Dx + E = 0  \qquad (2) 
$$

Continue with the heuristic of solving cubic equation, we try to eliminate the component of 3rd order, to see if we could make some simplification.

With the same way, we substitute $x$ with $y$, and use the form $x = y-\dfrac{B}{4}$, then we get

$$
\begin{aligned}  
         & (y-\frac{B}{4})^4 + B(y-\frac{B}{4})^3 + C(y-\frac{B}{4})^2 + D(y-\frac{B}{4}) + E = 0  \\
\implies & \left(y^4 + 4y^3\frac{-B}{4} + 6y^2(\frac{-B}{4})^2 + 4y(\frac{-B}{4})^3 + (\frac{-B}{4})^4\right) \\
         & + B\left(y^3 + 3y^2(\frac{-B}{4}) + 3y(\frac{-B}{4})^2 + (\frac{-B}{4})^3\right) \\
         & + C\left(y^2 + 2y(\frac{-B}{4}) + (\frac{-B}{4})^2\right)  \\
         & + D(y + \frac{-B}{4}) + E = 0 \\
\implies & y^4 -y^3 B + y^2\frac{6B^2}{16} - y\frac{B^3}{16} + \frac{B^4}{4^4}  \\
         & + y^3B -y^2\frac{3B^2}{4} +y \frac{3B^3}{16} - \frac{B^4}{4^3}\\
         & + y^2C - y\frac{BC}{2} + \frac{B^2C}{16}   \\
         & + yD - \frac{BD}{4} + E = 0 \\         
\implies & y^4   + y^2(\frac{6B^2}{16} -\frac{3B^2}{4} + C) \\
         & + y (-\frac{B^3}{16} + \frac{3B^3}{16} -\frac{BC}{2} + D） \\
         & + \frac{B^4}{4^4} - \frac{B^4}{4^3} + \frac{B^2C}{16} - \frac{BD}{4} + E = 0 \\
\implies & y^4 + y^2(C -\frac{3B^2}{8}) + y (\frac{B^3}{8} -\frac{BC}{2} + D） - \frac{3B^4}{256}  + \frac{B^2C}{16} - \frac{BD}{4} + E = 0 \\
\end{aligned} 
$$

from the derivation, we see that we successfully eliminated the 3rd component and converted the equation to the form of

$$
y^4 + py^2 + qy + r = 0 \qquad (3)
$$

where

$$
\begin{aligned}
  p &= C -\frac{3B^2}{8} \\
  q &= \frac{B^3}{8} -\frac{BC}{2} + D \\
  r &= - \frac{3B^4}{256}  + \frac{B^2C}{16} - \frac{BD}{4} + E
\end{aligned}
$$

looking at equation (3), it is a little simpler compared with our original equation (1). Seeing $y^4$ and $y^2$ are both presented in the equation, we might be thinking that it would be very good if there is no $qy$ because we can easily make a new variable which is $x^2$, then equation (3) is a quadratic equation which is easy to solve. But it is definitely not, the compoennt $qy$ is undoubtably there. It seems no way, but we can anyway try some. We make the left side having the form of $(y^2 + M)^2$, and the right side having the form of $N^2$, then we will solve it directly by using $y^2 + M = \pm N$.

So let's try it, we can do this way, make the left side the form of $(y^2 + M)^2$, and move all the other stuff to right side, i.e.

$$
\begin{aligned}  
         & y^4 + py^2 + qy + r = 0  \\
\implies & y^4 = -py^2 -qy -r \\
\implies & (y^2 + M)^2 = (2M-p)y^2 -qy + M^2 -r  \qquad (4)
\end{aligned} 
$$

Now we check equation (4), its right side is an quadratic equation, it can be converted to a form of $N^2$ if and only if its discriminator equals zero. i.e. the equation
$$
(2M-p)y^2 -qy + M^2 -r = 0
$$

has $\Delta = 0$, and then, we can get

$$
\begin{aligned}
\Delta &= (-q)^2 - 4(2M - p)(M^2 - r) \\
       &= q^2 - 4(2M^3 -2rM - pM^2 + pr) \\
       &= q^2 - 8M^3 +8rM + 4pM^2 - 4pr \\
       &= - 8M^3  + 4pM^2 + 8rM + q^2 - 4pr \\
       &= 0 \\
\implies & M^3 - \frac{p}{2}M^2 - rM + \frac{4pr - q^2}{8} = 0 \qquad (5)
\end{aligned}
$$

we can see that equation (5) is a cubic equation of $M$, once we could solve equation (5), we get the wanted $N$ of the idea of making $(y^2 + M)^2 = N^2$

As we have learned about the cubic equation, it definitely has one real root, we can use that root (mark it as $M_1$) to continued.

With the known real root $M_1$ of equation (5), we can use it in euqation (4), and get

$$
(y^2 + M_1)^2 = (2M_1-p)y^2 -qy + M_1^2 -r = (2M_1-p)(y - \frac{q}{2(2M_1 - p)}) ^ 2
$$

and then immediately, we have two equations

$$
\begin{aligned}
& y^2 + M_1 = \quad \sqrt{2M_1 - p} (y - \frac{q}{2(2M_1-p)}) \\
& y^2 + M_1 = -\sqrt{2M_1 - p} (y - \frac{q}{2(2M_1-p)}) \\
\implies & y^2 -\sqrt{2M_1 - p} \cdot y + M_1 + \frac{q}{2(2M_1 - p)}\cdot \sqrt{2M_1 - p} = 0  \qquad (6)\\
\implies & y^2 +\sqrt{2M_1 - p} \cdot y + M_1 - \frac{q}{2(2M_1 - p)}\cdot \sqrt{2M_1 - p} = 0  \qquad (7)
\end{aligned}
$$

Solve equation (6) and (7), we will get four $y$s, then we use the initial substitution $x = y - \dfrac{B}{4}$ to solve our $x$.

So till here, the initial problem of solving equation (1) has been translated to solving equation (5), (6), and (7), which all are "known".

Now let's continue with equatioin (6) and (7). For $M_1$, we are sure it is real, but we are not sure if $2M_1-p$ is real, because it is not always $\ge 0$ so equation (6) and (7) might have complex coefficients, but it doesn't matter, the equation 

$$
  x_{1,2} = \frac{-b \pm \sqrt{b^2 -4ac}}{2a}
$$

still works with complex coeefficients.

Looking at (6) and (7), we can get some shared part, e.g. we can note

$$
\begin{aligned}
  \alpha &= \frac{q}{2(2M_1 - p)} \\
  \beta  &= \sqrt{2M_1 - p}
\end{aligned}
$$

then (6) and (7) could be simplified a little to
$$
\begin{aligned}
y^2 -\beta \cdot y + M_1 + \alpha\cdot \beta = 0  \qquad (8)\\
y^2 +\beta \cdot y + M_1 - \alpha\cdot \beta = 0  \qquad (9)
\end{aligned}
$$

Because $\alpha$ is ensured to be real, $2M_1-p$ might be $\leq 0$, $\beta$ could be imaginary, if $\beta$ is imaginary, we can just treat the $\beta$ here as the "positive" case after the sqrt operation, and if we substitute $\beta$ with $-\beta$, equation (8) will become equation (9), and vice versa, so it will not lose the generality.

Now let's solve them, equation (8) has the solution of

$$
y_{1,2} = \frac{\beta \pm \sqrt{\beta ^ 2 - 4M_1 - 4\alpha\beta}}{2}
$$

and equation (9) has 

$$
y_{3,4} = \frac{-\beta \pm \sqrt{\beta ^ 2 - 4M_1 + 4\alpha\beta}}{2}
$$

We check the part inside the sqrt, and will notice that 

$$
\beta ^ 2 - 4M_1 = 2M_1 - p - 4M_1 = -2M_1 - p
$$

must be real, and $4\alpha\beta$ is possible to be real or imgagenary, so the part inside the sqrt is a complex, we need to do the sqrt operation in complexed form. And outside of the sqrt, we will also get some complex operation if $\beta$ is imagenary, so we can extend the final solve into complex domain directly to make the process unified.


Some special cases to notice:

1. if $p=q=r=0$, then the equation will have the only one real root of $\dfrac{-B}{4}$
2. if $r=0$, then $y$ will have a $0$, and others could be solved by a cubic equation, easier
3. if $q=0$, the equation of $y$ could be simplified to a quadratic equation making $x^2$ as its variable
4. if $q=r=0$, then $y$ will have one $0$, and another pair of $\pm \sqrt{-p}$ roots.

