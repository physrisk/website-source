Title: Special cases of the stochastic differential equation reproducing 1/f noise
Date: 2012-07-09 07:44
Author: Aleksejus Kononovicius
Tags: stochastic models, 1/f noise, Bessel process, CEV process, CIR process
Slug: special-cases-of-the-stochastic-differential-equation-reproducing-1f-noise
Status: published

Considerable part of [stochastic
models](/tag/stochastic-models/)
available on Physics of Risk website (ex., [Agent based herding model of
financial
markets]({filename}/articles/2011/agent-based-herding-model-financial-markets.md)
or [Long-range memory stochastic model of
return]({filename}/articles/2010/long-range-memory-stochastic-model-return.md))
are related to the general class of stochastic differential equations
derived by our group \[cite
id="Ruseckas2010PhysRevE,Ruseckas2011PhysRevE"\]. The general form of
this class is the following stochastic differential equation:

\begin{equation}
 \mathrm{d} x = \left(\eta - \frac{\lambda}{2} \right)x^{2 \eta -1} \mathrm{d} t + x^\eta \mathrm{d} W . \label{sde}
\end{equation}

In our talks at various [scientific events](/tag/conference/)
and on Physics of Risk itself we frequently say that this equation also
encompasses other widely known stochastic processes. Thus further in
this text we will show some of the relations between this class and some
widely known stochastic processes.
<!--more-->

Variable transformation
-----------------------

One of the most simple ways to related two stochastic processes is to
transform the modeled variable. The formula for the transformation, via
Ito's lemma, is as follows \[cite id="Gardiner2009Springer"\]:

\begin{equation}
 \mathrm{d} y(x) = \left\[ A\_x(x) \partial\_x y(x) +\frac{1}{2} B\_x^2(x) \partial^2\_x y(x) \right\] \mathrm{d} t +B\_x(x) \partial\_x y(x) \mathrm{d} W , 
\end{equation}

here x is a stochastic process from which we start, y is a stochastic
process which we are willing to obtain, A is a drift function of the
"primary" stochastic differential equation (describing stochastic
process x), while B is a diffusion function of the same stochastic
differential equation.

The only problem is to select the correct relations between the two
stochastic processes From the above variable transformation formula we
can require that the new drift or diffusion functions would take certain
shapes. In most cases it will be rather hard to introduce the two
requirements. We have used this approach in our recent paper \[cite
id="Gontis2012ACS"\] to relate \eqref{sde} and [Bessel
process](/tag/bessel-process/).
We have set up the requirement for the diffusion function of the
resulting process:

\begin{equation}
 x^\eta \partial\_x y(x) = \pm 1 . 
\end{equation}

This differential equation provides two possible transformation! Yet the
Bessel process is defined only for positive real numbers, thus we have
only one meaningful Lamperti transformation:

\begin{equation}
 \ell:x \mapsto y(x) = \frac{1}{(\eta-1) x^{\eta-1}} ,
\end{equation}

which transforms \eqref{sde} to a Bessel process:

\begin{equation}
 \mathrm{d} y = \left( \nu + \frac{1}{2} \right)\frac{\mathrm{d} t}{y} + \mathrm{d} W , 
\end{equation}

where \\\(  \nu = \frac{\lambda - 2 \eta +1}{2 (\eta -1)}  \\\)
is an index of the Bessel process.

Variable transformation method might not be useful in the most cases,
yet if one is lucky enough. He will be able to obtain very strong
evidence for the full equivalence of the processes.

Introducing exponential restrictions and selecting parameter values
-------------------------------------------------------------------

This method allows to obtain correspondence between two stochastic
processes in another way - by introducing specific conditions and
selecting specific parameter sets. If one shows that stochastic
processes agree using this method then the less general process might be
said to be a separate case of more general process.

The aforementioned Bessel process can be obtained from \eqref{sde}
by setting \\\(  \eta =0 \\\):

\begin{equation}
 \mathrm{d} x = - \frac{\lambda}{2} \frac{\mathrm{d} t}{x} +\mathrm{d} W . 
\end{equation}

The index of such Bessel process is \\\(  \nu =-\frac{\lambda+1}{2} \\\).

It is also very easy to obtain the squared Bessel process, one just has
to set that \\\(  \eta = 0.5 \\\):

\begin{equation}
 \mathrm{d} x = \frac{1-\lambda}{2} \mathrm{d} t + \sqrt{x}\mathrm{d} W . 
\end{equation}

The index of such squared Bessel process is \\\(  \nu = - \lambda \\\).
Note that for the full analogy between the processes one should also
transform time.

More complex [CEV](/tag/cev-process/) and [CIR](/tag/cir-process/)
processes might be obtained by introducing exponential diffusion
restrictions into \eqref{sde}:

\begin{equation}
 \mathrm{d} x = \left\[\eta - \frac{\lambda}{2} +\frac{m}{2} \left( \frac{x\_{min}}{x} \right)^m - \frac{m}{2}\left( \frac{x}{x\_{max}} \right)^m \right\] x^{2 \eta -1}\mathrm{d} t + x^\eta \mathrm{d} W . 
\end{equation}

Thus, if \\\(  \eta=1/2 \\\), \\\(  m=1 \\\), \\\(  x\_{min}=0 \\\) and
\\\(  x\_{max} = 1 \\\), one can obtain [CIR process](/tag/cir-process/):

\begin{equation}
 \mathrm{d} x = k (\theta -x) \mathrm{d} t + \sqrt{x}\mathrm{d} W , 
\end{equation}

where \\\(  k = 1/2 \\\) and \\\(  \theta = 1 - \lambda \\\).

While if \\\(  \eta = \lambda /2 \\\), \\\(  m = 2 \eta -2 \\\),
\\\(  x\_{min} = 1 \\\) and \\\(  x\_{max} \rightarrow \infty \\\), one
can obtain [CEV process](/tag/cev-process/):

\begin{equation}
 \mathrm{d} x = \mu x \mathrm{d} t + x^\eta \mathrm{d} W ,
\end{equation}

where \\\(  \mu = \eta -1  \\\). The relation of our stochastic models
to the [CEV process](/tag/cev-process/) is more broadly discussed in \[cite
id="Reimann2011PhysA,Kononovicius2012PhysA"\].
