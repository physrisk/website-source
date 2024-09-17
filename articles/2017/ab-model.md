Title: AB model
Date: 2017-04-04 07:13
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive models, languages, politics, voter model, sociology, opinion dynamics
Slug: ab-model
Status: published

Let us now return to the [Voter
model]({filename}/articles/2016/voter-model.md). In the original
model we had agents occupying two possible states. They chose their
state simply by copying the choice made by their neighbors. Yet in most
elections around the world more than two parties compete for the
electoral vote. Furthermore it is hardly believable that any established
supporter of any party would switch to following the opposing party over
night. One way to account for these zealous supporters would be to
introduce "[agents with fixed
state]({filename}/articles/2013/impact-controlled-agents-dynamics-Kirman-model.md)."
Yet some strongly opinionated individuals do changes their beliefs, thus
this would not be an ideal solution. Alternative approach was considered
in \[cite id="Castello2006NJP"\]. In this paper a three state model is
proposed, where the third state serves as intermediate stop for the
agents switching between the two main states.<!--more-->

Model
-----

In \[cite id="Castello2006NJP"\] the AB model is formulated as a model
of competition between languages. As any individual can speak two
languages the third state is easily justifiable - it basically means
that individual know two languages. Yet, despite this difference, the
underlying mechanics behind the model remains the same as in the [Voter
model]({filename}/articles/2016/voter-model.md).

Let us assume that some agents speak only A, some only B, while some
speak both A and B. These agents may talk to their four neighbors.
Naturally if you speak to people you eventually learn their language
(understand their political views):

\begin{equation}
 p(A \rightarrow AB)=\frac{1}{2} x\_B , \quad p(B \rightarrow AB) = \frac{1}{2} x\_A . 
\end{equation}

Yet you will hardly forget your initial language (initial political
view) over night:

\begin{equation}
 p( A \rightarrow B) = 0 , \quad p(B \rightarrow A)=0 . 
\end{equation}

Here \\\(  x\_i \\\) is a fraction of neighbors speaking only given
language. Accounting for bilingual agents allows us to formulate law of
conservation, \\\(  x\_A + x\_B + x\_{AB} = 1 \\\). The language in this
model may be forgotten if agent does not use it frequently:

\begin{equation}
 p(AB \rightarrow B)=\frac{1}{2} (1-x\_A) , \quad p(AB\rightarrow A) = \frac{1}{2} (1-x\_B) . 
\end{equation}

Thus one just needs to randomly pick agent and change his state
according to the given transition probabilities. In the applet below
during one time unit all agents have a chance to switch their state once
(on average as agents are picked randomly).

A similar model was earlier proposed in \[cite id="Vazquez2003JPhysA"\].
In \[cite id="Vazquez2003JPhysA"\] the authors have started from the
original [Voter model]({filename}/articles/2016/voter-model.md).
This allows significantly simpler treatment in one-dimensional case,
e.g, ring topology, - one can model movement of domain boundaries
instead of every single agent. We have already discussed this technique
in previous text "[Dynamical correlated spin
model]({filename}/articles/2016/dynamical-correlated-spin-model.md)" (in
which we presented results of \[cite id="Kononovicius2016PhysLettA"\]).

Interactive applet
------------------

What you should check out in the applet below? First you will see a
noise picture in which agents A (red), B (blue) and AB (magenta) will be
intermixed (note that the grid's edges are interconnected). The initial
view is determined by \\\(  \rho\_A \\\) and \\\(  \rho\_B \\\) values,
which set initial density of two main agent types. Yet after short time
the view will change into something reminding of [Ising
model]({filename}/articles/2010/ising-model.md). Namely uniform groups
(domains) of A or B agents will form. These domains will be separated by
a thin layer of AB agents. After some fast forwarding, "&gt;&gt;"
button, you should observe a growing dominance of a single state (either
A or B).

No more instructions - just try it yourself!

[html5-interactive
src="/uploads/models/ab-model/index.html"
height="265" width="425" mode="iframe"]
