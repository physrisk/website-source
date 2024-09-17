Title: Power-law distribution from superposition of exponential distributions
Date: 2024-02-27 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, statistics
Slug: power-law-distribution-from-superposition-of-exponential-distributions
Status: published
Image_url: uploads/2024/power-law-distribution-from-superposition-of-exponential-distributions.png

In the [previous post]({filename}/articles/2024/power-law-gap-times-rtn.md)
we have asked a simple question - what if gap duration is distributed
according to a power-law distribution. Our answer was an apparently pure
[1/f noise](/tag/1f-noise/). But how could the power-law distribution arise?
While in some materials some quantities indeed follow power-law distribution
(such as blinking times in quantum dot experiments [cite
id="Frantsuzov2008"]), most materials have exponentially distributed
generation and/or recombination times. So then, can we construct a power-law
distribution from superposition of exponential distributions?
<!--more-->

Indeed we can. From purely mathematical perspective let us sample from an
exponential distribution. Let the rate of that distribution be distributed
according to a power-law distribution,

\begin{equation}
p(\lambda) \propto \frac{1}{\lambda^\alpha} .
\end{equation}

To make normalization of this distribution possible for any \\\( \alpha \\\)
let us assume that \\\( \lambda \\\) is confined to \\\( [
\lambda\_\text{min}, \lambda\_\text{max} ] \\\) interval. Then the sampled
values \\\( x \\\) will follow a power-law distribution. Probability density
function of this distribution is

\begin{align}
p(x) & \propto \int\_{\lambda\_\text{min}}^{\lambda\_\text{max}} \lambda^{1-\alpha} \exp(-\lambda x) \mathrm{d} \lambda = \nonumber \\\\
     & = [\Gamma(2-\alpha, \lambda\_\text{min} x) - \Gamma(2-\alpha, \lambda\_\text{max} x) ] \cdot x^{-2+\alpha} .
\end{align}

Visual intuition of what is happening is encompassed in a figure from our
recent work [cite id="Kononovicius2024upoiss"], which we also reproduce here
(see [Fig. 1](#exponential-power-law)). In [Fig. 1](#exponential-power-law)
we have shown \\\( \alpha = 0 \\\) case, which results in the inverse square
law. Note that the dashed black curves visually form a simple inverse law,
which when integrated becomes the inverse square law.

![How the integration over exponents (black dashed curves) results in a
power-law distribution (red curve). Only few selected exponents shown for
visualization purpose. α=0 case is
shown.]({static}/uploads/2024/power-law-distribution-from-superposition-of-exponential-distributions.png
"How the integration over exponents (black dashed curves) results in a
power-law distribution (red curve). Only few selected exponents shown for
visualization purpose. α=0 case is shown."){#exponential-power-law}

Let \\\( \frac{1}{\lambda\_\text{max}} \ll x \ll \frac{1}{\lambda\_\text{min}} \\\), then:

\begin{equation}
p(x) \approx \frac{(1-\alpha) \Gamma(2-\alpha)}{\lambda\_\text{max}^{1-\alpha} - \lambda\_\text{min}^{1-\alpha}} x^{-2+\alpha} .
\end{equation}

The above works almost all \\\( \alpha \\\) (the only exception are positive
integer values). For closest \\\( \alpha = 1 \\\) case we can show that:

\begin{equation}
p(x) \approx \frac{1}{\ln\left(\lambda\_\text{max}\right) - \ln\left(\lambda\_\text{min}\right)} x^{-1} .
\end{equation}

The other cases are less interesting to us, because they lead either to the
uniform distribution, or to the strange ("unnatural" might be a better word
for it) distributions with increasing \\\( p(x) \\\). Furthermore, having in
mind the earlier
[post]({filename}/articles/2024/power-law-gap-times-rtn.md), we mostly care
about \\\( \alpha = 0 \\\) case, which leads to \\\( p(x) \sim 1/x^2 \\\),
and its vicinity.

**How this is related to the [random telegraph
noise](/tag/random-telegraph-noise/)?** Well, it allows us to avoid assuming
power-law distributions to obtain [1/f noise](/tag/1f-noise). All we need is
just uniformity of detachment rates [cite id="Kononovicius2024upoiss"].
Replacing the power-law distribution in this way has few mathematical
consequences (the results from [cite id="Kononovicius2023rtn"] still hold),
but lead to a couple new insights into the low-frequency cutoff problem
[cite id="Kononovicius2024upoiss"], some of these we will probably discuss
some time in the future.

## Interactive app

The app below allows you to see how the probability density functions of
rates, \\\( \lambda \\\), and "final" sample values, \\\( x \\\), change
when you tweak the parameter values. It is important to note that the \\\(
p(\lambda) \\\) plot (top one) has double linear axes, while \\\( p(x) \\\)
plot (bottom one) has double logarithmic axes. We made this choice, because
for us most interesting case is when \\\( \alpha = 0 \\\) and \\\( \lambda
\\\) follows a uniform distribution, which looks best when presented on
double linear axes. As usual we show the simulation result by a red curve,
and theoretical fit (bottom figure only) by a dark gray curve.

[html5-interactive width="520" height="470" mode="iframe"
url="/uploads/models/stats-basic/exponential-power-law/index.html"]

Given enough time, the app will reproduce probability density function with
a power-law slope for the intermediate values. While for the extreme values,
exponential cutoffs should be visible. Cutoffs appear quicker for
positive \\\( \alpha \\\).
