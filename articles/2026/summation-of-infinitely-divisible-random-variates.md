Title: Summation of infinitely divisible random variates
Date: 2026-04-28 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, gamma distribution, infinite divisibility, stable distributions, students
Slug: summation-of-infinitely-divisible-random-variates
Status: draft
Image_url: uploads/2026/summation-of-infinitely-divisible-random-variates.png

Our group, along with a few [students](/tag/students/), has been reading
[statistics](/tag/statistics/) handbook and refreshing our understanding of
the basic statistics. Some time ago, I was given to cover a chapter about
the [central limit theorem](/tag/central-limit-theorem/), which reminded me
that I had already given a similar presentation while being PhD student
myself. While diving into the topic, I have noticed a couple things, which
are usually glanced over in a typical statistics handbook. Let me share them
with you.

This time we explore [infinite divisibility](/tag/infinite-divisibility/).
Our previous mathematical explorations of the [stable
distributions](/tag/stable-distributions/) topic have relied on this
property, because it simplifies many of the analytical derivations. But
there are distributions, which are [infinitely
divisible](/tag/infinite-divisibility/) but not stable. This time let us
take a look at sums of Gamma distributed random variates.
<!--more-->

Characteristic function of gamma distribution is given by,

\begin{equation}
\varphi\_\Gamma \left(t\right)
    = \left(1 - \theta t \mathrm{i} \right)^{-\alpha} .
\end{equation}

## Identical parameter values

One conclusion can be made simply by observation. If we add \\\( N \\\)
independent random variates sampled from Gamma distribution with identical
shape \\\( \alpha \\\) and scale \\\( \theta \\\) parameter values, the sum
will be distributed according to the Gamma distribution with shape parameter
equal to \\\( \alpha N \\\) and scale parameter equal to \\\( \theta \\\),
as characteristic function of the sum would be given by,

\begin{equation}
\varphi\_\Sigma \left(t\right) = \varphi\_\Gamma\left(t\right)^N
    = \left(1 - \theta t \mathrm{i} \right)^{-\alpha N} .
\end{equation}

You can verify this result by using the interactive app below.

[html5-interactive width="520" height="300" mode="iframe"
url="/uploads/models/stats/concepts/addition/gamma-distribution.html"]

Note that this app is identical to the one we have used to test the
summation of [Cauchy-distributed random
variates]({filename}/articles/2026/what-happens-if-you-sum-cauchy-random-variates.md).

## Different shape, identical scale

If the shape parameter values are predefined, but different for every random
variate to be summed (while scale parameter values remain identical), i.e.,
if \\\( x\_j \sim \mathrm{Gamma}\left(\alpha\_j, \theta \right)\\\), then we
have that:

\begin{equation}
\varphi\_\Sigma \left(t\right) =
    \varphi\_{\Gamma(\alpha\_1,\theta)}\left(t\right) \cdot
    \varphi\_{\Gamma(\alpha\_2,\theta)}\left(t\right) \cdot \ldots \cdot
    \varphi\_{\Gamma(\alpha\_N,\theta)}\left(t\right) =
        \left(1 - \theta t \mathrm{i} \right)^{-\sum\_{j=1}^N\alpha\_j} .
\end{equation}

Once again, things look nice and this can be easily verified by using the
interactive app below.

[html5-interactive width="520" height="330" mode="iframe"
url="/uploads/models/stats/concepts/addition/gamma-distribution-same-scale.html"]

## Different scale, identical shape

If the scale parameter values are predefined, but different for every random
variate to be summed (while shape parameter values remain identical), i.e.,
if \\\( x\_j \sim \mathrm{Gamma}\left(\alpha, \theta\_j \right)\\\), then we
have that:

\begin{equation}
\varphi\_\Sigma \left(t\right) =
    \varphi\_{\Gamma(\alpha,\theta\_1)}\left(t\right) \cdot
    \varphi\_{\Gamma(\alpha,\theta\_2)}\left(t\right) \cdot \ldots \cdot
    \varphi\_{\Gamma(\alpha,\theta\_N)}\left(t\right) =
        \left(1 - \theta\_1 t \mathrm{i} \right)^{-\alpha} \cdot
        \left(1 - \theta\_2 t \mathrm{i} \right)^{-\alpha} \cdot
        \ldots \cdot
        \left(1 - \theta\_N t \mathrm{i} \right)^{-\alpha} .
\end{equation}

This result can't be rewritten in a compact form. It also can't be reduced
to a familiar form equivalent to the characteristic function of gamma
distribution. Thus in this particular case the sum will not be be
distributed according to the gamma distribution.

Though, as you can see in the app below, it is hard to actually verify by
the eye. The only thing which betrays that something is wrong is that naive
best parameter fits (theoretical \\\( \alpha \\\) and \\\( \theta \\\)
values) have long fractional part (though the app shows just 2 numbers after
the decimal point).

[html5-interactive width="520" height="330" mode="iframe"
url="/uploads/models/stats/concepts/addition/gamma-distribution-same-shape.html"]

If you want to see that something is wrong, choose small \\\( \alpha \\\)
and extremely different \\\( \theta\_j \\\). This will make skewness (the
third order moment) inconsistent with assumption that the sum is
gamma-distributed, and some difference will become noticeable even by the
eye.

## Infinite divisibility

I guess, the overall point of this post is to admit that we have talked
about the [central limit
theorem]({filename}/articles/2026/central-limit-theorem.md) (and normal
distribution by extension) and [stable
distributions](/tag/stable-distributions/) ([Cauchy
distribution]({filename}/articles/2026/cauchy-distribution.md) to be more
specific) by making no distinction between what they actually are and the
[infinitely divisible](/tag/infinite-divisibility/) distributions. As we
have seen in this post, the class of [infinitely
divisible](/tag/infinite-divisibility/) distributions is broader. Gamma
distribution is [infinitely divisible](/tag/infinite-divisibility/), but it
is not stable.

![Relation between infinite divisibility, stability and normal
distribution]({static}/uploads/2026/summation-of-infinitely-divisible-random-variates.png
"Different classes of distributions and processes. Central limit theorem
applies for all distributions with finite moments, and states that a sum of
large number of such variates converges to the normal distribution, which is
represented by a red dot in this figure. Normal distribution has finite
moments, is infinitely divisible and stable.")

In my opinion, this point is best illustrated by Figure 4.3 from [cite
id="Mantegna1999CUP"], which I have tried to replicate in the figure above.
It shows that there are distributions (and their generating process), which
have finite and infinite moments. Some of these distributions are
[infinitely divisible](/tag/infinite-divisibility/), while others are not.
[Infinitely divisible](/tag/infinite-divisibility/) distributions may have
finite or infinite moments. Some of the [infinitely
divisible](/tag/infinite-divisibility/) distributions are also
[stable](/tag/stable-distributions/), while some others (such gamma
distribution) are not. Most [stable
distributions](/tag/stable-distributions/) have infinite (or undefined)
moments, normal distribution is the only [stable
distribution](/tag/stable-distribution/) which has finite moments (the red
dot in our figure).

