Title: Analyzing poll-delayed voter model as AR(2) process
Date: 2025-06-03 08:00
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive, voter model, opinion dynamics, opinion polls, delayed models, poll-delayed voter model
Slug: analyzing-poll-delayed-voter-model-as-ar-2-process
Status: draft
Image_url: uploads/2025/analyzing-poll-delayed-voter-model-as-ar-2-process.png

In a [recent
post]({filename}/articles/2025/stationary-variance-of-ar-2-process.md), we
have discussed how to obtain the stationary variance of the AR(2) process
using [Yule-Walker
equations]({filename}/articles/2025/ritvikmath-yule-walker-equations.md).
While intuitively, it is trivial to see that the [poll-delayed voter
model]({filename}/articles/2025/poll-delayed-voter-model.md) is an AR(2)
process, showing this formally is a bit more involved. Let us delve into
this question further.
<!--more-->

## Macroscopic simulation method

In [cite id="Kononovicius2024PhysA"], we have used multiple different
numerical simulation methods to simulate the [poll-delayed voter
model]({filename}/articles/2025/poll-delayed-voter-model.md). Of all the
methods we have used, the macroscopic simulation method was instrumental due
to its speed and simplicity. It has also inspired analytical derivations
presented in the paper.

The core idea of the macroscopic simulation method is that the individual
agent transition rates remain constant during a single polling period. Such
an approach allows us to derive the probability for an agent starting in any
particular state to end up in state \\\( 1 \\\) after a single polling
period passes [cite id="Kononovicius2024PhysA"]:

\begin{equation}
    P\_{1}\left(s|P\_{1}\left(0\right)\right)
        = P\_{1}\left(\infty\right) +
            \left[P\_{1}\left(0\right)-P\_{1}\left(\infty\right)\right]
            \exp\left[-\left(\varepsilon\_{0}+\varepsilon\_{1}+N\right)s\right].
\end{equation}

In the above, \\\( s \\\) represents an increment of time (assuming that it
does not cross the polling boundary). While \\\( P\_{1}\left(0\right) \\\)
encodes the initial condition as a "probability" to initially observe the
agent in state \\\( 1 \\\) (as we can assume to know the initial state of
the agent, commonly it would be either \\\( 0 \\\) or \\\( 1 \\\)).
Likewise, \\\( P\_{1}\left(\infty\right) \\\) is the stationary probability
of observing an agent in state \\\( 1 \\\):

\begin{equation}
    P\_{1}\left(\infty\right)
        = \frac{\varepsilon\_{1}^{\left(k\right)}}{\varepsilon\_{0}^{\left(k\right)}+\varepsilon\_{1}^{\left(k\right)}}
        = \frac{\varepsilon\_{1}+A\_{k-1}}{\varepsilon\_{0}+\varepsilon\_{1}+N}.
\end{equation}

Armed with these expression we can determine the system state of the
[poll-delayed voter
model]({filename}/articles/2025/poll-delayed-voter-model.md) by evaluating:

\begin{equation}
    X\left(t+s\right)
        = B\_{1\rightarrow 1}\left[X\left(t\right),P\_{1}\left(s|1\right)\right] +
            B\_{0\rightarrow 1}\left[N-X\left(t\right),P\_{1}\left(s|0\right)\right].\label{eq:main-macro}
\end{equation}

In the above \\\( B\_{i\rightarrow j} \\\) stands for a sample from a
binomial distribution with respective values of parameters \\\( N \\\)
(number of trials) and \\\( p \\\) (probability of "success"). The index
here emphasizes that a particular sample encodes a specific transition.

So, this method allows us to simulate all relevant transitions by generating
just two binomial random values. Generating just two binomial random values
is often far more efficient than generating lots of exponential random
values when using a variation of the Gillespie algorithm. However, if the
polling period is short, and few transitions occur within a single polling
period, then Gillespie's algorithm would be superior performance-wise.

## Obtaining stationary mean

From \eqref{eq:main-macro} one can easily obtain an expression for a
conditional expected outcome:

\begin{equation}
    \left\langle A\_{k+1}|A\_{k},A\_{k-1}\right\rangle
        = \varphi\_{1}A\_{k} +
            \left(1-\varphi\_{1}\right)\varphi\_{2}
            \left(\varepsilon\_{1}+A\_{k-1}\right).
\end{equation}

