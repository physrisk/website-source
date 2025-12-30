Title: Central limit theorem
Date: 2026-03-03 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, law of large numbers, central limit theorem, stable distributions, students
Slug: central-limit-theorem
Status: draft
Image_url: uploads/2026/central-limit-theorem.png

Our group, along with a few [students](/tag/students/), has been reading
[statistics](/tag/statistics/) handbook and refreshing our understanding of
the basic statistics. I was given a chapter about the [central limit
theorem](/tag/central-limit-theorem/), which reminded me that I had already
given a similar presentation while being PhD student myself. While diving
into the topic, I have noticed a couple things, which are usually glanced
over in a typical statistics handbook. Let me share them with you.

In the [previous post]({filename}/articles/2026/law-of-large-numbers.md) we
have started simple - with the [law of large
numbers](/tag/law-of-large-numbers/). In this post, let us consider a
natural extension of this result - the [central limit
theorem](/tag/central-limit-theorem/).
<!--more-->

## Derivation of the central limit theorem

Last time we have determined mean and variance of estimate \\\( \hat{X}\_N
\\\), which we have
[previously]({filename}/articles/2026/law-of-large-numbers.md) defined as

\begin{equation}
\hat{X}\_N =\frac{1}{N}\sum\_{i=1}^N X\_i .
\end{equation}

In this post for simplicity let us standardize outcomes of individual
experiments,

\begin{equation}
Y\_i = \frac{X\_i - \hat{\mu}}{\hat{\sigma}} .
\end{equation}

In the above \\\( \hat{\mu} \\\) and \\\( \hat{\sigma} \\\) are the
estimates of the mean and standard deviation of \\\( X\_i \\\).
Standardization procedure makes our new random variables \\\( Y\_i \\\) have
zero mean and unit standard deviation.

Thus, instead of \\\( \hat{X}\_N \\\) let us consider

\begin{equation}
Z = \frac{1}{\sqrt{N}} \sum\_{i=1}^N Y\_i .
\end{equation}

If needed, we can recover original \\\( \hat{X}\_N \\\) by inverting
the standardization operation.

Let us recall that adding two (or more) random variables is the same
multiplying characteristic functions of the distributions from which these
random variables were sampled. Thus we have that characteristic function of
\\\( Z \\\) is given by

\begin{equation}
\varphi\_Z\left(t\right)
    = \mathbb{E}\left[\exp\left(\mathrm{i} t Z\right)\right]
    = \prod\_{j=1}^N \varphi\_{Y\_j} \left(\frac{t}{\sqrt{N}}\right) .
\end{equation}

If, \\\( Y\_i \\\) are independent and identically distributed, then

\begin{equation}
\varphi\_Z\left(t\right)
    = \left[\varphi\_{Y}\left(\frac{t}{\sqrt{N}}\right)\right]^N .
\end{equation}

Now, if we let \\\( N\rightarrow\infty \\\),

\begin{equation}
\varphi\_Z\left(t\right)
    \approx \left[ 1 - \frac{t^2}{2 N} \right]^N
    \approx \exp\left(-\frac{t^2}{2} \right) .
\end{equation}

This is exactly characteristic function of normal distribution with zero
mean and unit variance.

## Important caveats

By relying on the standardization procedure we have circumvented one
important caveat. \\\( \hat{\mu} \\\) and \\\( \hat{\sigma} \\\) will always
be finite for a finite data set, but for the derivation to work these
estimates need to meaningful. In other words, they should approach true
moment values of the sampling distribution. This means that at least first
two moments must be finite.

Another fine point would be that we have used Taylor series expansion of an
exponential. We silently kept just the first (zero order) and the third
(second order) terms. To do that we have to assume that the fourth order
term (corresponding to fourth moment) is finite and becomes small as \\\(
N\rightarrow\infty \\\).

Notably, there are more sophisticated derivations of central limit theorem,
which do not require the forth moment to be finite. Yet, these would be too
complicated for Physics of Risk :) Actually, [central limit
theorem](/tag/central-limit-theorem) requires that the first two moments are
finite.

## Interactive app

The app below demonstrates that the conclusion of the [central limit
theorem](/tag/central-limit-theorem/) applies when number of random values
added, \\\( N \\\), becomes large. Within the app individual values, \\\(
X\_i \\\), are sampled from the beta distribution with shape parameters
\\\( \alpha \\\) and \\\( \beta \\\).

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/stats/concepts/central-limit-theorem/index.html"]

Note that, the figure in the app plots the probability density functions
(abbr. PDF) of the standardized values, i.e., \\\( Y \\\) (gray curve shows
theoretical PDF) and \\\( Z \\\) (red curve shows simulated PDF). Black
curve in the figure shows the theoretical PDF of normal distribution with
zero mean and unit variance. In other words, the red curve approach the
black curve as \\\( N \\\) grows larger.

Observe that, if you choose extremely different shape parameter values,
e.g., \\\( \alpha = 0.1 \\\) and \\\( \beta = 2 \\\)), the simulated PDF
(red curve) will be notably different from the standardized normal
distribution (black curve) even with \\\( N = 16 \\\). \\\( N \\\) would
have to be even larger for the difference between the red curve and the
black curve to become negligible. \\\( N = 16 \\\) is not sufficient,
because the sampling distribution in this case is highly asymmetric.
