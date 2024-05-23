Title: Detrapping rates arising from Fermi-Dirac statistics
Date: 2024-06-18 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistics, statistical physics, Fermi-Dirac statistics
Slug: detrapping-rates-arising-from-fermi-dirac-statistics
Status: draft
Image_url: uploads/2024/detrapping-rates-arising-from-fermi-dirac-statistics.png

Have you ever wondered how [Fermi-Dirac
statistics](/tag/fermi-dirac-statistics) arises? I already have in
the previous couple of posts, but the more important question is why I
suddenly started to care about Fermi-Dirac statistics. It is still all
related to [cite id="Kononovicius2024upoiss"]. Reviewers raised doubts about
our assumption about uniform detrapping rates, asking us to provide
experimental evidence for our claim. As far as I am able to read the experimental
works, it doesn't seem possible to provide any direct evidence. Still as a
theoretician I can provide theoretical justification which is indirectly
supported by experimental works.

This is why in this post we'll talk about detrapping rates arising from a
simple model explored in an [earlier
post]({filename}/articles/2024/fermi-dirac-statistics-with-single-conduction-level.md).
<!--more-->

## Derivation of rate distribution

From earlier the [earlier
post]({filename}/articles/2024/fermi-dirac-statistics-with-single-conduction-level.md)
we already know that the occupation probability of trap levels follows
Fermi-Dirac statistics:

\begin{equation}
F\left(E\right)=\frac{1}{1+\exp\left(\frac{E-E\_{F}}{k\_{B}T}\right)}.
\end{equation}

Then the probability to find certain trap level unoccupied is given by:

\begin{equation}
V\left(E\right)=1-F(E)=\frac{1}{1+\exp\left(-\frac{E-E\_{F}}{k\_{B}T}\right)}.
\end{equation}

This is not yet the quantity we are interested in. We are interested in the
detrapping process, but for it to occur first the particle needs to be
trapped. And the trapping from the conduction level \\\( E\_C \\\) to an
arbitrary trap level \\\( E \\\) occurs with probability:

\begin{equation}
P\left(E\_{C}\rightarrow E\right)=\frac{V\left(E\right)}{\int\_{E\_{1}}^{E\_{2}}V\left(E\right)dE}.
\end{equation}

The integral is required for normalization purposes only, while the weights
are given by \\\( V(E) \\\). Calculating the integral:

\begin{equation}
C^{-1}=\int\_{E\_{1}}^{E\_{2}}V\left(E\right)dE=E\_{2}-E\_{1}+k\_{B}T\ln\left[\frac{\exp\left(\frac{E\_{1}}{k\_{B}T}\right)+\exp\left(\frac{E\_{F}}{k\_{B}T}\right)}{\exp\left(\frac{E\_{2}}{k\_{B}T}\right)+\exp\left(\frac{E\_{F}}{k\_{B}T}\right)}\right].
\end{equation}

We have previously assumed that all moves between energy levels are
determined by the Boltzmann factor. Specifically for detrapping process this
law is known as [Arrhenius
law](https://en.wikipedia.org/wiki/Arrhenius_equation):

\begin{equation}
\gamma=A\exp\left(\frac{E\_{A}}{k\_{B}T}\right).
\end{equation}

So, now we know the probability for trapping event to specific trap level to
occur. We also know how the depth of the trap level, \\\( E\_{A} = E-E\_{C}
\\\), is related to the detrapping rate \\\( \gamma \\\). All we need to do
is to transform the stochastic variable from \\\( E \\\) to \\\( \gamma
\\\). From the conservation of probability density we have that:

\begin{equation} p\left(\gamma\right)=P\left(E\_{C}\rightarrow
E\right)\frac{dE}{d\gamma}=\frac{C
k\_{B}T}{\gamma+\gamma\exp\left(-\frac{E-E\_{F}}{k\_{B}T}\right)}=\frac{C
k\_{B}T}{A\exp\left(\frac{E\_{C}-E\_{F}}{k\_{B}T}\right)+\gamma}.
\end{equation}

Note that for \\\( \gamma \ll
A\exp\left(\frac{E\_{C}-E\_{F}}{k\_{B}T}\right) \\\), the distribution is
uniform! Which is exactly what the model presented in [cite
id="Kononovicius2024upoiss"] requires! Hooray, but does my derivation work?
Check the interactive app below.

## Interactive app

In many regards this app is identical to the one from the [previous
post]({filename}/articles/2024/fermi-dirac-statistics-with-single-conduction-level.md).
The main difference is that this app also plots the observed detrapping
rates \\\( \gamma \\\). These are calculated by observing the time particles
spend in each state \\\( \tau\_{i} \\\) (where the index corresponds to event
number), and then taking the inverse of this time, i.e., \\\( \gamma\_{i} =
\tau\_{i}^{-1} \\\). On average, the distribution of observed detrapping
rates should roughly correspond to the detrapping rate distribution over the
trap levels.

[html5-interactive width="520" height="530" mode="iframe"
url="/uploads/models/physics-models/fermi-dirac-statistics/detrapping-rates.html"]
