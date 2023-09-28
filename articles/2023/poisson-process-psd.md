Title: PSD of a Poisson process
Date: 2023-09-19 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistics, Poisson process, Fourier transform, spectral density, white noise
Slug: poisson-process-psd
Status: published
Image_url: uploads/2023/poisson-process-psd.png

[Earlier]({filename}/articles/2023/poisson-process.md) we have
started talking about the [Poisson processes](/tag/poisson-process/). In the
few posts before the summer holidays we have driven our discussion towards
[waiting time paradox]({filename}/articles/2023/waiting-time-paradox.md),
which is an interesting phenomenon we encounter in our day-to-day lives.
Here, on Physics of Risk we have an interest in [colors of
noise]({filename}/articles/2012/colors-of-noise.md) exhibited by variety of
[stochastic processes](/tag/stochastic-models/). Thus in the next few posts
let us examine the [power spectral density](/tag/spectral-density/) of the
Poisson process.
<!--more-->

## Fourier transform of a Poisson point process

When discussing [waiting time
paradox]({filename}/articles/2023/waiting-time-paradox.md) we have provided
a plot where the bus arrival events are shown as sudden bursts.
Mathematically such signal can be expressed as:

\begin{equation}
    I(t) = \sum\_k A(t-t\_k) ,
\end{equation}

with \\\( A(s) \\\) being the burst profile. For now let us keep the
mathematical form of the profile general. The [Fourier
transform](/tag/fourier-transform/) of such signal is given by:

\begin{equation}
    \mathcal{F}\left\\{ I(t) \right\\} =
        \sqrt{\frac{2}{T}} \int\_0^T I(t) e^{-2 \pi \mathrm{i} f t} \mathrm{d}t =
        \sqrt{\frac{2}{T}} \int\_0^T \sum\_k A(t-t\_k) e^{-2 \pi \mathrm{i} f t} \mathrm{d}t .
\end{equation}

Because of the linearity of the [Fourier transform](/tag/fourier-transform/)
we can rewrite it as a sum of the [Fourier
transforms](/tag/fourier-transform/) of the individual bursts:

\begin{equation}
    \mathcal{F}\left\\{ I(t) \right\\} =
        \sum\_k \sqrt{\frac{2}{T}} \int\_0^T A(t-t\_k) e^{-2 \pi \mathrm{i} f t} \mathrm{d}t =
        \sum\_k e^{-2 \pi \mathrm{i} f t\_k} \mathcal{F}\left\\{A(t) \right\\} .
\end{equation}

