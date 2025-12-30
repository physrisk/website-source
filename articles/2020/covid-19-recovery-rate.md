Title: COVID-19: Estimating mean recovery rate
Date: 2020-10-13 08:00
Author: Aleksejus Kononovicius
Tags: interactive, epidemiology, statistics, GitHub
Slug: covid-19-recovery-rate
Status: published
Image_url: uploads/2020/covid-19-recovery-rate.png

This summer one of my colleagues asked me if I know what is the recovery rate
from COVID-19. While I have read a lot of papers, some of them claiming to use
"realistic" parameters, I still had no clue (as those "realistic" parameters
were in some cases wildly different). Yet as we have enough data available, we
can estimate recovery rate ourselves.
<!--more-->

Actually we need to define what we mean by "recovery rate", \\\( \lambda \\\).
Let us say that it is an inverse of a mean time it takes for a newly discovered
case to be reported as recovered. If we knew the discovery and recovery dates
for each individual, we could simply average the differences. Yet we have only
the [aggregated time series](https://github.com/CSSEGISandData/COVID-19).

Here in this post we will use CSSE time series for Lithuania. Data was
downloaded on August 7th, 2020.

## Manual approach

We can estimate the mean recovery time simply by shifting the recovered cases
time series, \\\( R(t) \\\), by some \\\( \Delta t \\\) in respect to the
confirmed cases time series, \\\( I(t) \\\). \\\( \Delta t \\\) for which both
time series look the most alike is our estimate of the mean recovery time.

Though due to deaths we can't make a direct comparison. We have to discount
\\\( I(t) \\\) by a factor of \\\( 1 - d \\\) to account for deaths. Here
\\\( d \\\) can be seen as an effective death probability, though the true
death probability will be slightly smaller.

To automatically estimate likeness between the time series we use
[root-mean-square error](https://en.wikipedia.org/wiki/Root-mean-square_deviation)
(abbr. RMSE). As of time of writing the post, we find the best result to be
\\\( \Delta t = 28 \\\) and \\\( d = 0.11 \\\). Though these numbers may change
as we update the data.

Feel free to check our estimate using the interactive app below. You just need
to change the parameter values and observe how RMSE changes (smaller values are
better).

[html5-interactive mode="iframe"
src="/uploads/models/epidemic-models/covid-19-recovery/index.html" width="520" height="240"]

In this app we have used red color to plot \\\( I(t) \times (1-d) \\\) and
blue color to plot \\\( R(t - \Delta t) \\\).

## Exponential recovery model

In [SIR models]({filename}/articles/2020/sir-model.md) all transitions are
assumed to Poisson processes. Namely, the transition times are assumed to be
distributed exponentially. Lets see what happens!

[html5-interactive mode="iframe"
src="/uploads/models/epidemic-models/covid-19-recovery/exp.html" width="520" height="270"]

The simulation result (gray curve) does not look good very good with neither
our estimated inverse mean recovery time,
\\\( \lambda^{-1} \approx \Delta t \\\), nor with other possible values.

Note that in this app we have calculated RMSE between the simulation result
and \\\( R(t) \\\). RMSE values will slightly vary as you generate new results
with the same parameter values.

So, while it seems that our estimate of mean recovery time is decent, the
exponential recovery model noticeably fails. We will try a different recovery
model in the next post.
