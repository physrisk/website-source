Title: A. Kononovicius: Socialism and capitalism in the kinetic exchange models
Date: 2013-12-30 07:04
Author: Aleksejus Kononovicius
Tags: Agent-based models, Interactive models, kinetic models, statistical physics, wealth, Economics, free market
Slug: socialism-capitalism-kinetic-exchange-models
Status: published

Worldwide and in Lithuania, due to historical
context, there is one very popular topic for the economic-based
discussion. It is based on the standard political conflict between the
"right" and "left" - capitalism vs socialism. This ideological debate
might be rather interesting, but it is not quite clear who is right and
who is wrong. It would rather interesting to see if and how these
general ideas work. In my opinion these generalized ideas might be
easily introduced into some simple agent-based models. Previously
considered [kinetic exchange
models](/elementary-kinetic-exchange-models)
appear to be one of the best candidates for the job. Thus in this text I
will discuss the implementation of the simplistic sketches of these
economic ideologies into the kinetic exchange
models.<!--more-->

Brief introduction into the kinetic exchange models
---------------------------------------------------

Let us recall that in kinetic models only the colliding particles are
interacting. During a single interaction two randomly selected particles
exchange energy. In the economic scenario one can see this interaction
as a simple buy-sell transaction, while the energy in such case is
analogous to the money or wealth. It is assumed that energy and money
are conserved. Thus one particle will increase its energy by \\\( \Delta w\_{ij} \\\), while the other will lose \\\(  \Delta w\_{ij} \\\):


\begin{equation}
 w\_i(t+1) = w\_i(t) - \Delta w\_{ij} , \quad w\_i(t+1) =w\_i(t) + \Delta w\_{ij} , 
\end{equation}


here time is measured in discrete time steps (\\\(  t=0,1,2,\ldots \\\)). One of the simplest and most well known kinetic exchange
models is the reshuffling model. In this model the total energy of both
particles after the interaction is randomly redistributed between these
particles:


\begin{equation}
 \Delta w\_{ij} = (1-\varepsilon) w\_i(t) - \varepsilon w\_j(t) , 
\end{equation}


here \\\(  \varepsilon \\\) is random variable uniformly distributed in
\\\(  \[0,1\] \\\). In this fair, physical laws as we all know have
absolutely no emotion, model the stationary distribution is the
Boltzmann-Gibbs. Will it change under the influence of "ideologies"?

Extreme simplification of economic ideologies
---------------------------------------------

