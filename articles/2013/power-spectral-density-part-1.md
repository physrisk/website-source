Title: Power spectral density (part 1)
Date: 2013-02-18 08:54
Author: Aleksejus Kononovicius
Tags: Interactive models, Wolfram CDF, methods, statistical physics, Fourier transform, spectral density
Slug: power-spectral-density-part-1
Status: published

Here, on the Physics of Risk, we frequently talk
about two essential statistical features of the time series -
probability and spectral densities. The probability density function
should well known to our readers - it is related to the distribution of
time series values. So let us now discuss the power spectral
density.<!--more-->

Note that we have already written on the "colors" of noise (see
[here]({filename}/articles/2012/colors-of-noise.md)),
which are related to the power spectral density, but the relation is not
so direct. Also the presented information overlaps with a few articles
on the old Physics of Risk (written by dr. Julius Ruseckas).

Fourier transform and power spectral density
--------------------------------------------

In between XVIII and XIX centuries French mathematician Fourier
discovered that many mathematical functions might be expanded as a
series of periodic functions! Mathematically it can be written as a sum
of certain coefficients an functions themselves:

\begin{equation}
 f(x) = \sum\limits\_{n=-\infty}^{\infty} F\_n e^{i n x} =\sum\limits\_{n=-\infty}^{\infty} F\_n \left\[ \cos(n x) + i\sin(n x) \right\] , 
\end{equation}

here \\\(  i \\\) is an imaginary unit. Interestingly enough index
\\\(  n \\\) might also be continuous! Consequently \\\(  F(n) \\\) can be
a complex function of the real variable \\\(  n \\\).

This function is obtained as follows:

\begin{equation}
 F(\nu) = \int\_{-\infty}^{\infty} f(x) \exp\left\[ -2\pi i \nu x \right\] \mathrm{d} x . 
\end{equation}

This expression is also known as Fourier transform, which formally
translates the data from the time domain (further in the text we will
use \\\(  x \\\) and \\\(  t \\\)) to the frequency domain (to note
frequency will use \\\(  \nu \\\)). Inverse transformation is done in a
very similar manner:

\begin{equation}
 f(x) = \int\_{-\infty}^{\infty} F(\nu) \exp\left\[ 2 \pi i \nu x \right\] \mathrm{d} \nu . 
\end{equation}

One might need to normalize transformations, but for the sake of
simplicity we skip this step.

Power spectral density is defined as a square module of the Fourier
transform:

\begin{equation}
 S(\nu) = | F(\nu) |^2 . 
\end{equation}

So, what information does this spectral density give? It shows how
strong the periodic tendencies are in the analyzed signal. To back up
this idea we will start with the spectral densities of deterministic
periodic signals.

Spectral density of the deterministic periodic signals
------------------------------------------------------

Bellow you should see an interactive program, which plots the
\\\(  f(x) = \sin(2 \pi x) + A \sin(2 \pi \nu x + \phi) \\\) in
time (the top figure) and frequency (the bottom figure) domains. Take a
note how the position of the peaks changes then you change the \\\( \nu \\\),
also note how the height changes with the changing value of
\\\(  A \\\). Most importantly note that spectral density does not depend
on phase, \\\(  \phi \\\)!

[html5-interactive
src="/uploads/models/psd-example/index.html" width="515"
height="550" mode="iframe"]

Experiment with this interactive app to discover how the spectral density
could describe the input of periodic signals into the analyzed time
series. After understanding the basic principles you should move on to
the applications of spectral density in the analysis of stochastic
processes. But this will be considered in the [next
article]({filename}/articles/2013/power-spectral-density-part-2.md).

Note that previously the interactive app was powered by Wolfram CDF technology and
it was later replaced by the current HTML5 app. The old app can still be downloaded
from [here]({static}/uploads/2013/deterministic-spectra.cdf).
