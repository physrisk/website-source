Title: Runge-Kutta 4th order method
Date: 2022-04-12 08:00
Author: Aleksejus Kononovicius
Tags: interactive, methods
Slug: runge-kutta-4-order-method
Status: published
Image_url: uploads/2022/rk4.png

Apps in the last two posts
(see [here]({filename}/articles/2022/end-of-the-world-2026.md) and
[here]({filename}/articles/2022/verhulst-correction-to-doomsday-model.md))
differ in another important regard: the first app plots analytical solution
of one ODE, while the second plots numerical solution of another ODE.
Numerical solution is chosen, because it is impossible to obtain analytical
solution.

Here, in this post, we will numerically solve ODE:

\begin{equation}
    \frac{d}{d t} x = - \left( x + a \right)^2 . \label{eq:rk4-ode}
\end{equation}

It is simple enough to have analytical solution and thus we can compare two
different numerical solution [methods](/tag/methods/): [Euler
method]({filename}/articles/2012/numerical-methods-for-the-stochastic-differential-equations.md)
and Runge-Kutta 4th order method.
<!--more-->

## Euler method

As we have already discussed [Euler
method]({filename}/articles/2012/numerical-methods-for-the-stochastic-differential-equations.md)
relies on the definition of derivative. When solving using Euler method we
rewrite ODE as difference equation:

\begin{equation}
    \frac{\Delta x}{\Delta t} = - \left( x\_i + a \right)^2 ,
\end{equation}

and then as iterative equation:

\begin{equation}
    x\_{i+1} = x\_i - \left( x\_i + a \right)^2 \Delta t .
\end{equation}

The above is obviously correct in the limit \\\( \Delta t \rightarrow 0 \\\), but
in real life we can't numerically take a limit. Therefore we need a more
precise method.

## 4th order Runge-Kutta method

The core idea of Runge-Kutta methods is to estimate average slope over
couple of points within integration step \\\( \Delta t \\\):

\begin{equation}
    x\_{i+1} = x\_i + \langle \alpha \rangle \Delta t.
\end{equation}

For the 4th order method the average slope is estimated over four points:

\begin{equation}
    \langle \alpha \rangle = \frac{k\_1 + 2 k\_2 + 2 k\_3 + k\_4}{6} ,
\end{equation}

where \\\( k\_i \\\) are four slope estimates. These are obtained like this:

\begin{equation}
    k\_1 = f(x\_i, t\_i) ,
\end{equation}

\begin{equation}
    k\_2 = f(x\_i + k\_1 \frac{h}{2}, t\_i + \frac{h}{2}) ,
\end{equation}

\begin{equation}
    k\_3 = f(x\_i + k\_2 \frac{h}{2}, t\_i + \frac{h}{2}) ,
\end{equation}

\begin{equation}
    k\_4 = f(x\_i + k\_3 h, t\_i + h) .
\end{equation}

\\\( k\_2 \\\) and \\\( k\_3 \\\) provide estimates of slopes at the mid
point, thus they are given more weight than the edge points. This is the
intuition I have behind this method. While the derivation is quite an
interesting exercise, but it is beyond the scope of this post.

If we want to use this method to solve our ODE, we then must make explicit
that:

\begin{equation}
    f(x, t) = - \left( x + a \right)^2 .
\end{equation}

## Interactive app

The interactive app below plots the analytical solution (black curve) of the
ODE \eqref{eq:rk4-ode} as well as its numerical solution. You can choose the
ODE parameter \\\( a \\\), solution method and its parameters
\\\( t\_max \\\) (indicates time until which the solution is calculated) and
\\\( \Delta t \\\).

[html5-interactive width="520" height="250" mode="iframe"
url="/uploads/models/rk4/index.html"]

Notice that 4th order Runge-Kutta method provides reasonable solution even
for big \\\( \Delta t \\\), while Euler method requires noticeably smaller
\\\( \Delta t \\\) to look decent. The bigger the slope, the more apparent
the difference is.
