Title: A. Ishii trust and suspicion model with many agents
Date: 2019-12-17 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, opinion dynamics, bounded confidence, trust and suspicion, postdoctoral project
Slug: ishii-trust-suspicion-model-with-many-agents
Status: published
Image_url: uploads/2019/ishii-trust-100.png

Recently one of the well-known researchers in the field has proposed an
interesting opinion dynamics model, which aims to explain polarization and group
formation in human societies [cite id="Ishii2019GDN"]. His model is based on two
antipodal concepts in human interactions: trust and suspicion.

In this post we present you with an app, which uses \\\( 100 \\\) agents.
Obviously, it would not be reasonable to enter \\\( \mathbf{D} \\\) by hand for
such number of agents. So we have used random strategy to fill in
\\\( \mathbf{D} \\\).<!--more-->

While, obviously, there is a large choice of possible fill in strategies we have
decided to use a random fill in strategy with the following assumptions:

* All relationships are symmetric (reciprocal). Both agents either trust or
distrust each other.
* Relationship is trusting with probability \\\( 1 - p\_s \\\) and distrusting
with probability \\\( p\_s \\\).
* Relationship strength is distributed according to half-normal distribution
with standard deviation \\\( \sigma \sqrt{1 - 2 / \pi} \\\). Sign is added
depending on relationship status.

So what do we find using such \\\( \mathbf{D} \\\)?

For Type I model, society
quickly approaches radical opinions. If \\\( p\_s \\\) is small, then all agents
have large positive or negative opinions (quickly approaching respective
infinity). If \\\( p\_s \\\) is large, then half of the agents converge towards
positive opinions, the other half converges to negative opinions. Transition
between these two modes appears to be rather sharp.

For Type II model, society either converges to consensus at some intermediate
value if \\\( p\_s \\\) is small, or polarizes itself for large \\\( p\_s \\\).

Try to discover the dynamics yourself using the app below. Note that this app
plots logarithmic density of opinions within \\\( O\_i \in [-10,10 ] \\\)
interval. If opinions fall outside this range, they are shown at the edges (as
if they were \\\( \pm 10 \\\)).

[html5-interactive width="520" height="570" mode="iframe"
src="/uploads/models/ishii-trust/index-100.html"]

[acknowledge id="postdoc-ak-2017-lit"]
