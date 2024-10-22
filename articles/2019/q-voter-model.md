Title: q-Voter model
Date: 2019-04-02 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, opinion dynamics, voter model, postdoctoral project
Slug: q-voter-model
Status: published
Image_url: uploads/2019/q-voter-model.png

q-Voter model is a generalization of the [voter model]({filename}/articles/2016/voter-model.md)
[cite id="Castellano2009PhysRevE"]. The main difference is that in the q-voter
model agent interacts with \\\( q \\\) randomly selected neighbors. While also
external noise is also present in this model.<!--more-->

## The model

As in the [voter model]({filename}/articles/2016/voter-model.md) at each
time tick a random agent is selected. This agent will interact with his
neighbors, yet unlike in the [voter model]({filename}/articles/2016/voter-model.md)
it will interact with his \\\( q \\\) randomly selected neighbors.  If we would
set that \\\( q=1 \\\), then this model would be equivalent to the
[voter model]({filename}/articles/2016/voter-model.md).

As it is possible that on random networks \\\( q \\\) would be larger than the
degree of some nodes, it is often allowed for the same neighbors to be selected
multiple times. E.g., on regular two dimensional lattice (as used in the app
below) the degree of all nodes is \\\( 4 \\\), hence otherwise it would hard to
implement \\\( q > 4 \\\) cases.

So, if all \\\( q \\\) neighbors share the same opinion, the agent also switches
to (copies) that opinion. Yet, if at least one neighbor has different opinion,
then the agent flips his original opinion with probability \\\( \epsilon \\\).

This q-voter model is often referred to as non-linear q-voter model as the
probability for a randomly selected agent to change his opinion is non-linear
for \\\( q > 1 \\\) [cite id="Castellano2009PhysRevE"]:

\begin{equation}
p\_q(x)= x^q + \epsilon [1 - x^q - (1-x)^q] .
\end{equation}

In the above \\\( x \\\) is a fraction of disagreeing neighbors.

It is more or less evident that the q-voter model is similar to other models of
[opinion dynamics](/tag/opinion-dynamics/) besides the already mentioned
connection to the [voter model]({filename}/articles/2016/voter-model.md).
This model also bears resemblance the [Sznajd model]({filename}/articles/2019/sznajd-united-we-stand-divided-we-fall-model.md)
(with \\\( q=2 \\\) and \\\( \epsilon=0 \\\)) and the
[vacillating voter model]({filename}/articles/2019/vacillating-voter-model.md)
(with \\\( q=2 \\\) and \\\( \epsilon=1 \\\)).

Quite a lot is known analytically about the dynamics of this model. In
[cite id="Castellano2009PhysRevE"] it was shown that model for \\\( q>1 \\\)
has two critical values:

\begin{equation}
\epsilon\_{c1} = \frac{q-1}{2^q-2} , \quad \epsilon\_{c2} = \frac{\frac{q^3}{3}-2 q^2
+ \frac{17}{3} q -4}{2^{q+2} -2 ( q^2 - q +4)} .
\end{equation}

These critical values determine the observed dynamics:

* If \\\( \epsilon > \epsilon\_{c2} \\\), then the paramagnetic phase is
observed (\\\( M \\\) fluctuates around zero, but the configuration of opinions
constantly changes).
* If \\\( \epsilon < \epsilon\_{c1} \\\), then the ferromagnetic phase with
absorbing states \\\( \pm 1 \\\) is observed (given long enough time agents will
converge towards a single opinion).
* For intermediate \\\( \epsilon \\\), \\\( M \\\) will keep fluctuating.
"Competition" between the paramagnetic and the ferromagnetic phases will be
observed, but no phase should take over in the long run.

Note that for \\\( q = 2 \\\) and \\\( q =3 \\\) both critical exponents are
equal. If in this case \\\( \epsilon \\\) is set to critical value, then given
enough time \\\( p(M) \\\) should become flat.

## HTML 5 app

Explore the rich dynamics of the q-voter model using the app below. Try out
different values of \\\( q \\\). By changing \\\( \epsilon \\\) observe all of
the different model's phases. Note that for you convenience the app reports
critical values for selected (active) \\\( q \\\). As PDF figure will not always
be useful, you may hide this plot so it wouldn't distract you.

[html5-interactive width="520" height="470" mode="iframe"
src="/uploads/models/voter/qvoter.html"]

[acknowledge id="postdoc-ak-2017-lit"]
