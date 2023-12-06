Title: Epstein's riot model
Date: 2017-03-21 07:11
Author: Aleksejus Kononovicius
Tags: Agent-based models, Interactive models, Epstein model, conflicts, burst statistics, sociology
Slug: epsteins-riot-model
Status: published

Previously discussed [Granovetter
threshold
model]({filename}/articles/2017/granovetters-threshold-model.md) is
just one of the numerous simple collective action model. This time we
continue the same topic by considering another, yet a bit more complex,
riot model, which was proposed by Epstein in \[cite
id="Epstein2002PNAS"\]. This model is rather interesting in a sense that
it is not static as original Granovetter model is. It has interesting
temporal dynamics builtin. In a recent paper by British mathematicians
\[cite id="Davies2013SciRep"\] this model was applied to explain the
patterns observed in 2013 London riots.<!--more-->

Model
-----

Briefly the model could be described as follows. People randomly move on
the lattice. Each of them feels a personal hardship, a grievance towards
government. If there are now policemen around the people will express
their attitude publicly. Yet they will keep quiet if policemen are
around. Unless a critical mass of protesters gathers, then outburst of
violence is unavoidable. The most unlucky will go to jail, while the
remaining protesters will have to keep their opinions to themselves.

From the brief description above it should be more or less clear what do
policemen do. They are randomly moving around the lattice and looking
for protesters (their vision radius is given by \\\(  v \\\)). If they
encounter protesters, they arrest random protester. Policeman moves to
the cell containing random protester and sends him to jail for a certain
number of turns (randomly picked from the interval \\\(  \[1,J\_{max}\] \\\)). Policemen themselves do not experience grievance. Their
number is random, yet influenced by the density, \\\(  \rho\_{cop} \\\),
parameter.

On the lattice we show policemen in blue. While number of jailed agents
is shown as a black curve in the plot.

The behavior of ordinary agents (the population) is a bit more complex.
They also move around the lattice randomly. As they move around they
observe the number of protesters, \\\(  A \\\), and the number of
policemen, \\\(  C \\\), in their vision radius (also given by \\\( v \\\)). According to these numbers they perceive level of risk:

\begin{equation}
 R\_i= r\_i \theta(C-A+0.1) , 
\end{equation}

here \\\(  \theta(x) \\\) is a [Heaviside theta
function](https://en.wikipedia.org/wiki/Heaviside_step_function), while
\\\(  r\_i \\\) is a measure of agent's risk aversion (in the model it is
a random number in interval \\\(  \[0,1\] \\\)). The \\\(  0.1 \\\) term
is included purely for the sake of simplicity, so that \\\( \theta(x) \\\) yields only \\\(  0 \\\) or \\\(  1 \\\). Perception of risk
influences the agent's decision to protest:

\begin{equation}
 H\_i (1-L) - R\_i &gt; T , 
\end{equation}

here \\\(  H\_i \\\) is the hardship experienced by the agent (in model
it is a random value from interval \\\(  \[0,1\] \\\)), \\\(  L \\\) is
the perceived legitimacy of the current regime (parameter of the model),
while \\\(  T \\\) is a action threshold (parameter of the model). If
this condition is not satisfied, then agent hides his discontent.

In the lattice we use green color to represent ordinary agents, while
protesting agents are shown in red. Furthermore red curve in the plot
shows a temporal evolution of the number of protesters.

We have not yet discussed a meaning of \\\(  \rho\_{civ} \\\). This
parameters sets the initial desired density of the ordinary agents on
the lattice.

Interactive applet
------------------

[html5-interactive height="300" width="440" mode="iframe"
src="/uploads/models/epstein/index.html" height="325"]
