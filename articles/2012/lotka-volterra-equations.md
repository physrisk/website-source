Title: Lotka-Volterra equations
Date: 2012-10-01 07:38
Author: Aleksejus Kononovicius
Tags: interactive, stochastic models, Lotka-Volterra, Wolfram CDF, biology
Slug: lotka-volterra-equations
Status: published
Image_url: uploads/2012/lotka-volterra-equations.png

The simplest ecological system can be
constructed from the two interacting species, e.g., prey and predator.
This kind of system is very interesting in the terms of Physics of Risk
primarily because it is nonlinear \[cite id="Goel1971RevModPhys"\], and
due to being real life example of competition (conflict). Also there are
few known simple models for the prey-predator interaction. Among them
there are both macroscopic, Lotka-Volterra equations, and microscopic,
agent-based, models. We will start our discussion from the macroscopic
Lotka-Volterra model.
<!--more-->

Lotka-Volterra equations
------------------------

Instead of simply writing down the equations let us briefly discuss what
is going on in this kind of system. Interestingly enough the ideas we
will discuss are also applicable for the socio-economic modeling \[cite
id="Ausloos2009Chess, Goodwin1967Cambridge, Olivera2011DynSocEcoSys,
Solomon2000Hermes, Vitanov2012ACS"\]. Yet we choose the ecosystem for
the discussion as in this case all interactions should be pretty clear
and straightforward.

First let us start with the natural birth-death processes. The numbers
of both prey and predator are changing at certain rate. For the sake of
simplicity we could assume that this rate is constant and depends only
on the current number of individuals. Though it is worthwhile to note
that there are some works considering non-constant and even stochastic
rates. For the sake of simplicity we could also assume that the prey can
only increase its abundance. This might be seen as an assumption that
prey would live infinitely long if not getting eaten by the predator.
Also we could assume that predator population should naturally decrease.
The thought behind this is that predators need to be full and strong to
be able to produce an offspring. Under these assumptions the birth-death
terms might be expressed in the terms Malthus and Verhulst models:

\begin{equation}
 \mathrm{d} X = a X \mathrm{d} t \quad\text{or}\quad\mathrm{d} X = ( a X - b X^2 ) \mathrm{d} t . 
\end{equation}

Our interest lies in the non-linear terms, which stand for the
interaction of the species. It should be evident that the population of
prey should decrease due to inter-species interaction, while the
predator population should grow. The probability of the meeting of the
prey and the predator is proportional to the both sizes of the
respective populations. Taking it into account we can finally write the
Lotka-Volterra equations, in the general form:

\begin{equation}
 \mathrm{d} X\_i = \left\[ a\_i X\_i - b\_i X\_i^2 - \sum\_{j\neq i} c\_{ij} X\_i X\_j \right\] \mathrm{d} t , 
\end{equation}

here i is an index related to the certain species, while c parameters
describe the interaction between species labeled by index i and j. If c
is positive, then i-th species is suffering from j-th, otherwise the
species is gaining from the interaction.

Note that the general form of Lotka-Volterra equations can describe the
interaction of more than two species, though this text is dedicated to
the two species prey-predator interaction. If the populations can growth
is not limited, then the set of Lotka-Volterra equations will look like
this:

\begin{equation}
 \mathrm{d} X\_1 = \left\[ a\_1 X\_1 - c\_{12} X\_1 X\_2\right\] \mathrm{d} t , \quad \mathrm{d} X\_2 = \left\[ -a\_2 X\_2+ c\_{21} X\_2 X\_1 \right\] \mathrm{d} t , 
\end{equation}

here index 1 is used with variables related to the prey population,
while index 2 marks the relation to the predator population. All
parameters in these equations are positive numbers - the nature of
interaction is already accounted for.

![Solution of Lotka-Volterra eqs.]({static}/uploads/2012/lotka-volterra-equations.png "Solution of the Lotka-Volterra equations. Red line marks the
predator evolution, while blue - prey's. Dashed lines mark the model's
fixed points. Parameters: \\\( X\_1(0)=8 \\\), \\\( X\_2(0)=12 \\\), \\\( a\_1=20 \\\), \\\( a\_2 =30\\\),
\\\( c\_\{12\}=c\_\{21\}=1 \\\)."){#attachment_2359}

In [Fig 1.](#attachment_2359) we have shown one of the possible
solutions of the Lotka-Volterra equations. The example demonstrates
essential qualitative behavior of the model - its "fluctuating" nature.
These "fluctuations" are inherent to a real life system. If predators
are few, then the prey population has an opportunity to grow as the
predators are able to catch less prey than new prey are born. On the
other hand if the prey population becomes abundant many predators will
be satisfied enough to bear an offspring. The growing predator
population will consume more of prey, until at certain the consumption
will become larger than the reproduction of the prey. After this the
population of prey will start to decline. The predator population will
soon follow, because the decreased abundance of food will cause mass
starvation. We will one again find our ecosystem in the state with few
prey and few predators, so the prey population will once again grow...
In this manner the history will repeat itself.

Repetition might be avoided if both populations arrive at the respective
fixed point at the same time or the model starts with the initial
conditions equal to the fixed points. Note that for the prey this fixed
point is a ratio between the qualities of the predator population,
\\\(  a\_2 / c\_{21} \\\), while the predators depend on the qualities of
the prey population, \\\(  a\_1 / c\_{12} \\\). The better for prey, the
better for predator, while the better for predator, the worse for prey.
This is very interesting, though ultimately simple, example of conflict
and cooperation in the actual real life system.

Interactive Lotka-Volterra model applet
---------------------------------------

[html5-interactive id="html5app"
url="/uploads/models/ordinary-differential-equations/lotka-volterra/index.html"
width="470" height="540" mode="iframe"]

Previously, instead of the currently used HTML5 app, we have used an app
based on the Wolfram CDF technology. The old app is still available for
[download]({static}/uploads/2012/lotka-volterra.cdf).

Stochastic Lotka-Volterra model
-------------------------------

In the recent scientific literature \[cite id="Solomon2000Hermes,
Arato2003MCM, Goel1971RevModPhys, Mao2003JMAA, Solomon2001Springer,
Zhu2009JMAA"\] one can find many examples of not only the deterministic,
previously discussed, Lotka-Volterra model, but also of its stochastic
treatment. Usually randomness is introduced into the model by making
simple assumption about the random nature of the external forces acting
on the species (e.g., random food supply for the prey) or the random
nature of the internal forces obviously influencing the interaction of
the populations.

In the first case, \\\(  a\_i \rightarrow \bar a\_i + \sigma\_{a,i}\mathcal{N}\_i(0,1)  \\\), one obtains linear (with the respect to
the noise) set of stochastic differential equations:

\begin{equation}
 \mathrm{d} X\_i = \left\[ \bar a\_i X\_i - b\_i X\_i^2 -\sum\_{j \neq i} c\_{ij} X\_i X\_j \right\] \mathrm{d} t +\sigma\_{a,i} X\_i \mathrm{d} W\_i . 
\end{equation}

The non-linear (with the respect to the noise) stochastic differential
equations can be obtained by both assuming the random capacity (external
feature) of the species and by randomizing interaction parameters. Let
us assume the latter, \\\(  c\_{ij} \rightarrow \bar c\_{ij} -\sigma\_{c,ij} \mathcal{N}\_{ij}(0,1)  \\\):

\begin{equation}
 \mathrm{d} X\_i = \left\[ a\_i X\_i - b\_i X\_i^2 - \sum\_{j\neq i} \bar c\_{ij} X\_i X\_j \right\] \mathrm{d} t + \sum\_{j\neq i} \sigma\_{c,ij} X\_i X\_j \mathrm{d} W\_{ij} . 
\end{equation}

In the above stochastic differential equation W, as common, stands for
the Wiener process or standard Brownian motion. We won't further analyze
the stochastic model, though we would like to draw the readers attention
to the fact that this model can be applied to economics and financial
markets. Furthermore the stochastic Lotka-Volterra model might be used
to obtained the power law probability density functions observed in
those complex systems \[cite id="Solomon2000Hermes,
Solomon2001Springer"\].
