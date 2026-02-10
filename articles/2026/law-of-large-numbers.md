Title: Law of large numbers
Date: 2026-02-10 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, law of large numbers, central limit theorem, students
Slug: law-of-large-numbers
Status: published
Image_url: uploads/2026/law-of-large-numbers.png

Our group, along with a few [students](/tag/students/), has been reading
[statistics](/tag/statistics/) handbook and refreshing our understanding of
the basic statistics. I was given a chapter about the [central limit
theorem](/tag/central-limit-theorem/), which reminded me that I had already
given a similar presentation while being PhD student myself. While diving
into the topic, I have noticed a couple things, which are usually glanced
over in a typical statistics handbook. Let me share them with you. But
first, let us start simple - with the [law of large
numbers](/tag/law-of-large-numbers/).
<!--more-->

## The expectation of the estimate

Suppose we would like to measure some physical quantity, let us denote it by
\\\( X \\\). The outcome of the experiment would be random, so we can't rely
just on one measurement. Let us also assume that experiments are identical
and independent. Thus the question would be whether conducting experiment
multiple times (and averaging over the outcomes) yields a better estimate of
the true value. For this to be true, we need to show that

\begin{equation}
\lim\_{N\rightarrow\infty}\hat{X}\_N = \langle X \rangle.
\end{equation}

In the above, \\\(\hat{X}\_N =\frac{1}{N}\sum\_{i=1}^N X\_i\\\) (here \\\(
X\_i \\\) are the outcomes of individual experiments) is the estimate of the
true value obtained after \\\( N \\\) experiments.

From the assumption that experiment are identical and independent, we have
that \\\( \langle X\_i \rangle = \langle X \rangle \\\). Then by linearity
of expectation, we have that

\begin{equation}
\mathbb{E}\left(\hat{X}\_N\right) = \frac{\sum\_{i=1}^N\langle
X\_i\rangle}{N} = \frac{N \langle X\rangle}{N} = \langle X \rangle .
\end{equation}

## The uncertainty of the estimate

We also need to show that variance (our uncertainty about the true value) of
the estimate goes to zero. First, let us observe that if we multiply random
quantity \\\( X \\\) by some specific constant \\\( a\\\), the variance of
the product is given by

\begin{equation}
\mathrm{Var}\left[a X\right] = a^2 \mathrm{Var}\left[X\right] .
\end{equation}

Another identity we need to make use of is

\begin{equation}
\mathrm{Var}\left[\sum\_{i=1}^{N} X\_i\right] =
    \sum\_{i=1}^{N} \sum\_{j=1}^{N} \mathrm{Cov}\left(X\_i, X\_j\right).
\end{equation}

If the random variates are independent, their covariance is zero. This is
the case when \\\( i \neq j \\\), thus what remains is

\begin{equation}
\mathrm{Var}\left[\sum\_{i=1}^{N} X\_i\right] =
    \sum\_{i=1}^{N} \mathrm{Cov}\left(X\_i, X\_i\right) =
    \sum\_{i=1}^{N} \mathrm{Var}\left(X\_i\right) .
\end{equation}

These identities allow us to write,

\begin{equation}
\mathrm{Var}\left[\hat{X}\_N\right] = \frac{1}{N^2} \sum\_{i=1}^N
\mathrm{Var}\left[X\_i\right] = \frac{\mathrm{Var}\left[X\right]}{N} .
\end{equation}

From the above we can see that variance of the estimate decrease (goes to
zero) as \\\( N \\\) grows larger (approaches infinity).

## Interactive app

As a demonstration, let us consider a simulation of a coin-toss experiment.
The objective of the experiment is to estimate the coin's true probability
of flipping heads (which may be specified as a parameter in the app below).
As the coin is tossed, we record the number of times head is flipped. The
running estimate of the probability of flipping heads is given by the ratio
of the number of heads observed to the total number of tosses. Observe that
initially the estimate fluctuates wildly, while eventually it settles down
and approaches the true value (black line).

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/stats/concepts/law-of-large-numbers/index.html"]
