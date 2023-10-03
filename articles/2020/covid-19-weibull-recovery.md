Title: COVID-19: Weibull recovery model
Date: 2020-10-27 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, epidemiology, statistics
Slug: covid-19-weibull-recovery
Status: published
Image_url: uploads/2020/covid-19-weibull-recovery.png

In the [previous post]({filename}/articles/2020/covid-19-recovery-rate.md) we
have estimated mean recovery time in COVID-19 Lithuanian data set. We have
tried to generate fake recovery time series assuming that recovery times are
exponentially distributed. We have failed. This time we will assume that
recovery times are Weibull distributed.<!--more-->

Assuming exponential distribution to describe the recovery times has a specific
meaning. It means that the recovery rate is constant in time. Namely, it does
not matter how long some one is sick, the time one will continue being sick
will be exponentially distributed with the same recovery rate.

Weibull distribution takes into account ageing effects. Namely, the recovery
rate varies in time:

* With \\\( k < 1 \\\) it decreases in time. While larger number of quick
recoveries is observed. Though note that extremely long recoveries are also
more probable in comparison to simple exponential distribution.
* With \\\( k > 1 \\\) the recovery rate increases in time. There is smaller
number of quick recoveries, but extremely long recoveries are also less
probable in comparison to simple exponential distribution.
* In special case of \\\( k = 1 \\\) Weibull distribution is identical to
exponential distribution.

We parametrize Weibull distribution as follows (assuming \\\( \tau > 0 \\\)):

\begin{equation}
    p(\tau) = k \lambda \left(\lambda \tau \right)^{k-1}
        \exp\left[ - \left(\lambda \tau \right)^k \right] .
\end{equation}

For the data available we have observed that \\\( k = 2.5 \\\) and 
\\\( \lambda^{-1} = 32 \\\) generate quite good simulation results. This
parameter set implies average recovery time of:

\begin{equation}
    \langle \tau \rangle = \frac{\Gamma(1 + 1/k)}{\lambda} \approx 28.4 .
\end{equation}

Which is really close to the value we have estimated manually in the previous
post.

[html5-interactive mode="iframe"
src="/uploads/models/covid-19-rec/weib.html" width="520" height="270"]

Likely, a better set of parameters could be found by conducting multiple
simulations with the same parameters (estimating confidence intervals for
RMSE) or by using convolution (the topic of our next post). At this point we
have to satisfy ourselves with a simple example providing an interesting point -
recovery times are more likely to be Weibull distributed than to be
exponentially distributed.
