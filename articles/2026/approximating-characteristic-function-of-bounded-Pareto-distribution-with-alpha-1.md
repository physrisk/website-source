Title: Approximating characteristic function of bounded Pareto distribution with α=1
Date: 2026-09-08 08:00
Author: Aleksejus Kononovicius
Tags: statistics, power-law distributions, Python, B. Kaulakys
Slug: approximating-characteristic-function-of-bounded-Pareto-distribution-with-alpha-1
Status: draft
Image_url: uploads/2026/approximating-characteristic-function-of-bounded-Pareto-distribution-with-alpha-1.png

During the summer, I received an email from a researcher at university
abroad inquiring about how we (myself and my senior colleague, [prof. B.
Kaulakys](/tag/b-kaulakys/)) derived the approximation for the
characteristic function of bounded Pareto distribution (for the particular
case with \\\( \alpha = 1 \\\)). The approximation was given in [cite
id="Kononovicius2023rtn"], but derivation turned out to be somewhat more
involved than I remembered. Originally, I derived it with the help of
Wolfram Engine, while my colleague consulted various mathematical formula
compendiums. Unfortunately, I was unable to find any notes containing the
derivation. So I have attempted to reconstruct a combined approach from
scratch. You'll find the derivation below.
<!--more-->

## Exact characteristic function

Let us consider a characteristic function of bounded Pareto distribution
with \\\( \alpha=1 \\\). With \\\(
\tau\_{\text{min}}\leq\tau\leq\tau\_{\text{max}} \\\), the probability
density function of the considered distribution is given by

\begin{equation}
p\left(\tau\right)=\frac{\tau\_{\text{min}}\tau\_{\text{max}}}{\tau\_{\text{max}}-\tau\_{\text{min}}}\cdot\frac{1}{\tau^{2}}.
\end{equation}

Using the definition, characteristic function is given by

\begin{equation}
\chi\left(f\right)=\frac{\tau\_{\text{min}}\tau\_{\text{max}}}{\tau\_{\text{max}}-\tau\_{\text{min}}}\int^{\tau\_{\text{max}}}\_{\tau\_{\text{min}}}\frac{e^{2\pi\mathrm{i}f\tau}}{\tau^{2}}d\tau.
\end{equation}

