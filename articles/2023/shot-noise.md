Title: Shot noise
Date: 2023-11-21 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Fourier transform, spectral density, shot noise
Slug: shot-noise
Status: published
Image_url: uploads/2023/shot-noise.png

In the last few posts we have looked at [spectral
densities](/tag/spectral-density/) of a select [point
processes](/tag/point-process/). In those posts we have represented events
as points on the time axis. Such approach is just an approximation, which is
valid when the duration of events is negligible, but it is not always so.
When the events have finite duration, but the process is otherwise identical
to the Poisson process, we obtain a peculiar type of noise known as the
[shot noise](/tag/shot-noise/).
<!--more-->

## Power spectral density of a signal with fixed rectangular pulses

So, if the signal can represented as

\begin{equation}
    I(t) = \sum\_k A\_k(t-t\_k) ,
\end{equation}

with \\\( A\_k(s) \\\) being the \\\( k \\\)-th pulse profile. Then the
[Fourier transform](/tag/fourier-transform/) of the signal is given by

\begin{equation}
    \mathcal{F}\left\\{ I(t) \right\\} =
        \sum\_k e^{-2 \pi \mathrm{i} f t\_k} \mathcal{F}\left\\{A\_k(t) \right\\} .
\end{equation}

If \\\( A\_k(s) \\\) is a rectangular pulse with fixed duration \\\( \theta
\\\) and fixed unit height, then the [Fourier
transform](/tag/fourier-transform/) of the pulse is no longer trivial (in
comparison with an [earlier
post]({filename}/articles/2023/poisson-process-psd.md))

\begin{equation}
    \mathcal{F}\left\\{ A\_k(s) \right\\} =
        \int\_0^\theta e^{-2 \pi \mathrm{i} f u} \mathrm{d} u =
        \frac{\mathrm{i}}{2 \pi f} \left(e^{-2\pi\mathrm{i} f \theta} - 1 \right) .
\end{equation}

The [Fourier transform](/tag/fourier-transform/) of the signal is then given
by

\begin{equation}
    \mathcal{F}\left\\{ I(t) \right\\} =
        \frac{\mathrm{i}}{2 \pi f} \left(e^{-2\pi\mathrm{i} f \theta} - 1 \right)
        \cdot
        \sqrt{\frac{2}{T}}
        \sum\_k e^{-2 \pi \mathrm{i} f t\_k} .
\end{equation}

The [power spectral density](/tag/spectral-density/) of the signal is then
given by

\begin{equation}
    S(f) = \lim\_{T\rightarrow\infty} \left\langle
            \frac{2}{T} \cdot \left\lvert
                \frac{\mathrm{i}}{2 \pi f} \left(e^{-2\pi\mathrm{i} f \theta} - 1 \right)
            \right\rvert^2 \cdot \left\lvert
                    \sum\_k e^{-2 \pi \mathrm{i} f t\_k}
                \right\rvert^2
        \right\rangle .
\end{equation}

As we have dealt with the most of the complications of the above in an
[earlier post]({filename}/articles/2023/poisson-process-psd.md), we can now
just deal with

\begin{equation}
    \left\lvert \frac{\mathrm{i}}{2 \pi f} \left(e^{-2\pi\mathrm{i} f \theta} - 1 \right) \right\rvert^2 =
        \frac{1}{2 \pi^2 f^2} \left[1 - \cos\left(2 \pi f \theta \right) \right].
\end{equation}

Then, for a finite signal, we have

\begin{equation}
    S(f) \approx \frac{3 N}{T \pi^2 f^2} \left[1 - \cos\left(2 \pi f \theta \right) \right] .
\end{equation}

Alternatively one could rewrite the expression as a square of the [sinc
function](https://en.wikipedia.org/wiki/Sinc_function). Thus the tell-tale
of the [shot noise](/tag/shot-noise/) in the spectral domain is its
oscillating [power spectral density](/tag/spectral-density/). Notably the
first "dip" can be found at \\\( f\_1 = \theta^{-1} \\\), later ones are
observed at the integer multiples of \\\( f\_1 \\\).

## Interactive app

Interactive app below generates a signal with (possibly overlapping)
rectangular pulses. The duration of the pulses \\\( \theta \\\) is fixed,
and you may change this value as desired. The height of the pulses is fixed to
\\\( 1 \\\), as the [power spectral density](/tag/spectral-density/)
dependence on the height of the pulses is trivial.

Note that the pulses may overlap, because the inter-event time \\\( \tau \\\)
(it is sampled from an exponential distribution with rate \\\( \lambda \\\))
in this case is treated as the duration between the starting times of
the pulses. So if a particular inter-event time is smaller than the fixed
duration of the pulse, i.e., \\\( \tau\_i < \theta \\\), then multiple
pulses could overlap. To avoid excessive overlaps, which slow down the
simulation by a lot, we have limited the possible rates, so that
\\\( \lambda \leq \frac{1}{\theta} \\\). In the [earlier point process
model]({filename}/articles/2023/poisson-process-psd.md) this was not
possible, because the pulses had negligible duration.

[html5-interactive width="520" height="480" mode="iframe"
url="/uploads/models/psd-point-process/shot.html"]
