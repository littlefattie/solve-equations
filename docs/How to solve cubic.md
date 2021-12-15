# How to solve an arbitrary cubic equation

For any arbitrary cubic equation having the standard form of

$$
ax^3 + bx^2 + cx + d = 0 \quad (a \neq 0)   \qquad (1)
$$

we can solve it this way.

At first, make the coefficients unified, devide $a$ at both sides of equation (1), we will get 

$$
x^3 + \frac{b}{a}x^2 + \frac{c}{a}x + \frac{d}{a} = 0 
$$

To describe easilier, we make new notations, make  $B = b / a$, $C = c / a$, $D = d/a$, then we get a new equation with cleaner form, we mark it as (2), obviously equation (2) has identical roots with equation (1).

$$
x^3 + Bx^2 + Cx + D = 0  \qquad (2) 
$$

Then with the same heuristic of solve quadratic equation, we try to eliminate the 2nd order component, i.e. $x^2$. We introduce a new variable $y$ and make it be $x = \dfrac{-B}{3} + y$, and then substitute it into equation (2), we will get

$$
\begin{aligned}
          & (\frac{-B}{3} + y)^3 + B(\frac{-B}{3} + y)^2 + C(\frac{-B}{3} + y) + D = 0 \\
 \implies & (\frac{-B}{3})^3 + 3y(\frac{-B}{3})^2 + 3y^2(\frac{-B}{3})  + y^3 \\
          & \quad + B(\frac{-B}{3})^2 +B(\frac{-2B}{3})y + By^2  \\
          & \quad + C(\frac{-B}{3} + y) + D  = 0 \\
 \implies & -\frac{B^3}{27} + (\frac{B^2}{3})y - By^2  + y^3 \\
          & \quad + \frac{B^3}{9} - (\frac{2B^2}{3})y + By^2 + \frac{-BC}{3} \\
          & \quad + Cy + D =0 \\
 \implies & \frac{2B^3}{27} - (\frac{B^2}{3})y + y^3  + \frac{-BC}{3} + Cy + D =0 \\
 \implies & y^3 + (C-\frac{B^2}{3})y + D - \frac{BC}{3} + \frac{2B^3}{27} =0 \\
  
\end{aligned}
$$

From the results, we can see that $y$ is some root of equation

$$
y^3 + (C-\frac{B^2}{3})y + D - \frac{BC}{3} + \frac{2B^3}{27} = 0  \qquad  (6)
$$

if we could solve $y$, then we get $x$.

Now let's do it. Comparing equation (6) with (2), we see that (6) has no 2nd order component, we re-write it with a cleaner form
$$
y^3 + py + q = 0   \qquad (7)
$$

where

$$
\begin{aligned}
p &= C-\dfrac{B^2}{3}   \\
q &= D-\dfrac{BC}{3} + \dfrac{2B^3}{27}
\end{aligned}
$$

Next, we are thinking to make some other translation, for example, $y = z + \alpha$ or something like that to turn the equation to other form which is clearer and easier to find its roots. But if we doing this it again, with the $\alpha$  here some constant, say $-\dfrac{B}{3}$, we will get back to our initial equation ,equation (2), this is not what we wanted. We need to figure out some other way.

Since we at the moment could not find a proper translation, we can just let it be arbitrary, say, the $z$ or $\alpha$ here could be "any". And to make it more general, we split our $y$ to $u+v$, and then substitute it back, we will get

$$
\begin{aligned}
(u+v)^3 + p(u+v) + q &= 0 \\
\implies u^3 + 3uv^2 + 3u^2v + v^3 + pu + pv + q & =0 \\  
\implies u^3 + v^3 + q + (u + v)(3uv+p) & =0  \qquad (8) \\  
\end{aligned}
$$

from eqatopm (8), we see that if we let $3uv+p$ permanantly be $0$ them we will surely get $u^3 + v^3 + q = 0$, a moment ago, we are headless to find some proper translation for our $y$, now we get one choice, i.e. $3uv+p = 0$ which is also $v=\dfrac{-p}{3u}$, and $y = u - \dfrac{p}{3u}$.

Now we continue to try this choice. From

$$
\begin{aligned}
  3uv + p &= 0 \\
  u^3 + v^3 + q & = 0
\end{aligned}
$$

We see

$$
\begin{aligned}
  
3uv+p = 0 & \implies uv = \dfrac{-p}{3}  \\
 &\implies u^3v^3 = \dfrac{-p^3}{27} \\

u^3 + v^3 + q = 0 & \implies u^3 + v^3 = -q
\end{aligned}
$$

And then we pick only

$$
\begin{aligned}
  u^3v^3 = \dfrac{-p^3}{27} \\
  u^3 + v^3 = -q
\end{aligned}
$$

from this clean and simple form, we can easily know that if we treat $u^3$ and $v^3$ as independent variable, then they are the roots of equation 

$$
z^2 + qz - \dfrac{p^3}{27} = 0 \qquad\qquad (9)
$$

using the formulae, we can get that

