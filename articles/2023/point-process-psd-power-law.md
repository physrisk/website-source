Title: PSD of a point process with power-law inter-event times
Date: 2023-10-17 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistics, Poisson process, point process, Fourier transform, spectral density
Slug: point-process-psd-power-law
Status: published
Image_url: uploads/2023/point-process-psd-power-law.png

In [the previous
post]({filename}/articles/2023/point-process-psd-weibull.md) we have seen
that introducing memory into the memory-less [Poisson
process](/tag/poisson-process/) makes things very complicated. But we
haven't yet still seen [1/f noise](/tag/1f-noise/). So now let us consider
power-law distributed inter-event times!<!--more-->

## Pareto distributed inter-event times

Let us assume that inter-event times are distributed according to the Pareto
distribution. To make the process stationary, let us impose limits on the
possible of inter-event times: they must be larger or equal to \\\(
\tau\_{\mathrm{min}} \\\) and smaller or equal to \\\( \tau\_{\mathrm{max}}
\\\). Then the PDF of the bounded Pareto distribution can be written as:

\begin{equation}
p\left(\tau\right)=\begin{cases}
\frac{\alpha\tau\_{\mathrm{min}}^{\alpha}}{1-\left(\frac{\tau\_{\mathrm{min}}}{\tau\_{\mathrm{max}}}\right)^{\alpha}}\cdot\frac{1}{\tau^{\alpha+1}} & \text{for }\tau\_{\mathrm{min}}\leq\tau\leq\tau\_{\mathrm{max}},\\\\
0 & \text{otherwise}.
\end{cases}
\end{equation}

To use general result derived in [an earlier
post]({filename}/articles/2023/poisson-process-psd.md) we need the
expression for the characteristic function of this distribution. And it is
given by:

\begin{equation}
\chi\_{\tau}\left(f\right)=\frac{\alpha\left(-2\pi\mathrm{i} f\tau\_{\mathrm{min}}\tau\_{\mathrm{max}}\right)^{\alpha}}{\tau\_{\mathrm{max}}^{\alpha}-\tau\_{\mathrm{min}}^{\alpha}}\cdot\left[\Gamma\left(-\alpha,-2\pi\mathrm{i} f\tau\_{\mathrm{min}}\right)-\Gamma\left(-\alpha,-2\pi\mathrm{i} f\tau\_{\mathrm{max}}\right)\right].
\end{equation}

In the above \\\( \Gamma\left(s,x\right) \\\) is the [upper incomplete Gamma
function](https://en.wikipedia.org/wiki/Incomplete_gamma_function). The
expression above is not that helpful if we want to derive compact expression
for the PSD. We need an approximation, and unlike in the [previous
post]({filename}/articles/2023/point-process-psd-weibull.md), this time
it works! The approximation for \\\( \frac{1}{2\pi\tau\_{\mathrm{max}}}\ll
f\ll\frac{1}{2\pi\tau\_{\mathrm{min}}} \\\) and \\\( 0 < \alpha < 2 \\\)
(with an exception for particular case of \\\( \alpha = 1 \\\):

\begin{equation}
\chi\_{\tau}\left(f\right)\approx 1+\frac{\alpha}{\alpha-1}\cdot\left(2\pi\mathrm{i} f\tau\_{\mathrm{min}}\right)-\Gamma\left(1-\alpha\right)\cdot\left(-2\pi\mathrm{i} f\tau\_{\mathrm{min}}\right)^{\alpha}.
\end{equation}

For the particular case of \\\( \alpha = 1 \\\), we have:

\begin{equation}
\chi\_{\tau}\left(f\right) \approx 1-\pi^{2}f\tau\_{\mathrm{min}}+\left[1-C\_{\gamma}-\ln\left(2\pi f\tau\_{\mathrm{min}}\right)\right]\cdot\left(2\pi\mathrm{i} f\tau\_{\mathrm{min}}\right).
\end{equation}

In the above \\\( C\_\gamma \\\) is the Euler's gamma constant (\\\(
C\_\gamma = 0.577\ldots \\\)).

## The power spectral density

So, from [earlier]({filename}/articles/2023/poisson-process-psd.md) we have
that:

\begin{equation}
    S(f) = 2 \bar{\nu} \left( 1 + \mathrm{Re} \left[ \frac{2}{1 - \chi\_\tau(f)} \right] \right\) .
\end{equation}

Thus, for the particular case of \\\( \alpha = 1 \\\), we obtain:
\begin{equation}
    S(f) \propto \frac{1}{f \tau\_{\mathrm{min}} ( \pi^2 + 4 [1 - C\_\gamma - \ln(2\pi f \tau\_{\mathrm{min}})]^2)} .
\end{equation}

As long as \\\( \pi^2 \gg 4 [1 - C\_\gamma - \ln(2\pi f
\tau\_{\mathrm{min}})]^2 \\\) it seems we can celebrate obtaining the illusive
[1/f noise](/tag/1f-noise/)? But recall that we have assumed that both \\\(
f \\\) is small. Thus the natural logarithm of it is a large negative
number, at least certainly larger than \\\( \pi \\\). Thus the condition is
not satisfied and we don't have straight \\\( 1/f \\\) dependence in the
[spectral density](/tag/spectral-density/).

For the other cases, we do not obtain \\\( 1/f \\\) dependencies, but we get
something reasonably close. For \\\( 0 < \alpha < 1 \\\):

\begin{equation}
    S(f) \propto \frac{1}{f^\alpha}.
\end{equation}

While for \\\( 1 < \alpha < 2 \\\), we have:

\begin{equation}
    S(f) \propto \frac{1}{f^{2-\alpha}}.
\end{equation}

So for \\\( \alpha \\\) not close to unity we have pure power-law dependence
between the [power spectral density](/tag/spectral-density/) and frequency.
The exponents are always below \\\( 1 \\\), and thus closer to the [white
noise](/tag/white-noise/).

## Interactive app

Interactive app below samples time series from the [point
process](/tag/point-process/) with inter-event times being sampled from the
bounded Pareto distribution. To verify the analytical intuitions above, we
perform [spectral analysis](/tag/spectral-density/) on the discretized time
series. The discretized time series are obtained by counting the number of
events inside unit time windows (the top plot). In total \\\( 2^{20} \\\)
(roughly one million) such time windows are observed each time "Generate"
button is pressed. PSD of the sampled series is shown in the bottom plot as
a red curve, dark gray curves are best fits made according to the analytical
predictions (the exponents of the frequency dependence remain the same, but
the constant term is fitted according to the generated numerical data).

[html5-interactive width="520" height="480" mode="iframe"
url="/uploads/models/psd-point-process/pareto.html"]
