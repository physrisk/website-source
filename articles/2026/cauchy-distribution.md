Title: Cauchy distribution
Date: 2026-03-31 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, power-law distributions, stable distributions, students
Slug: cauchy-distribution
Status: draft
Image_url: uploads/2026/cauchy-distribution.png

Our group, along with a few [students](/tag/students/), has been reading
[statistics](/tag/statistics/) handbook and refreshing our understanding of
the basic statistics. I was given to cover a chapter about the [central limit
theorem](/tag/central-limit-theorem/), which reminded me that I had already
given a similar presentation while being PhD student myself. While diving
into the topic, I have noticed a couple things, which are usually glanced
over in a typical statistics handbook. Let me share them with you.

In the [previous post]({filename}/articles/2026/central-limit-theorem.md) we
have talked about a peculiar result in [statistics](/tag/statistics/) - that
an average of well-behaved random variates (those that come from
distributions with finite mean and variance) is distributed according to the
normal (Gaussian) distribution. But what happens if the variates are not
well-behaved? Accompanying
[video]({filename}/articles/2026/statquest-central-limit-theorem.md) briefly
mentions Cauchy distribution, as a distribution describing random variates,
which are not well-behaved. Let us take a look at it!
<!--more-->

## Undefined statistical moments

Probability density function of Cauchy distribution is given by

\begin{equation}
p (x) = \frac{1}{\pi\gamma \left[1 + \left(\frac{x - x\_0}{\gamma}\right)^2\right]} .
\end{equation}

As the form implies, Cauchy distribution is defined for all real numbers
\\\( x \\\). Distribution has two parameters - location \\\( x\_0 \\\)
(which seems to have the same meaning as the mean, \\\( \mu \\\), of the
normal distribution) and scale \\\( \gamma \\\) (which seems to have the
same meaning as the standard deviation, \\\( \sigma \\\), of the normal
distribution).

Yet, if you try to obtain the statistical moments of the distribution, they
diverge,

\begin{equation}
\left\langle x \right\rangle = \int\_{-\infty}^{\infty} x\cdot\frac{1}{\pi\gamma \left[1 + \left(\frac{x - x\_0}{\gamma}\right)^2\right]} d x \approx 2 \gamma \int\_{0}^{\infty} \frac{1}{x} dx = 2\gamma \left[ \ln(\infty) - \ln(0) \right].
\end{equation}

When approximating we have simply assumed that \\\( x\_0 = 0 \\\). For the
conceptual clarity, we have also took another mathematical liberty - we have
simply inserted the integrals bounds into \\\( \ln(\ldots) \\\) although it
doesn't make strict mathematical sense. For anyone familiar with logarithms,
it should be obvious that one logarithm tends in value to positive infinity,
while the other towards negative infinity. Thus, the mean is undefined.

Integrating for the second raw moment, does not converge as well, because it
is approximately,

\begin{equation}
\left\langle x^2\right\rangle \approx \int\_{-\infty}^{\infty} dx .
\end{equation}

## Comparison against normal distribution

So, given that the mathematical form of the probability density function of
the Cauchy distribution is relatively similar to the probability density
function of the normal distribution, why then normal distribution has
well-defined moments and Cauchy distribution does not? The answer is in the
tails of the distribution.

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/stats/concepts/cauchy-distribution/index.html"]

In the interactive app above, we have plotted the probability density
functions of the Cauchy distribution (red) and the normal distribution
(blue). Notice that the blue curve decays to zero noticeably faster than the
red curve. You may increase the normal distribution's standard deviation,
\\\( \sigma \\\), or decrease the Cauchy distribution's scale parameter,
\\\( \gamma \\\), as much as you like, but this qualitative difference never
disappears: the normal distribution's curve falls-off quite quickly, while
the Cauchy distribution retains substantial probability density far from
\\\( x\_0 \\\). Put differently, there is no such set of \\\( \sigma \\\)
and \\\( \gamma \\\), which would make the normal random variates have larger
deviations than Cauchy distribution would describe.
