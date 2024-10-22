Title: COVID-19: Inverting recovery model
Date: 2020-11-24 08:00
Author: Aleksejus Kononovicius
Tags: interactive, epidemiology, statistics, convolution, linear algebra, back-projection method, simulated annealing
Slug: covid-19-inverting-recovery-model
Status: published
Image_url: uploads/2020/covid-19-inverting-recovery-model.png

In the recent series of posts we have discussed estimation of the recovery
time distribution from the empirical COVID-19 data (the confirmed cases time
series). This was a quite easy task as we know both the confirmed cases time
series and the recovered cases time series. In this post we will make an
attempt to solve an inverse problem. Namely, I will try to recover the confirmed
cases time series from the recovered cases time series.<!--more-->

Why do we care about an inverse problem at all? So far we have thought about
epidemiology within the framework of
[SIR model]({filename}/articles/2020/sir-model.md). Namely, we have considered
\\\( S \rightarrow I \rightarrow R \\\) transitions with both \\\( I \\\) and
\\\( R \\\) being observed. But what if the model would be a more complicated?
Say, if we would consider \\\( S \rightarrow E \rightarrow I \rightarrow R \\\)
(here \\\( E \\\) is the "exposed" compartment) transitions with \\\( E \\\)
being hidden (impossible to observe) state. In order to estimate \\\( E(t) \\\)
we would need to solve an inverse problem. Obviously, we would have to make some
assumptions about \\\( E \rightarrow I \\\) transition times.

To be able to check whether solution to the inverse problem is actually any
good I will remain within [SIR]({filename}/articles/2020/sir-model.md)
framework. Namely I will try to recover \\\( I(t) \\\) series from
\\\( R(t) \\\) series by assuming that the recovery time distribution is
Weibull with parameters we have found in an
[earlier post]({filename}/articles/2020/covid-19-recovery-model-convolution.md).

## Obvious (and wrong) approach

Quite a few bad papers I read have tried solving the inverse problem by using
an "obvious" approach:

1. Convert the recovered cases time series into individual recovery time data.
1. Subtract Weibull or exponentially distributed random values from the
individual recovery times to get individual confirmed time data.
1. Convert individual confirmed time data into the confirmed cases time series.

This approach is obvious, because we know that recovery times are random, so
it seems natural just to generate them, but instead of adding them to
subtract them. But this operation increases variance, which proper inversion
should not do. After proper inversion the data should become sharper, not
smoother.

[html5-interactive mode="iframe"
src="/uploads/models/epidemic-models/covid-19-recovery/deconv-bad.html" width="520" height="270"]

In the app above you can actually see that reconstructed time series (dark gray
curve) is smoother than the true \\\( I(t) \\\) series (red curve) and also
smoother than the shifted \\\( R(t) \\\) series (blue curve). Root-mean-square
error is actually worse between \\\( I(t) \\\) and the reconstructed time
series (shown in the app) than between \\\( I(t) \\\) and shifted
\\\( R(t) \\\) (\\\( \sim 51 \\\) from the previous app).

## Possible correct approaches

A correct approach would be to use **deconvolution**. In the
[earlier post]({filename}/articles/2020/covid-19-recovery-model-convolution.md) we
have used time domain convolution formula, but we could have also done
convolution via frequency domain:

\begin{equation}
    \mathcal{R}(\omega) = \mathcal{I}(\omega) \cdot \mathcal{P}(\omega) .
\end{equation}

Here the fancy capital letters denote Fourier transforms of the original
series, kernel (recovery time distribution) and the constructed series. It is
quite obvious on how to invert the expression:

\begin{equation}
    \mathcal{I}(\omega) = \frac{\mathcal{R}(\omega)}{\mathcal{P}(\omega)} .
\end{equation}

Yet in our case there is a problem that all three mathematical objects in the
expressions above are of the same length. So the reconstruction will not be
very precise. In discrete series sense, if length of \\\( I \\\) is
\\\( N\_I \\\) and length of \\\( p \\\) is \\\( N\_p \\\), then length of
\\\( R \\\) should be no less than \\\( N\_I + N\_p \\\) for deconvolution to
work. Having this in mind it is obvious that we can't use this approach
(actually just to be safe I have tried it, but using Python, and it indeed
did not work well).

Another possible approach is to treat convolution in terms of **linear
algebra**. The difference would be that kernel would now become a matrix, whose
inverse we could calculate. This also doesn't work well, most likely, due to
data being random and non-smooth (once again I have somewhat verified this
intuition using Python).

Method of **back-projection** appears to be the tool used by the
epidemiologists. The gist of the method is to treat the convolution formula as
predicting the rates and use it in Poisson regression model. What bugs me in
this case is once again the size of the data. It is hard for me to believe in
regression with as many parameters, \\\( I(t) \\\), as the number of data
points, \\\( R(t) \\\).

What I ended up doing is similar to the back-projection, but instead of Poisson
regression I have used
[the most metal algorithm in computer science]({filename}/articles/2020/scishow-the-most-metal-algorithm-in-computer-science.md) -
**simulated annealing**. The idea behind the method is pretty simple:
1. Initially make a reasonable guess (shifted \\\( R(t) \\\) is the initial
guess in the app below).
1. Try a random improvement of the current guess (the app below adds or
subtracts one confirmed case at a random time).
1. If the new guess is better than the old one (the app uses Poisson
log-likelihood as a goodness measure), then keep the new guess. Otherwise,
the new guess will be kept only with a small probability (which decreases in
time).

Use the app below to explore how well this method is able to reconstruct
\\\( I(t) \\\) series from \\\( R(t) \\\) series assuming Weibull recovery
time distribution with selected parameter values. Empirical \\\( I(t) \\\)
series is plotted as the red curve, empirical \\\( R(t) \\\) is given by the
blue curve, while reconstructed series are shown as dark and light gray curves.

[html5-interactive mode="iframe"
src="/uploads/models/epidemic-models/covid-19-recovery/deconv.html" width="520" height="270"]

In my opinion the best result is achieved with the default parameter values and
it is far from being perfect. While the reconstructed \\\( R(t) \\\) (light
gray curve) is quite close to the empirical \\\( R(t) \\\) (blue curve), so we
can see that our optimization goal is being reached. The problem is that the
reconstructed \\\( I(t) \\\) does not look very plausible or similar to the
empirical \\\( I(t) \\\). This could be due to over-fitting.

Situation could be improved by specifying some kind of likelihood (statistical
model) for the reconstructed \\\( I(t) \\\) series. For example, we could allow
only increments in \\\( I(t) \\\). In another app below we have assumed that
increments are normally distributed with zero mean and configurable standard
deviation. Observe how changing standard deviation changes the reconstructed
series.

[html5-interactive mode="iframe"
src="/uploads/models/epidemic-models/covid-19-recovery/deconv-norm.html" width="520" height="270"]

