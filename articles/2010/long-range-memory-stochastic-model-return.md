Title: Long-range memory stochastic model of return
Date: 2010-12-10 09:35
Author: Aleksejus Kononovicius
Tags: Interactive models, Stochastic models, 1/f noise, A. Kononovicius, CEV process, J. Ruseckas, V. Gontis, financial markets
Slug: long-range-memory-stochastic-model-return
Status: published

From the practical point of view price is the most
interesting observable of the financial markets. Though modeling and
analysis of price fluctuations are hindered by the fact that price
itself is non-stationary process - mean price and market volatility
constantly change. While price changes, at least at short time scales,
behave as stationary process - mean price change is equal, or at least
approximately equal, to zero. Thus it is convenient to introduce
variable related to the relative price changes, which is known as
return  
<!--more-->

\begin{equation}
 r (t, \Delta t) = \ln \left\[ \frac{p(t)}{p(t-\Delta t)}\right\] . 
\end{equation}

If the change of price, \\\(  p(t)-p(t-\Delta t)  \\\), is small, then
the above definition of return is analogous to relative price change,
\\\(  \frac{p(t)-p(t-\Delta t)}{p(t-\Delta t)}  \\\).

There are few very common and general statistical properties of return.
Those statistical properties, also called *stylized facts*, were
established while analyzing return time series of different stocks from
different markets all over the world.

One of those facts is fat tails, leptocurtic, of return distribution.
Fatter than Gaussian empirical return distribution tails are most
usually fitted using power law functions (powers fluctuate between 3 and
4). In this text we use q-Gaussians, which are known to fit return
distributions in whole range of return values \[cite
id="GellMann2004Oxford"\] - not only the tail region as simple power law
functions do.

