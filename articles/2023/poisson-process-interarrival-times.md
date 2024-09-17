Title: Poisson process: Interarrival times
Date: 2023-05-16 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, statistics, statistical physics, Poisson process
Slug: poisson-process-interarrival-times
Status: published
Image_url: uploads/2023/poisson-process-interarrival-times.png

[Last time]({filename}/articles/2023/poisson-process.md) we have built a
quick model for independent student arrival. We have assumed that there is
some probability that a student will arrive during some short time interval.
Then we have taken the continuum limit, and forgot the microscopic model. In
this post let us take a look what was left behind the scenes in the last:
interarrival time distribution.
<!--more-->

## Geometric distribution

If we care not about the number of successful Bernoulli experiments, but
about number of Bernoulli trials before the next successful one, then we are
concerned not with the binomial distribution, but with the [geometric
distribution](https://en.wikipedia.org/wiki/Geometric_distribution), whose
probability mass function is given by

\begin{equation}
P(X=k) = (1-p)^{k-1} p .
\end{equation}

It looks very similar to the probability mass function of the binomial
distribution, but for a single success. Also it lacks binomial coefficient.
This is because there is just one way to have \\\( k - 1 \\\) failed trials
before having a single successful trial at \\\( k \\\)-th attempt.

[Survival function](https://en.wikipedia.org/wiki/Survival_function)
(probability that nothing has happened until step \\\( k \\\)) of the
geometric distribution is given by:

\begin{equation}
P(X > k) = (1-p)^k .
\end{equation}

## Exponential distribution

If we take continuum limit of this cumulative distribution function, with
\\\( p = \lambda \Delta t \\\) and \\\( k = t / \Delta t \\\):

\begin{equation}
P(T > t) = \lim\_{\Delta t \rightarrow 0} \left( 1-\lambda \Delta t \right)^{\frac{t}{\Delta t}}
    = \exp(-\lambda t).
\end{equation}

We have obtained the survival function of the [exponential
distribution](https://en.wikipedia.org/wiki/Exponential_distribution).
Therefore instead of doing rejection-based sampling (checking whether a
student has arrived for each specific discrete time step), we can simply
generate continuous interarrival times from the exponential distribution.
This is actually what is happening in the app from the [previous
post]({filename}/articles/2023/poisson-process.md).

## Interactive app

This app, unlike the [previous
one]({filename}/articles/2023/poisson-process.md), uses rejection-based
sampling. Namely, it considers discrete time steps (with width
\\\( \Delta t \\\)), and for each of the time steps it check whether the
student arrives (event probability is given by \\\( \lambda \Delta t \\\)).
Simulated probability density function is shown by the red curve, while the
black curve corresponds to the exponential distribution.

[html5-interactive width="520" height="240" mode="iframe"
url="/uploads/models/stats-basic/poisson-process/interarrival-times.html"]

Note that the theoretical curve fits only when \\\( \lambda \Delta t \\\)
is reasonably small.
