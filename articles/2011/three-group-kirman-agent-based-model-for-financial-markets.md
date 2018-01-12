Title: Three group Kirman's agent-based model for financial markets
Date: 2011-09-20 14:38
Author: Aleksejus Kononovicius
Tags: Agent-based models, Interactive models, A. Kononovicius, voter model, Kirman model, P. Purlys, financial markets
Slug: three-group-kirman-agent-based-model-for-financial-markets
Status: published

As we have seen previously [application of the
original Kirman's
model](/agent-based-herding-model-financial-markets "Agent-based herding model of financial markets on Physics of Risk")
enables reproduction of single power law spectral density \[cite
id="Kononovicius2012PhysA"\]. While actual financial markets and
[sophisticated stochastic
models](/long-range-memory-stochastic-model-return "Long-range memory stochastic model of return on Physics of Risk")
\[cite id="Gontis2010Intech"\] have double power law spectral density -
i. e. fractured spectral density. Thus it would be nice to obtain
fracture of spectral density by improving application of Kirman's agent
based model towards financial markets.<!--more-->

One can create more sophisticated model in various ways. The two main
options are a possibility to combine multiple stochastic models obtained
while analyzing stochastic treatment of Kirman's model \[cite
id="Kononovicius2011DPGVerh"\] and a possibility extend agent-based
model itself \[cite id="Purlys2011mtd2"\]. Speaking of latter
possibility, it is possible to improve agent-based model by introducing
additional agent groups or splitting old ones. Despite of previous lack
of success, even multi-group agent-based models \[cite
id="Bornholdt2001IJMPC, Lux1999Nature, Yook2008JKPS"\] were unable to
reproduce fracture in spectral density, this option still looks
promising as one does not need to make strong assumptions.

Three group financial market model
----------------------------------

