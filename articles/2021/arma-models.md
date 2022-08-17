Title: ARMA(p, q) models
Date: 2021-10-19 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, time series models, ARFIMA series
Slug: arma-models
Image_url: uploads/2021/arma-models.png
Status: published

In [the last few posts](/tag/arfima-series) we have talked about how
physical models relate to ["economical"](/tag/economics) AR(p) models. Yet
our end goal is to about ARFIMA models of which "AR" makes up just about
1/3rd. In this post we introduce you to MA(q) models and show how they
combine AR(p) models to make up ARMA(p, q) models.
<!--more-->

## MA(q) model

Quite likely you are familiar with the concept of average. Moving average is
a generalization of this concept - it calculates averages not over all
sampled values, but over certain subset of subsequent samples. In practice
it is one of the simplest tools how to remove excessive randomness in the
time series. After applying moving average to some time series we often get
smoother representation of the same series.

MA(q) model applies this to the last q values of the noise terms.

\begin{equation}
    x\_t = \beta\_1 \xi\_{t-1} + \beta\_2 \xi\_{t-2} + \ldots
           + \beta\_q \xi\_{t-q} + \xi\_t
         = \sum\_{i=1}^{q} \beta\_i \xi\_{t-i} + \xi\_t
         = \vec{\beta} \cdot \vec{\xi}^{(q)} + \xi\_t.
\end{equation}

In the above \\\( \vec{\xi}^{(q)} \\\) stands for the \\\( q \\\) most
recent samples of noise, starting from the most recent.

This form is quite like the one of the [AR(p)
process]({filename}/articles/2021/pacf-ar-models.md), but instead of the new
value being dependent on the previous samples it is conditioned on the
history of noise.

[html5-interactive width="520" height="510" mode="iframe"
url="/uploads/models/arma/ma5.html"]

Note that in case of MA(q) process ACF plot becomes more informative. Now
the number of peaks (minus one) in the ACF plot seems to indicate the order
of MA process.

## ARMA(p, q) model

In practice crude models as AR(p) or MA(q) rarely work well. So they are
often combined to make ARMA(p, q) model, samples of which mathematically are
defined as:

\begin{equation}
    x\_t = \vec{\alpha} \cdot \vec{x}^{(p)}
         + \vec{\beta} \cdot \vec{\xi}^{(q)} + \xi\_t .
\end{equation}

With this model we have a system agnostic tool to do forecasts for real life
systems (although adding tool to deal with seasonality would help too). Now
everything has become a lot more complicated (though reality can be even
more complicated [cite id="Holmes2021ATSA"]), but feel free to explore using
the app below.

[html5-interactive width="520" height="540" mode="iframe"
url="/uploads/models/arma/arma55.html"]
