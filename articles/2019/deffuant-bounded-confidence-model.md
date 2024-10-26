Title: Deffuant et al. bounded confidence model
Date: 2019-05-14 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, opinion dynamics, bounded confidence, postdoctoral project
Slug: deffuant-bounded-confidence-model
Status: published
Image_url: uploads/2019/deffuant-bounded-confidence-model.png

All of the [opinion dynamics](/tag/opinion-dynamics/) models we have considered
so far had discrete opinions. However it would be rather natural to think about
opinions as being continuous. Opinions become discrete only due to the way we
observe them, namely ballots in the elections and questionnaires in the polls
can have only discrete options (even in case you can write in your own
preference). Also discrete opinions are easier to analyze, only then one can
talk about the majority or compare their popularity.

Nevertheless there are few interesting models with continuous opinions. Usually
these models are based on the concept of bounded confidence. Meaning that people
tend to listen to other people who have a relatively similar opinion to theirs.
Here in this post we will discuss one of these bounded confidence models
proposed by Deffuant et al. in [cite id="Deffuant2000ACS"].
<!--more-->

## The model

In the Deffuant model we consider a population \\\( N \\\) agents. These agents
might be put on a graph (interacting only with their immediate neighbors), but
let us consider only the simplest case when the agents are on the complete graph
(agents are able to interact with all other agents). Each of these agents is
initially assigned opinion \\\( x\_i \\\), which is randomly chosen from the
interval \\\( [0,1] \\\).

Afterwards at each time tick two random agents are selected. If their opinions
are not too different, \\\( | x\_i - x\_j | < \epsilon \\\), they interact in
the following manner:

\begin{equation}
x\_i(t+1) = x\_i(t) - \mu ( x\_i(t) - x\_j(t)) ,
\end{equation}

\begin{equation}
x\_j(t+1) = x\_j(t) + \mu ( x\_i(t) - x\_j(t)) .
\end{equation}

In the above \\\( \epsilon \\\) could be interpreted as tolerance to differing
opinion, while \\\( \mu \\\) is the adjustment rate. Obviously \\\( \epsilon \\\)
lies in the interval \\\( [0,1] \\\), while \\\( \mu \\\) in \\\( [0,0.5] \\\).
In the extreme case if \\\( \mu=0.5 \\\), then the agents assume the same opinion,
which is average of their opinions prior to their interaction.

Not much is known analytically about the dynamics of the Deffuant model, but
many things are known from the numerical simulations. From the definition of the
model it is pretty clear that opinions will cluster (they will not become
exactly the same, but will grow extremely similar) and the number of clusters
will be dependent on \\\( \epsilon \\\). Actually it is known that roughly the
dependence is \\\( n\_c \sim \frac{1}{2 \epsilon} \\\).

## HTML 5 app

Feel free to explore the dynamics of the Deffuant model using the app below.
Just note that the app might be somewhat memory hungry. This is mainly because
of the top figure, which shows opinion trajectories of all agents (100 of them
are used in the app). The bottom figure shows current distribution of the
opinions.

[html5-interactive width="520" height="470" mode="iframe"
src="/uploads/models/deffuant-bc-model/index.html"]

[acknowledge id="postdoc-ak-2017-lit"]
