Title: Interpolation of Brownian motion
Date: 2022-01-18 08:00
Author: Aleksejus Kononovicius
Tags: interactive, stochastic models, Brownian motion, fractals
Slug: brownian-motion-interpolation
Status: published
Image_url: uploads/2022/brownian-motion-interpolation.png

Suppose you have obtained a sample path of [Brownian
motion](/tag/brownian-motion/) using discrete step size \\\( \Delta t \\\).
Yet what happens at a finer scale? While in the experimental setup it would
be impossible to say how the Brownian particle actually moved in between
\\\( t \\\) and \\\( t + \Delta t \\\), one could numerically generate
probable paths particle took in that time period. We do this by relying on
the [fractal](/tag/fractals/) nature of the [Brownian
motion](/tag/brownian-motion/).
<!--more-->

## Interpolation method

If we know \\\( W(0) \\\) and \\\( W(1) \\\), we could try obtaining
\\\( W(0.5) \\\) by straightforward linear interpolation:

\begin{equation}
    W(0.5) = \frac{W(0) + W(1)}{2} .
\end{equation}

Yet this would have an obvious drawback - \\\( W(t) \\\) for any
\\\( t \in \left( 0, 1 \right) \\\) would very much predictable.

Any one familiar with [Euler method for the stochastic differential
equations]({filename}/articles/2012/numerical-methods-for-the-stochastic-differential-equations.md) could come up with another approach. If

\begin{equation}
    W(1) = W(0) + \xi ,
\end{equation}

with \\\( \xi \\\) being sample from a standard normal distribution, then
the following should hold, too:

\begin{equation}
    W(0.5) = W(0) + \sqrt{0.5} \cdot \xi .
\end{equation}

Notice that motion increments between \\\( t=0 \\\) and \\\( t=0.5 \\\) would
have a correct distribution (normal distribution with zero mean and
\\\( 0.5 \\\) variance). But motion increments between \\\( t=0.5 \\\) and
\\\( t=1 \\\) would have higher variance (\\\( 1.5 \\\)).

To get the correct formula we need to combined both approaches. Let:

\begin{equation}
    W(0.5) = \frac{W(0) + W(1)}{2} + \sqrt{0.25} \cdot \xi . \label{eq:correct}
\end{equation}

## Interactive app

The app below uses \eqref{eq:correct} to generate a sample Brownian motion
trajectory between two points \\\( x(0) \\\) and \\\( x(256) \\\), which
you select. First the app generates the mid-point between \\\( x(0) \\\)
and \\\( x(256) \\\), which is \\\( x(128) \\\). Then it generates
\\\( x(64) \\\) and \\\( x(192) \\\). And so on, it will continuously add
the missing mid-points until the trajectory is known at all integer times.

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/brownian-motion-interpolation/index.html"]

The app won't generate the trajectory instantaneously on purpose. After
filling in all current mid-points it will pause for \\\( 1 \\\) second.
After that second it will fill in all the new mid-points. It will continue
doing so until sample trajectory is known for unit step size
\\\( \Delta t = 1 \\\).
