Title: Polled voter model
Date: 2025-04-22 08:00
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive, voter model, opinion dynamics, opinion polls, delayed models
Slug: polled-voter-model
Status: published
Image_url: uploads/2025/polled-voter-model.png

We have already seen the basic workings of the [poll-delayed voter
model]({filename}/articles/2025/poll-delayed-voter-model.md) introduced in
[cite id="Kononovicius2024PhysA"]. Previously, we have assumed that polling
information is being revealed with delay and that the delay coincides with
the polling period. However, quite often, processing polling information
does not take a lot of time, so the information becomes available almost
immediately. So, what changes when we remove this delay?
<!--more-->

## Model

The overall framework and the general form of the rates remain the same as
discussed in [the previous
post]({filename}/articles/2025/poll-delayed-voter-model.md). Yet there is an
important difference, the rates now involve the outcome of the most recent
poll, \\\( A\_k \\\), instead of an earlier poll, \\\( A\_{k-1} \\\). I.e.: 

\begin{equation}
\lambda\_{k}^{+}=\left(N-X\right)\left[\varepsilon\_{1}+A\_k\right],
\end{equation}

\begin{equation}
\lambda\_{k}^{-}=X\left[\varepsilon\_{0}+\left(N-A\_k\right)\right].
\end{equation}

So, effectively, the information delay still exists, but it only exists
because information is updated periodically instead of continuously. With
this kind of delay, periodic oscillations mostly disappear. For longer
polling periods, one can observe the time series oscillating around the
previous poll result. Usually, the new poll result is only marginally
different from the prior outcome (within the natural variance of the
process). These differences are not amplified, as was the case with [the
poll-delayed voter
model]({filename}/articles/2025/poll-delayed-voter-model.md) when the
information updates are delayed.

![Sample trajectory of the
model]({static}/uploads/2025/polled-voter-model.png "Sample trajectory
of the polled voter model.")

## Interactive app

This app is almost identical to the app from [the previous
post]({filename}/articles/2025/poll-delayed-voter-model.md). The only
difference is that this particular model does not require specifying two
boundary conditions, specifying \\\( X\_0 \\\) is sufficient.

[html5-interactive width="520" height="300" mode="iframe"
url="/uploads/models/voter/poll-mechanism/no-delay.html"]

Observe that this model does not exhibit emergent periodic oscillations.
Note that for the shorter polling periods \\\( X(t) \\\) does not seem to
follow \\\( A\_k \\\) series. Instead, vice versa appears to be true. Also,
in this regime, the changes in consecutive poll outcomes seem to be larger.
While as the polling period becomes longer, \\\( X(t) \\\) starts to
fluctuate around the \\\( A\_k \\\). Thus, in this regime, the changes
between the consecutive poll outcomes become small.
