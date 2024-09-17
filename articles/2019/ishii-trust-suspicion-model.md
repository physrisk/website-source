Title: A. Ishii trust and suspicion model
Date: 2019-11-19 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, agent-based models, opinion dynamics, bounded confidence, trust and suspicion, postdoctoral project
Slug: ishii-trust-suspicion-model
Status: published
Image_url: uploads/2019/ishii-trust.png

Recently one of the well-known researchers in the field has proposed an
interesting opinion dynamics model, which aims to explain polarization and group
formation in human societies [cite id="Ishii2019GDN"]. His model is based on two
antipodal concepts in human interactions: trust and suspicion.

In this post we will introduce the trust and suspicion model for the case with
two agents.<!--more-->

So let us assume that there two agents. Each of them has certain opinion
\\\( O\_i \\\) on certain subject. These two agents need to define their outlook
towards each other, \\\( D\_{ij} \\\) and \\\( D\_{ji} \\\). These two can take
any real value, with positive values standing for trusting relationship and
negative values standing for suspicion.

At each discrete time tick (the original model uses continuous time, but does so
in a manner I do not like), we will choose one random agent and update its
opinion. There are two different opinion update rules in
[cite id="Ishii2019GDN"], one is based on the earlier works of the same group
(we will refer to this update rule as Type I model), the other is based on
[bounded confidence models](/tag/bounded-confidence/) (we will refer to this 
update rule as Type II model).

Type I update rule is given by:

\begin{equation}
O\_{i} (t+1) = O\_{i} (t) + D\_{ij} O\_{j} (t) \Delta t.
\end{equation}

This update rule assumes that agents views push on other agent views towards
positive or negative infinities. This somewhat corresponds to the echo chambers,
in which opinions get more strength from the like minded. Also opinions get
stronger whenever suspicious agent tries to spread opposite views.

Type II update rule is given by:

\begin{equation}
O\_{i} (t+1) = O\_{i} (t) + D\_{ij} \Phi(|O\_{i} (t)-O\_{j} (t)|) ( O\_{j} (t) - O\_i(t) ) \Delta t.
\end{equation}

This update rule assumes that agents converge towards shared view point given
\\\( \Phi ( \Delta O ) > 0 \\\), which we call indifference function. This
function implements a bounded confidence rule, with smooth transition between
taking opinion into account and ignoring it. There are multiple possible ways
to select \\\( \Phi \\\) function, but here we will consider sigmoid function
used in the original paper [cite id="Ishii2019GDN"]:

\begin{equation}
\Phi ( \Delta O ) = \frac{1}{1+\exp(\beta [ \Delta O - \varepsilon ])} ,
\end{equation}

where \\\( \beta \\\) describes how sharp the transition is around point the
boundary point \\\( \varepsilon \\\). If difference in opinions,
\\\( \Delta O \\\), is small then \\\( \Phi ( \Delta O ) \approx 1 \\\). If
difference in opinions is large then \\\( \Phi ( \Delta O ) \\\) quickly goes to
zero. Meaning that only agents with similar enough opinions will influence each
other.

Note that in the both update rules \\\( \Delta t \\\) is a short time interval.
For the sake of simplicity we assume that \\\( \Delta t = 1 / N \\\), where
\\\( N \\\) is the number of agents (in this case it is \\\( 2 \\\)).

While this model appears to be simple, it still has quite rich dynamics. For
the model with Type I update rule, the following observations should hold:

* If two agents trust each other and their opinions are both positive or
negative, then they will run off together towards positive or negative infinity
respectively. They will be stopped only by bounded confidence. Note that this
stoppage occurs only in our interpretation of the model.
* If two trusting agents have opposite opinions, then they will converge to
neutral stance, but one of them will reach zero faster and then they will run
off towards positive or negative infinity (depending on who has reached the zero
first).
* If two agents do not trust each other, their opinions will eventually diverge.
* If the relationship is not reciprocal, meaning that one trusts the other, but
the other distrusts the first, then we will observe chasing behavior with cycles.

For the model with Type II update rule, the following observations should hold:

* If two agents trust each other, then their opinions will converge to some
middle ground.
* If two agents distrust each other, then their opinions will diverge until
they are different by more than \\\( \varepsilon \\\).
* If the relationship between two agents is asymmetric, then we will observe
run away chasing behavior.

Check our intuitions and maybe find your own insights using the app below. Also
try changing initial opinions of the agents, \\\( O\_1(0) \\\) and
\\\( O\_2(0) \\\), as they may also play a role in the observed dynamics.

[html5-interactive width="520" height="340" mode="iframe"
src="/uploads/models/ishii-trust/index.html"]

[acknowledge id="postdoc-ak-2017-lit"]
