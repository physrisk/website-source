Title: Many particle interaction in the kinetic exchange models
Date: 2014-03-03 07:02
Author: Aleksejus Kononovicius
Tags: Agent-based models, Interactive models, kinetic models, sociology, statistical physics, opinion dynamics, wealth
Slug: many-particle-interaction-in-the-kinetic-exchange-models
Status: published

Another idea, which may be used to improve
[kinetic exchange
models](/tag/kinetic-models/), might be the
introduction of the many particle interactions. In the ideal gasses
these interactions do not occur, but in the social systems they might
have interesting consequences. Namely they might be used to explain why
certain voting events (elections, referendums) yield unpredictable
results.<!--more-->

Impact of many particle interactions on the wealth (energy) distribution
------------------------------------------------------------------------

Let us start with a modification of [elementary kinetic exchange
model]({filename}/articles/2013/elementary-kinetic-exchange-models.md).
In this case let us assume that only \\\(  N \\\)-particle interactions
occur and the total wealth (energy) is uniformly distributed among them:

\begin{equation}
 w\_i(t+1) = \frac{\varepsilon\_i}{E(I)} W(t, I) , \quad\forall i \in I , 
\end{equation}

here \\\(  I \\\) is a set of particles selected for this interaction,
\\\(  E(I) = \sum\_{i \in I} \varepsilon\_i  \\\) is a random number
normalization factor, while \\\(  W(t, I) = \sum\_{i \in I} w\_i(t) \\\) is a total energy.

It should be evident that the energy (wealth) distribution will approach
uniform distribution then \\\(  N \\\) approaches a number of particles
in the system. In the applet below you can see that in case \\\( N=2 \\\) we have exponential distribution, while with larger \\\(  N \\\)
values the uniform part becomes more prominent.

[html5-interactive
url="/uploads/models/kinetic-models/manyparticle-en.html"
width="405" height="410" mode="iframe"]

Referendum model
----------------

How do people make their decisions? Evidently not all of us are skilled
and informed enough to make decisions on our own in all possible
everyday scenarios, thus in such case we have to rely on our social
contacts (acquaintances, co-workers, family members and etc.) to help us
reach a decision. To keep things simple we can assume that after
discussion the people will follow the opinion of the majority of their
discussion group. Everything remains simple if the question (or task) is
simple and may be answered with "yes" or "no". If odd number of people
is interacting, then we will have a clear majority. While if even number
of people is interacting, then we might have a situation with no clear
majority (both "yes" and "no" getting same number of "votes"). In this
case S. Galam notes that people tend to doubt and thus in case of a tie
the more conservative option (for the sake of simplicity let us assume
that it is a "no" option) will be chosen. Interestingly enough this
simple assumption may cause the society to shift from positive (\\\( \xi(t)&gt;0 \\\)) attitude towards the negative (\\\(  \xi(t)&lt;0 \\\))
attitude.

We would like to draw your attention to a fact that \\\(  \xi \\\) here
represents the mean opinion. If you prefer a raw fraction of individuals
choosing "yes" option, then you may obtain it this way:

\begin{equation}
 x\_{+} = \frac{1 + \xi }{2} . 
\end{equation}

In the applet below you can tune \\\(  p\[N\] \\\) parameters, which
define the probability that \\\(  N \\\) individuals will meet.

[html5-interactive
url="/uploads/models/kinetic-models/galam-model-en.html"
width="500" height="375" mode="iframe"]
