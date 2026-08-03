Title: Stochastic growth rate Verhulst model
Date: 2026-11-17 08:00
Author: Aleksejus Kononovicius
Tags: interactive, biology, stochastic models, Verhulst model, students, voter model
Slug: stochastic-growth-rate-verhulst-model
Status: draft
Image_url: uploads/2026/stochastic-growth-rate-verhulst-model.png

[This recent exploration](/tag/Verhulst-model/) of variations on the classic
[Verhulst model]({filename}/articles/2026/verhulst-model.md) was inspired by
a book we recently were reading with [students](/tag/students/) [cite
id="Heinz2011"]. In that book the author have suggested to randomize the
growth rate (time scale) parameter of the model. Let us explore this
variation!
<!--more-->

## Definition of the stochastic model

So, we have that

\begin{equation}
\frac{d P}{d t} = \alpha P \left( 1 - \frac{P}{K} \right).
\end{equation}

Let \\\( \alpha \\\) be a random variable (it corresponds to \\\( T^{-1}
\\\) from the book). The book suggests to try

\begin{equation}
\alpha\_i = T^{-1} = \mu + \sigma \frac{\Delta W\_i}{\Delta t}.
\end{equation}

In the above we use subscript to denote that we are now working in discrete
time. While \\\( W\_i \\\) is a discretized Wiener process (standard
Brownian motion). Note that, the last term effectively involves discretized
derivative of a Wiener process (we will expand it later on).

Now, let us rewrite the ordinary differential equation as a difference
equation,

\begin{equation}
\frac{P\_{i+1} - P\_i}{\Delta t} = \alpha P\_i \left( 1 - \frac{P\_i}{K} \right).
\end{equation}

Then, let us add subscript to \\\( \alpha \\\) as well, and let us insert
the definition of \\\( \alpha\_i \\\). This yields a stochastic difference
equation,

\begin{equation}
P\_{i+1} = P\_i + \mu P\_i \left( 1 - \frac{P\_i}{K} \right) \Delta t +
\sigma P\_i \left( 1 - \frac{P\_i}{K} \right) \sqrt{\Delta t} \varepsilon\_i .
\end{equation}

In the above \\\( \varepsilon\_i \\\) are samples from standard normal
distribution. This term appears as a part of Wiener process derivative
(along with the square root time increment, \\\( \Delta t \\\)).

## Impressions

This model was peculiar to me for multiple reasons, but primarily because
for this model \\\( P\_s = 0 \\\) and \\\( P\_s = K \\\) are still
equilibrium points. Initially I have expected that trajectories approaching
zero would be driven away by noise, but certainly this is not the case. Let
us see why!

Note that, I have explicitly rewritten the stochastic difference equation to
be in the same form as if Ito [stochastic differential
equation](/tag/stochastic-models/) would have been solved using Euler
method. Thus, the term with \\\( \Delta t \\\) corresponds to the drift
function, while the term with \\\( \sqrt{\Delta t \\\) corresponds to the
diffusion function.

Now, observe that both drift and diffusion functions are of \\\( x (1-x)
\\\) form. As \\\( x\\\) approaches zero or unity, both functions go to
zero. Thus, there is nothing peculiar about equilibrium points remaining
equilibrium points (it would be more correct to refer to them as "absorbing"
states in the [stochastic models](/tag/stochastic-models/) language).

**Why then the noisy [voter model](/tag/voter-model/) doesn't get stuck?**
While diffusion function is exactly of the same \\\( x (1-x) \\\), the drift
function of the noisy [voter model](/tag/voter-model/) is of a different
form (check out the equations of a related [stochastic ant colony
model]({filename}/articles/2010/stochastic-ant-colony-model.md)). Namely, it
is of the \\\( \alpha (1-x) - \beta x \\\) form, which ensures that at \\\(
x = 0 \\\) the drift is equal to \\\( \alpha \\\) (thus repelling from
zero), and at \\\( x = 1 \\\) it is equal to \\\( - \beta \\\) (thus
repelling from unity).

## Interactive app

Feel free to explore Verhulst model with stochastic growth rate. This app is
once again very similar to the app from the [original
post]({filename}/articles/2026/verhulst-model.md), but with few important
differences. Besides some new controls related to the new parameters
introduced in the text above, this app no longer plots multiple trajectories
from different initial conditions. Instead initial condition is shared by
all trajectories, and is adjustable by you (see \\\( P\_0 \\\)).
Trajectories instead differ by the noise values used to obtain them, i.e.,
\\\( \varepsilon\_i \\\). Note that, noise values are preserved while you
adjust other model parameters. To get completely new picture, you'll need to
press the "Regenerate noise" button.

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/ordinary-differential-equations/verhulst-model/stochastic.html"]
