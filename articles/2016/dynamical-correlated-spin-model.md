Title: Dynamical correlated spin model
Date: 2016-03-15 07:54
Author: Aleksejus Kononovicius
Tags: interactive models, A. Kononovicius, J. Ruseckas, statistical physics
Slug: dynamical-correlated-spin-model
Status: published

Previously we already
[wrote]({filename}/articles/2014/elementary-model-reproducing-q-gaussian-distribution.md)
about a work of our colleague, Julius Ruseckas, in which he proposed an
elementary model, which reproduces q-Gaussian distribution. Recently we
introduced temporal dynamics into that static model \[cite id="Kononovicius2016PhysLettA"\]. In this text we briefly discuss the
dynamical version of the model.

Let us remind you that the [correlated spin
model]({filename}/articles/2014/elementary-model-reproducing-q-gaussian-distribution.md)
describes possible configurations of the spin chain. In this spin chain
neighboring spins are usually coaligned, meaning that nearby spins point
in the same direction, though there are fixed number of cases \\\( d-1 \\\) (in this text \\\(  d \\\) has slightly different meaning) where
spins are antialigned.<!--more--> Consequently we have \\\(  d \\\)
distinct domains inside of which spins are aligned. We are interested in
the total spin, \\\(  M = \sum\_i s\_i  \\\), of such system.

If \\\(  d \\\) is an even number, then ends of the chain may by
connected (periodic boundary conditions may be applied), leading to a
differing interpretation of \\\(  d \\\) as it now represents both the
number of domains and number of boundaries between them. Though if
\\\(  d \\\) is odd, then we have to use the chain interpretation (which
is equivalent to fixing one boundary in place). Note that in case of the
spin chain, if the global spin-flips of the whole chain are forbidden,
the stationary distribution will be asymmetric Beta distribution and not
a q-Gaussian distribution (which is obtained the topology is ring).

In this model we allow the boundaries to move! During each time tick all
of the boundaries may move to the left or to the right with certain
probability \\\(  \gamma \Delta t \\\). But we assume that the number
of domains needs to be conserved. Thus if due to the movement of
boundaries any single domain would disappear, then the movement is
canceled.

Below you should see an interactive app, which may be used to test this
model. Namely, observe that for even \\\(  d \\\) the dynamical model
generates a q-Gaussian PDF of total spin. For odd \\\(  d \\\) small
deviation (to the right side) from the q-Gaussian PDF will be observed.
In this app, for the convenience sake, we have fixed the following
parameters \\\(  \gamma = 0.005 \\\) and \\\(  \Delta t=1 \\\). These
parameters influence only the speed with which model converges to
stationary distribution.

[html5-interactive
src="/uploads/models/physics-models/correlated-spins/dynamical.html" width="410"
height="395" mode="iframe"]
