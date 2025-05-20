Title: Stationary variance of AR(2) process
Date: 2025-05-20 08:00
Author: Aleksejus Kononovicius
Tags: interactive, time series models, statistics
Slug: stationary-variance-of-ar-2-process
Status: published
Image_url: uploads/2025/stationary-variance-of-ar-2-process.png

It is hard (or impossible) to directly obtain the analytical expression for
the [stationary distribution of the poll-delay voter
model]({filename}/articles/2025/stationary-distribution-of-poll-delayed-voter-model.md).
But we can look at various possible approximations, with the [Beta
distribution]({filename}/articles/2023/ritvikmath-beta-distribution.md)
being the prime suspect. To fit the Beta distribution (or any other
two-parameter distribution), we need to know two stationary moments of the
model.  Deriving the stationary mean is a trivial problem, while deriving
the stationary variance is more involved.

In this post, let us use the [Yule-Walker
equations]({filename}/articles/2025/ritvikmath-yule-walker-equations.md) to
obtain the expression for stationary variance of [AR(2)
process](/tag/time-series-models/).
<!--more-->

## Preliminaries

Given a second-order auto-regressive process:

\begin{equation}
    x\_t = \phi\_1 x\_{t-1} + \phi\_2 x\_{t-2} + \varepsilon\_t .
\end{equation}

In the above \\\( \varepsilon\_t \\\) is white noise with variance \\\(
\sigma^2 \\\), and \\\( \phi\_i \\\) are known parameter values.

While we know that the [poll-delay voter
model]({filename}/articles/2025/stationary-distribution-of-poll-delayed-voter-model.md)
is stationary, this is not general true for an arbitrary AR(2) process. So,
for arbitrary parameter values, we need to verify that the AR(2) process is
stationary. To do this, we need to find the roots of the characteristic
equation:

\begin{equation}
    1 - \phi\_1 z - \phi\_2 z^2 = 0 .
\end{equation}

The process is stationary if the roots of this equation lie outside the unit
circle. In other words, the roots may be complex numbers, but their modulus
must be greater than unity.

My exploration of the roots implies the conclusion that
AR(2) process will be stationary if \\\( \phi\_2 \in \left[-1,
1-\left|\phi\_1\right|\right] \\\) or \\\( \phi\_1 \in \left[-1+\phi\_2,
1-\phi\_2\right] \\\).

## Obtaining stationary variance

Now, if the process is stationary, we can formulate the Yule-Walker equations
(with \\\( \gamma\_i = \mathrm{Cov}(x\_t, x\_{t-i}) \\\)):

\begin{align}
    \gamma\_0 & = \phi\_1 \gamma\_1 + \phi\_2 \gamma\_2 + \sigma^2 , \\\\
    \gamma\_1 & = \phi\_1 \gamma\_0 + \phi\_2 \gamma\_1 , \\\\
    \gamma\_2 & = \phi\_1 \gamma\_1 + \phi\_2 \gamma\_0 .
\end{align}

We are interested in the expression for \\\( \gamma\_0 \\\) as it
corresponds to the stationary variance. The expression for stationary
variance:

\begin{equation}
    \gamma\_0 = \mathrm{Var}\left(x\_t\right) =
        \frac{(1-\phi\_2) \sigma^2}{(1+\phi\_2) \left(1-\phi\_1^2+\phi\_2^2-2 \phi\_2\right)} .
\end{equation}

While the expression is nonlinear, the dependence between the stationary
variance and the process parameters is underwhelmingly trivial. Maximum
variance is reached in the extremes (close to the non-stationarity bounds),
and is minimal when the parameter values are close to zero.

You can see exactly that in the interactive plots below. In the first plot,
you can adjust \\\( \phi\_2 \\\) value and observe the dependence of
variance on \\\( \phi\_1 \\\). Note that the plot shows variance values
between \\\( 0 \\\) and \\\( 15 \\\), to keep the plots readable (to "hide"
the infinities at the stationarity boundaries). If there is no stationary
variance (process is non-stationary), the variance is artificially assigned
a negative value.

[html5-interactive width="520" height="240" mode="iframe"
url="/uploads/models/stats/models/ar2/variance-phi1.html"]

The second plot is identical to the first one, but now you can adjust \\\(
\phi\_1 \\\) value and examine the dependence between \\\( \phi\_2 \\\) and
variance.

[html5-interactive width="520" height="240" mode="iframe"
url="/uploads/models/stats/models/ar2/variance-phi2.html"]

## Interactive app

If the variance plots are not as intuitive for you, you can visually explore
the effect \\\( \phi\_i \\\) parameters have using the app below. This app
generates sample time series of the process.

[html5-interactive width="520" height="250" mode="iframe"
url="/uploads/models/stats/models/ar2/index.html"]

Note that, for speed purposes, the noise values remain the same (i.e., they
are not regenerated when you change parameter values). If you want to
generate new samples, you'll have to reload this webpage.
