Title: Fractional derivatives
Date: 2021-11-16 08:00
Author: Aleksejus Kononovicius
Tags: interactive, fractals, topic: ARFIMA, 1/f noise, video, vcubingx
Slug: fractional-derivatives
Image_url: uploads/2021/fractional-derivatives.png
Status: published

[Last time]({filename}/articles/2021/arima-models.md) we have seen that ARMA
models can be integrated (and differentiated) to deal with non-stationarity
present in the empirical data. ARIMA model should be sufficient in most
cases, but if the empirical data is know to exhibit "true" long-range
memory, then ordinary calculus will not work. In those cases one would have
to use fractional calculus. Here we will take a brief look at fractional
derivatives (and integrals).
<!--more-->

## General theory

The first major step in journey towards fractional calculus is an
observation made by Cauchy. He had observed that if we want to integrate
function \\\( n \\\) times, it is easier to use the following formula:

\begin{equation}
    I^n \left\\\{ f(x) \right\\\} = \frac{1}{(n-1)!} \int\_a^x (x-t)^{n-1} f(t) \mathrm{d} t.
\end{equation}

In the above \\\( I^n \left\\\{ \ldots \right\\\} \\\) is integration operator
applied \\\( n \\\) times. Obviously factorial works only for positive
integers, but factorial can be replaced by gamma function:

\begin{equation}
    \Gamma (n) = \int\_0^\infty e^{-s} s^{n-1} \mathrm{d} s = (n-1)! ,
\end{equation}

which allows us to extend the domain to positive real numbers. With this we
arrive at [Riemann-Liouville
integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Liouville_integral),
but we can't simply take negative value of \\\( n \\\) to get the
derivative. Still we can make use of this integral to it define fractional
derivative, \\\( D^n \\\):

\begin{equation}
    D^n f = \frac{\mathrm{d}^{\lceil n \rceil}}{\mathrm{d} x^{\lceil n \rceil}}
        \left( I^{\lceil n \rceil - n} f \right) .
\end{equation}

In the above \\\( \lceil \ldots \rceil \\\) rounds numbers up (takes a
ceiling of a number). To understand why this equation works try selecting
and entering certain values of \\\( n \\\). For integer \\\( n \\\) the
integration operator becomes \\\( I^0 \\\) and disappears, only
\\\( n \\\)-th derivative remains. For positive real \\\( n \\\), derivative
remains of some integer order, while the integral order is some positive
fraction between 0 and 1. We can easily calculate this integral and then
take the ordinary derivative to its output. 

These theoretical points well discussed in the following video by
[vcubingx](https://www.youtube.com/@vcubingx).

[youtube v="A4sTAKN6yFA"]

## Example: fractional derivative of \\\( f(x) = x \\\)

Let us assume that the order of derivative, \\\( n \\\), is in
\\\( (0, 1] \\\).

\begin{equation}
    D^n x = \frac{\mathrm{d}}{\mathrm{d} x} \left( I^{1-n} x \right) .
\end{equation}

\begin{equation}
    I^{1-n} x = \frac{1}{\Gamma(1-n)} \int\_a^x (x-t)^{-n} t \mathrm{d} t.
\end{equation}

Now lets do substitution \\\( u = x-t \\\):

\begin{equation}
    \int (x-t)^{-n} t \mathrm{d} t
        = \int u^{-n} (u-x) \mathrm{d} u
        = \int \left( u^{1-n} - x u^{-n} \right) \mathrm{d} u
        = \frac{u^{2-n}}{2-n} - x \frac{u^{1-n}}{1-n}
\end{equation}

After a bit of algebra and setting \\\( a=0 \\\):

\begin{equation}
    \int\_0^x (x-t)^{-n} t \mathrm{d} t = \frac{x^{2-n}}{2 - 3 n + n^2} .
\end{equation}

A bit more trivial algebra:

\begin{equation}
    D^n x = \frac{1}{\Gamma(2-n)} x^{1-n} . 
\end{equation}

This kind of a lot of manual labor, but the end result looks nice.

If you want you can use the app below to see that fractional derivative
continuously "interpolates" between the function, its derivative and
anti-derivative.

[html5-interactive width="520" height="350" mode="iframe"
url="/uploads/models/fractals/frac-deriv/index.html"]
