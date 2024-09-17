Title: Fractional Levy stable motion
Date: 2021-12-28 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, fractals, ARFIMA series, Brownian motion, Levy processes
Slug: fractional-levy-stable-motion
Image_url: uploads/2021/fractional-levy-stable-motion.png
Status: published

[The last post]({filename}/articles/2021/arfima-model.md) in the [ARFIMA
series](/tag/arfima-series/) was not the last stop in understanding the model
we have studied in [cite id="Kazakevicius2021Entropy"]. In the paper we have
looked at ARFIMA as a model for fractional Levy stable motion (abbr. FLSM),
which is a generalization of [Brownian motion](/tag/brownian-motion/) in two
regards: [fractionality]({filename}/articles/2021/fractional-derivatives.md)
and noise distribution.
<!--more-->

Typical [Brownian motion](/tag/brownian-motion/), whether fractional or not,
uses [normal
distribution](https://en.wikipedia.org/wiki/Normal_distribution) to describe
noise. FLSM uses \\\( \alpha \\\)-[stable
distribution](https://en.wikipedia.org/wiki/Stable_distribution) instead.
This generalization allows to take into account systems in which large jumps
are common (distribution has heavy tails).

Now FLSM has two parameters: differentiation order \\\( d \\\) and index of
stable distribution \\\( \alpha \\\). If \\\( \alpha = 2 \\\) then [stable
distribution](https://en.wikipedia.org/wiki/Stable_distribution) is
equivalent to [normal
distribution](https://en.wikipedia.org/wiki/Normal_distribution) and FLSM is
equivalent to fBm.  Otherwise we will observe deviations from the usual
shape of [Brownian motion](/tag/brownian-motion/).  Note that
\\\( \alpha = 1 \\\) is also a special case. In this case the distribution
corresponds to [Cauchy
distribution](https://en.wikipedia.org/wiki/Cauchy_distribution).

Interestingly, having heavy tailed noise distribution also affects Hurst
index of the process. In general case it is given by:

\begin{equation}
    H = d + \frac{1}{\alpha} .
\end{equation}

[html5-interactive width="520" height="470" mode="iframe"
url="/uploads/models/arma/flsm.html"]

Note that the app also allows you to generate fractional Levy stable noise
(abbr. FLSN), too. It is simply but a straightforward derivative of FLSM.
