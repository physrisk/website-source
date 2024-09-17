Title: Kawasaki Ising model
Date: 2020-03-10 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, Ising model, magnetism, statistical physics
Slug: kawasaki-ising-model
Status: published

Recall that the Ising model (see [other posts](/tag/ising-model/)) is a
well-known model in statistical physics, which describes magnetization
phenomena. Our previous explorations of the Ising model where based on the Glauber
interpretation of the Ising model, but this interpretation is not the only
interpretation. While most of the other interpretations are qualitatively
similar to the Glauber interpretation (e.g., Metropolis interpretation), this
time we will present you interpretation, which is very much different from the
Glauber interpretation - Kawasaki interpretation.
<!--more-->

In the Kawasaki interpretation of the Ising model particles have fixed spins.
They do not change their alignment during the simulation. Yet the particles are
allowed to move. This means that global magnetization and system-wide entropy
remain the same, but due to local changes system energy decreases as the
particles clump together with other particles with the same spin.

Movement rules are simple:

1. Pick two particles A and B.
2. If their spins are equal, \\\( S\_A = S\_B \\\), then do nothing (increment
clock and go back to step 1).
3. Otherwise, given \\\( S\_A \neq S\_B \\\), calculate current system energy,
\\\( E \\\), and system energy if the particles were swapped,
\\\( E^\prime \\\).
4. Calculate probabilities of the system energies according to the Boltzmann
(exponential) distribution. Let the probabilities be \\\( p \\\) and
\\\( p^\prime \\\) respectively.
5. With probability \\\( \frac{p^\prime}{p + p^\prime} \\\), swap the
particles.

Have in mind that in most physically sensible scenarios particles A and B
should be neighbors. Though for the sake of generality one could lift this
limitation. In most cases it will not have a significant impact on the observed
dynamics.

Explore the Kawasaki Ising model using the app below. Note that this app shares
a lot of similarities with the app made available in the
[original post]({filename}/articles/2010/ising-model.md) about the Ising model.

[html5-interactive url="/uploads/models/physics-models/ising-model/kawasaki.html"
width="440" height="285" mode="iframe"]

