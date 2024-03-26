Title: Multi-success detrapping process
Date: 2024-04-23 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistics, spectral density, random telegraph noise
Slug: multi-success-detrapping-process
Status: draft
Image_url: uploads/2024/multi-success-detrapping-process.png

When presenting [heterogeneous detrapping
process]({filename}/articles/2024/heterogeneous-detrapping-process.md) at
the [DPG conference]({filename}/articles/2024/our-group-attends-dpg-2024.md)
I got a question (or suggestion to check) what would happen if instead of
heterogeneous traps we would require multiple successes for the charge
carrier to escape?
<!--more-->

## Erlang distributed detrapping times

If we require the charge carrier to make \\\( N\_{success} \\\) successful
"escapes" before actually escaping the trap, and each individual escape
times are sampled from exponential distribution (with rate given by \\\(
\lambda\_\tau \\\)), then the overall detrapping time will follow [Erlang
distribution](https://en.wikipedia.org/wiki/Erlang_distribution) with \\\( k
= N\_{success} \\\) and \\\( \lambda = \lambda\_\tau \\\).

Probability density function of the Erlang distribution is given by

\begin{equation}
p(\tau) = \frac{\lambda^{k}}{(k-1)!} \tau^{k-1} \exp(-\lambda \tau).
\end{equation}

Observe that the asymptotic behavior of this probability density function is
exponential. I.e., for extremely large \\\( \tau \\\), we have that \\\(
p(\tau) \sim \exp(-\lambda \tau) \\\). Which leads us to predict that
nothing interesting will happen - the [power spectral
density](/tag/spectral-density/) should remain almost the same as predicted
in the earlier
[post]({filename}/articles/2023/noise-generated-by-single-charge-carrier.md).

![Comparison between one-success and multi-success signals and
PSDs]({static}/uploads/2024/multi-success-detrapping-process.png "Comparison
between one-success and multi-success signals and PSDs.")

When running the simulations on the interactive app below we see that larger
\\\( N\_{success} \\\) decreases the number of pulses in the observed
signal. This leads to slightly smaller signal [power spectral
density](/tag/spectral-density/), but does not induce other effects.

## Interactive app

This app is identical to the one presented in an earlier
[post]({filename}/articles/2023/noise-generated-by-single-charge-carrier.md),
but now you are encouraged to verify insights of this posts by changing \\\(
N\_{success} \\\) parameter values.

[html5-interactive width="520" height="530" mode="iframe"
url="/uploads/models/random-telegraph-noise/poiss.html"]
