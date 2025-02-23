Title: Reed-Hughes mechanism
Date: 2020-09-15 08:00
Author: Aleksejus Kononovicius
Tags: interactive, epidemiology, statistics, Reed-Hughes mechanism
Slug: reed-hughes-mechanism
Status: published
Image_url: uploads/2020/reed-hughes-mechanism.png

In this post we present a theoretical explanation for the power-law distributions
observed in the
[spatial growth of COVID-19]({filename}/articles/2020/covid-19-spatial-growth.md).
From theoretical point-of-view it is interesting why power-law distribution is
observed in the data, as typical epidemic spread is characterized by
an exponential distribution (at least the [SIR model]({filename}/articles/2020/sir-model.md)
predicts this). Yet, the explanation is pretty simple and is based on
the Reed-Hughes mechanism [cite id="Reed2002PRE"].
<!--more-->

So, [SIR model]({filename}/articles/2020/sir-model.md) predicts that in the
initial stage of epidemic the growth of confirmed cases will be exponential.
Let us consider only this initial stage and thus describe the growth of
cumulative number of detected cases as follows:

\begin{equation}
    I \left( t \right) = \exp\left( \mu [t - t\_0] \right) =
        \exp\left( \mu \tau \right) .
\end{equation}

In the above \\\( t\_0 \\\) is the start time of epidemic, while \\\( \tau \\\)
is the elapsed time. This growth law applies for \\\( t \geq t\_0 \\\) or
\\\( \tau \geq 0 \\\).

Another obvious thing is that in a country as large as United States, epidemic
would start at very different times in different locations. Let us assume that
\\\( t\_0 \\\) are exponentially distributed with the origin point being the
time of the first confirmed case. In this case \\\( \tau \\\) will be also
exponentially distributed:

\begin{equation}
    p\_{\tau} \left( \tau \right) = \nu \exp\left( -\nu \tau \right) .
\end{equation}

Let us now find \\\( p\_I(I) \\\) by requiring that the probabilities to find
observations in the infinitesimally small ranges would be equal:

\begin{equation}
    p\_{\tau} \left( \tau \right) \mathrm{d} \tau =
        p\_I \left( I \right) \mathrm{d} I .
\end{equation}

After few trivial algebraic manipulations we get:

\begin{equation}
    p\_I = p\_{\tau} \frac{\mathrm{d} \tau}{\mathrm{d} I} =
        \frac{\nu}{\mu} I^{\frac{\nu}{\mu}-1} .
\end{equation}

So we can reasonably expect that \\\( I \\\) should be power-law distributed.
Note that as \\\( \tau > 0 \\\) is always true, \\\( I \\\) will take values
large than \\\( 1 \\\). These observations as well as the restrictions are
perfectly reasonable from the
[empirical point-of-view]({filename}/articles/2020/covid-19-spatial-growth.md).

You can explore Reed-Hughes mechanism using the app below. Blue curve shows
the probability density function of \\\( \tau \\\), while the red curve shows
the probability density function of \\\( I \\\). The scale is double
logarithmic so the red curve should be almost straight line (representing
power-law dependence).

[html5-interactive mode="iframe"
src="/uploads/models/stats/concepts/reed-hughes/index.html" width="520" height="270"]
