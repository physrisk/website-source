Title: PACF and AR(p) models
Date: 2021-10-05 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistical physics, time series models, ARFIMA series, Brownian motion
Slug: pacf-ar-models
Image_url: uploads/2021/pacf-ar-models.png
Status: published

In [the last few posts](/tag/arfima-series/) we have seen that [random
walk](/tag/brownian-motion/) can be written in [recursive
form]({filename}/articles/2021/random-walk-as-ar-process.md), which suggests
that random walk is AR(1) process. We have also became familiar with the
[partial auto-correlation
functions]({filename}/articles/2021/pacf-explained-by-ritvikmath.md). Here
in this post we show that PACF can provide an intuition on the order of AR
which should be used in modeling the data.
<!--more-->

## Random walk and PACF

If we calculate PACF of a time series generated using random walk, we see
that PACF(1) is noticeably different from zero, while PACF for longer lags
is quite close to zero. This single peak hints that we need indeed AR(1)
model for this particular data:

\begin{equation}
    x\_t = \alpha\_1 x\_{t-1} + \xi\_t , \quad \text{given} \quad x\_0 = 0 .
\end{equation}

In the app below we have implicitly set \\\( \alpha\_1 = 1 \\\). Lower
values of \\\( \alpha\_1 \\\) would make the process stationary, but this
should not have any effect on the PACF plot.

[html5-interactive width="520" height="300" mode="iframe"
url="/uploads/models/arma/random-walk-pacf.html"]

Note that all values of PACF become close to zero if we apply differencing
procedure. This is expected, because in this case we revert back to AR(0)
model - white noise.

Another thing to notice in the app is that we do not plot PACF(0). As with
ACF(0) it will also be always equal to 1. We still plot ACF(0) in ACF plots
due to tradition, but we don't plot PACF(0) so that we could easily count
the peaks and know the order of the AR process to be used to model the data.

## AR(5) interactive app

Below we have a generalized app available, which allows you to consider AR
process up to fifth order:

\begin{equation}
    x\_t = \sum\_{i=1}^{5} \alpha\_i x\_{t-i} + \xi\_t
         = \vec{\alpha} \cdot \vec{x}^{(5)} + \xi\_t .
\end{equation}

Let the model parameters be encoded in vector \\\( \vec{\alpha} \\\).
Let \\\( \vec{x}^{(p)} \\\) contain last \\\( p \\\) samples of
\\\( x\_i \\\), starting from the most recent.

[html5-interactive width="520" height="510" mode="iframe"
url="/uploads/models/arma/ar5.html"]

Now observe how both ACF and PACF change, when you change the order of the
time series. As soon as more terms of \\\( \vec{\alpha} \\\) are noticeably
non-zero PACF changes to show more peaks.

Note that as you add more positive terms to \\\( \vec{\alpha} \\\)
notification about stationarity may change. The process ought to be
stationary if:

\begin{equation}
    \sum\_i \alpha\_i < 1 \quad \text{and} \quad \max( |\alpha\_i| ) < 1 .
\end{equation}

Note that the further your parameter set is from the boundary between
stationary and non-stationary regime the faster ACF decays.
