Title: Unidirectional Kirman's model
Date: 2011-06-10 12:43
Author: Aleksejus Kononovicius
Tags: Agent-based models, Interactive models, A. Kononovicius, Bass model, voter model, Kirman model, V. Daniunas, V. Gontis, marketing
Slug: unidirectional-kirman-model
Status: published
Image_url: uploads/2011/unidirectional-kirman-model.png

Bass diffusion model \[cite
id="Bass1969ManSci"\] is widely known and very important model in
marketing science. This model predicts diffusion, sales, of new
successful products inside the market. While previously [discussed
model]({filename}/articles/2010/kirman-ants.md),
Kirman model \[cite id="Kirman1993QJE"\], has wide range of possible
applications - from biology to finance. In \[cite id="Kirman1993QJE"\]
it is noted that behavior observed by entomologists is similar to one
observed in economic scenarios (ex. popularity of books and
restaurants). Thus one might expect that Kirman's model might be
modified to work in the marketing scenario.<!--more-->

Bass diffusion model as a special case of Kirman's model
--------------------------------------------------------

Bass diffusion model is underlied by the assumption that "the
probability of adopting by those who have not yet adopted is a linear
function of those who had previously adopted" \[cite
id="Bass1969ManSci"\]. Or mathematically:

\begin{equation}
 \partial\_t F(t) = \[1-F(t)\] \[p + q F(t)\] , \label{bassode}
\end{equation}

where \\\(  F(t) \\\) is fraction of market that have adopted product by
time t, \\\(  p \\\) is coefficient of innovation, while \\\(  q \\\) is
coefficient of imitation. Solution of the above ordinary differential
equation, with boundary condition \\\(  F(0)=0 \\\), is:

\begin{equation}
 F(t) = \frac{p \left\[ e^{(p+q) t} -1 \right\]}{e^{(p+q)t}+q} . 
\end{equation}

Number of new consumers per unit of time is given by the derivative of
the above:

\begin{equation}
 \Delta F(t) = \frac{p (p+q)^2 e^{(p+q) t}}{\left\[pe^{(p+q) t}+q \right\]^2} . 
\end{equation}

Kirman's model \[cite id="Kirman1993QJE"\] is based on very similar
ideas - some ants discover food sources independently, while other ants
imitate behavior. The only difference is that in Kirman model
transitions are bidirectional, while in Bass diffusion model there is
only one possible transition - from potential consumer to consumer.

Though it is rather easy to introduce this unidirectionality into
Kirman's model. We simply one transition probability to zero:

\begin{equation}
 p(X \rightarrow X+1) = (N - X) \left( \sigma + \frac{h X}{N} \right) \Delta t , 
\end{equation}

\begin{equation}
 p(X \rightarrow X-1) = 0 , 
\end{equation}

here \\\(  X \\\) is number of consumers, while \\\(  N-X \\\) is thus a
number of potential consumers. \\\(  \sigma \\\) and \\\(  h \\\) are
probabilities of individual decision and influenced decision to buy
product (they should be equivalent to \\\(  p \\\) and \\\(  q \\\) in
\eqref{bassode}). Note that transition probabilities are somewhat
different from the original ones \[cite id="Kirman1993QJE"\] (or see
[this model on Physics of
Risk]({filename}/articles/2010/kirman-ants.md)).
This happens due to assumption that rate of consumption is indepedent of
absolute size of the market.

By introducing continuous system state variable \\\(  x=X/N \\\) (we
assume \\\(  N \\\) to be large enough to secure continuity of \\\( x \\\)) and by using one step formalism \[cite
id="VanKampen2007NorthHolland"\] we obtain macroscopic model for the
unidirectional Kirman model,

\begin{equation}
 \partial\_t x = (1-x) (\sigma + h x) , 
\end{equation}

which is notably identical to the Bass diffusion model. Thus in the
limit of large \\\(  N \\\) we can expect that unidirectional agent-based
Kirman's model will provide similar results to the differential Bass
diffusion model.

Comparison of models
--------------------

Below, in [Fig. 1](#attachment_1747), you can see that agreement
between Kirman's and Bass diffusion models improve with larger \\\( N \\\) and \\\(  \Delta t \\\) (here it is time series discretization
step). With lower values of these parameters agreement is worse, as Bass
diffusion model describe mean, while unidirectional Kirman's model
provides only single realization. This figure is featured in \[cite
id="Daniunas2011ICCGI"\].

![image]({static}/uploads/2011/unidirectional-kirman-model.png "Agreement between Kirman's (red dots) and Bass
diffusion (blue curves) models. (a) N=1000, Δt=0.1, (b) N=1000, Δt=1,
(c) N=10000, Δt=0.1, (d) N=10000, Δt=1. Other model parameters: σ=0.01,
h=0.275."){#attachment_1747}

Applet
------

This applet plots theoretical Bass diffusion curves, number of consumer
and number of new consumers per unit of time, (blue continuous curves)
and analogous quantities obtained from agent-based Kirman's model (red
dots). Applet control parameters are identical to Kirman's model
parameters with a notable exception to \\\(  \Delta t \\\). Here
\\\( \Delta t \\\) is time series discretization step. Kirman's model's
\\\( \Delta t \\\) is selected by applet on its own. The applet also includes
additional parameters \\\(  \alpha \\\) (tolerance for piracy) and
\\\(  Y\_0 \\\) (charity) not discussed in this text, but considered in
the [another
one]({filename}/articles/2012/what-can-the-bass-diffusion-model-tell-us-about-piracy.md)
(Bass curves are plotted while not taking these into account).

[html5-interactive
url="/uploads/models/unidirectional-kirman-model/index.html"
width="475" height="535" mode="iframe"]
