Title: Nonlinear feedback and long-range memory in GARCH model
Date: 2015-04-07 07:46
Author: Aleksejus Kononovicius
Tags: economics, interactive, stochastic models, 1/f noise, A. Kononovicius, J. Ruseckas, ARCH process, financial markets
Slug: nonlinear-feedback-and-long-range-memory-in-garch-model
Status: published
Image_url: uploads/2015/nonlinear-feedback-and-long-range-memory-in-garch-model.png

Recently journal Physica A accepted
our, A. Kononovicius and J. Ruseckas, manuscript titled "Nonlinear GARCH
model and 1/f noise" \[cite id="Kononovicius2015PhysA"\]. In this
article we shown that simple memory-less model with nonlinear term may
exhibit interesting stylized fact - long-range memory. Our manuscript is
even more interesting due to the fact that considered model (and its
various modifications) is somewhat widely used by the practitioners.

In previous blog posts we have demonstrated that [one can reproduce
power law distributions using GARCH(1,1)
model]({filename}/articles/2015/power-law-distribution-in-linear-garch-model.md)
and also that [nonlinear GARCH(1,1) model enables reproduction of
long-range
memory]({filename}/articles/2015/long-range-memory-in-nonlinear-garch-model.md).
In this blog post we once again touch the topic of long-range memory,
but now we consider nonlinear feedback.<!--more-->

[Previously]({filename}/articles/2015/long-range-memory-in-nonlinear-garch-model.md)
we have written down iterative equation, which has rather inconvenient
restriction - nonlinearity exponent \\\(  \mu \\\) may be only odd
integer. This requirement was set as \\\(  \omega \\\) may be both
positive and negative, thus some times it may be problematic to raise it
to certain power. This problem is solved by writing down the following
equation with respect to \\\(  \sigma^2 \\\):

\begin{equation}
 \sigma\_t^2 = a\_1 + b\_1 \sigma\_{t-1}^\mu |\omega\_{t-1} |^\mu + \sigma\_{t-1}^2 - c\_1 \sigma\_{t-1}^\mu .\label{ngarch112}
\end{equation}

Now \\\(  \mu \\\) may be any real number. Yet having in mind a general
class of stochastic differential equations proposed by our colleagues
\[cite
id="Kaulakys2004PhysRevE,Kaulakys2006PhysA,Kaulakys2009JStatMech"\],

\begin{equation}
 \mathrm{d} x = \sigma^2 \left( \eta - \frac{\lambda}{2}\right) x^{2 \eta -1} \mathrm{d} t + \sigma x^\eta \mathrm{d} W, \label{xsde}
\end{equation}

we restrict ourselves to \\\(  \eta &gt; 1 \\\) or, alternatively,
\\\(  \mu &gt; 2 \\\). HTML5 applet below is further restricted to
integer values, but this was done just for the sake numerical
efficiency.

Eq. \eqref{ngarch112} may be rewritten in continuous time as
stochastic differential equation with respect to \\\(  y=\sigma^2 \\\):

\begin{equation}
 \mathrm{d} y = \left( \frac{A}{y^{\mu-1}} +\frac{C}{y^{-1+\mu/2}} \right) y^{\mu-1} \mathrm{d} t + |B|y^{\mu/2} \mathrm{d} W\_t . 
\end{equation}

This equation is essentially identical to Eq. \eqref{xsde} and
to stochastic differential equation obtained in [previous blog
post]({filename}/articles/2015/long-range-memory-in-nonlinear-garch-model.md).
Comparing to the equation from the [previous blog
post]({filename}/articles/2015/long-range-memory-in-nonlinear-garch-model.md)
the only apparent difference is the power of \\\(  y \\\) in term with
\\\(  C \\\) parameter. Less apparent is the difference in relation
between the parameters. In this case they are as follows: \\\(  A =\lim\limits\_{h \rightarrow 0} \frac{a\_{1,h}}{h} \\\), \\\(  C =\lim\limits\_{h \rightarrow 0} \frac{b\_{1,h} \bar{\omega}\_\mu-c\_{1,h}}{h} \\\) and \\\(  B^2 = \lim\limits\_{h \rightarrow 0}\frac{b^2\_{1,h} \hat{\omega}\_\mu}{h} \\\) (here \\\(  h \\\) indexes
once again represent time scale sampled using \\\(  h \\\) time steps (in
general case parameter values in GARCH model may depend on the selected
time scale); \\\(  \bar{\omega}\_\mu = \langle | \omega |^\mu\rangle \\\), \\\(  \hat{\omega}\_\mu = \langle \[ |\omega|^\mu -\bar{\omega}\_\mu \]^2\rangle \\\)). Thus we expect to see that:

\begin{equation}
 p(y) \sim y^{-\mu} , \quad S(f) \sim f^{-1-\frac{\mu-3}{\mu-2}} . 
\end{equation}

[Fig. 1](#attachment_2774) confirms this as we are able to reproduce
[1/f noise](/tag/1f-noise/).

![Fig. 1: Reproducing 1/f noise using nonlinear GARCH(1,1)
model.]({static}/uploads/2015/nonlinear-feedback-and-long-range-memory-in-garch-model.png
"Reproducing 1/f noise using nonlinear GARCH(1,1) model."){#attachment_2774} 

\\\(  A \\\) and \\\(  C \\\) once again affect the exponential cut-offs -
\\\(  A \\\) influences the placement of cut-off, while \\\(  C \\\)
describes how "prominent" is the exponential cut-off. Once again, if
\\\(  C \neq 0 \\\), interesting power law behavior is destroyed, thus
we have to require that \\\(  c\_1 \approx b\_1\bar{\omega}\_\mu \\\). Note that in the HTML5 app below \\\(  c\_1 \\\)
value is set in respect to \\\(  b\_1 \\\).

We invite you to try interactive HTML5 applet below.

[html5-interactive
url="/uploads/models/ngarch11/index2-en.html" width="470"
height="480" mode="iframe"]