It is also known that autocorrelation of absolute return time series
decays very slowly - as power law. While the spectral density of
absolute return time series is known to be double power law - smaller
frequencies are fitted with power 0.9, while larger can be fitted with
power 0.2. In the figure below, [Fig. 1](#attachment_904), we have show
aforementioned statistical properties of one minute absolute returns
observed in New York (red line) and Vilnius (blue line) Stock Exchanges.

![image]({static}/uploads/2010/return-stylized-facts.png "Statistical properties of absolute one minute, Δt=60s,
returns - probability density function of non-zero values (a) and power
spectral density (b) - from two different financial markets. Red curves
represent New York Stock Exchange, while blue correspond to statistical
properties of return in Vilnius Stock Exchange. Black curves approximate
empirical data - (a) q-Gaussian (q=1.55), (b) power law functions
(powers 0.9 and
0.2)."){#attachment_904} 

Note that in [Fig. 1](#attachment_904) statistical properties of
different financial markets slightly differ. This happens mainly due to
the fact that time interval of return, \\\(  \Delta t \\\), is
significantly larger than mean inter-trade time in New York Stock
Exchange (approximately 3 seconds), but in case of Vilnius Stock
Exchange \\\(  \Delta t \\\) is smaller than mean inter-trade time
(approximately 362 seconds). Thus most of one minute time intervals in
New York Stock Exchange contain deals and price changes (75% of time
intervals have non-zero return), while majority of one minute time
intervals in Vilnius Stock Exchange are empty (92% of time intervals
have zero return). That is why spectral densities of two stock exchanges
slightly disagree, and the reason why we must compare probability
density functions of non-zero values.

In the next sections of this text we will replicate derivation of long
range memory stochastic model of return. Later in this work we will also
present interactive Java applet. The model and related works are
discussed in \[cite id="Gontis2010Intech"\] reference.

Langevin equation with q-Gaussian stationary distribution {#simple}
---------------------------------------------------------

From the stochastic analysis (see for example \[cite
id="Gardiner2009Springer"\]) it is known that, if in general case
Langevin equation can be written as

\begin{equation}
 \mathrm{d} r = f(r) \mathrm{d} t + g(r) \mathrm {d} W ,
\end{equation}

then stationary distribution of this equation is

\begin{equation}
 p (r) = \frac{1}{g^2(r)} \exp \left\[ 2 \int\frac{f(r)}{g^2(r)} \mathrm{d} r \right\] . 
\end{equation}

The above relation can be re-expressed in differential terms with
respect to one of the functions from Langevin equation, \\\(  f(r)  \\\)
or \\\(  g(r)  \\\),

\begin{equation}
 f(r) = \frac{1}{2} g^2(r) \frac{\partial\_r p(r)}{p(r)} +g(r) \partial\_r g(r) . 
\end{equation}

This differential relation is needed as we know that stationary
distribution must be q-Gaussian (more transparent form is obtained in
\[cite id="Gontis2010Intech"\]). \\\(  g(r)  \\\) we can choose freely,
thus in agreement with previous work \\\(  g(r) = \sigma (r\_0^2 +r^2)^{\frac{\eta}{2}}  \\\) is chosen. At this point we can already
write Langevin equation for return. Though by making some substitutions,
\\\(  x=\frac{r}{r\_0}  \\\), \\\(  t\_s = \sigma^2 r\_0^{2(\eta - 1)} t  \\\), we can obtain dimensionless stochastic
differential equation

\begin{equation}
 \mathrm{d} x = \left ( \eta - \frac{\lambda}{2} \right)\left( 1+x^2 \right)^{\eta-1} x \mathrm{d} t + \left( 1+x^2\right)^{\frac{\eta}{2}} \mathrm{d} W . 
\end{equation}

The equation above describes dynamics of momentary return, while we are
interested in compounded return. Thus the solutions of the above
equation must be integrated in chosen time intervals, \\\(  \tau \\\),

\begin{equation}
 X(t) = \frac{1}{\tau} \left | \int\limits\_{t}^{t+\tau}x(s) \mathrm{d} s \right | . 
\end{equation}

The above stochastic differential equation reproduces time series with
q-Gaussian stationary distribution (power fitting the tail is \\\( \lambda  \\\)) and power law spectral density - in one region approximated
by power law function with power \\\(  \beta = 1 - \frac{3 -\lambda}{2 (\eta-1)}  \\\) (see \[cite
id="Kaulakys2009JStatMech"\]). By manipulating with model parameter
\\\(  \lambda  \\\) and \\\(  \eta  \\\) values one can obtain almost
any spectra with \\\(  \beta \in \[0.5,2\] \\\). As an example we
provide 1/f spectral density (see [Fig. 2b](#attachment_908)).

![image]({static}/uploads/2010/simple-sde.png "1/f noise obtained from the above SDE. Red curves
correspond to model statical properties (probability density function
(a), spectral density (b)), while black curves fit modelic statistical
properties (q-Gaussian, q=1.66, (a), power law function, β=1, (b)). Used
model parameters: λ=3, η=1.5, τ=0.02. Model statistical properties
averaged over 100 realizations containing 4096
points."){#attachment_908} 

Langevin equation with double power law spectral density
--------------------------------------------------------

Though results presented in [Fig. 2](#attachment_908) are already
astonishing, but as we saw in [Fig. 1b](#attachment_904) power spectral
density of absolute return is fractured (containing two different power
law regions). To reproduce the fracture one must to divide space of
\\\(  x \\\) diffusion into two different multiplicativity regions.
Improved stochastic differential equation, with two powers of
multiplicativy, can be written as

\begin{equation}
 \mathrm{d} x = \left ( \eta - \frac{\lambda}{2} \right)\frac{\left( 1+x^2 \right)^{\eta-1}}{\left( 1 + \epsilon\sqrt{1+x^2} \right)^2} x \mathrm{d} t + \frac{\left( 1+x^2\right)^{\frac{\eta}{2}}}{1 + \epsilon \sqrt{1+x^2}} \mathrm{d}W , 
\end{equation}

here \\\(  \epsilon  \\\) parameter controls division of \\\(  x \\\)
diffusion space. One can introduce into the above equation new terms,
which would restrict diffusion of \\\(  x \\\). If those terms are not
introduced one would need to limit numerical solutions using min and max
functions available in most programing languages. We propose to
introduce \\\(  - \left( \frac{x}{x\_{max}} \right)^2  \\\)
(this is default variation used in the most recent articles) or \\\( - (x \epsilon)^2  \\\) (this is non-default variation, which was used
in our first article concerned with return modeling).

Introduction of q-Gaussian noise
--------------------------------

Yet still solutions of the above equation appear to be smoother than
empirical time series \[cite id="Gontis2010Intech"\] - difference
between power laws approximating model spectra are minor, while in the
time domain model return fluctuates as slow continuous function.
Similar behavior is demonstrated by the moving average of actual return.
Thus this encourages us to proposed to decompose return into two very
different processes - slow long-range memory process (described by
Langevin equation) and fast large fluctuation process (noise).

Empirical analysis \[cite id="Gontis2010Intech"\] shows that fast
fluctuations is also q-Gaussian, \\\(  r = \zeta \left( r\_0 ,\lambda\_2 \right)  \\\). Power, \\\(  \lambda\_2  \\\) of the
distribution tail appears to be constant and equal to 5. While \\\( r\_0 \\\), responsible for variance in time series, appears to be linearly
related to the moving average of return, \\\(  MA(r(t)) \\\),

\begin{equation}
 r\_0(MA(r(t))) = 1 + 2 \left | MA(r(t)) \right | . 
\end{equation}

As \\\(  MA(r(t)) \\\) seems to behave similarly to \\\(  X  \\\) we can
rewrite above relation as

\begin{equation}
 r\_0 (t) = 1 + \frac{\bar {r\_0}}{\tau\_s} \left |\int\limits\_{t\_s}^{t\_s + \tau\_s} x(s) \mathrm{d} s \right | ,
\end{equation}

here \\\(  \bar {r\_0}  \\\) is model parameter bearing the meaning of
mean return per unit time interval.

Thus now we first solve stochastic differential equation, then we
integrate its solutions in some intervals and then modulate those
solutions with q-Gaussian noise. Results obtained in this way is in
great agreement with empirical data (see [Fig. 3](#attachment_910)).

![image]({static}/uploads/2010/return-model-vs-nyse-vvpb-comparison.png "Comparison of return model (black curve) and empirical
(New York Stock Exchange - red curve, Vilnius - blue) statistical
properties, non-zero value probability density function ((a) ir (c)) and
power spectral density ((b) ir (d)), in different time scales (1 min -
(a) and (b), 30 min - (c) and (d)). Model parameters: \\\( \tau\_s =2 \cdot 10^{-4} \\\) (1
min) and \\\( τ\_s=6 \cdot 10^{-3} \\\) (30 min), \\\( λ\_2 = 5 \\\), \\\( {\bar r}\_0=0.4 \\\), \\\( \lambda=3.6 \\\), \\\( \varepsilon =0.017 \\\),
\\\( \eta =2.5 \\\), \\\( x\_{max}=1000 \\\)."){#attachment_910} 

Applet
------

HTML5 applet below solves differential equations above using
Euler-Maruyama method \[cite id="Kloeden1999Springer"\]. We also use
variable time step. In such case stochastic differential equations
becomes a set of difference equations for time and return. In case of
the last stochastic differential above

\begin{equation}
 x\_{i+1} = x\_{i} + \kappa^2 \left \[ \eta -\frac{\lambda}{2} - \left( \frac{x\_i}{x\_{max}} \right)^2\right\] x\_i + \kappa \sqrt{1+x\_i^2} \xi\_i , 
\end{equation}

\begin{equation}
 t\_{i+1} = t\_{i} + \kappa^2 \frac{\left( 1 + \epsilon\sqrt{1+x\_i^2} \right)^2}{\left( 1+x\_i^2 \right)^{\eta-1}},
\end{equation}

here \\\(  \xi\_i  \\\) is Gaussian noise (zero mean, unit variance) and
\\\(  \kappa  \\\) is numerical precision parameter.

[html5-interactive width="520" height="615" mode="iframe"
url="/uploads/models/grk-return-model/index.html"]

You can also download a full java program with GUI in
[Lithuanian]({static}/uploads/2010/returnModel.jar)
or [English]({static}/uploads/2010/returnModelEn.jar) language (the code
for this GUI program is also available from
[GitHub](https://github.com/akononovicius/return-model-GRK-PhysA2010)).
Note that only GUI was localized - meaning that CLI is English in both
cases.
