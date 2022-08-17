Title: Standard deviation of anomalous diffusion
Date: 2020-12-22 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistical physics, Stochastic models, anomalous diffusion, Levy processes
Slug: standard-deviation-of-anomalous-diffusion
Status: published
Image_url: uploads/2020/anomalous-diffusion-std.png

In a [previous post]({filename}/articles/2020/anomalous-diffusion.md) we have
used mean squared displacement to understand diffusion of Brownian and Levy's
walks. Alternatively we could use a more familiar statistical measure: variance
(or standard deviation).<!--more-->

## Discussion

While mean squared displacement could be seen as more of temporal measurement
tool (most of the calculations happen over time), variance (or standard
deviation) could be seen as more of ensemble tool (most of the calculations
happen over ensemble). I believe that MSD is better suited when the diffusion
is homogeneous, while variance (or standard deviation) could be also used
when the diffusion is heterogeneous.

Both Brownian walk and Levy's walk considered in the
[previous post]({filename}/articles/2020/anomalous-diffusion.md) represent
homogeneous diffusions. So we have correctly applied MSD, but we can also
try using variance (or standard deviation).

Note that I have kept mentioning standard deviation. When dealing with data
I prefer standard deviation over variance, because standard deviation has the
same units as data, so its interpretation comes a bit more naturally.
Therefore I'll be using \\\( \sigma\_t \\\) parametrized as follows:

\begin{equation}
    \sigma\_t = \sqrt{\frac{1}{N-1} \sum\_{i=1}^N ( x^{(i)}\_t - \mu\_t )^2} .
\end{equation}

In the above \\\( x^{(i)}\_t \\\) is a value of \\\( i \\\)-th trajectory at
time \\\( t \\\) and \\\( \mu\_t \\\) ensemble average at time \\\( t \\\).

## Brownian walk

For Brownian walk we will often observe that:

\begin{equation}
    \sigma\_t \sim t^{0.5} .
\end{equation}

Note that the exponent is exactly half of what we get using MSD. This is
because I am relying on standard deviation and not variance. If I would have
used variance the exponents would be exactly the same.

[html5-interactive mode="iframe"
src="/uploads/models/diffusion/brown-std.html" width="520" height="240"]

## Levy's walk

For Levy's walk we would expect to observe:

\begin{equation}
    \sigma\_t \sim t^{\alpha} .
\end{equation}

Usually we will observe super-diffusive regime \\\( 0.5 < \alpha < 1 \\\) or
ballistic regime \\\( \alpha = 1 \\\). Actually [cite id="Zaburdaev2015RMP"]
suggests that:

\begin{equation}
    \alpha \approx \frac{3-\gamma}{2} .
\end{equation}

The equation above will hold as long as estimate of \\\( \alpha \\\) is within
allowed value interval.

[html5-interactive mode="iframe"
src="/uploads/models/diffusion/levy-std.html" width="520" height="270"]

