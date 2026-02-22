Title: Power-law distribution from superposition of normal distributions
Date: 2024-03-12 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, power-law distributions
Slug: power-law-distribution-from-superposition-of-normal-distributions
Status: published
Image_url: uploads/2024/power-law-distribution-from-superposition-of-normal-distributions.png

[Last
time]({filename}/articles/2024/power-law-distribution-from-superposition-of-exponential-distributions.md)
we have seen that we can recover power-law distribution from a superposition
of exponential distributions. This idea served a basis for our [cite
id="Kononovicius2024upoiss"] paper. When presenting some of these results at
a conference I was asked question if exponential distribution is necessary,
can't one use normal distribution instead?
<!--more-->

The answer to the question I have been posed is yes. Though I wasn't able to
answer it at the time. During conferences my brain switch to "general idea"
mode, and often misses even most trivial technical details.

## Implementing superposition of normal distributions

So, we can use the normal distribution, but we need to discuss how to do it.
First recall that our purpose is to generate [power-law inter-event time
distribution]({filename}/articles/2024/power-law-gap-times-rtn.md). By
definition, power-law inter-event times must be positive. Thus we need to
truncate the normal distribution to positive values. Let us implement this
restriction as follows: if negative value is generated, it is discarded and
a new value is sampled from a normal distribution with the same parameter
values.

The second thing we need to discuss is how the parameter randomization is
applied. Notably, the normal distribution is described by two parameters,
mean \\\( \mu \\\) and standard deviation \\\( \sigma \\\), and not one (as
was the case with [exponential
distribution]({filename}/articles/2024/power-law-distribution-from-superposition-of-exponential-distributions.md)).
Thus we can choose to randomize either of them or even both of them. The app
below allows you to make this choice.

In the spirit of the [previous
post]({filename}/articles/2024/power-law-distribution-from-superposition-of-exponential-distributions.md)
we still assume that parameter values are sampled from a bounded power-law
distribution:

\begin{equation}
p(\theta\_i) \propto \frac{1}{\theta\_i^{\alpha\_i}} .
\end{equation}

In the above the index \\\( i \\\) helps us differentiate between the
distributions for mean and standard deviation parameters of the normal
distribution.

Thus to generate observable \\\( x \\\), we first sample \\\( \mu \\\) and
\\\( \sigma \\\) from the bounded power-law distributions. Parameters of
these distributions are predetermined (they are input parameters, if I may
call them that). When a new pair of \\\( \mu \\\) and \\\( \sigma \\\) are
obtained, then \\\( x \\\) is sampled from the normal distribution with
respective parameter values \\\( \mathcal{N}\left(\mu, \sigma\right) \\\).

## Distribution of \\\( x \\\)

If \\\( \alpha\_\mu = \alpha \\\) and \\\( \alpha\_\sigma = \alpha \\\),
then the probability density function of \\\( x \\\) will exhibit power-law
scaling behavior, \\\( p(x) \sim x^{-\alpha} \\\). If the value of either
\\\( \mu \\\) or \\\( \sigma \\\) is fixed, then the scaling exponent will
be determined only by \\\( \alpha\_i \\\) of the remaining randomized
parameter.

![Sample case for when the standard deviation is
fixed.]({static}/uploads/2024/power-law-distribution-from-superposition-of-normal-distributions-2.png
"Sample case for when the standard deviation is fixed. Red curve shows p(x),
green curve - p(μ), blue curve - p(σ).")

If both parameters are randomized and the corresponding exponents are
different, then \\\( x \\\) distribution will often exhibit double power-law
scaling behavior. Namely, there will be two ranges of values, one with \\\(
p(x) \sim x^{-\alpha\_\mu} \\\) and the other with \\\( p(x) \sim
x^{-\alpha\_\sigma} \\\).

![Sample case for when the exponents are
different.]({static}/uploads/2024/power-law-distribution-from-superposition-of-normal-distributions.png
"Sample case for when the exponent are different. Red curve shows p(x),
green curve - p(μ), blue curve - p(σ).")

These insights are mostly for reasonable parameter values. There are some
edge cases, which will have a different behavior. For example, if \\\(
\sigma \\\) is fixed and larger than \\\( \mu\_\text{max} \\\), then the
distribution of \\\( x \\\) will become similar to normal distribution - no
power-law scaling will be observed.

![Sample case for when the mean is fixed and large (larger than maximum
bound for standard
deviation).]({static}/uploads/2024/power-law-distribution-from-superposition-of-normal-distributions-3.png
"Sample case for when the mean is fixed and large (larger than maximum bound
for standard deviation). Red curve shows p(x), green curve - p(μ), blue
curve - p(σ).")

## Interactive app

This app implements sampling from normal distribution with randomized
parameters. Both mean and standard deviation are sampled from a bounded
power-law distribution. These parameter values are restricted to reasonable
ranges, but otherwise can be freely set. Feel free to experiment with the
parameter values to uncover the properties of \\\( x \\\) distribution.

[html5-interactive width="520" height="300" mode="iframe"
url="/uploads/models/stats/concepts/normal-power-law/index.html"]

Note that this app plots three probability density functions on double
logarithmic axes. This is done because the most interesting behavior is
observed when all distributions have power-law scaling behavior. The red
curve in the plots corresponds to \\\( p(x) \\\), the green curve
corresponds to \\\( p(\mu) \\\) and the blue curve corresponds to \\\(
p(\sigma) \\\). Red curve is always shown, while the other curves may be
hidden with respective parameter value is fixed.
