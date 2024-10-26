Title: Analytical treatment of kinetic exchange models
Date: 2014-01-20 07:09
Author: Aleksejus Kononovicius
Tags: agent-based models, kinetic models, statistical physics, wealth, methods
Slug: analytical-treatment-of-kinetic-exchange-models
Status: published

Kinetic
exchange models are very simple and powerful tool to understand the
processes in the ideal gasses. These simple models enabled Boltzmann to
formulate the principles of statistical physics \[cite
id="Ball2002PhysA, Patriarca2013AJP"\]. In previous
[text]({filename}/articles/2013/elementary-kinetic-exchange-models.md)
we already talked about some of the simplest models, but we did not
write about a very important topic - their analytical treatment. It
appears that analytical treatment is one of the most serious drawbacks
of these models - in certain cases the equations become very complex or
even analytically unsolvable. While, our usual approach, one-step
processes (previously discussed on Physics of Risk from the point of
view of the [Kirman
model](/tag/kirman-model/))
can be treated analytically with ease in most of the cases \[cite
id="Aoki2007Cambridge,VanKampen2007NorthHolland"\]. In this text we will
discuss two main techniques used to analytically obtain statistical
features of the kinetic exchange models.
<!--more-->

Master equation
---------------

As is common in statistical physics we can use the Master equation to
describe the interaction between two particles. Let us assume that
before interactions the particles have energies \\\(  (u\_i, u\_j) \\\)
and after the interaction \\\(  (u\_i', u\_j') \\\), In such case:

\begin{equation}
 \partial\_t f(u) = \left\[ \partial\_t f(u\_i) + \partial\_t f(u\_j) + \partial\_t f(u\_i') + \partial\_t f(u\_j')\right\]\_{u\_i,u\_j,u\_i',u\_j' = u} . 
\end{equation}

It should be straightforward to see that this Master equation includes
terms of two types - first type is related to the situation before
interaction, while the other describes the changes after interaction.
Terms "before interaction" should describe decrease in probability
density, as the particles may be selected from the vicinity of \\\( u \\\), while the terms after "the interaction" should increase the
probability density, as the particles may arrive to the vicinity of
\\\(  u \\\). As the particles are selected uniformly at random, then the
probability density will decrease proportionally to the probability to
find the particle in the vicinity (namely to itself):

\begin{equation}
 \partial\_t f(u\_i) \sim - f(u\_i) , \quad \partial\_tf(u\_j) \sim - f(u\_j) . 
\end{equation}

We also know that after the interaction the energy of the particles will
be uniformly distributed in the interval \\\(  \[ 0 , u\_i + u\_j\] \\\), thus the probability that particle will arrive to a certain
vicinity is:

\begin{equation}
 \partial\_t f(u\_i') \sim \int\_{u\_i'}^\infty \left\[\int\_0^U f(u\_i) f(U-u\_i) \mathrm{d} u\_i \right\]\frac{\mathrm{d} U}{U}, 
\end{equation}

\begin{equation}
 \partial\_t f(u\_j') \sim \int\_{u\_j'}^\infty \left\[\int\_0^U f(u\_i) f(U-u\_i) \mathrm{d} u\_i \right\]\frac{\mathrm{d} U}{U} . 
\end{equation}

In the above the external integral means that the final distribution
of energies of the particles is uniform. While the internal integral
describes the probability to find two particles with a total energy of
\\\(  U= u\_i +u\_j  \\\).

Thus by putting these into the Master equation we obtain:

\begin{equation}
 N \partial\_t f(u) = - 2 f(u) + 2 \int\_{u}^\infty \left\[\int\_0^U f(u\_i) f(U-u\_i) \mathrm{d} u\_i \right\]\frac{\mathrm{d} U}{U} . 
\end{equation}

It should be pretty straightforward to see that \\\(  f(u) = \exp(-u) \\\) is a stationary probability density function. The problem is that
this case is very simple, while in a more complex cases the integrals
may be extremely hard to evaluate both analytically and numerically.

Obtaining the moments of the stationary distribution
----------------------------------------------------

In a more complex cases we may attempt to find the distinct moments of
the stationary distribution \[cite id="Lallouache2010Msc2"\]. E. q., in
case of [kinetic exchange model with
savings]({filename}/articles/2013/modeling-wealth-distribution-using-kinetic-exchange-models.md)
we can write down:

\begin{equation}
 \langle X^m \rangle = \langle \[ \kappa X\_1 + \varepsilon(1-\kappa ) (X\_1 + X\_2) \]^m \rangle . 
\end{equation}

After the expansion and simplification we obtain:

\begin{equation}
 \langle X^m \rangle = \sum\_{k=0}^m \binom{m}{k}\frac{\kappa ^{m-k} (1-\kappa )^k}{k+1} \sum\_{p=0}^{k}\binom{k}{p} \langle X^{m-p} \rangle \langle X^p \rangle . 
\end{equation}

From this equation we can work out the moments one by one. Let us recall
that we have previously seen that the Gamma distribution is a good
approximation of the stationary probability density of this model. Let
us check! As you can see up until the third moment everything seems
fine:

\begin{equation}
 \langle X^2 \rangle = \frac{2+\kappa }{1+2 \kappa } =\langle x^2\_\gamma \rangle , \quad \langle X^3 \rangle =\frac{3 (2+\kappa )}{(1 + 2 \kappa ^2)} = \langle x^3\_\gamma\rangle , 
\end{equation}

while the fourth moments are not equal, though the difference is
negligible:

\begin{equation}
 \langle X^4 \rangle \neq \langle x^4\_\gamma \rangle ,\quad \left| 1 - \frac{\langle x^4\_\gamma\rangle}{\langle X^4\rangle} \right| &lt; 10^{-3}, \: \forall \kappa \in \[0,1\] .
\end{equation}

Thus as we can see the stationary distribution is clearly not a Gamma
distribution, though it is rather close approximation. Sadly it is
impossible to guess the form of the actual stationary
distribution.
