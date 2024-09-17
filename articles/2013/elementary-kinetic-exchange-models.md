Title: Elementary kinetic exchange models
Date: 2013-11-25 07:16
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive models, kinetic models, statistical physics, wealth
Slug: elementary-kinetic-exchange-models
Status: published

In the second half of
the XIXth century physicists, of whom probably the most well known are
Maxwell and Boltzman, worked on the explanation of empirically
discovered laws of thermodynamics. While working on this problem they
developed a simple model to reproduce the collisions of particles in the
ideal gasses. This simple model allowed to analytically derive the
distribution of energy and velocities in gasses and to lay foundations
for the statistical physics. In the context of Physics of Risk it is
worthwhile to mention that Maxwell and Boltzman relied not only on the
empirical works by other physicists, but also on the demographic data!
Boltzmann even wrote that "molecules are like so many individuals,
having the most various states of motion" \[cite id="Ball2002PhysA,
Patriarca2013AJP"\]. Inspired by this quote we will briefly review,
while relying on \[cite id="Patriarca2013AJP"\], some of the simplest
kinetic models and their applications to modeling of socio-economic
systems.<!--more-->

Elementary kinetic model
------------------------

One of the advantages of the kinetic models is that they are easily
implemented and modified. Actually in most cases the basic scheme behind
the kinetic models is the same - randomly moving particles interact and
exchange their kinetic energy. The only freedom of choice here is the
mechanism of the exchange.

Let us assume that we have a fixed number of particles, \\\(  N \\\), in
the system. Also let us assume that the particles have certain kinetic
energy, \\\(  w\_i(t) \\\), at any given time \\\(  t \\\). Because the
particles interact only during collisions and due to the fact that there
are no external forces acting on the system, the internal energy of the
system should remain the same and be equal to the sum of kinetic
energies of the particles, \\\(  U = \sum\_{i=1}^N w\_i(t) \\\).

At each discrete time step (\\\(  t=0,1,2,\ldots \\\)) let us select two
random particles, given indexes \\\(  i \\\) and \\\(  j \\\), and assume
that only these two particles are interacting at this moment. Evidently
the kinetic energies after the interaction will depend on the energies
particles had prior to the interaction:

\begin{equation}
 w\_i(t+1) = w\_i(t) - \Delta w\_{ij} , \quad w\_j(t+1) =w\_j(t) + \Delta w\_{ij} . \label{wchange}
\end{equation}

\\\(  \Delta w\_{ij} \\\), in general case, may have many distinct
forms. Yet we can talk about some of them in the physical context. E.g.,
if particles move only in single dimension (balls on a stiff metal rod),
then all of the collisions will be head-on, thus leading to \\\( \Delta w\_{ij} = w\_i(t) - w\_j(t) \\\). Yet the one dimensional case is
not interesting and completely trivial as the distribution of absolute
speeds and energies will not change. More interesting cases are those of
higher dimensions, because in such case head-on collisions become rare
and larger variety of collisions become probable. Due to the molecular
chaos hypothesis for a two dimension case we can assume that \[cite
id="Patriarca2013AJP"\]:

\begin{equation}
 \Delta w\_{ij} = (1-\varepsilon) w\_i(t) - \varepsilon w\_j(t) , \label{elementary}
\end{equation}

were \\\(  \varepsilon \\\) is a random variable uniformly distributed
in \\\(  \[0,1\] \\\). Note the general similarity of the two and one
dimensional exchange equations. Three and higher dimensional cases
should be more or less similar \[cite id="Patriarca2013AJP"\], but one
should take into account that the probability of head-on collisions
decreases proportional to the dimensionality of the system, \\\(  p\_c\sim 1/d \\\) (here \\\(  d \\\) stands for the dimension).

Note that by putting \eqref{elementary} into \eqref{wchange} one obtains

\begin{equation}
 w\_i(t+1) = \varepsilon \[ w\_i(t) + w\_j(t) \] , \quad w\_j(t+1) = (1-\varepsilon) \[ w\_i(t) + w\_j(t) \] . 
\end{equation}

As we can see in the above, in this case, after collision, we have total
kinetic energy of both particles being uniformly distributed among them.
Thus in the literature this model is known as random reshuffling or
reshuffling model \[cite id="Patriarca2013AJP"\].

In an HTML5 applet below you can convince yourself that the stationary
distribution of this model is Boltzmann-Gibbs distribution (given by red
curve).

[html5-interactive
url="/uploads/models/kinetic-models/random-reshuffle-en.html"
width="420" height="390" mode="iframe"]

Constant exchange model
-----------------------

Boltzmann-Gibbs distribution can be also easily obtained if the exchange
rate is constant, namely if:

\begin{equation}
 \Delta w\_{ij} = w\_0 , 
\end{equation}

here \\\(  w\_0 \\\) is a model parameter describing the amount of energy
exchange during each interaction.

[html5-interactive
url="/uploads/models/kinetic-models/constant-swap-en.html"
width="420" height="415" mode="iframe"]

Fixed saving and borrowing
--------------------------

There are at least two more simple modifications, which might be
implemented in the model without making it overly complex. Interestingly
enough these two modifications are the exact opposites of each other.
Our first option is to allow the particles to borrow energy up to
\\\(  w\_{max} \\\) (it is the same as to allow the negative energies).
The second options is to force particles to conserve certain amount of
energy, \\\(  w\_{min} \\\). The previous definition of \\\(  \Delta w\_{ij} \\\), \eqref{elementary}, may be used, one just needs to
alter the \\\(  w\_i(t) \\\) and \\\(  w\_j(t) \\\) values prior to the
actual exchange (to increase them by \\\(  w\_{max} \\\) or by decreasing
them by \\\(  w\_{min} \\\)).

In the HTML5 applet below we have single parameter \\\(  w\_{mm} \\\),
which stands for both \\\(  w\_{max} \\\) and \\\(  w\_{min} \\\). If
\\\(  w\_{mm}&gt;0 \\\), then the fixed saving model is used (with
\\\(  w\_{min} = w\_{mm} \\\)). In the opposite case the borrowing model
is used (with \\\(  w\_{max} = -w\_{mm} \\\)). Note that if \\\( w\_{max} \rightarrow \infty \\\), then the stationary distribution
approaches uniform distribution and the system becomes less stable.
While if \\\(  w\_{min} \rightarrow 1 \\\) (approaching initial energy
of the particles), the system remains in the initial state.

[html5-interactive
url="/uploads/models/kinetic-models/fixed-saving-en.html"
width="420" height="415" mode="iframe"]

We would like to draw your attention to the fact that these kind of
borrowing and saving rules are somewhat simplistic and are not very
realistic in context of modeling real socio-economic systems. Though
even from this simple model one can draw a correct conclusion -
limitless borrowing may destabilize the system. In the nearest future we
promise to comeback with at least a more sophisticated saving rules.

"All in" exchange
-----------------

Another possible variation of the model is to implement the "All in"
exchange. Namely the particle with less energy "gambles" by "betting"
its whole energy (same as "all in" in poker or similar betting game):

\begin{equation}
 \Delta w\_{ij} = \mathop{min} (w\_i, w\_j) . 
\end{equation}

It should be evident that this model is quite different, because sooner
or later all energy will be accumulated by a single particle, while all
others will have no energy. See HTML5 applet below.

[html5-interactive
url="/uploads/models/kinetic-models/va-bank-en.html"
width="420" height="390" mode="iframe"]
