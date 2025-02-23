Title: Random walk as AR process
Date: 2021-09-21 08:00
Author: Aleksejus Kononovicius
Tags: interactive, stochastic models, time series models, statistical physics, topic: ARFIMA, Brownian motion, white noise
Slug: random-walk-as-ar-process
Image_url: uploads/2021/random-walk-as-ar-process.png
Status: published

In the [previous post]({filename}/articles/2021/big-review.md) I have
mentioned that in our review we have also presented a novel result, which we
have analyzed ARFIMA process. Understanding ARFIMA process requires some
specialized knowledge, which we will cover in this and [the next few
posts](/tag/topic-arfima/).

In this post we will take a well-known physical model, [random
walk](/tag/brownian-motion/), and try
to understand it in the context of economical model, AR(p) process.
<!--more-->

## White noise

A key component to the [random walk](/tag/brownian-motion/) is white noise. It is a type of noise,
which is simply a collection of independent random values (samples from some
given distribution). As these values do not depend on the past samples
or influence future samples, the white noise series is said to be
[delta-correlated]({filename}/articles/2013/power-spectral-density-part-2.md):

\begin{equation}
    \mathrm{ACF}(\tau) = \left\langle \xi(t\_1) \xi(t\_1 + \tau) \right\rangle = \delta(\tau) . 
\end{equation}

In the above ACF stands for auto-correlation function and \\\( \tau \\\) is
the lag. As you can explore in the app below, no matter what distribution is
used ACF is close to zero for all lags except \\\( \tau = 0 \\\).

[html5-interactive width="520" height="240" mode="iframe"
url="/uploads/models/stats/models/arma/white-noise.html"]

Note that earlier we have examined [spectral
density](/tag/spectral-density/) of the white noise process (see [this
post]({filename}/articles/2013/power-spectral-density-part-2.md)). It is
completely flat, which indicates that there are no periodic patterns in the
white noise series.

## Random walk

Mathematically [random walk](/tag/brownian-motion/) is defined as a sum (or integral) of white noise:

\begin{equation}
    x\_t = \sum\_{i=1}^{t} \xi\_i .
\end{equation}

In the above \\\( \xi\_i \\\) is discrete-time sample of white noise process.
This equation can be also rewritten in recursive form:

\begin{equation}
    x\_t = x\_{t-1} + \xi\_t , \quad \text{given} \quad x\_0 = 0 .
\end{equation}

This recursive form explicitly states that the next sample, \\\( x\_t \\\),
from the random walk process depends on the previous sample,
\\\( x\_{t-1} \\\). Hence random walk will be auto-correlated.

[html5-interactive width="520" height="300" mode="iframe"
url="/uploads/models/stats/models/arma/random-walk.html"]

Strangely, the ACF decays extremely slow, though we have introduced
dependence only on one previous sample from the process. This, quite likely,
indicates that ACF should not be used to analyze non-stationary series. And
Random walk is, in fact, a non-stationary process.

Trivial way to transform non-stationary series into stationary series is to
apply differencing procedure prior to calculating ACF. For random walk it is
sufficient to apply this procedure once:

\begin{equation}
    y\_t = x\_{t} - x\_{t-1} .
\end{equation}

ACF of \\\( y\_t \\\), as expected, is exactly the same as ACF of white
noise.

## Why random walk is AR process?

AR is an abbreviation of term auto-regressive. "Auto" implies "self", while
"regression" is a dependency on some kind of predictor. So auto-regressive
process needs to be able to predict itself. The only way do this is for the
new sample, \\\( x\_t \\\), to be dependent on past samples, different
\\\( x\_{t-i} \\\). In general:

\begin{equation}
    x\_t = \sum\_{i=1}^{p} \alpha\_i x\_{t-i} + \xi\_t .
\end{equation}

Now try setting \\\( p=1 \\\) and \\\( \alpha\_1=1 \\\). Then compare the
result against the recursive form of the random walk process. Can you see it
now?
