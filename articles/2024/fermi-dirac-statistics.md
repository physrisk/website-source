Title: Fermi-Dirac statistics
Date: 2024-05-21 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistics, statistical physics
Slug: fermi-dirac-statistics
Status: draft
Image_url: uploads/2024/fermi-dirac-statistics.png

Have you ever wondered how Fermi-Dirac statistics arises? I may have
wondered during my bachelor degree studies, but now I only remember
derivation done by the means of combinatorics. In this post let us allow
Fermi-Dirac distribution to emerge from simulation of a simple particle
system.
<!--more-->

## Model

1. Let the system be composed of \\\( 100 \\\) energy levels.
1. Each energy level has energy equal to its index. In other words \\\( E\_i
   = i \\\) with \\\( i = 1, 2, \ldots, 100 \\\).
1. Let there be \\\( N \\\) particles jumping from one energy level to
   another.
1. Particle may jump to an energy level if it is empty. Namely, single
   particle can occupy single energy level.
1. Probability of the jump from energy level \\\( i \\\) to energy level
   \\\( j \\\) is given by the Boltzmann factor:

\begin{equation}
    P\_{i \rightarrow j} = \min\left[1, \exp\left( \frac{E\_i - E\_j}{k\_B T} \right) \right].
\end{equation}

This is a rather simple model, which effectively mirrors the implementation
of the [Ising model]({filename}/articles/2010/ising-model.md). Boltzmann
factor being equivalent to the acceptance ratio in the Metropolis algorithm
for the [Ising model]({filename}/articles/2010/ising-model.md).

## Interactive app

All this is fine and is interesting, but we would like to have average
occupation of the energy levels to follow Fermi-Dirac distribution function:

\begin{equation}
    F\left(E\_i\right) = \frac{1}{1+\exp\left(\frac{E\_i - E\_F}{k\_B T}\right)} .
\end{equation}

In the above \\\( E\_F \\\) is Fermi energy, which marks the inflection
point of the distribution. In our simulation it will be at \\\( E\_i = 50
\\\). Will it work? Check it yourself using the app below (black curve
represents \\\( F\left(E\right) \\\) from the above).

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/physics-models/fermi-dirac-statistics/index.html"]