If \\\( A(t) \\\) is the [Dirac delta
function](https://en.wikipedia.org/wiki/Dirac_delta_function), then:

\begin{equation}
    \mathcal{F}\left\\{ I(t) \right\\} =
        \sqrt{\frac{2}{T}} \sum\_k e^{-2 \pi \mathrm{i} f t\_k} .
\end{equation}

The expression about is remarkably similar to the [Discrete Fourier
transform](https://en.wikipedia.org/wiki/Discrete_Fourier_transform) of a
signal with unitary bursts. This is a purely algebraic reason to pick Dirac
delta function as burst profile (to maintain consistency between continuous
[Fourier transform](/tag/fourier-transform/) and its discrete counterpart).

Physical reasoning for the choice is that in physics nothing happens
instantaneously. Events assumed to be instantaneous happen over extremely
short (thus often irrelevant) periods of time. The change the events trigger
is often fixed in magnitude, so the shorter event time the larger the
density of the change introduced. \\\( I(t) \\\) should be seen as
representing not the magnitude of the change, but the density. This is why
in the [first Poisson process
app]({filename}/articles/2023/poisson-process.md) we have plotted
\\\( S(t) \\\) (the count of the students who have arrived by the time
\\\( t \\\)).

## Power spectral density of a Poisson point process

To understand overall dynamics of the process let us consider the average
(over distinct realizations of the process) [power spectral
density](/tag/spectral-density/) of the signal:

\begin{equation}
    S(f) = \lim\_{T\rightarrow\infty} \left\langle
            \frac{2}{T} \lvert
                    \sum\_k e^{-2 \pi \mathrm{i} f t\_k}
                \rvert^2
        \right\rangle .
\end{equation}

The modulus squared in the above can be rewritten as a multiplication of two
sums: the sum in the expression above, and its complex conjugate. Thus we
have:

\begin{equation}
    S(f) = \lim\_{T\rightarrow\infty} \left\langle
            \frac{2}{T} \sum\_k \sum\_m e^{2 \pi \mathrm{i} f (t\_m - t\_k)}
        \right\rangle .
\end{equation}

Let us separate the terms with identical indices \\\( m = k \\\), as their
sum is trivially equal to \\\( N \\\) (number of bursts):

\begin{equation}
    S(f) = \lim\_{T\rightarrow\infty} \left\langle
            \frac{2}{T} \left( N + \sum\_k \sum\_{m\neq k} e^{2 \pi \mathrm{i} f (t\_m - t\_k)} \right)
        \right\rangle .
\end{equation}

The sum over \\\( m \neq k \\\) can be simplified by recalling that square
of the modulus is always a real number. Then:

\begin{equation}
    \sum\_k \sum\_{m\neq k} e^{2 \pi \mathrm{i} f (t\_m - t\_k)} =
        2 \mathrm{Re}\left[\sum\_k \sum\_{m > k} e^{2 \pi \mathrm{i} f (t\_m - t\_k)}\right] .
\end{equation}

Recall that \\\( t\_k \\\) is the time when \\\( k \\\)-th burst occurs,
thus the difference between \\\( m \\\)-th occurrence time and \\\( k \\\)-th
occurrence time is given by:

\begin{equation}
    t\_m - t\_k = \sum\_{i=k}^{m-1} \tau\_i .
\end{equation}

If \\\( \tau\_i \\\) are identically distributed, then:

\begin{equation}
    \left\langle \exp\left[ 2 \pi \mathrm{i} \left( t\_m - t\_k \right) \right] \right\rangle =
        \left\langle \exp\left[ 2 \pi \mathrm{i} \sum\_{i=k}^{m-1} \tau\_i \right] \right\rangle =
        \chi\_\tau(f)^{m-1-k} .
\end{equation}

In the above \\\( \chi\_\tau(f) \\\) is the characteristic function of the
inter-event time distribution. Thus we have that:

\begin{equation}
    S(f) = \lim\_{T\rightarrow\infty}
        2 \bar{\nu} \left( 1 + \frac{2}{N} \sum\_k \sum\_{m\neq k} \left\langle e^{2 \pi \mathrm{i} f (t\_m - t\_k)} \right\rangle \right) =
        2 \bar{\nu} \left( 1 + \mathrm{Re} \left[ \frac{2}{1 - \chi\_\tau(f)} \right] \right\) .
\end{equation}

In the above \\\( \bar{\nu} \\\) stands for the average number of bursts per
unit time. As \\\( \tau \\\) are sampled from exponential distribution with
rate \\\( \lambda \\\), we have that \\\( \bar{\nu} = \lambda \\\).
Furthermore the characteristic function of exponential distribution is given
by:

\begin{equation}
    \chi\_\tau(f) = \frac{\lambda}{\lambda - 2 \pi \mathrm{i} f} ,
\end{equation}

thus the power spectral density simplifies to:

\begin{equation}
    S(f) = \lim\_{T\rightarrow\infty} \left\langle 6 \bar{\nu} \right\rangle \approx 6 \frac{N}{T} .
\end{equation}

It seems that the algebra above indicates that the [Poisson
process](/tag/poisson-process/) is a [white noise](/tag/white-noise/)
process. And thinking from the perspective of the [microscopic
model]({filename}/articles/2023/poisson-process.md) for the [Poisson
process](/tag/poisson-process/), this conclusion seems reasonable as
distinct time intervals are uncorrelated: the probability that event occurs
is constant and equal for every time interval.

## Interactive app

Interactive app below samples time series from the [Poisson
process](/tag/poisson-process/). To verify the analytical intuitions above,
we perform [spectral analysis](/tag/spectral-density/) on the discretized
time series. The discretized time series are obtained by counting the number
of events inside unit time windows (the top plot). In total \\\( 2^{20} \\\)
(roughly one million) such time windows are observed each time "Generate
button is pressed. PSD of the sampled series is shown in the bottom plot as
a red curve, the dark gray curve indicates theoretical prediction.

[html5-interactive width="520" height="480" mode="iframe"
url="/uploads/models/psd-point-process/exponential.html"]
