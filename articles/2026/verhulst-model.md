Title: Verhulst model
Date: 2026-10-20 08:00
Author: Aleksejus Kononovicius
Tags: interactive, biology, equilibria point analysis, Verhulst model
Slug: verhulst-model
Status: draft
Image_url: uploads/2026/verhulst-model.png

Fourteen years ago, in a post on [Lotka-Volterra
equations]({filename}/articles/2012/lotka-volterra-equations.md), I have
briefly mentioned Verhulst's population dynamics model. But since then, I
still haven't written a dedicated post about this model. As in the near
future I would like to explore its [stochastic](/tag/stochastic-models/)
modification, let us explore the deterministic version in this post.
<!--more-->

## Malthusian growth model

In the end of XVIII century Thomas Malthus wrote "[An Essay on the Principle
of
Population](https://en.wikipedia.org/wiki/An_Essay_on_the_Principle_of_Population)" in which he outlined simple exponential population growth model,

\begin{equation}
P(t) = P\_0 e^{\alpha t}.
\end{equation}

In the above \\\( P\_0 \\\) is the initial population size, \\\( \alpha \\\)
stands for the population growth rate, and \\\( t \\\) is time. It is
obvious that given \\\( P\_0 > 0 \\\), the population eventually explodes
(i.e., \\\( \lim\_{t\rightarrow\infty} P \rightarrow \infty \\\)). Given
this outcome Thomas Malthus (1766-1834) predicted that humanity would
eventually need more resources than our planet can offer.

Before improving the model let us understand how does the exponential
arises. It is well known that simple exponential functions are solutions of
simple ordinary equations of the following form,

\begin{equation}
\frac{d P}{d t} = \alpha P .
\end{equation}

Having written down this differential equation, provides us hints into the
underlying dynamics of the model. It simply states that each individual
reproduces with rate \\\( \alpha \\\). While this model is very simplistic,
at the time it was as influential to the population dynamics community as
Newton's laws to the physics community.

In the 1960s Malthusian model was tested against world population data, and
it was found that it doesn't fit the data well. However, the improved model
was not much more optimistic - it predicted human population explosion by
2026 [cite id="Foerster1960"]. Though, [our quick comparison against the
most recent data]({filename}/articles/2022/end-of-the-world-2026.md) have
shown that it was also wrong (well, and also, in 2026 we already know that
population did not explode).

## Verhulst's correction

Almost half a century later, Pierre Verhulst (1804-1849) suggested that
resource limitations could prevent population explosion. Namely, individuals
within population would gradually stop reproducing as limitations would
become more obvious as population grows. His model can be cast into the
following ordinary differential equation,

\begin{equation}
\frac{d P}{d t} = \alpha P \textcolor{blue}{\left( 1 - \frac{P}{K} \right)}.
\end{equation}

In the above the blue term could be referred to as the Verhulst's
correction. \\\( K \\\) is an additional system capacity parameter, which
determines the population in the long time limit, \\\( P\left(\infty\right)
\\\).

Inspired by Verhulst's idea, [we have applied a similar
correction]({filename}/articles/2022/verhulst-correction-to-doomsday-model.md)
when trying to adjust the [doomsday
model]({filename}/articles/2022/end-of-the-world-2026.md) to the population
data.

## Equilibria point analysis

Equilibria points of the model can be determined by setting the derivative
to zero,

\begin{equation}
0 = \alpha P \left( 1 - \frac{P}{K} \right).
\end{equation}

There are two possible solutions, \\\( P\_s = 0 \\\) and \\\( P\_s = K \\\).

We can determine the stability of the equilibria points by taking derivative
of the right hand side,

\begin{equation}
\frac{d}{d P} \left[ \alpha P \left( 1 - \frac{P}{K} \right) \right] =
= \alpha - \frac{2 \alpha P}{K} .
\end{equation}

The derivative is positive for \\\( P\_s = 0 \\\), i.e., \\\( \alpha > 0
\\\). This means that this particular equilibrium point in unstable.

With \\\( P\_s = K \\\) the derivative is negative, i.e., \\\( -\alpha < 0
\\\). This means that this particular equilibrium point is stable.

## Interactive app

Interactive app below shows multiple trajectories with different initial
conditions, \\\( P(0) \\\). Observe that changing \\\( \alpha \\\) changes
only the time scale of the trajectories (and the model by extension), while
changing \\\( K \\\) only influences the equilibrium point towards which
(almost) all trajectories converge.

[html5-interactive width="520" height="240" mode="iframe"
url="/uploads/models/ordinary-differential-equations/verhulst-model/index.html"]

Note that, for the two gray curves the initial condition coincides with
equilibria points. Thus, by definition, curves remain flat (they retain
constant value).
