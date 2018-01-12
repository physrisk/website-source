Title: COVID-19: Recovery model with convolution
Date: 2020-11-10 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, epidemiology, statistics, convolution
Slug: covid-19-recovery-model-convolution
Status: published
Image_url: uploads/2020/covid-19-recovery-model-convolution.png

In the [previous post]({filename}/articles/2020/covid-19-weibull-recovery.md) we
have shown that Weibull recovery model works well when trying to reconstruct
the recovered cases time series from the confirmed cases time series. In that
post we have used random simulation to generate fake recovered cases time
series. In this post we will use convolution to get the expected recovered
cases time series.<!--more-->

Suppose we want to obtain expected number of recovered individuals at moment
\\\( t \\\) given only the confirmed cases time series, \\\( I(t) \\\). Let us
assume that we know recovery time distribution whose probability density
function \\\( p( \tau ) \\\) is known. At some later point we will assume that
the recovery time distribution is Weibull distribution, but for now let us
keep things general.

At time \\\( t \\\) we will have to consider all individuals who were confirmed
on all moments prior and including \\\( t \\\). Individuals who were confirmed
on \\\( t \\\) will recover with probability \\\( p(0) \\\), because they had
\\\( tau = 0 \\\) days to recover. While individuals confirmed on \\\( t-1 \\\)
(yesterday) will recover with probability \\\( p( \tau = 1 ) \\\). The same
logic applies for all previous days in the time frame of epidemic. Adding all
these probabilities together we get:

\begin{equation}
    E[r(t)] = i(t) p(0) + i(t-1) p(1) + \ldots + i(0) p(t) =
        \sum\_{\tau=0}^t i(t-\tau) p(\tau) .
\end{equation}

The above is discrete convolution formula. For continuous observations one
could replace it with an integral expression. Note that here \\\( i(t) \\\),
\\\( r(t) \\\) and \\\( p(\tau) \\\) are discrete. In the app below we
discretize \\\( p(\tau) \\\) from Weibull probability density function, which
is not precise (it would be better to use cumulative distribution function
instead), but works as an easy approximation.

Also note that in the convolution formula we have used lowercase letters to
denote time series. This is to indicate that this formula use the daily new
confirmed/recovered cases time series. But the formula applies to the
cumulative time series (for which we use capital letters) as well:

\begin{equation}
    E[R(t)] = \sum\_{\tau=0}^t I(t-\tau) p(\tau) .
\end{equation}

Now after doing this foundation we can do a comparison between the expected
recovered cases time series and the empirical recovered cases time series. We
have found an optimal RMSE between the series with \\\( k = 2.67 \\\) and
\\\( \lambda = 1/32.2 \\\). Mean recovery time in this case is:

\begin{equation}
    \langle \tau \rangle = \frac{\Gamma(1+1/k)}{\lambda} \approx 28.62 .
\end{equation}

Which is close to our manual estimate from a
[previous post]({filename}/articles/2020/covid-19-recovery-rate.md).

You may find a better set of parameters using the interactive app below. Feel
free to try.

[html5-interactive mode="iframe"
src="/uploads/models/covid-19-rec/weib-conv.html" width="520" height="270"]
