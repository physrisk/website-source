Title: Detailed balance
Date: 2024-10-15 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, Markov chains
Slug: detailed-balance
Status: published
Image_url: uploads/2024/detailed-balance.png

One of the things I wondered about the previous summer was the difference
between stationarity (balance of all inflows and outflows from the state)
and detailed balance (balance of flows between two particular states). For
example, when looking for the stationary distribution of the [noisy voter
model](/tag/voter-model/) it is sufficient to solve equations for the
detailed balance condition. But why? Do all stationary stochastic models
satisfy detailed balance condition?
<!--more-->

## Is detailed balance ubiquitous and universal?

The answer to the question is no. Not all stochastic models (e.g., [Markov
chains](/tag/markov-chains/)) that converge to a stationary distribution
satisfy detailed balance condition. Simplest example of this is a Markov
chain with the following right stochastic transition matrix:

\begin{equation}
    \mathbf{T} = \begin{pmatrix}
            0.8 & 0.2 & 0 \\\\
            0 & 0.8 & 0.2 \\\\
            0.2 & 0 & 0.8
        \end{pmatrix} .
\end{equation}

This matrix is actually doubly stochastic, but our intended meaning is that
\\\( T\_{i,j} \\\) encode probability of \\\( i \rightarrow j \\\)
transitions. So we refer to this matrix as right stochastic matrix.

Stationary distribution of this Markov chain can be found by solving the
eigenproblem, but the solution should be evident from the fact that all our
states are identical. So the stationary distribution is \\\( \vec{p} =
\left( 1/3, 1/3, 1/3 \right) \\\), but the detailed balance does not hold.
For example, transition \\\( 0 \rightarrow 2 \\\) has probability of zero,
while the opposite transition, \\\( 2 \rightarrow 0 \\\), has a non-zero
probability. So,

\begin{equation}
    p\_0 T\_{0,2} \neq p\_2 T\_{2,0} .
\end{equation}

## Why does detailed balance hold for the noisy voter model?

For the two state [noisy voter model](/tag/voter-model/) all possible
transitions between the observed system states (corresponding to the number
of agents in the "active" state \\\( X \\\)) lie on a single line. Unlike in
the example considered in this post, there are no loops, which would allow
to have persisting directed flows.

Namely, in the [noisy voter model](/tag/voter-model) it is only possible to
increment or decrement the number of "active" agents by one at a time, i.e.,
only \\\( X \rightarrow X \pm 1 \\\) transitions are allowed. So, if there
would be a directed flow, then the system would eventually get stuck in the
state \\\( X=0 \\\) (no "active" agents) or state \\\( X=N \\\) (all
"active" agents). After reaching those states there would be no flows
between any of the states, the system would freeze and then it would make
little sense to talk about the detailed balance condition.

In other words, in any one-step process, such as the [noisy voter
model](/tag/voter-model/), it is impossible to have a directed flow,
breaking of the detailed balance condition, and a stationary distribution at
the same time. Hence, for these processes stationary distribution can be
found by solving for the detailed balance condition.

## Interactive app

This interactive app allows you to visually see the state occupancy
distribution (the darker the color the more particles are in that state),
and how many transitions of each type occur in the model (once again the
darker the arrow the more transitions in that direction occur). The sole
parameter of the app can be used to change the transition matrix. It is
given by:

\begin{equation}
    \mathbf{T} = \begin{pmatrix}
            0.8 & 0.2\cdot\frac{1-\varepsilon}{2} & 0.2\cdot\frac{1+\varepsilon}{2} \\\\
            0.2\cdot\frac{1+\varepsilon}{2} & 0.8 & 0.2\cdot\frac{1-\varepsilon}{2} \\\\
            0.2\cdot\frac{1-\varepsilon}{2} & 0.2\cdot\frac{1+\varepsilon}{2} & 0.8
        \end{pmatrix} .
\end{equation}

So \\\( \varepsilon \\\), in certain sense, controls the degree to which the
detailed balance condition is violated. When \\\( \varepsilon = 1 \\\) the
difference between the respective transition probabilities is largest
(probability of one of the transitions is zero). With \\\( \varepsilon = 0
\\\) there is no difference between the transition probabilities, and
therefore the detailed balance condition is satisfied.

So, experiment by changing \\\( \varepsilon \\\) value and observe which
transitions occur most often. The transition matrix implies that for \\\(
\varepsilon > 0 \\\) the transition shown on the inner ring (those going
anti-clockwise) should be more frequent. Also observe that no matter the
value of \\\( \varepsilon \\\) the stationary distribution remains the same.

[html5-interactive width="520" height="320" mode="iframe"
url="/uploads/models/stats-basic/detailed-balance/index.html"]

