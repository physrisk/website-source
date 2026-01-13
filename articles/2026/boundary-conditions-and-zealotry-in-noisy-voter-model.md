Title: Boundary conditions and zealotry in the noisy voter model
Date: 2026-01-13 08:00
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive, voter model, opinion dynamics, boundary conditions, zealots, birth-death process
Slug: boundary-conditions-and-zealotry-in-noisy-voter-model
Status: published
Image_url: uploads/2026/boundary-conditions-and-zealotry-in-noisy-voter-model.png

When writing [cite id="Kazakevicius2026CSF"], I have argued with my
colleague about the distinction between having stable voter base
([zealots](/tag/zealots/)) and [boundary
conditions](/tag/boundary-conditions/) in the noisy [voter
model](/tag/voter-model/). This post explores the subtle differences.
<!--more-->

## The noisy voter model

Let us assume that we have \\\( N \\\) agents. Each of the agents can be in
state \\\( 0 \\\) or in state \\\( 1 \\\). In general, the labeling of the
states doesn't matter, here I have chosen such labels to emphasize that we
observe the number of agents in state \\\( 1 \\\), let us denote it by \\\(
X \\\).

Whenever a change in \\\( X \\\) occurs, it will either increase or decrease
by a single unit. I.e., one agent will either move from state \\\( 1 \\\) to
state \\\( 0 \\\) (let us call this transition "death"), or the agent will
move \\\( 0 \rightarrow 1 \\\) (let us call this transition "birth"). We
have chosen these strange names for the rates to emphasize that we can use
continuous time [birth-death process](/tag/birth-death-process/) formalism.

Let the agents change their state either independently (with rate \\\(
\varepsilon\_0 \\\) or \\\( \varepsilon\_1 \\\)), or due to peer interaction
(let the interaction rate be our unit of time). Then the birth rate of the
model is given by,

\begin{equation}
\lambda(X) = \left( N-X \right) \left(\varepsilon\_1 + X \right) .
\end{equation}

While the death rate of the model

\begin{equation}
\mu(X) = X \left(\varepsilon\_1 + \left[N-X\right] \right) .
\end{equation}

The rates take this form in the "standard" case.

They will retain their form when the [boundary
conditions](/tag/boundary-conditions/) are applied, because the [boundary
conditions](/tag/boundary-conditions/) would be applied only after the
transition would occur. If the transition would drive \\\( X \\\) outside
the desired (valid) value range, the transition would be canceled.

Let us now introduce [zealots](/tag/zealots/) into the model. Let \\\( Z\_0
\\\) stand for the number of [zealots](/tag/zealots/) in state \\\( 0 \\\).
Likewise, let \\\( Z\_1 \\\) stand for the number of
[zealots](/tag/zealots/) in state \\\( 1 \\\). Let \\\( X \\\) stand for the
number of [zealots](/tag/zealots/) and normal agents in state \\\( 1 \\\),
then the rates would be modified as follows,

\begin{equation}
\lambda(X) = \left( N-X-Z\_0 \right) \left(\varepsilon\_1 + X \right) ,
\end{equation}

\begin{equation}
\mu(X) = \left(X-Z\_1\right) \left(\varepsilon\_1 + \left[N-X\right] \right) .
\end{equation}

There are lots of terms, and while they are simple... It might be hard to
see through them. To gain an intuition of what happens, look at the
interactive figure below.

Note that to make the models comparable, I have introduced a restriction. I
have assumed that the number of [zealots](/tag/zealots/) in each state would
imply the [boundary conditions](/tag/boundary-conditions/) (i.e., \\\(
X\_{\text{min}} \\\) and \\\( X\_{\text{max}} \\\)) as well. Namely, in both
models \\\( X \\\) can't become smaller than \\\( Z\_1 \\\) (i.e., than \\\(
X\_{\text{min}} \\\)), and it can't become larger than \\\( N - Z\_0 \\\)
(i.e., than \\\( X\_{\text{max}} \\\)).

## Interactive figure for the rates

Red curve in the interactive figure below represents the model with zealots,
while the blue curve shows how the rates change in the model with [boundary
conditions](/tag/boundary-conditions/).

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/voter/boundary-conditions-zealotry/rate.html"]

Observe that the red curve (model with zealots) always goes to zero in one
end. Birth rate declines to zero as \\\( X \\\) approaches \\\( N - Z\_0
\\\), because in state \\\( 0 \\\) there would be no more agents who can
change their state. Death rate declines to zero as \\\( X \\\) approaches
\\\( Z\_1 \\\), because at this point there are zero agents in state \\\( 1
\\\) who are not [zealots](/tag/zealots/). The blue curve (model with
[boundary conditions](/tag/boundary-conditions)) does not do that - the
curve remains the same, only some transition are effectively prevented.

So, how would individual agent logic look like in the model with [boundary
conditions](/tag/boundary-conditions/)? Each agent would have to monitor the
global system state. If the global state drifted too far in one direction,
the agent would then adjust their public opinion. Imagine you support party
A, but you also value healthy competition in politics. If party A gained so
much power that it could suppress that competition, you would feel compelled
to publicly support party B.

## Interactive exploration of time series and opinion distribution

App below simulates the model. The plot on the left shows fragment of the
simulated time series, while the plot on the right shows the probability
density function of opinions.

[html5-interactive width="520" height="300" mode="iframe"
url="/uploads/models/voter/boundary-conditions-zealotry/index.html"]

Observe that the opinion distribution in the two variants of the noisy
[voter model](/tag/voter-model/) changes differently as we change the size
of stable support. If the support is provided by the
[zealots](/tag/zealots/) (red curve), the opinion distribution narrows
(grows close to the delta function). If the support is provided by the
[boundary conditions](/tag/boundary-conditions/), the opinion distribution
retains familiar form of \\\(
\mathrm{BetaBinomial}(\varepsilon\_1,\varepsilon\_0,N) \\\) (stationary
distribution of the unmodified noisy [voter model](/tag/voter-model/)), with
a caveat that it is truncated to the range between \\\( X\_{\text{min}} \\\)
and \\\( X\_{\text{max}} \\\).