$u^3$ and $v^3$ are one of 
$$
\begin{aligned}
  z_1 &= \dfrac{-q + \sqrt{q^2 + 4 \times \dfrac{p^3}{27}}}{2} \\
  z_2 &= \dfrac{-q - \sqrt{q^2 + 4 \times \dfrac{p^3}{27}}}{2} \\
\end{aligned}
$$

and because $u^3$ and $v^3$ are absolute peerful to each other, er can note $u^3 = z_1 = \dfrac{-q + \sqrt{\Delta}}{2}$ and natrally $v^3 = z_2 = \dfrac{-q - \sqrt{\Delta}}{2}$, where $\Delta = q^2 + 4 \times \dfrac{p^3}{27}$, is the discriminant of equation (9)

$z_1$ might be real, and also might be complex,  but anyway with the operation of 3rd sqrt, we will get three solution, even $z_1$ is real. So to make the form unified, we can note it as

$$
u^3 = z_1 = \dfrac{-q + \sqrt{q^2 + 4 \times \dfrac{p^3}{27}}}{2} = re^{i\theta} \quad(\theta \in [0, 2\pi))  \qquad\qquad (10)
$$

where

$$
\begin{aligned}
  
r &= \begin{cases}
   \sqrt{\dfrac{q^2}{4} + \dfrac{-\Delta}{4}} = \sqrt{\dfrac{q^2-q^2 - \dfrac{4p^3}{27}}{4}} = \sqrt{-\dfrac{p^3}{27}}  &\text{if } \Delta < 0 \\
   \big|\dfrac{-q + \sqrt{\Delta}}{2}\big| &\text{if } \Delta >= 0
\end{cases} \\
\theta &= \begin{cases}
   \arctan(\dfrac{\sqrt{-\Delta}}{-q}) + \pi  &\text{if } \Delta < 0 \quad \text{and}\quad q > 0 \\
   \arctan(\dfrac{\sqrt{-\Delta}}{-q})  &\text{if } \Delta < 0 \quad \text{and}\quad q < 0 \\
   0 &\text{if } \Delta >= 0 \quad \text{and}\quad (-q + \sqrt{\Delta}) \geq 0 \\
   \pi &\text{if } \Delta >= 0 \quad \text{and}\quad (-q + \sqrt{\Delta}) < 0
\end{cases}
\end{aligned}
$$

And then we get the solution of $u$ as

$$
\begin{aligned}
  u_1 &= r^{1 \over 3} e^{i\frac{\theta}{3}} \\
  u_2 &= r^{1 \over 3} e^{i(\frac{\theta}{3}+\frac{2\pi}{3})} \\
  u_3 &= r^{1 \over 3} e^{i(\frac{\theta}{3}+\frac{4\pi}{3})} \\
\end{aligned}
$$

Correspondingly, we can get $v$ by using $v=\dfrac{-p}{3u}$

$$
\begin{aligned}  
v_1 &= \frac{-p}{3u_1} = \frac{-p}{3r^{1 \over 3}} e^{i\frac{-\theta}{3}} \\
v_2 &= \frac{-p}{3u_2} = \frac{-p}{3r^{1 \over 3}} e^{i(\frac{-\theta}{3}+\frac{4\pi}{3})} \\
v_3 &= \frac{-p}{3u_3} = \frac{-p}{3r^{1 \over 3}} e^{i(\frac{-\theta}{3}+\frac{2\pi}{3})} \\
\end{aligned}
$$

After got $u$ and $v$, we can use $y = u+v$ and $x = \dfrac{-B}{3} + y$ to get our initial $x$.


$$
\begin{aligned}
  x_1 &= -\frac{B}{3} + u_1 + v_1 =  -\frac{B}{3} + r^{1 \over 3} e^{i\frac{\theta}{3}} + \frac{-p}{3r^{1 \over 3}} e^{i\frac{-\theta}{3}} \\
  x_2 &= -\frac{B}{3} + u_2 + v_2 =  -\frac{B}{3} + r^{1 \over 3} e^{i(\frac{\theta}{3}+\frac{2\pi}{3})} + \frac{-p}{3r^{1 \over 3}} e^{i(\frac{-\theta}{3}+\frac{4\pi}{3})} \\
  x_3 &= -\frac{B}{3} + u_3 + v_3 =  -\frac{B}{3} + r^{1 \over 3} e^{i(\frac{\theta}{3}+\frac{4\pi}{3})} + \frac{-p}{3r^{1 \over 3}} e^{i(\frac{-\theta}{3}+\frac{2\pi}{3})} \\

\end{aligned}
$$

So till here, we have successfully solved our cubic equation (1) in standard form.

To make a conclusion, we can see that, our initial problem of solving a cubic equation has been converted to solve an quadratic equation
$$
z^2 + qz - \dfrac{p^3}{27} = 0 
$$

and two "pure cubic" equations

$$u^3 = z_1
$$
$$v^3 = z_2
$$

# Special cases

1. when $p=q=0$, then $x$ will have only one root $\dfrac{-B}{3}$
2. when $p=0$, then $y$ is easily solved by $y=\sqrt[3]{-q}$
3. when $q=0$, then $y$ has one zero root, and a pair of roots $\pm \sqrt{-p}$