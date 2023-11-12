Title: Shot noise in continuous time
Date: 2023-12-05 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistics, Fourier transform, spectral density, shot noise
Slug: shot-noise-continuous-time
Status: draft
Image_url: uploads/2023/shot-noise-continuous.png

[Last time]({filename}/articles/2023/shot-noise.md) we have moved away from
mathematical abstraction of [point events](/tag/point-process/) by
considering pulses of finite duration. Yet the theory we have derived in the
[earlier post]({filename}/articles/2023/shot-noise.md) did not fully match
the simulated [power spectral density](/tag/spectral-density/). In this post
we will see that the difference we have observed arises due to the
observations being made in discrete time.
<!--more-->

There is no analytical formulas or any derivation this time, as we have just
an interactive app. It differs from the apps from the [point
process](/tag/point-process/) series or the earlier post on [shot
noise]({filename}/articles/2023/shot-noise.md), in that the time series is
not discretized prior to calculating [power spectral
density](/tag/spectral-density/) of the simulated time series. Instead
[power spectral density](/tag/spectral-density/) is calculated by adding the
contributions of each individual pulse using the analytical formula. This
way the signal is observed continuously and is not discretized. The signal
is only discretized for the time series plot. In all other ways the app
below is identical to the one from the [previous
post]({filename}/articles/2023/shot-noise.md).

[html5-interactive width="520" height="480" mode="iframe"
url="/uploads/models/psd-point-process/shot-continuous.html"]

Observe that in the continuous time with any choice of parameters simulated
[power spectral density](/tag/spectral-density/) follows analytical
prediction reasonably well. Most importantly, the surge in the power for
higher frequencies (one not predicted by the analytical formula) disappears.
This analysis allows us to conclude that it is merely an observation effect
unrelated to the process itself.