In this text we will attempt to obtain fractured spectral density
without making any strong assumptions. Similar, though broader,
discussion is available in \[cite id="Purlys2011mtd2"\]). [In previous
application](/agent-based-herding-model-financial-markets "Agent-based herding model of financial markets on Physics of Risk")
we have considered dynamics only between chartist and fundamentalist
groups \[cite id="Kononovicius2012PhysA"\], while it is natural to
expect that chartist agents may disagree in their expectations and thus
devide into additional groups (or subgroups) - pessimists and optimists.
Therefore now all three groups (see [Fig. 1](#attachment_1910)) may
interact among themselves.

![image](/uploads/2011/09/three-type.png "Three groups interactions: f - fundamentalists, c+ -
chartists optimists, c- - chartists pessimists. Symbols written near
the bubbles correspond to the parameters related to individual decision,
while symbols written on the inter-connections are related to
herding."){#attachment_1910} 

Group interactions are mathematically described in the terms of
[original Kirman's
model](/kirman-ants "Kirman’s ant colony model on Physics of Risk"),
where relevant parameters somewhat differ (see [Fig.
1](#attachment_1910)). These now six, as we have interactions between
three groups, transition equations mathematically are expressed as:


\begin{equation}
 p( c\_{-} \rightarrow f) = n\_{c-} (a\_1 + h\_{cf} n\_f)\Delta t , 
\end{equation}



\begin{equation}
 p( c\_{+} \rightarrow f) = n\_{c+} (a\_2 + h\_{cf} n\_f)\Delta t , 
\end{equation}



\begin{equation}
 p( f \rightarrow c\_{+}) = n\_{f} (b\_1 + h\_{cf} n\_{c+})\Delta t , 
\end{equation}



\begin{equation}
 p( c\_{-} \rightarrow c\_{+}) = n\_{c-} (b\_2 + h\_{cc}n\_{c+}) \Delta t , 
\end{equation}



\begin{equation}
 p( f \rightarrow c\_{-}) = n\_{f} (c\_1 + h\_{cf} n\_{c-})\Delta t , 
\end{equation}



\begin{equation}
 p( c\_{+} \rightarrow c\_{-}) = n\_{c+} (c\_2 + h\_{cc}n\_{c-}) \Delta t . 
\end{equation}


Note that the above transition probabilities describe one agent
transition between varying groups. \\\(  a\_i \\\), \\\(  b\_i \\\) and
\\\(  c\_i \\\) in these transition probabilities stand for individual
behavior, while \\\(  h\_{ij} \\\) describe herding tendencies. Also it
is important to note that only two different herding parameters are
being used - one is being used for chartist-chartist process, which we
will assume to be a faster one, and chartist-fundamentalist process,
which was assumed to be slower process and analyzed in \[cite
id="Kononovicius2012PhysA"\]. As we allow only one agent to change his
group during \\\(  \Delta t \\\), it should be accordingly short time
period. \\\(  \Delta t \\\) can be treated as model parameter, though
constant value will hinder numerical evaluation. Therefore it is more
convenient to use variable \\\(  \Delta t \\\), which can be defined by
requiring that the sum of the transition probabilities is one or less:


\begin{equation}
 \sum\limits\_i p(i) = \Delta t \sum\limits\_i \pi(i) =\kappa \quad \Rightarrow \quad \Delta t =\frac{\kappa}{\sum\limits\_i \pi(i)} , 
\end{equation}


here \\\(  p(i) = \pi(i) \Delta t \\\), index \\\(  i \\\) denotes all
possible single transition scenarios, \\\(  \kappa \leq 1 \\\) may
stand for numerical evaluation precision parameter.

Model might be also improved by reducing the number of model parameters.
To do so we introduce dimensionless time scale \\\(  t = h\_{cf} t\_s \\\). After its introduction one should also substitute
non-dimensionless model parameters for their dimensionless counterparts:
\\\(  A\_i = \frac{a\_i}{h\_{cf}}  \\\), \\\(  B\_i =\frac{b\_i}{h\_{cf}}  \\\), \\\(  C\_i = \frac{c\_i}{h\_{cf}} \\\) and \\\(  H = \frac{h\_{cc}}{h\_{cf}}  \\\).

Application towards financial markets
-------------------------------------

All that is left to do now is to relate previously discussed group
dynamics to the financial market observables, namely price and return.
We do so by utilizing original Walras law, i. e. we assume that market
maker stabilizes the market after each change to the supply and demand.
We have already discussed this topic on Physics of Risk (see [this
text](/agent-based-herding-model-financial-markets#price-return "Introducing price and return into the agent-based herding model of financial markets")).
Thus from the market maker assumption, and by using previous experience,
we can draw expression of price


\begin{equation}
 P(t) = P\_f(t) \exp \left\[ r\_0 \frac{N\_c(t)}{N\_f(t)}\xi(t) \right\] = P\_f(t) \exp \left\[ -r\_0\frac{N\_{c+}(t)-N\_{c-}(t)}{N\_f(t)} \right\] , 
\end{equation}


and thus return, under the assumption that fundamental price remains
constant,


\begin{equation}
 r\_{T}(t)=\ln \frac{P(t)}{P(t-T)} = r\_0 \left\[-\frac{N\_{c+}(t)-N\_{c-}(t)}{N\_f(t)} +\frac{N\_{c+}(t-T)-N\_{c-}(t-T)}{N\_f(t-T)} \right\] . 
\end{equation}


As in this text we are only interested in spectral density we can drop
\\\(  r\_0 \\\) from the definition of return.

Model results
-------------

In \[cite id="Purlys2011mtd2"\] paper model's spectral density was
analyzed using different parameter sets. In [Fig. 2](#attachment_1908)
we can see reportedly best fractured spectral density (its powers,
\\\(  \beta \\\), are close to empirical ones). Qualitatively similar
results can be obtained with H being larger than 10 and smaller than
1000. Otherwise spectral densities of chartist-chartist and
chartist-fundamentalist process do not sufficiently differ (H smaller
than 10) or overlap (H larger 1000).

![image](/uploads/2011/09/spectra.png "Spectral density (red curve) of absolute return time
series obtained by numerically evaluating the discussed model and its
power law fits (blue curves). Powers of power law fits: \\\( \beta=0.68 \\\), \\\( \beta=0.22 \\\).
Model parameters: \\\( a\_1=a\_2=b\_1=c\_1=30 \\\), \\\( b\_2=c\_2=500 \\\), \\\( h\_{cf}=1 \\\), \\\( H=50 \\\),
\\\( T=0.001 \\\)."){#attachment_1908} 

Applet
------

[html5-interactive
url="/uploads/models/three-state-return-model/index.html"
width="515" height="385" mode="iframe"]

If you came here to find the previously used Java applet, it is still
available [here](/uploads/models/old-java/three-state-model-en.html).
The functionality of both, new HTML5 and old Java, applets is almost
identical.
  