Internet folklore, [Fig. 1](#attachment_2584), reveals how people tend
to see these two different ideologies. The question is how formally
correct and also as simply as possible translate these ideas into the
kinetic exchange models? Without taking into account for some small
details we aim to capture the essence of these ideologies and attempt to
appropriately modify the expression for \\\(  \Delta w\_{ij} \\\).

![Internet folklore: socialism vs
capitalism.](/uploads/2013/11/socialism-vs-capitalism.jpg "
Internet folklore on the economic ideologies (taken form
[politifake.org](http://politifake.org))."){#attachment_2584} 

Socialism
---------

As we can see socialists are seen as people who take away money from
people who have money. In the kinetic exchange models we could introduce
this as a fixed tax to particles, which interact:


\begin{equation}
 \Delta w\_{ij} = (1-\varepsilon) \[w\_i(t)-w\_0\] -\varepsilon \[w\_j(t)-w\_0\] . 
\end{equation}


In the above \\\(  w\_0 \\\) is a fixed "solidarity" tax. In order for a
model to work correctly we must require that particles should have
energies larger than this tax in order to interact. If particles have
smaller energies, then their energy does not change after the
interaction (and they are not taxed). If the tax was collected, then it
is evenly redistributed among all particles:


\begin{equation}
 w\_n(t+1) = w\_n(t) + \frac{2 w\_0}{N} , \quad \forall n .
\end{equation}


Bellow you can find HTML5 applet, which illustrates that socialism, as
defined, does not have any noticeable impact on the stationary
distribution. The Boltzmann-Gibbs distribution is still obtained. Though
it is worthwhile to note that ideally "lazy", avoiding interaction,
particles would increase their energy indefinitely, despite the fact
they do nothing to earn it. But in reality this ideal "laziness" is
impossible, because certain level of economic activity is mandatory to
survival.

[html5-interactive
url="/uploads/models/kinetic-models/socialism-en.html"
width="420" height="415" mode="iframe"]

Capitalism
----------

Capitalism on the other hand might be related to investments and
borrowing.
[Previously](/elementary-kinetic-exchange-models "Elementary kinetic models")
we have already allowed particles to "borrow" energy. The problem is
that one has to repay loans. Thus in case of capitalism, we will allow
particles to borrow certain amount of energy, \\\(  w\_{max} \\\):


\begin{equation}
 \Delta w\_{ij} = (1-\varepsilon) \[w\_i(t)+w\_{max}\] -\varepsilon \[w\_j(t)+w\_{max}\] . 
\end{equation}


Note that now after interaction it is possible to reach negative energy
state, which we would like to avoid. Thus if energy of any interacting
particle goes below zero (\\\(  w\_i(t)&lt;0 \\\) or \\\( w\_j(t)&lt;0 \\\)), then all particles will have to repay its debt
collectively (lets say it equals \\\(  w\_{neg} \\\)):


\begin{equation}
 w\_m(t+1) = 0 , 
\end{equation}



\begin{equation}
 w\_n(t+1) = w\_n(t) - \frac{w\_{neg}}{N-N\_{bankr}} , \quad\forall n , \label{capitalismkitos}
\end{equation}


here \\\(  N\_{bankr} \\\) is a number of bankrupt particles (the energy
smaller than \\\(  -w\_{max} \\\)). Why is it possible to go bankrupt in
this model? Note that losses are compensated only if the particles were
interacting - if they were not interacting, then it is their own
problem. Observe, in the HTML5 applet below, that the number of
bankrupt particles (in the distribution the remain fixed at \\\( -w\_{max} \\\)) steadily increases and the distribution becomes flatter and
flatter.

[html5-interactive
url="/uploads/models/kinetic-models/capitalism-en.html"
width="420" height="440" mode="iframe"]

We refer to this model as "simple" capitalism model, because it is
possible to obtain better taxation rules. If we would like to completely
avoid bankruptcy we could require that the debt would be repaid by
particles with positive energy. In such case we can rewrite
\eqref{capitalismkitos} as:


\begin{equation}
 w\_n(t+1) = w\_n(t) - \frac{w\_{neg}}{N\_{w&gt;0}} , \quad\forall n: w\_n(t)&gt;0 , 
\end{equation}


here \\\(  N\_{w&gt;0} \\\) is a number of particles with positive
energy. It appears that the problem of bankrupt particles is solved,
because debt is not repaid by those who are already in debt. The problem
remains that the tax can still put the particles in debt (those for whom
\\\(  w\_n(t) &lt; \frac{w\_{neg}}{N\_{w&gt;0}} \\\) is true).

Note that the number of particles with negative energies (we refer to
them as "poor" particles) fluctuates around certain fixed mean, which
depends on the maximum allowed size of loan. While the Boltzmann-Gibbs
distribution is stable and holds for the particles with positive
energies. It is also worthwhile to note that in this case the "lazy"
particle is once again treated unfairly - but now its energy would
decrease despite the fact it does nothing wrong.

[html5-interactive
url="/uploads/models/kinetic-models/capitalism-smart-en.html"
width="420" height="440" mode="iframe"]

We could invent a better taxation mechanism by solving the following
condition:


\begin{equation}
 w\_{min} \geq \frac{w\_{neg}}{N\_{w&gt;w\_{min}}} , 
\end{equation}


but the direct numerical solution of this problem is somewhat
complicated and thus hardly we could see this mechanism working in
reality. Furthermore even if we have solved this precisely, the would
have to deal with unfair inequality of particles with energies around
\\\(  w\_{min} \\\). Ones with \\\(  w\_n(t) \lesssim w\_{min} \\\) would
not pay any tax, while those with \\\(  w\_n(t) \gtrsim w\_{min} \\\)
would pay to full amount. It is highly doubtful that the radical
adherents of capitalism would like such outcome.

Instead of conclusions
----------------------

In this text we have review two possible modifications of [elementary
kinetic exchange
models](/elementary-kinetic-exchange-models "Elementary kinetic exchange models").
We have seen how the simplistic sketches of the main economic
ideologies affect the energy distribution in these models. It appears
that the model for "socialism" works well, though it somewhat encourages
laziness. The model for "capitalism" on the other hand severely punishes
for laziness and encourages mindless risk taking. Improvements were made
for the "capitalism" model and some of the most severe problems were
solved.

To conclude we could say that neither of the extreme cases of socialism
or capitalism works as it should. One should look for a certain
combinations of the features offered by these ideologies.
