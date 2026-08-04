Title: Binomial distribution as approximation of Hypergeometric distribution
Date: 2026-10-06 08:00
Authors: Rytis Kazakevičius, Aleksejus Kononovicius
Tags: interactive, statistics
Slug: binomial-distribution-as-approximation-of-hypergeometric-distribution
Status: draft
Image_url: uploads/2026/binomial-distribution-as-approximation-of-hypergeometric-distribution.png

The derivations of the
[hypergeometric]({filename}/articles/2024/hypergeometric-distribution.md)
and [binomial]({filename}/articles/2026/binomial-distribution.md)
distributions follow the same general strategy. In both cases, we first
identify all elementary outcomes that are equally likely, then count how
many of those outcomes correspond to the event of interest, namely obtaining
exactly \\\( k \\\) successes. The main difference lies in what constitutes
an elementary outcome.

<!--more-->

For the [hypergeometric
distribution]({filename}/articles/2024/hypergeometric-distribution.md), the
sampling is performed *without replacement*. Consequently, every
subset of \\\( n \\\) balls drawn from the box is equally likely. The elementary
outcomes are therefore different allocations of balls into the drawn and
undrawn groups. The number of favorable allocations is

\begin{equation}
\binom{M}{k}\binom{N-M}{n-k}=\frac{M!}{k!(M-k)!}\frac{(N-M)!}{(n-k)!(N-M-(n-k))!},
\end{equation}

while the total number of possible allocations is

\begin{equation}
\binom{N}{n}=\frac{N!}{n!(N-n)!}.
\end{equation}

Taking the ratio of these quantities gives the probability mass function

\begin{equation}
P(X=k)=\frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}}.
\end{equation}

For the [binomial
distribution]({filename}/articles/2026/binomial-distribution.md), the
sampling is performed *with replacement*. Since the composition of the box
does not change after each draw, every draw is independent and the
probability of success remains constant,

\begin{equation}
p=\frac{M}{N}.
\end{equation}

In this case, the elementary outcomes are not subsets of balls, but
rather ordered sequences of successes and failures. Every sequence
containing exactly \\\( k \\\) successes has the same probability,

\begin{equation}
p^{k}(1-p)^{n-k},
\end{equation}

and there are

\begin{equation}
\binom{n}{k}
\end{equation}

such sequences. Therefore,

\begin{equation}
P(X=k)=\binom{n}{k}p^{k}(1-p)^{n-k}.
\end{equation}

Although the two probability mass functions have different forms, they
describe closely related experiments. In fact, the [binomial
distribution]({filename}/articles/2026/binomial-distribution.md) can be
regarded as an approximation to the [hypergeometric
distribution]({filename}/articles/2024/hypergeometric-distribution.md) when
the population size is much larger than the sample size,

\begin{equation}
N\gg n\geq k.
\end{equation}

In this limit, removing one ball from the box has only a negligible
effect on the fraction of red balls remaining. Consequently, the probability
of success changes very little from one draw to the next, making the
draws approximately independent.

To see this mathematically, let us rewrite the
[hypergeometric]({filename}/articles/2024/hypergeometric-distribution.md)
probability mass function in factorial form,

$$\begin{align}
P(X=k) & = \frac{\frac{M!}{k!(M-k)!}\frac{(N-M)!}{(n-k)!(N-M-(n-k))!}}{\frac{N!}{n!(N-n)!}} = \nonumber \\\\
    & =\frac{n!}{k!(n-k)!}\cdot\frac{M!}{(M-k)!}\cdot\frac{(N-M)!}{(N-M-n+k)!}\cdot\frac{(N-n)!}{N!}.
\end{align}$$

Expressing each factorial ratio as a product gives

$$\begin{align}
P(X=k) &=\binom{n}{k}\cdot\frac{M(M-1)\ldots(M-k+1)}{N(N-1)\ldots(N-n+1)} \cdot\nonumber\\\\
    & \quad\cdot(N-M)(N-M-1)\ldots(N-M-n+k+1).
