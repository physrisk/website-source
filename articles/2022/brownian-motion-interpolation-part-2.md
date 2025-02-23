Title: Interpolation of Brownian motion (part 2)
Date: 2022-02-01 08:00
Author: Aleksejus Kononovicius
Tags: interactive, stochastic models, Brownian motion, fractals
Slug: brownian-motion-interpolation-part-2
Status: published
Image_url: uploads/2022/brownian-motion-interpolation-part-2.png

[Last time]({filename}/articles/2022/brownian-motion-interpolation.md) we
have discussed how to statistically correct interpolate [Brownian
motion](/tag/brownian-motion/). You have probably noticed that the correct
interpolation formula has one peculiarity:

\begin{equation}
    W(0.5) = \frac{W(0) + W(1)}{2} + \sqrt{0.25} \cdot \xi .
    \label{eq:correct}
\end{equation}

Why \\\( \sqrt{0.25} \\\) and not \\\( \sqrt{0.5} \\\)?
<!--more-->

The answer is quite intuitive. Part of the variance we expect to obtain is
already present in the linear interpolation part of the expression:

\begin{equation}
    X = \frac{W(0) + W(1)}{2} = \frac{2 W(0) + \xi}{2} = W(0) +
    \frac{\xi}{2} .
\end{equation}

In the above \\\( \xi \\\) is a sample from standard normal distribution.
Thus \\\( X \\\) will be normally distributed with mean of \\\( W(0) \\\)
and variance of \\\( 1/4 \\\). To have \\\( W(0.5) \\\), which would have
expected variance of \\\( 1/2 \\\) we need to add random sample, which would
contribute variance of \\\( 1/4 \\\). This is why \\\( \xi \\\) is
multiplied by \\\( \sqrt{0.25} \\\) (square root was kept for clarity).

## Interactive app

The app below uses \eqref{eq:correct} to generate a sample Brownian motion
trajectory between two points \\\( x(0) \\\) and \\\( x(256) \\\), which you
select. This app is almost exactly the same as the app from the [previous
post]({filename}/articles/2022/brownian-motion-interpolation.md).  The
difference is that after the trajectory is generated it is differentiated

\begin{equation}
    \Delta x(t) = x(t) - x(t-1) .
\end{equation}

Then the distribution of increments, \\\( \Delta x \\\), is plotted and
compared against the normal distribution with
\\\( \frac{x(256) - x(0)}{256} \\\) mean and unit variance.

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/stats/concepts/brownian-motion-interpolation/distribution.html"]

Everything seems fine doesn't it?