In the above, we have introduced two new symbols (to shorten the expressions
obtained): \\\(
\varphi\_{1}=\exp\left[-\left(\varepsilon\_{0}+\varepsilon\_{1}+N\right)\tau\right]
\\\) and \\\( \varphi\_{2}=\frac{N}{\varepsilon\_{0}+\varepsilon\_{1}+N} \\\).

Averaging this expression over the stationary distribution, we obtain the
stationary mean:

\begin{equation}
    \left\langle A\_{\infty}\right\rangle =
        \frac{\varphi\_{2}\varepsilon\_{1}}{1-\varphi\_{2}} =
        \frac{N\varepsilon\_{1}}{\varepsilon\_{0}+\varepsilon\_{1}}.
\end{equation}

## Obtaining zero-centered AR(2) process

Currently, \\\( A\_k \\\) takes values from \\\( 0 \\\) to \\\( N \\\). To
make the process zero-centered (we need this condition to hold for us to be
able to use the [previously obtained
results]({filename}/articles/2025/stationary-variance-of-ar-2-process.md)),
let us introduce a new state variable by subtracting the stationary mean
from the \\\( A\_k \\\):

\begin{equation}
    \tilde{A}\_{k}=A\_{k}-\left\langle A\_{\infty}\right\rangle .
\end{equation}

Conditional expectation is then given by:

\begin{equation}
    \left\langle\tilde{A}\_{k+1}|\tilde{A}\_{k},\tilde{A}\_{k-1}\right\rangle =
        \varphi\_{1}\tilde{A}\_{k} +
        \left(1-\varphi\_{1}\right)\varphi\_{2}\tilde{A}\_{k-1}.
\end{equation}

Based on the conditional expectation given above, let us approximate the
process by:

\begin{equation}
    \tilde{A}\_{k+1} =
        \varphi\_{1}\tilde{A}\_{k} +
        \left(1-\varphi\_{1}\right)\varphi\_{2}\tilde{A}\_{k-1} +
        \xi\_{k+1}.\label{eq:ar2-process}
\end{equation}

In the above, \\\( \xi\_{k+1} \\\) would encode random deviations from the
expectation. It does not need to follow any particular distribution as long
as the values are uncorrelated and have finite variance.

To completely determine the corresponding AR(2) process, we need to derive
the variance of the random deviation term. Notably, random deviation comes
from the binomial random sampling, thus:

\begin{equation}
    \mathrm{Var}\left[\xi\_{k}|\tilde{A}\_{k},\tilde{A}\_{k-1}\right] =
        \mathrm{Var}\left[B\_{1\rightarrow1}|\tilde{A}\_{k},\tilde{A}\_{k-1}\right] +
        \mathrm{Var}\left[B\_{0\rightarrow1}|\tilde{A}\_{k},\tilde{A}\_{k-1}\right]
\end{equation}

Averaging over the stationary poll outcome distribution yields:

\begin{equation}
    \mathrm{Var}\left[\xi\_{\infty}\right] =
        \left\langle\mathrm{Var}\left[\xi\_{k}|\tilde{A}\_{k},\tilde{A}\_{k-1}\right]\right\rangle =
        \psi\_{0}+\left(\psi\_{12}\rho\_{1}+\psi\_{22}\right)\mathrm{Var}\left[A\_{\infty}\right].
\end{equation}

In the above, \\\( \psi\_{ij} \\\) and \\\( \rho\_1 \\\) symbols are
introduced for notational convenience. \\\( \rho\_1 \\\) symbol also has a
meaning of the stationary lag-one auto-correlation. These symbols are
defined as follows:

\begin{equation}
    \psi\_{0} =
        \frac{N\varepsilon\_{0}\varepsilon\_{1}\left(1-\varphi\_{1}^{2}\right)}{\left(\varepsilon\_{0}+\varepsilon\_{1}\right)^{2}},
\end{equation}

\begin{equation}
    \psi\_{12} =
        -\frac{2\varphi\_{1}\left(1-\varphi\_{1}\right)}{\varepsilon\_{0}+\varepsilon\_{1}+N},
\end{equation}

\begin{equation}
    \rho\_{1}=\frac{\varphi\_{1}}{1-\left(1-\varphi\_{1}\right)\varphi\_{2}}.
\end{equation}

