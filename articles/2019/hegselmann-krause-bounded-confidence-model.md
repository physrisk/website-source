Title: Hegselmann-Krause bounded confidence model
Date: 2019-05-28 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, agent-based models, opinion dynamics, bounded confidence, postdoctoral project
Slug: hegselmann-krause-bounded-confidence-model
Status: published
Image_url: uploads/2019/hegselmann-krause-bounded-confidence-model.png

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
proposed by Hegselmann and Krause in [cite id="Hegselmann2002JASSS"].<!--more-->

## The model

In the Hegselmann-Krause model we consider a population \\\( N \\\) agents. In
general case these agents might be put on a graph (interacting only with their
immediate neighbors), but let us consider only the simplest case when the agents
are on the complete graph and able to interact with all other agents. Each of
these agents is initially assigned opinion \\\( x\_i \\\), which is randomly
chosen from the interval \\\( [0,1] \\\).

Afterwards at each time tick one random agent is selected. Also a set of agents,
who have similar opinions (\\\( | x\_i - x\_j | < \epsilon \\\)), is created
(including the agent himself) and average opinion of this set is established,
\\\( \bar{x}^{(i)}(t) \\\). Then the opinion of the selected agent is updated
as follows:

\begin{equation}
x\_i(t+1) = x\_i(t) - \mu ( x\_i(t) - \bar{x}^{(i)}(t)) .
\end{equation}

Note that in the original Hegselmann-Krause model \\\( \mu = 1 \\\), namely
the agent instantaneously adjusts his opinion to match the mean, but we allow
for the adjustment to take some time. Note that the model parameters must lay
in the interval \\\( (0,1] \\\) to obtain meaningful results.

Note that Hegselmann-Krause model in its specification is very similar to the
[Deffuant model]({filename}/articles/2019/deffuant-bounded-confidence-model.md), but involves
a bit more computational requirements. Namely, picking another random agent is
a lot easier than establishing the mean opinion of all agents with similar
opinions (this gets even more involved if the opinions are not one dimensional).
Hence not a lot is known about this model neither from analytical nor from
numerical perspective. Nevertheless it seems as rather interesting approach as
it involves social (one-to-group) interactions.

## HTML 5 app

Feel free to explore the dynamics of the Hegselmann-Krause model using the app below.
Just note that the app might be somewhat memory hungry. This is mainly because
of the top figure, which shows opinion trajectories of all agents (100 of them
are used in the app). The bottom figure shows current distribution of the
opinions.

[html5-interactive width="520" height="470" mode="iframe"
src="/uploads/models/hk-bc-model/index.html"]

[acknowledge id="postdoc-ak-2017-lit"]
