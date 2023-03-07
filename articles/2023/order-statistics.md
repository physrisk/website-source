Title: Order statistics
Date: 2023-03-07 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistics
Slug: order-statistics
Status: published
Image_url: uploads/2023/order-statistics.png

[Last time]({filename}/articles/2023/riddler-football-playoff.md) we have
simulated really simple [football](/tag/sports/) tournament. That time we
have asked the question about average strength of the champion. But we can
also inquire about the distribution, which leads us to order statistics.
<!--more-->

## In general

Let us assume that we have \\\( N \\\) samples from a particular probability
distribution with probability density function \\\( p(x) \\\) and cumulative
distribution function \\\( P(x) \\\). Let us order samples from smallest to
largest and look at the distribution of \\\( k \\\)-th ordered sample (with
\\\( 1 \leq k \leq N \\\). What is the probability density function of that
sample, \\\( p\_k( x ) \\\)?

If \\\( k = 1 \\\), then things are quite simple: we just need \\\( N-1 \\\)
samples to be less or equal to \\\( x \\\) and one sample to be equal to
\\\( x \\\). This leads to:

\begin{equation}
    p\_1( x ) = N p( x ) \left[ 1-P(x) \right]^{N-1} .
\end{equation}

Similar logic leads to \\\( k = N \\\) case: we need \\\( N-1 \\\) samples
to be greater or equal to \\\( x \\\) and one sample being equal to
\\\( x \\\). Resulting in:

\begin{equation}
    p\_N( x ) = N p( x ) P(x)^{N-1} .
\end{equation}

Other cases, \\\( 1 < k < N \\\), are a bit harder to wrap your head around,
but note the \\\( N \\\) term in the expression above. It simply stands for
the number of possible permutations of \\\( N \\\) elements satisfying
particular conditions. For the other cases number of permutations is
somewhat more complicated, but the general expression has a similar form:

\begin{equation}
    p\_k( x ) = \frac{N!}{(k-1)!(N-k)!} p( x ) P(x)^{k-1}
        \left[ 1-P(x) \right]^{N-k} .
\end{equation}

## For uniform distribution

In the [particular case considered last
week]({filename}/articles/2023/riddler-football-playoff.md) \\\( x \\\) were
sampled from uniform distribution. Then:

\begin{equation}
    p\_k( x ) = \frac{N!}{(k-1)!(N-k)!} x^{k-1} \left[ 1-x \right]^{N-k} .
\end{equation}

We see that in this case \\\( k \\\)-th team's strength distribution will
follow Beta distribution, \\\( \mathcal{B}e(k, N+1-k) \\\). Note that, here
we have ranked teams in ascending strength order. To flip the order, simply
reverse the order of Beta distribution parameters.

It is important to note that a ranked set of samples from uniform
distribution (ranked set of team strengths) is not statistically equivalent
to an independent samples from the four respective Beta distributions.

## Interactive app

In this interactive app you can change the desired order \\\( k \\\) and the
sample size \\\( N \\\). Blue dots will show simulated probability density
function, while dark grey curve shows theoretical result: probability
density function of Beta distribution.

[html5-interactive width="520" height="280" mode="iframe"
url="/uploads/models/stats-basic/order-stats/index.html"]
