Title: Multifractality of time series
Date: 2011-10-27 09:53
Author: Aleksejus Kononovicius
Tags: Fractals, Interactive models, Stochastic models, voter model, Kirman model, methods, multifractality
Slug: multifractality-time-series
Status: published
Image_url: uploads/2011/multifractality-time-series.png

One of the conclusions of fractal
geometry is a fact that fractals unlike traditional Euclidean shapes
lack characteristic scale. Those "fractured" objects are self-similar -
defining geometry is clearly visible on multitude of scales. It is known
that self-similarity is observed not only in formally defined geometric
objects, such as [Sierpinski
triangle]({filename}/articles/2014/sierpinski-triangle.md)
or Koch
snowflake,
but also in the surrounding nature. One of my most favorite examples is
a comparison of tree, its branches and a leaf (for more inspiring
examples see [introduction of Fractals
section](/tag/fractals/))
- they all have branching structure and something green filling the
extra space in between.

The interesting thing, in context of the topic in focus, is that one can
extend fractal formalism beyond formal or natural geometric shapes. It
is also noticed that some of the natural processes exhibit fractal
features in their time series! It is known that geoelectrical processes
\[cite id="Telesca2005NJP"\], heartbeat \[cite id="Ivanov1999Nature"\]
and even human gait \[cite id="West2003PhysRevE"\] time series posses
this feature. While financial market, frequently analyzed on Physics of
Risk website, time series are also no exception \[cite
id="Peters1994Willey, Kwapien2005PhysA"\]. Though the aforementioned
time series are much more complex - they exhibit not monofractality
(single manner self-similar behavior as the aforementioned formal
geometric fractals do), but multifractality!<!--more-->

Fractality of time series
-------------------------

In Physics, but not only in Physics, scale invariance is mostly
associated with power law dependencies. One can put this idea down
mathematically as:

\begin{equation}
 W(a t) = a^H W(t) , 
\end{equation}

where \\\(  W(t) \\\) is some time series, \\\(  a \\\) some scale shift,
\\\(  H \\\) characteristic scaling exponent. Equality of the left hand
side and right hand side of equation doesn't need to be strict - in case
of stochastic processes it might represent purely statistical similarity
\[cite id="Riedi2002Birkhauser"\].

One of the most well known statistically self-similar processes is
Brownian motion, which also known as Wiener process. It is known that
Wiener process obeys Gaussian distribution with time dependent standard
deviation, which increases overtime as square root of elapsed time -
\\\(  \sigma \sim \sqrt{t-t\_0} = \sqrt{\Delta t}  \\\). Thus
we above relation holds for variance of Wiener process with \\\( H=0.5 \\\). It is worthy note that there is extension of this process known
as fractional Brownian motion, which may be represented by different
values of characteristic scaling exponent \[cite
id="Riedi2002Birkhauser"\].

The problem of monofractality in the time series still remain as Wiener
process, or its generalizations, is still described by single scaling
exponent. While multifractal time series would be described by a set of
scaling exponents \[cite id="Riedi2002Birkhauser,
Kantelhardt2002PhysA"\]. Nevertheless our understanding of fractality of
time series should have improved as now we should be able to understand
fractals, whose dimensions are not limited to spatial ones. Using this
example we have also understood what statistical self-similarity stands
for - it doesn't stand for strictly repeating shapes (as for example in
aforementioned Sierpinsky triangle case), it stands for repetition of
statistical properties, which describe observed random shapes.

As we have mentioned before we will be interested in processes with
broad \\\(  H \\\) spectrum. One can obtain it using varying methods
\[cite id="Riedi2002Birkhauser, Feder1988Plenum"\], while we will limit
ourselves to presentation of only one, yet very common and popular,
method - MF-DFA method \[cite id="Kantelhardt2002PhysA"\].

Multifractal detrended fluctuation analysis (MF-DFA)
----------------------------------------------------

**To begin with** (step 1) the analysis of time series using MF-DFA
method one should obtain the profile of time series:

\begin{equation}
 y\_i = \sum\_{k=1}^{i} \[x\_k - \langle x \rangle\] , \quad i=1, 2, \ldots, N , 
\end{equation}

here \\\(  y \\\) is profile, \\\(  x \\\) is the analyzed time series,
\\\(  \langle x \rangle  \\\) is its mean value, while \\\(  N \\\)
stands for the length of the series. Subtraction of mean is not
necessary, yet it might facilitate (depends on the method used for
detrending) calculations in further steps.

