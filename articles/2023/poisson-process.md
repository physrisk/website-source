Title: Poisson process
Date: 2023-05-02 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, statistical physics, Poisson process, Python
Slug: poisson-process
Status: published
Image_url: uploads/2023/poisson-process.png

Let us assume that you are a college professor. You teach and introductory
course, so effectively you have infinitely many students. Any of them can
have a chat with you right after the lunch on Friday. Lets say your office
hours start around 1 p.m., and end at around 2 p.m.. The problem is that
your students are completely unpredictable! But after long years of teaching
you have figured out that on average you meet \\\( 4 \\\) students each
Friday. With \\\( 95 \% \\\) confidence what is the maximum number of
students that will come to see you?
<!--more-->

## Building the model

As your students are completely unpredictable, let
\\\( p = \lambda \Delta t \\\) be the probability that some student will
arrive during time window of \\\( \Delta t \\\) hours. During the hour
there will be \\\( N = 1 / \Delta t \\\) such time windows. These time
windows can be assumed to be independent, because we have already assumed
that your students are unpredictable. Here, we are basically doing
\\\( N \\\) Bernoulli experiments, and we know that distribution of
successes \\\( S \\\) in \\\( N \\\) Bernoulli experiments (with success
probability \\\( p \\\)) is Binomial with probability mass function given
by:

\begin{equation}
P\_N(S=k) = \frac{N!}{k!(N-k)!} p^k \left(1-p\right)^{N-k}.
\end{equation}

This would work as an approximation for an arbitrary \\\( \Delta t \\\),
but we can do better.

## Continuum limit

Lets take a limit \\\( \Delta t \rightarrow 0 \\\)
(or \\\( N \rightarrow \infty \\\)). It would be natural, if the mean
\\\( \left\langle S \right\rangle = N p \\\) would remain constant,
\\\( N p = \lambda = \mathrm{const} \\\).

The following limits, are well-known

\begin{equation}
\lim\_{N\rightarrow\infty} \left(1-p\right)^{N-k} =
    \lim\_{N\rightarrow\infty} \left(1-\frac{\lambda}{N}\right)^{N-k} =
    e^{-\lambda} ,
\end{equation}

or easily calculated

\begin{equation}
\lim\_{N\rightarrow\infty} \frac{N!}{(N-k)! N^k} = 
    \lim\_{N\rightarrow\infty} \frac{N (N-1) \ldots (N-k+1)}{N^k} = 1 .
\end{equation}

Having in mind the limits above, we can take continuum limit of the binomial
distribution

\begin{equation}
\lim\_{N\rightarrow\infty} P\_N(S=k) =
    \frac{1}{k!} \cdot \frac{N!}{(N-k)! N^k} \cdot \lambda^k
        \cdot \left(1-p\right)^{N-k} =
    \frac{\lambda^k}{k!} e^{-\lambda} .
\end{equation}

The above probability mass function belongs to the [Poisson
distribution](https://en.wikipedia.org/wiki/Poisson_distribution).

## Obtaining solution

Our problem states that on average \\\( 4 \\\) students arrive per hour
(note the time units!), thus we have \\\( \lambda = 4 \\\). We see that
\\\( \lambda \\\) has units of student arrivals per hour, thus it can be
seen as a rate parameter (sort of speed at which events occur).

To answer the original question, we need simply to find smallest \\\( K \\\)
satisfying

\begin{equation}
\sum\_{k=0}^K \frac{4^k}{k!} e^{-4} \geq 0.95 .
\end{equation}

This problem can be easily solved numerically using [Python](/tag/python/):

```python
import numpy as np

s = 0
k = 0
exp = np.exp(-4)
while s < 0.95:
    pmf = exp*(4**k)/np.math.factorial(k)
    s = s + pmf
    k = k + 1

print(f"K={k}")
```

The code outputs \\\( K = 9 \\\). This solution can be verified analytically:

\begin{equation}
\sum\_{k=0}^K \frac{4^k}{k!} e^{-4} = \frac{\Gamma(K+1, 4)}{\Gamma(K+1)} .
\end{equation}

In the above \\\( \Gamma(K+1, 4) \\\) is the [upper incomplete gamma
function](https://en.wikipedia.org/wiki/Incomplete_gamma_function), while
\\\( \Gamma(K+1) \\\) is the [gamma
function](https://en.wikipedia.org/wiki/Gamma_function). For
\\\( K = 9 \\\), we see that the expression evaluates as
\\\( 0.9786\ldots \\\), while for \\\( K = 8 \\\), we have
\\\( 0.9488\ldots \\\). So the solution is correct, but I would say that
\\\( K = 8 \\\) would be better answer as it is closer to \\\( 95\% \\\).

## Interactive app

Use the app below to explore the student arrival problem by simulation. As
in the original problem, you have just one parameter to tinker with: student
arrival rate \\\( \lambda \\\).

The app shows two plots. The upper \\\( S(t) \\\) plot shows cumulative
number of students who have come before given \\\( t \\\): blue curve shows
last simulated office hour, red curve shows the average over all simulated
office hours. Both functions will increase monotonically, but the red curve
will be much smoother as it is the average over all previous blue curves.

The bottom \\\( p(S) \\\) plot shows the probability mass function of the
simulated total number of students who visited during the hour (red curve).
The black curve is the Poisson probability mass function. As more hours get
simulated red curve will tend towards the theoretical curve.

[html5-interactive width="520" height="480" mode="iframe"
url="/uploads/models/stats-basic/poisson-process/index.html"]