Alternatively, using \\\( \mathrm{Ei} \left(\ldots\right) \\\) special
function (see
[Wikipedia](https://en.wikipedia.org/wiki/Exponential_integral)), we can
rewrite it as follows

\begin{equation}
\chi\left(f \right)=\frac{\tau\_{\text{min}}\tau\_{\text{max}}}{\tau\_{\text{max}}-\tau\_{\text{min}}}\left[2\pi\mathrm{i}f\left\\\{ \mathrm{Ei}\left(2\pi\mathrm{i}f\tau\_{\text{max}}\right)-\mathrm{Ei}\left(2\pi\mathrm{i}f\tau\_{\text{min}}\right)\right\\\} -\frac{e^{2\pi\mathrm{i}f\tau\_{\text{max}}}}{\tau\_{\text{max}}}+\frac{e^{2\pi\mathrm{i}f\tau\_{\text{min}}}}{\tau\_{\text{min}}}\right].\label{eq:char-advanced}
\end{equation}

[Exponential integral](https://en.wikipedia.org/wiki/Exponential_integral)
are still integrals under the hood, and thus using the exact formula is
somewhat problematic. Furthermore, in [cite id="Kononovicius2023rtn"] we
primarily care about approximate behavior of the characteristic function for
small \\\( f \\\). We would also prefer to have something simple to plugin
into other, more complicated, expressions.

## Side note: Deriving \eqref{eq:char-advanced}

First, let us calculate the following derivative

\begin{equation}
\frac{d}{dx}\left(\frac{e^{ax}}{x}\right)=\frac{ae^{ax}}{x}-\frac{e^{ax}}{x^{2}}.
\end{equation}

Rearranging the above leads to,

\begin{equation}
\frac{e^{ax}}{x^{2}}=\frac{ae^{ax}}{x}-\frac{d}{dx}\left(\frac{e^{ax}}{x}\right).
\end{equation}

Let us make an observation that the derivative of an [exponential
integral](https://en.wikipedia.org/wiki/Exponential_integral) is given by

\begin{equation}
\frac{d}{dx}\mathrm{Ei}\left(ax\right)=\frac{e^{ax}}{x}.
\end{equation}

Thus, we have that

\begin{equation}
\frac{e^{ax}}{x^{2}}=a\frac{d}{dx}\mathrm{Ei}\left(ax\right)-\frac{d}{dx}\left(\frac{e^{ax}}{x}\right).
\end{equation}

We are interested in antiderivative of the above, which is simply

\begin{equation}
\int\frac{e^{ax}}{x^{2}}dx=a\mathrm{Ei}\left(ax\right)-\frac{e^{ax}}{x}+\mathcal{C}.
\end{equation}

To finally obtain \eqref{eq:char-advanced}, we just need to use this result
to obtain the definite integral.

## Approximating the exact expression

Let us continue with \eqref{eq:char-advanced}. If we assume that \\\(
\frac{1}{\tau\_{\text{max}}}\ll f \\\) (or alternatively \\\(
f\tau\_{\text{max}}\gg 1 \\\)), we could do the following
approximation

\begin{equation}
\mathrm{Ei}\left(2\pi\mathrm{i}f\tau\_{\text{max}}\right)\approx\mathrm{i}\pi.
\end{equation}

Assuming that \\\( \tau\_{\text{min}}\ll\tau\_{\text{max}} \\\) yields

\begin{equation}
\frac{\tau\_{\text{min}}\tau\_{\text{max}}}{\tau\_{\text{max}}-\tau\_{\text{min}}}\approx\frac{\tau\_{\text{min}}\tau\_{\text{max}}}{\tau\_{\text{max}}}=\tau\_{\text{min}}.
\end{equation}

Also, we would have that \\\(
\left|\frac{e^{2\pi\mathrm{i}f\tau\_{\text{max}}}}{\tau\_{\text{max}}}\right|\ll\left|\frac{e^{2\pi\mathrm{i}f\tau\_{\text{min}}}}{\tau\_{\text{min}}}\right|
\\\), and thus

\begin{equation}
-\frac{e^{2\pi\mathrm{i}f\tau\_{\text{max}}}}{\tau\_{\text{max}}}+\frac{e^{2\pi\mathrm{i}f\tau\_{\text{min}}}}{\tau\_{\text{min}}}\approx\frac{e^{2\pi\mathrm{i}f\tau\_{\text{min}}}}{\tau\_{\text{min}}}.
\end{equation}

At this point we have,

$$\begin{align}
\chi\left(f\right) & \approx\tau\_{\text{min}}\left[2\pi\mathrm{i}f\left\\\{ \mathrm{i}\pi-\mathrm{Ei}\left(2\pi\mathrm{i}f\tau\_{\text{min}}\right)\right\\\} +\frac{e^{2\pi\mathrm{i}f\tau\_{\text{min}}}}{\tau\_{\text{min}}}\right] = \nonumber\\\\
    & =-2\pi^{2}f\tau\_{\text{min}}-2\pi\mathrm{i}f\tau\_{\text{min}}\mathrm{Ei}\left(2\pi\mathrm{i}f\tau\_{\text{min}}\right)+e^{2\pi\mathrm{i}f\tau\_{\text{min}}}.
\end{align}$$

Let us proceed by taking Taylor series for small \\\( f \\\),

$$\begin{align}
e^{2\pi\mathrm{i}f\tau\_{\text{min}}} & \approx1+2\pi\mathrm{i}f\tau\_{\text{min}}+\ldots,\\\\
2\pi\mathrm{i}f\tau\_{\text{min}}\mathrm{Ei}\left(2\pi\mathrm{i}f\tau\_{\text{min}}\right) & \approx-\pi^{2}f\tau\_{\text{min}}+2\pi\mathrm{i}f\tau\_{\text{min}}\left[C\_{\gamma}+\ln\left(2\pi f\tau\_{\text{min}}\right)\right]+\ldots.
\end{align}$$

Then,

$$ \begin{align}
\chi\left(f\right) & \approx-2\pi^{2}f\tau\_{\text{min}}-\left\\\{ -\pi^{2}f\tau\_{\text{min}}+2\pi\mathrm{i}f\tau\_{\text{min}}\left[C\_{\gamma}+\ln\left(2\pi f\tau\_{\text{min}}\right)\right]\right\\\} +\left[1+2\pi\mathrm{i}f\tau\_{\text{min}}\right]=\nonumber \\\\
 & =1-\pi^{2}f\tau\_{\text{min}}+\left[1-C\_{\gamma}-\ln\left(2\pi f\tau\_{\text{min}}\right)\right]\cdot\left(2\pi\mathrm{i}f\tau\_{\text{min}}\right).
\end{align}$$

Which is exactly Eq. (28) from [cite id="Kononovicius2023rtn"].

## How good the approximation is?

As usual, I would like to provide you with an
[interactive](/tag/interactive/) app so you could compare exact and
approximate expressions on your own. But, it seems it is rather complicated
to evaluate \eqref{eq:char-advanced} using JavaScript (as I would need to
implement some advanced numerical integration method to evaluate \\\(
\mathrm{Ei} \left(\ldots\right) \\\)).

Thus, I have generated few static images (these use \\\( \tau\_\text{min} =
10^{-3} \\\) and \\\( \tau\_\text{max} = 10^3 \\\) parameter values) using
[Python](/tag/python/). Below you can see three figures which compare the
absolute value, the real and the imaginary part of the exact expression
(black curve) and the approximate expression (red curve).

![Absolute value
comparison]({static}/uploads/2026/approximating-characteristic-function-of-bounded-Pareto-distribution-with-alpha-1.png
"Comparing the absolute value of the exact expression (black curve) and the
approximate expression (red curve).")

![Real part
comparison]({static}/uploads/2026/approximating-characteristic-function-of-bounded-Pareto-distribution-with-alpha-1-real.png
"Comparing the real part of the exact expression (black curve) and the
approximate expression (red curve).")

![Imaginary part
comparison]({static}/uploads/2026/approximating-characteristic-function-of-bounded-Pareto-distribution-with-alpha-1-imag.png
"Comparing the imaginary part of the exact expression (black curve) and the
approximate expression (red curve).")

If you want to generate your own comparisons, you can reuse my
[Python](/tag/python/) code (which relies on `mpmath` library, but you could
also reimplement the code using `scipy.special`). The figures above were
generated by executing the [Python](/tag/python/) code given below.

```python
import matplotlib.pyplot as plt
import numpy as np
from mpmath import ei, euler, exp, fabs, im, log, pi, re


def exact(t_min, t_max, f):
    norm = t_min * t_max / (t_max - t_min)
    exp_max = exp(2j * pi * f * t_max) / t_max
    exp_min = exp(2j * pi * f * t_min) / t_min
    ei_max = ei(2j * pi * f * t_max)
    ei_min = ei(2j * pi * f * t_min)
    return norm * (2j * pi * f * (ei_max - ei_min) - exp_max + exp_min)


def approx(t_min, f):
    return (
        1
        - (pi**2) * f * t_min
        + (1 - euler - log(2 * pi * f * t_min)) * (2j * pi * f * t_min)
    )


t_min = 1e-3
t_max = 1e3

x_vals = np.logspace(np.log10(t_min) + 0.5, np.log10(t_max) - 0.5, num=300)
y_vals = np.array([exact(t_min, t_max, x) for x in x_vals])
y_approx = np.array([approx(t_min, x) for x in x_vals])

y_vals_im = np.array([im(y) for y in y_vals])
y_vals_re = np.array([re(y) for y in y_vals])
y_vals_abs = np.array([fabs(y) for y in y_vals])

y_approx_im = np.array([im(y) for y in y_approx])
y_approx_re = np.array([re(y) for y in y_approx])
y_approx_abs = np.array([fabs(y) for y in y_approx])

plt.figure(figsize=(3, 2))
plt.loglog()
plt.xlabel("$f$")
plt.ylabel(r"$\left|\chi(f)\right|$")
plt.plot(x_vals, y_vals_abs, "k")
plt.plot(x_vals, y_approx_abs, "r")
plt.show()

plt.figure(figsize=(3, 2))
plt.loglog()
plt.xlabel("$f$")
plt.ylabel(r"$\mathrm{Re}[\chi(f)]$")
plt.plot(x_vals, y_vals_re, "k")
plt.plot(x_vals, y_approx_re, "r")
plt.show()

plt.figure(figsize=(3, 2))
plt.loglog()
plt.xlabel("$f$")
plt.ylabel(r"$\mathrm{Im}[\chi(f)]$")
plt.plot(x_vals, y_vals_im, "k")
plt.plot(x_vals, y_approx_im, "r")
plt.show()
```