\begin{equation}
    \psi\_{22} =
        -\frac{N\left(1-\varphi\_{1}\right)^{2}}{\left(\varepsilon\_{0}+\varepsilon\_{1}+N\right)^{2}}.
\end{equation}

By using the result from the [previous
post]({filename}/articles/2025/stationary-variance-of-ar-2-process.md), and
properly rearranging it, we get the expression for the stationary poll
outcome variance:

\begin{equation}
    \mathrm{Var}\left[A\_{\infty}\right] =
        \frac{\psi\_{0}}{1-\left(\varphi\_{1}+\psi\_{12}\right)\rho\_{1}-\left(1-\varphi\_{1}\right)\varphi\_{2}\rho\_{2}-\psi\_{22}}.
\end{equation}

In the above, \\\( \rho\_2 \\\) is another convenience symbol (it also has a
meaning of the stationary lag-two auto-correlation):

\begin{equation}
    \rho\_{2} =
        \left(1-\varphi\_{1}\right)\varphi\_{2} +
        \frac{\varphi\_{1}^{2}}{1-\left(1-\varphi\_{1}\right)\varphi\_{2}}.
\end{equation}

Use the interactive figure below to explore how the relationship between
stationary variance and polling period evolves with changes in model
parameters.

[html5-interactive width="520" height="240" mode="iframe"
url="/uploads/models/voter/poll-mechanism/ar2-variance-tau.html"]

Observe that altering the \\\( \varepsilon \\\) parameters results in
relatively modest shifts - primarily raising or lowering the variance curve
(though small changes in the vicinity of the minimum can be observed). In
contrast, varying \\\( N \\\) has a bigger effect on the variance curve.
Also note, that variance for the small \\\( \tau \\\) values is always
roughly twice as large as variance for the large \\\( \tau \\\).

## Uncovering a neat scaling law

The idea behind these derivations was that the [stationary distribution of
the poll-delayed voter
model]({filename}/articles/2025/stationary-distribution-of-poll-delayed-voter-model.md)
should be well approximated by
[Beta]({filename}/articles/2023/ritvikmath-beta-distribution.md) or
Beta-binomial distributions. Given that these distributions have two free
(shape) parameters, then knowing the expressions for the stationary mean and
variance allows us to provide a reasonable approximation.

Detailed numerical exploration of the stationary distributions in [cite
id="Kononovicius2024PhysA"] confirms this intuition. The dependence is quite
neat, as apparently we can separate the base value and the scaling law for
any set of the model parameters. I.e., the dependence between the shape
parameters (estimated from multiple numerical simulations) and the polling
period is neatly determined by a universal scaling law, \\\(
L\left(\tau\right) \\\):

\begin{equation}
    \frac{\hat{\alpha}}{\varepsilon\_1} = \frac{\hat{\beta}}{\varepsilon\_0} =
        L\left(\tau\right)
\end{equation}

The scaling is given by [cite id="Kononovicius2024PhysA"]:

\begin{equation}
L\left(\tau\right)=\frac{\varepsilon\_{0}\varepsilon\_{1}N^{2}-\left(\varepsilon\_{0}+\varepsilon\_{1}\right)^{2}\mathrm{Var}\left(\tau\right)}{\left(\varepsilon\_{0}+\varepsilon\_{1}\right)^{3}\mathrm{Var}\left(\tau\right)-\varepsilon\_{0}\varepsilon\_{1}\left(\varepsilon\_{0}+\varepsilon\_{1}\right)N}.
\end{equation}

In the above, \\\( \mathrm{Var}\left(\tau\right) \\\) stands for the
dependence between the stationary variance and the polling period.

Use the interactive figure below to explore how the scaling law responds to
the changes in the model parameters. Notice that modifying the \\\(
\varepsilon \\\) parameters has a minimal impact on the overall shape of the
scaling curve. In contrast, changes in \\\( N \\\) significantly influence
the scaling behavior - the location and height of the maximum shift
noticeably with varying \\\( N \\\). Additionally, observe that for short
polling periods, or small \\\( \tau \\\), the scaling law is close to \\\( 1
\\\) (this means that for short polling periods the model is effectively
equivalent to the standard noisy voter model), while for long polling
periods, or large \\\( \tau \\\), it tends toward \\\( 2 \\\).

[html5-interactive width="520" height="240" mode="iframe"
url="/uploads/models/voter/poll-mechanism/scaling-law.html"]

