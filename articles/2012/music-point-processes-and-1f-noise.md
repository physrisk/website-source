Title: Music, point processes and 1/f noise
Date: 2012-04-30 07:28
Author: Aleksejus Kononovicius
Tags: Stochastic models, 1/f noise, popular culture, point process
Slug: music-point-processes-and-1f-noise
Status: published

There is interesting observations in the music
by the great classical composers - statistical properties of their time
series appear to be as complex as social phenomena considered here on
Physics of Risk. Their music may seem to be both - at certain times
easily anticipated and predictable, while at the other times have large
unexpected deviations. Their music behaves as a pink or [1/f
noise](/tag/1f-noise/) \[cite
id="Voss1975Nature, Levitin2012PNAS"\]! In \[cite id="Voss1975Nature"\]
it was shown that the intensity time series of the music by the
classical composers and human speech time series have 1/f region in
their spectral densities. While in \[cite id="Levitin2012PNAS"\] these
ideas are applied towards musical rhythm. To us \[cite
id="Levitin2012PNAS"\] is especially interesting as this paper considers
our own model, \[cite id="Gontis2002MC, Kaulakys2005PhysRevE"\], as a
proper model for the [1/f noise](/tag/1f-noise/) in the spectral density of musical
rhythm.<!--more-->

Musical rhythm is an excellent example of the point process. Namely we
can see each individual key press as unit impulse at a certain moment.
In such case the time series is defined by the sum of such impulses:

\begin{equation}
 I(t) = \sum\_i \delta(t-T\_i) . 
\end{equation}

Note that the time series is also fully described by the event times,
\\\(  T \\\). Alternatively by assuming that our time series starts at
the origin we can describe the same time series using inter-event times:

\begin{equation}
 \tau\_i = T\_{i+1} - T\_i . 
\end{equation}

The inter-event times prove to be useful in the empirical analysis of
varying complex systems - be it [financial
markets](/tag/financial-markets/)
or music. In \[cite id="Gontis2002MC"\] it was noted that the empirical
financial market data has specific statistical features, which can be
modeled using the following equation as the model for inter-trade times:

\begin{equation}
 \tau\_{s,k+1} = \tau\_{s,k} + \gamma \tau\_{s,k}^{2 \mu-1} + \tau^\mu\_{s,k} \zeta\_{k} , 
\end{equation}

here \\\(  \tau\_{s,k} \\\) is the k-th scaled time between two
consecutive trades, \\\(  \gamma \\\) is related to the relaxation of
the time series (note that here we use slightly different form than in
\[cite id="Gontis2002MC, Kaulakys2005PhysRevE"\]), while \\\( \zeta\_{k} \\\) is a standard normal random variable (zero mean and unit
variance). It should be evident that the above equation is difference
equation thus it can be rewritten as Langevin equation and that for
further analysis we can use [stochastic
calculus](/tag/stochastic-models/).

In this text we won't consider more delicate topics related to the point
process model. We just have to mention that the spectral density of the
point process model in a certain range of frequencies can be
approximated by the power law:

\begin{equation}
 S(f) \sim 1/f^\beta , \quad \beta = 1 + \frac{2 \gamma -2 \mu}{3 - 2 \mu} , \quad 0.5&lt;\beta &lt;2 . 
\end{equation}

From this expression it should be evident that we will obtain pink noise
signal, if the inter-event times will change according the Brownian
motion. Namely if \\\(  \gamma = \mu = 0 \\\), the observed power law
will be approximately equal to 1, while our difference equation will be
the same as for the Brownian motion. While it is not the only case we
can obtain [1/f noise](/tag/1f-noise/) with the point process model, but this case is
almost surely the most interesting one.
