Title: Many particle interaction in the kinetic exchange models
Date: 2014-03-03 07:02
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive, kinetic models, statistical physics, wealth
Slug: many-particle-interaction-in-the-kinetic-exchange-models
Status: published

Another idea that may be used to improve [kinetic exchange
models](/tag/kinetic-models/) is the introduction of many-particle
interactions. In the ideal gasses, these interactions do not occur, but in
the social systems, they might have interesting consequences.
<!--more-->

In this post, let us modify the [elementary kinetic exchange
model]({filename}/articles/2013/elementary-kinetic-exchange-models.md) by
assuming that only \\\(N\\\)-particle interactions occur. Let the combined
wealth (energy) of all agents (particles) \\\(W(t,I)=\sum\_{i\in
I}w\_i(t)\\\), be redistributed uniformly among themselves:

\begin{equation}
 w\_i(t+1) = \frac{\varepsilon\_i}{E(I)} W(t, I) , \quad\forall i \in I .
\end{equation}

In the above \\\(I\\\) is a set of agents (particles) selected for the
interaction. Random number \\\(\varepsilon\_i\\\) is divided by
\\\(E(I)=\sum\_{i\in I}\varepsilon\_i\\\) factor, to use the conservation of
wealth (energy).

It should be evident that the wealth (energy) distribution will approach
uniform distribution when \\\(N\\\) grows and approaches the number of
agents (particles) in the system. In the applet below you can see that in
case \\\(N=2\\\) we recover the exponential distribution. As \\\(N\\\) grows
larger and closer to the total number of agents (particles) in the system,
probabilities to observe agents with lower wealth (particles with lower
energies) flatten out.

[html5-interactive width="405" height="410" mode="iframe"
url="/uploads/models/kinetic-models/many-particle.html"]

**Note 2025:** Earlier iteration of this post also featured another model,
which is many particle interaction model, but has little common with
[kinetic exchange models](/tag/kinetic-models/). That model is now featured
in a [dedicated post]({filename}/articles/2025/galam-referendum-model.md).
