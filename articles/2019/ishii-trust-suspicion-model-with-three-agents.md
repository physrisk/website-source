Title: A. Ishii trust and suspicion model with three agents
Date: 2019-12-03 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, opinion dynamics, bounded confidence, postdoctoral project
Slug: ishii-trust-suspicion-model-with-three-agents
Status: published
Image_url: uploads/2019/ishii-trust-suspicion-model-with-three-agents.png

Recently one of the well-known researchers in the field has proposed an
interesting opinion dynamics model, which aims to explain polarization and group
formation in human societies [cite id="Ishii2019GDN"]. His model is based on two
antipodal concepts in human interactions: trust and suspicion.

In this post we discuss how the model is extended to three agent case (which
will eventually lead us to many agent case) and its relationship with well-known
Hegselmann-Krause model, which we have discussed in an earlier
[post]({filename}/articles/2019/hegselmann-krause-bounded-confidence-model.md).
<!--more-->

So now Type I update rule is given by:

\begin{equation}
O\_{i} (t+1) = O\_{i} (t) + \sum\_{j=1}^{3} D\_{ij} O\_{j} (t) \Delta t.
\end{equation}

While Type II update rule is given by:

\begin{equation}
O\_{i} (t+1) = O\_{i} (t) + \sum\_{j=1}^{3} D\_{ij} \Phi(|O\_{i} (t)-O\_{j} (t)|) ( O\_{j} (t) - O\_i(t) ) \Delta t.
\end{equation}

As we generalize, note that we require that \\\( D\_{ii} \\\) is zero. Meaning
that agent does not have any impact on his own opinion. This might not be as
important for Type II model (as \\\( \Delta O = 0 \\\)), but it might play
important role in Type I model.

With three agents there are variety of different scenarios to explore. For
example, what happens if two agents mildly distrust each other, but both
strongly trust the other one? In such case that agent could mediate or enforce
his own opinion in Type II model. In Type I model the third agent would bring
about a temporary consensus, but strong divergence of opinion would eventually
follow.

What would happen if all agents would have asymmetric relationships? There are
also numerous other scenario to be tested results of which would depend not
only on \\\( \mathbf{D} \\\), but also on the initial conditions. Feel free to
try variety of scenarios using the app below.

[html5-interactive width="520" height="405" mode="iframe"
src="/uploads/models/opinion-dynamics/ishii-trust-model/index-3.html"]

[acknowledge id="postdoc-ak-2017-lit"]
