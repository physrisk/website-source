Title: Power-law distribution in linear GARCH model
Date: 2015-03-17 07:04
Author: Aleksejus Kononovicius
Tags: Economics, Interactive models, Stochastic models, A. Kononovicius, J. Ruseckas, arch, financial markets
Slug: power-law-distribution-in-linear-garch-model
Status: published

Recently journal Physica A
accepted our, A. Kononovicius and J. Ruseckas, manuscript titled
"Nonlinear GARCH model and 1/f noise" \[cite
id="Kononovicius2015PhysA"\]. In this article we shown that simple
memory-less model with nonlinear term may exhibit interesting stylized
fact - long-range memory. Our manuscript is even more interesting due to
the fact that considered model (and its various modifications) is
somewhat widely used by the practitioners.

In the next couple of blog posts we will present the main results of the
manuscript. We will start with a simple demonstration that GARCH(1,1)
model may exhibit power law distributions<!--more-->

The main idea behind GARCH models is very simple - some economic
variables are heteroskedastic. Namely they may be modeled as two
processes - one stochastic noise (most frequently Gaussian noise, though
other noises are also used depending on the application), \\\( \omega\_t \\\), while the other is deterministic standard deviation,
\\\(  \sigma\_t \\\):


\begin{equation}
 z\_t = \sigma\_t \omega\_t . 
\end{equation}


Standard deviation at time \\\(  t \\\) depends on the past history of
standard deviations as well as observables:


\begin{equation}
 \sigma^2\_t = a + \sum\_{i=1}^p b\_i \sigma^2\_{t-i}\omega^2\_{t-i} + \sum\_{i=1}^q c\_i \sigma^2\_{t-i} .\label{garch11}
\end{equation}


If \\\(  p &gt; 1 \\\) or \\\(  q &gt; 1 \\\), then the system state is
influenced not only by the current state, but also by its prior
evolution. Thus such process does "remember" its own past. Yet if
\\\(  p=q=1 \\\), then the systems should remember only its current state
and thus be memory-less.

Note that in case of \\\(  p=q=1 \\\), equation for standard deviation
looks very much alike difference equation. Thus \eqref{garch11}
may be rewritten as a continuous process of \\\(  y =\sigma\_t^2 \\\):


\begin{equation}
 \mathrm{d} y = B^2 \left( 1 - \frac{\lambda}{2} +\frac{1}{2} \cdot \frac{y\_{min}}{y} \right) y \mathrm{d} t + | B |y \mathrm{d} W , 
\end{equation}


here \\\(  \lambda = 2 + \frac{1-b\_1-c\_1}{b\_1^2} \\\), \\\( y\_{min}=\frac{a\_1}{b\_1^2} \\\), \\\(  B^2 \propto b\_1^2  \\\). This
stochastic differential equation is very similar to geometric Brownian
motion, thus its spectral density should be Browninan-like, \\\(  S(f)\sim 1/f^2 \\\).

![Fig.
1: Stationary probability density function of y (a) and spectral density
of its time series
(b).](/uploads/2015/garch11.png "
Stationary probability density function of y (a) and spectral
density of its time series (b). The following parameters were used:
\\\( a\_1=0.015 \\\), \\\( b\_1=0.1 \\\), \\\( c\_1=0.89 \\\) (red squares), \\\( 0.88 \\\) (blue circles), \\\( 0.87 \\\) (magenta triangles)."){#attachment_2766} 

This is confirmed by our numerous papers \[cite
id="Kaulakys2004PhysRevE,Kaulakys2006PhysA,Kaulakys2009JStatMech"\], in
which we consider a general class of stochastic differential equations:


\begin{equation}
 \mathrm{d} x = \sigma^2 \left( \eta - \frac{\lambda}{2}\right) x^{2 \eta -1} \mathrm{d} t + \sigma x^\eta \mathrm{d} W. 
\end{equation}


We invite you to confirm that yourselves using HTML5 app below. Please
allow the simulation takes its time - correct results appear when power
law distribution becomes visible.

[html5-interactive
url="/uploads/models/garch11/index.html" width="470"
height="480" mode="iframe"]

Next time we will be back with GARCH(1,1) - we will introduce nonlinear
term into it and thus obtain a model exhibiting a long-range memory
property.
