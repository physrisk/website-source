Title: What happens if you add Cauchy random variates?
Date: 2026-04-14 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, central limit theorem, power-law distributions, stable distributions, students
Slug: what-happens-if-you-add-cauchy-random-variates
Status: draft
Image_url: uploads/2026/what-happens-if-you-add-cauchy-random-variates.png

Our group, along with a few [students](/tag/students/), has been reading
[statistics](/tag/statistics/) handbook and refreshing our understanding of
the basic statistics. I was given to cover a chapter about the [central limit
theorem](/tag/central-limit-theorem/), which reminded me that I had already
given a similar presentation while being PhD student myself. While diving
into the topic, I have noticed a couple things, which are usually glanced
over in a typical statistics handbook. Let me share them with you.

In the [previous post]({filename}/articles/2026/cauchy-distribution.md) we
have taken a look at a distribution whose mean and variance are undefined.
We know that the [central limit
theorem]({filename}/articles/2026/central-limit-theorem.md) holds only if
mean and variance of the sample distribution are defined and finite. So what
happens if we add Cauchy random variates?
<!--more-->

If we want to figure distribution of a sum of random variates, we multiply
the characteristic functions of their respective sample distributions. Here,
the sample distribution is Cauchy distribution. Its characteristic function
is given by,

\begin{equation}
\varphi(f) = \exp\left(i x\_0 f - \gamma \left|f\right|\right) .
\end{equation}

In the above \\\( i \\\) stands for the imaginary unit. Because, the
characteristic function is an exponential function, we simply have that the
characteristic function of a sum of \\\( N \\\) Cauchy random variates is
given by

\begin{equation}
\varphi\_N(f) = \exp\left(N \left[ i x\_0 f - \gamma \left|f\right|\right]\right) .
\end{equation}

Which is exactly the characteristic function of the Cauchy distribution with
location at \\\( N x\_0 \\\) and scale of \\\( N \gamma \\\). You may verify
this conclusion using the interactive app below.

[html5-interactive width="520" height="300" mode="iframe"
url="/uploads/models/stats/concepts/cauchy-distribution/summation.html"]

Note that the app sets theoretical distribution (black curve) parameters
automatically. So, the black curve will match the simulated probability
density function (red curve) rather well, unless you try and experiment with
the values yourself. Observe, that if you change the theoretical
distribution parameters, the agreement between the curves becomes worse.

Our observation that the sum of Cauchy random variates is also distributed
according to the Cauchy distribution, means that the normal distribution is
not the only [stable distribution](/tag/stable-distributions/). In fact,
there is a general class of [stable
distributions](/tag/stable-distributions/) about which we will write in a
future post. Though, notably, we have already used random variates sampled
from a [stable distribution](/tag/stable-distributions/) in our earlier
series of posts on [ARFIMA processes](/tag/topic-arfima/) (e.g., see [the
post on the fractional Levy stable
motion]({filename}/articles/2021/fractional-levy-stable-motion.md)).

## What happens if we take average instead?

In physical experiments, it is usually fine to take an average over large
batch of experiments. This average yields much better estimate of a true
value than any single experimental outcome could be. But, this works only if
experimental values are well-behaved. So, what happens if experimental
values are Cauchy distributed?

Observe that multiplying Cauchy random variate by some positive constant
\\\( \alpha \\\) simply rescales the distribution parameters, \\\(
x\_0\rightarrow\alpha x\_0 \\\) and \\\( \gamma\rightarrow\alpha\gamma \\\).
This is dictated by the mathematical form of the probability density
function of the distribution,

\begin{equation}
p (x) = \frac{1}{\pi\gamma \left[1 + \left(\frac{x - x\_0}{\gamma}\right)^2\right]} .
\end{equation}

So, if \\\( \alpha = 1 / N \\\), but the Cauchy distributed random variate
we are rescaling would be not the individual experiment random variate \\\(
x\_i \\\), but their sum \\\( \sum\_{i=0}^{N-1} x\_i \\\). Then, it follows
that their mean \\\( \frac{1}{N}\sum\_{i=0}^{N-1} x\_i \\\) is distributed
according to \\\( \mathrm{Cauchy}(x\_0, \gamma) \\\) as the individual
experiment random variates are. This result implies that averaging Cauchy
distributed experiments does not yield more information than simply
conducting a single experiment. To gain more information from the multiple
experiments one would need to use other tools, e.g., to fit some statistical
model on the samples (e.g., using maximum likelihood estimation or such).
