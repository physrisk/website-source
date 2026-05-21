Title: Beta prime distribution from Gamma-distributed random values
Date: 2026-06-16 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, power-law distributions, voter model, Kirman model, CIR process, R. Kazakevicius
Slug: beta-prime-distribution-from-gamma-distributed-random-values
Status: draft
Image_url: uploads/2026/beta-prime-distribution-from-gamma-distributed-random-values.png

As we have already
[discussed]({filename}/articles/2026/beta-prime-distribution.md), beta prime
distribution arises from a nonlinear transformation of the voter model.
Furthermore, recently we have been relying a lot on the said transformation
[cite id="Kazakevicius2021AnoVM,Kazakevicius2023PRE,Kazakevicius2026CSF"].
In those papers, we have been using some results derived for the [CIR
process](/tag/cir-process/) as well. Thus, another interesting thing, which
my colleague [Rytis Kazakevičius](/tag/r-kazakevicius/) has noted, was that
the beta prime distribution can be obtained from the ratio of two
independent Gamma-distributed random values. Why it is interesting? The
stationary distribution of the [CIR process](/tag/cir-process/) is the Gamma
distribution!
<!--more-->

I will not delve into analytical derivation of this result this time, just
let me share the interactive app with you. The left plot of the app shows
the probability density functions of the two generated Gamma-distributed
random variables. The right plot shows the probability density function of
their ratio. In both plots, the gray curves represent the corresponding
theoretical probability density functions (Gamma distribution on the left,
and beta prime distribution on the right).

[html5-interactive width="520" height="310" mode="iframe"
url="/uploads/models/stats/models/beta-prime-distribution/gamma-ratio.html"]

Note that the beta prime distribution is obtained only if \\\( \theta\_1 =
\theta\_2 \\\) (for any positive values). If the shape parameter values are
different, the probability density function of the ratio will deviate from
the beta prime distribution. Though, if the shape parameter values are
different, the ratio is still distributed according to a generalized beta
prime distribution.