\end{align}$$

Here we used \\\( \binom{n}{k}=\frac{n!}{k!(n-k)!} \\\). Now consider the
limit

\begin{equation}
N\rightarrow\infty,
\end{equation}

and use replacement \\\( \frac{M}{N}=p \\\), while keeping \\\( n \\\) and
\\\( k \\\) fixed. Then

\begin{equation}
\frac{M-i}{N-i}\longrightarrow p,\qquad i=0,\ldots,k-1,
\end{equation}

and

\begin{equation}
\frac{N-M-j}{N-j}\longrightarrow1-p,\qquad j=0,\ldots,n-k-1.
\end{equation}

Thus, each of the first \\\( k \\\) factors converges to \\\( p \\\), while
each of the remaining \\\( n-k \\\) factors converges to \\\( 1-p \\\).
Consequently, in \\\( N \rightarrow\infty \\\) limit we observe that

\begin{equation}
\frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}}\longrightarrow\binom{n}{k}\left(\frac{M}{N}\right)^{k}\left(1-\frac{M}{N}\right)^{n-k}.
\end{equation}

If we replace \\\( \frac{M}{N} \\\) with \\\( p \\\), then we recover
probability mass function of the [binomial
distribution]({filename}/articles/2026/binomial-distribution.md).

This result has a simple interpretation. In the [hypergeometric
distribution]({filename}/articles/2024/hypergeometric-distribution.md), the
probability of drawing a red ball changes slightly after each draw because
the composition of the box changes. Specifically, the success probabilities
are

\begin{equation}
\frac{M}{N},\quad\frac{M-1}{N-1},\quad\frac{M-2}{N-2},\quad\ldots
\end{equation}

When the population size is much larger than the sample size, these
fractions are nearly equal,

\begin{equation}
\frac{M}{N}\approx\frac{M-1}{N-1}\approx\frac{M-2}{N-2}\approx p,
\end{equation}

so sampling *without replacement* becomes almost indistinguishable from
sampling *with replacement*.

Therefore, the [hypergeometric
distribution]({filename}/articles/2024/hypergeometric-distribution.md)
provides the exact description of sampling *without replacement*, whereas
the binomial distribution describes independent sampling *with replacement*
or, equivalently, sampling from a sufficiently large population where the
effect of removing individual balls can be neglected.

## Interactive app

Let me ([Aleksejus](/author/aleksejus-kononovicius/)) invade my colleague's
post for a bit. I have made an [interactive](/tag/interactive/) app to
accompany it!

The app below can be used to simulate the ball drawing experiment when balls
are drawn *with* (described by the [binomial
distribution]({filename}/articles/2026/binomial-distribution.md)) and
*without* replacement (described by the [hypergeometric
distribution]({filename}/articles/2024/hypergeometric-distribution.md)).
Dark red bars show the simulated frequencies for experiments *with
replacement*, while pale red bars show the simulated frequencies for
experiments *without replacement*. Below the histogram, a selection of
recent individual experiment outcomes is displayed. Up to five and a half
balls are shown for each experiment. Outcomes from experiments *with
replacement* appear on the left, and outcomes from experiments *without
replacement* appear on the right.

We would suggest checking two extreme cases. First set \\\(
\textcolor{red}{N} = 5000 \\\), \\\( \textcolor{blue}{N-M} = 5000 \\\) and
\\\( n = 5 \\\). For these parameter values, you should eventually see a
reasonably good match between the simulated histograms. Then you should tune
the simulation to the other extreme case, do so by setting \\\(
\textcolor{red}{N} = 2 \\\), \\\( \textcolor{blue}{N-M} = 2 \\\) and \\\( n
= 4 \\\). Can you observe the difference now? Or, you could try some
intermediate values as well! Feel free to explore.

[html5-interactive width="520" height="410" mode="iframe"
url="/uploads/models/stats/distributions/hypergeometric/binomial-approximation.html"]
