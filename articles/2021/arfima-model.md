Title: ARFIMA(p, d, q) model
Date: 2021-12-14 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, fractals, time series models, ARFIMA series, Brownian motion
Slug: arfima-model
Image_url: uploads/2021/arfima-model.png
Status: published

[Slowly but surely](/tag/arfima-series) we have finally reached ARFIMA
model! Taking such small step (adding letter F to the acronym) took a lot of
effort, but it was worth it. Why? Well, this exercise has allowed me to get
a glimpse at fractional calculus and develop some intuition with this tool.
<!--more-->

ARFIMA(0, d, 0) is also one of the ways to generate fractional Gaussian
noise (abbr. fGn). It is fractional derivative of order \\\( d \\\) of the
ordinary Gaussian white noise. fGn is important in our field as the integral
of fGn is fractional [Brownian motion](/tag/brownian-motion) (abbr. fBm) one
of the [stochastic processes](/tag/stochastic-models), which encodes true
long range memory.  Relationship between [Hurst
index]({filename}/articles/2011/multifractality-time-series.md) of the
generated fGn is given by:

\begin{equation}
    H = d + \frac{1}{2} .
\end{equation}

Confusingly if we integrate fGn with Hurst index \\\( H \\\) we obtain fBm
with the same Hurst index (this confusion is somewhat resolved by [MF-DFA
method]({filename}/articles/2011/multifractality-time-series.md)).

Using the app below observe that for \\\( d > 0 \\\) noise appears to be
somewhat persistent - there are clumps of similar values grouped together as
if the process would be not fGn, but fBm. For \\\( d < 0 \\\) noise becomes
anti-persistent - it rapidly changes value and sign.

[html5-interactive width="520" height="510" mode="iframe"
url="/uploads/models/arma/arfima2d2.html"]