![image]({static}/uploads/2011/multifrac-signal-profile.png "Step 1: stochastic time series (a) and its profile (b).
Stochastic time series generated using standard Wiener
process."){#attachment_1972} 

**Afterwards** (step 2) one should split profile series into separate
non-overlaping segments with size \\\(  s \\\). After this operation one
should have \\\(  N\_s = \mathrm{int}(N/s) \\\) segments. For the most
\\\(  s \\\) there will be some leftover points, whose number is to small
to form another segment. If we are not willing to lose information
contained in them we should repeat the same process, namely splitting,
from the end of the profile series. In such case we effectively double
the number of segments - one should now have \\\(  2 N\_s \\\) segments.

During **the third step** trends in all segments are estimated. Trends
should be approximated by polynomial of the selected order. As there is
no restriction for possible selection, one can choose any positive
integer. MF-DFA title is appended based on the selected order. Thus if
one uses parabolic (or square) fits, then one can say that MF-DFA2 is
used. As it is problematic, in terms of computer resource and evaluation
time, to fit data with higher order polynomials, in practice polynomials
of first to third order are considered. For the sake of simplicity and
ease of presentation we use MF-DFA1 method, namely we use linear
least-square fits to detect and remove trends in the profile series.

![image]({static}/uploads/2011/multifrac-fitted-profile.png "Steps 2 and 3: we have split the profile (red curve)
into s=100 sized segments (splits are marked with dashed line) and
estimated their trends (blue curve). The profile has remained the same
as in , while the profile fits in each given segment are
linear."){#attachment_1973} 

**When the trends are known** (step 4) we can remove them by subtracting
them from the profile series. Mathematically for the segments, which
were formed the start of the series, \\\(  \nu = 1, 2, \ldots,N\_s \\\), this can be expressed as:

\begin{equation}
 F^2\_{\nu}(s) = \frac{1}{s} \sum\_{i=1}^{s} \left\[y\_{(\nu-1) s +i} - {\bar y}\_{\nu}(i) \right\]^2 , 
\end{equation}

while for the remaining segments, \\\(  \nu = N\_s +1, \ldots, 2N\_s \\\), same thing can be done like this:

\begin{equation}
 F^2\_{\nu}(s)= \frac{1}{s} \sum\_{i=1}^{s} \left\[y\_{N-(\nu-N\_s) s +i} - {\bar y}\_{\nu}(i) \right\]^2 . 
\end{equation}

![image]({static}/uploads/2011/multifrac-f2ns.png "Step 4: \\\( F\_ν^2(100) \\\) for the selected segments. Profile
and its splits remain the same as in Fig.
2."){#attachment_1974} 

**All what remains** (step 5) is to average obtained fluctuations
functions over all segments:

\begin{equation}
 F\_q(s) = \left\\\{ \frac{1}{2 N\_s} \sum\_{\nu=1}^{2 N\_s}\left\[ F^2\_{\nu}(s) \right\]^{\frac{q}{2}}\right\\\}^{\frac{1}{q}}. 
\end{equation}

In the above \\\(  q \\\) stands for generalized coefficient, which is
the one enabling us to recover multifractal features - it is also the
only difference from the original detrended fluctuation analysis (DFA)
method \[cite id="Kantelhardt2002PhysA"\]. It is worthy to note that
\\\(  q \\\) is a real number and if its value approaches zero the above
relation diverges. Thus in such case one must substitute ordinary
averaging procedure with exponential averaging:

\begin{equation}
 F\_0(s) = \exp\left\\\{ \frac{1}{4 N\_s} \sum\_{\nu=1}^{2N\_s} \ln\left\[ F^2\_{\nu}(s) \right\] \right\\\}. 
\end{equation}

**Finally** (step 6) by changing \\\(  q \\\) and \\\(  s \\\), while once
again iterating through steps 2, 3, 4 and 5, one obtains \\\( F\_q(s) \\\) curves. From their plots on log-log scale one should be able
to recover power law relations - \\\(  F\_q(s) \sim s^{h(q)}  \\\)
(here \\\(  h(q) \\\) is a generalized exponent, which is related to the
generalized Hurst exponents as \\\(  H(q) = h(q) -1 \\\) (for
non-stationary \\\(  h(q)>1 \\\) time series) or \\\(  H(q) = h(q) \\\)
(for stationary series, \\\( h(q)<1 \\\))). If generalized exponents
are constant or almost constant, then time series can be considered
monofractal. While if \\\( h(q) \\\) dependence (or in other words
spectrum) is rich, then time series can be considered multifractal.

![image]({static}/uploads/2011/multifrac-hurst-spectra.png "Steps 5 and 6: deviations from trends estimated for
different segment sizes (a) and generalized exponent spectrum (b).
Relations obtained from time series based on one presented in 
(original series extended to 32768
points)."){#attachment_1976} 

In the above figures we have illustrated different MF-DFA steps by
analyzing standard Wiener process. Thus the final result, [Fig.
4](#attachment_1976), namely the observed monofractality of time series
was not unexpected. Though at first glance it might occur that signal is
multifractal as width of \\\(  h(q) \\\) spectrum is non-zero as it
should be according to the theory. This discrepancy is caused by the
finite size of analyzed time series. Actually we have attempted to
obtain \\\(  h(q) \\\) spectrum in case of original, 1000 point wide,
time series, but the obtained \\\(  h(q) \\\) spectrum was unexpectedly
broad - 0.2 (approximately 15% of the mean \\\(  h(q) \\\)). While the
multifractal analysis of the same yet extended, 32768 points wide,
series (as you can see in [Fig. 4](#attachment_1976)) revealed narrower
spectrum - 0.04 (approximately 2.5% of the mean). Literature \[cite
id="Riedi2002Birkhauser, Kantelhardt2002PhysA"\] suggests that in the
infinite limit spectrum would converge to single dot.

Furthermore as we see in [Fig. 5](#attachment_1993) \\\(  h(q) \\\)
spectrum of multifractal time series is far more broader - 1.1
(approximately 90% of the mean). Curves presented in [Fig.
5](#attachment_1993) were obtained by analyzing time series generated by
the [Agent-based herding model of financial
markets]({filename}/articles/2011/agent-based-herding-model-financial-markets.md).
Multifractal properties of this model were already studied with two
different methods - GHHCF \[cite id="Kononovicius2012PhysA"\] and the
very same MF-DFA \[cite id="Kononovicius2011LNFK"\]. Also note the
difference in scaling of \\\(  F\_q(s) \\\) ([Fig. 5](#attachment_1993)
(a) and [Fig. 4](#attachment_1976) (a)).

![image]({static}/uploads/2011/multifractality-time-series.png "Multifractal features of Agent-based herding model of
financial markets: deviations from trends estimated for different
segment sizes (a) and generalized exponent spectrum (b). Model
parameters: \\\( \varepsilon\_1=\varepsilon\_2=1 \\\), \\\( \Delta t=0.001 \\\),
\\\( \tau(y)=1/y \\\)."){#attachment_1993} 

Additional information visible in generalized exponent spectrum
---------------------------------------------------------------

Actually MF-DFA is a generalization of an older DFA method. In case of
\\\(  q=2 \\\) MF-DFA produces exactly the same results as ordinary DFA
method would \[cite id="Kantelhardt2002PhysA"\] - \\\(  h(2) \\\) equals
exponent \\\(  h \\\) as it is understood in the original DFA framework.
Therefore interpretations which have originated from DFA \[cite
id="Buldyrev1995PhysRevE"\] might be also applied to the results
obtained with MF-DFA.

Judging from \\\(  h(2) \\\) time series might be \[cite
id="Buldyrev1995PhysRevE"\]:

-   anti-correlated, if \\\( h(2) < 0.5 \\\).
-   uncorrelated (be related to white noise), if \\\( h(2) \simeq 0.5 \\\).
-   positively correlated, if \\\( h(2) < 1 \\\).
-   strongly positively correlated, if \\\( h(2) \simeq 1 \\\). Or in
    other words exhibit so-called pink, or \\\( 1/f \\\),
    [noise](/tag/1f-noise/). Such
    time series should exhibit other long range memory related
    properties. Note that we have obtained such results with time series
    from Agent-based herding model of financial markets (see [Fig.
    5](#attachment_1993)).
-   non-stationary or similar to random walk, if \\\( h(2) < 1.5 \\\).
-   related to Brown noise or Wiener process, if \\\( h(2) \simeq 1.5 \\\). See [Fig. 4](#attachment_1976).

The above discussion can might be briefly mathematically expressed as
\[cite id="Buldyrev1995PhysRevE"\]:

\begin{equation}
 \gamma = 2 - 2 h(2) , \quad \beta = 2 h(2) - 1 , 
\end{equation}

here \\\(  \gamma \\\) is negative correlation function exponent, while
\\\(  \beta \\\) is negative power spectral density exponent. Note that
the above relations are strict in no way - they might hold for some
short regions of dependence, of for example frequencies (in case of power
spectral density).

It is important to note that actual \\\(  h(q) \\\) might be negative,
while MF-DFA is able to detect only its positive values. Though one can
extend the detectable range of \\\(  h(q) \\\) of repeating step 1 few
times. After each repetition detected generalized exponents increases by
1, \\\( \tilde{h}(q) = h(q) + n \\\) (here \\\( \tilde{h}(q) \\\) is
detected generalized exponent, \\\(  h(q) \\\) actual generalized
exponent and \\\( n \\\) is a number of step 1 repetition times),
allowing one to analyze strongly anti-correlated time series. This
property of generalized exponent also suggests what might be observed
for \\\(  h(2) > 1.5 \\\).

This discussion also leads to another interesting conclusion - if step 1
is skipped results obtained from MF-DFA method should also coincide with
results obtained from GHHCF method. For example Brownian-like time
series would have \\\( h(2) \\\) equal to 0.5. Though in such case it
would a problem to differentiate between Pink and White noises. The
corresponding time series would be almost indistinguishable - both very
different dynamics would produce the same value of \\\( h(2) \\\),
namely zero. Thus obtaining time series profile is very important step
needed to be able to distinguish Pink and White noises.

Singularity, Hölder exponent, spectrum
--------------------------------------

Singularity spectrum is an alternative way to characterize multifractal
series. It was derived to accompany standard textbook box counting
formalism \[cite id="Feder1988Plenum"\]. Box counting formalism is a
relatively simple and for a long time very popular method to determine
fractal features of analyzed objects (including spatial ones). Thus
singularity spectrum has become a default way to characterize
multifractal series.

Singularity spectrum, \\\(  f(\alpha) \\\), can be obtained by
transforming generalized scaling function defined in terms of box
counting formalism, \\\(  \tau(q) \\\). Note that \\\(  h(q) \\\) may
also be referred to as a scaling function (or scaling exponent), but it
is defined in the terms of MF-DFA or DFA, not in the terms of box
counting formalism. Though it is known that both scaling exponents are
related \[cite id="Kantelhardt2002PhysA"\]:

\begin{equation}
 \tau(q) = q h(q) -1 . 
\end{equation}

By transforming, using Legendre transform, \\\(  \tau(q) \\\) one
obtains \[cite id="Kantelhardt2002PhysA"\]:

\begin{equation}
 \alpha = \partial\_q \tau(q) = h(q) + q \partial\_q h(q) ,\quad f(\alpha) = q \alpha - \tau(q) = q \left\[ \alpha - h(q)\right\] +1 , 
\end{equation}

here \\\(  \alpha \\\) is Hölder exponent, which describes the strength
of singularity, while \\\(  f(\alpha) \\\) denotes the dimension of the
subset of the series described by certain Hölder exponent \[cite
id="Kantelhardt2002PhysA"\]. In [Fig. 6](#attachment_1994) we clearly
see large difference between the detected multifractality of the
analyzed models/processes - singularity spectrum of Agent-based herding
model of financial markets time series has broad spectrum of Hölder
exponents, while Wiener process has very thin spectrum.

![image]({static}/uploads/2011/multifrac-holder-spectra.png "Singularity spectrum: standard Wiener process (red
curve) and Agent-based herding model of financial markets (blue curve).
Parameters of Agent-based herding model of financial markets were set as
follows: \\\( \varepsilon\_1=\varepsilon\_2=1 \\\), \\\( \Delta t=0.001 \\\),
\\\( \tau(y)=1/y \\\)."){#attachment_1994} 

In scientific literature singularity spectrum is also frequently called
Hölder exponent spectrum \[cite id="Riedi2002Birkhauser"\].

Applet
------

GUI of the applet below is reminiscent of the previous
[applet]({filename}/articles/2011/agent-based-herding-model-financial-markets.md),
which was published together with the text on Agent-based herding model
of financial markets. Thus there is no point in discussing its input
parameters. Furthermore most of the input parameters are directly
related to the model discussed in the same text.

The only important differences are that this applet outputs
multifractality spectra and that it allows to deform model time series.
It is possible to remove correlations by shuffling time series and
distort the underlying distribution (values are remapped to the
\\\( \[0,1\] \\\) value region). Deformation of time series is very important
and useful function as multifractal features might be observed due to
correlations (model dynamics) and broad underlying distribution \[cite
id="Kantelhardt2002PhysA"\]. It is also known that multifractality can
be influenced by the number of agents in the agent-based model \[cite
id="passos2011"\], though we don't analyze this as it is already firmly
confirmed that in this model dependence of multifractality on the number
of agents is negligible \[cite id="Kononovicius2011LNFK"\].

[html5-interactive width="520" height="505" mode="iframe"
url="/uploads/models/kirman-sde-ret/multifractal.html"]
