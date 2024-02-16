Title: Superposition of Lorentzians with fixed height pulses
Date: 2024-01-30 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistics, spectral density, Lorentzian, 1/f noise
Slug: superposition-of-lorentzians-with-fixed-height
Status: published
Image_url: uploads/2024/superposition-of-lorentzians-with-fixed-height.png

In the [last
post]({filename}/articles/2024/obtaining-1f-noise-from-superposition-of-lorentzians.md)
we have seen that [1/f noise](/tag/1f-noise/) can be obtained from superposition of
[Lorentzian](/tag/lorentzian/) [power spectral
densities](/tag/spectral-density/). Though we have imposed an odd
requirement of scaling pulse height for different characteristic rates \\\(
\lambda \\\). In this post let us explore how to achieve the same thing with
fixed height pulses.
<!--more-->

## Fixing the height of the pulses

Let us now assume that \\\( a = 1 \\\) for all possible \\\( \lambda \\\).
Under this assumption, because \\\( \bar{\nu} = \lambda / 2 \\\), uniform
distribution of \\\( \lambda \\\) will not result in [1/f
noise](/tag/1f-noise/)
(instead we will have \\\( S(f) \sim \ln(f) \\\)). What other distribution
should we pick?

An intuitive guess would be (bounded) Pareto distribution with \\\( \alpha =
0 \\\). The exact probability density function then is given by (for \\\(
\lambda\_{\text{min}} \leq \lambda \leq \lambda\_{\text{max}} \\\)):

\begin{equation}
p(\lambda) = \frac{1}{\ln\left(\frac{\lambda\_{\text{max}}}{\lambda\_{\text{min}}}\right)} \cdot \frac{1}{\lambda} .
\end{equation}

Where the term with the logarithm serves as a normalization constant.

Then, if each individual signal has a [Lorentzian](/tag/lorentzian/)
[spectral density](/tag/spectral-density/) with characteristic rate sampled
from the bounded Pareto distribution, the [power spectral
density](/tag/spectral-density/) of superposition:

\begin{equation}
S\left(f\right)=\frac{1}{\ln\left(\frac{\lambda\_{\text{max}}}{\lambda\_{\text{min}}}\right)} \int\_{\lambda\_{\text{min}}}^{\lambda\_{\text{max}}}\frac{1}{\lambda}\cdot\frac{\bar{\nu}}{\lambda^{2}+\pi^{2}f^{2}} d \lambda = \frac{1}{\ln\left(\frac{\lambda\_{\text{max}}}{\lambda\_{\text{min}}}\right)}\cdot\frac{\operatorname{arccot}\left(\frac{\pi f}{\lambda\_{\text{max}}}\right)-\operatorname{arccot}\left(\frac{\pi f}{\lambda\_{\text{min}}}\right)}{2 \pi f}.
\end{equation}

In the above we have used the fact that for every individual
[Lorentzian](/tag/lorentzian/) \\\( \bar{\nu} = \lambda / 2 \\\). The
obtained result is almost identical to the one from the [previous
post]({filename}/articles/2024/obtaining-1f-noise-from-superposition-of-lorentzians.md)
with a difference being in the normalization constant and the leftover \\\(
\frac{1}{2} \\\) from the \\\( \bar{\nu} \\\).

## Interactive app

As
[previously]({filename}/articles/2024/obtaining-1f-noise-from-superposition-of-lorentzians.md),
to effectively show the key point we do not generate the signals themselves.
Here we just add the [Lorentzian](/tag/lorentzian/) shapes, which should
emerge as a result of long duration detailed simulations. As
[previously]({filename}/articles/2024/obtaining-1f-noise-from-superposition-of-lorentzians.md),
we encourage you to explore how adjusting the bounds of the \\\( \lambda
\\\) distribution changes the [spectral density](/tag/spectral-density/) of
the superposition.

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/random-telegraph-noise/superposition-fixed-height.html"]
