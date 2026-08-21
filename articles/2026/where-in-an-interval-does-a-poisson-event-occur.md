Title: Where in an interval does a Poisson event occur?
Date: 2026-12-15 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, Poisson process, students
Slug: where-in-an-interval-does-a-poisson-event-occur
Status: draft
Image_url: uploads/2026/where-in-an-interval-does-a-poisson-event-occur.png

A few years ago, I have written about the [Poisson
process]({filename}/articles/2023/poisson-process.md). At that time, I was
interested in connection between geometric and exponential distributions.
And, along the way, I have discovered (for myself) why it is said that
[Poisson processes](/tag/poisson-process/) have Markov property.

Recently, while reading a book [cite id="Aldridge2020MATH2750"] together
with [students](/tag/students/) in our group, we have stumbled upon a
problem which highlights Markov property of [Poisson
processes](/tag/poisson-process/) in a different way. Lets explore it here!
<!--more-->

## The problem

Problem 7.5 from [cite id="Aldridge2020MATH2750"] is formulated as
follows:

<blockquote>Let \( (X(t)) \) be a Poisson process with rate \( \lambda \).
Conditional on there being exactly \( 1 \) arrival before time \( T
\), find the distribution of the time of that arrival.</blockquote>

I like this problem, because it can be solved both intuitively and
mathematically.

An **intuitive solution** follows from simple reasoning. As Poisson
processes have the Markov property, then no particular instant in time is
special in any sense. As no particular time instant is special, it follows
that any instant in \\\( [0, T] \\\) should be equally likely candidate to
be the time of the first (and only) arrival.

**Mathematically**, we would need to consider the probability that the first
event occurs at \\\( t \\\) (with \\\( t\leq T\\\)) and that the second
event occurs at \\\( t + \tau \\\) (with \\\( t + \tau > T \\\)). Thus,

\begin{equation}
p \left( t | N = 1 \right) = \frac{p\_{\text{exp}}\left(t\right) \cdot P\_{\text{exp}}\left(\tau > T - t\right)}{P\_{\text{poiss}}\left(N=1\right)} .
\end{equation}

Note that the denominator features Poisson distribution's probability mass
function for \\\( N = 1 \\\). It is featured, because we reject all samples
with \\\( N \neq 1 \\\). Now, if we put everything together, we have

\begin{equation}
p \left( t | N = 1 \right) = \frac{\lambda \exp\left(-\lambda t\right) \cdot \exp\left(-\lambda (T-t)\right)}{\lambda T \exp\left(-\lambda T\right)} = \frac{1}{T} .
\end{equation}

So, the answer is indeed a uniform distribution!

## Interactive app

To verify the solution, I have build an interactive app. It works in the
same way as the mathematical solution. Namely, the app generates two
inter-arrival times \\\( t \\\) and \\\( \tau \\\) by sampling from the
exponential distribution. If \\\( t \leq T \\\) and \\\( t + \tau > T \\\),
then \\\( t \\\) value is recorded. Otherwise the sample is rejected
(fraction of rejected samples is reported in a label above the post). The
app clearly confirms that the solution is indeed a uniform distribution.

[html5-interactive width="520" height="280" mode="iframe"
url="/uploads/models/stats/concepts/poisson-process/conditioning-on-single-event.html"]

Notably, here we have used bar chart, because of relatively broad binning.
Values on the y-axis are probability density and should fluctuate around
\\\( 1 \\\) as \\\( T = 1 \\\).
