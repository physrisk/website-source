Title: Noisy Deffuant's bounded confidence model
Date: 2019-11-05 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, opinion dynamics, bounded confidence, postdoctoral project
Slug: noisy-deffuant-bounded-confidence-model
Status: published
Image_url: uploads/2019/noisy-deffuant-bounded-confidence-model.png

Let us briefly come back to the [Deffuant's model]({filename}/articles/2019/deffuant-bounded-confidence-model.md)
and discuss the impact of noise on the dynamics of the model. There multiple
ways to introduce the noise into the model, so here we will focus on the way
proposed in [cite id="Pineda2009JStat"].<!--more-->

The core of the model remains the same as proposed in the original paper
[cite id="Deffuant2000ACS"]. The only difference is that after we select the
first agent, it may change opinions independently with probability
\\\( p\_n \\\). If agent decides to change opinion independently, then its new
opinion is resampled from uniform distribution (in the same manner as during
the initialization of the model). Otherwise, the second agent is selected and
their opinions are update as in the original model.

At first introduction of noise seems to do a trivial thing. Clusters are no
longer as tight as without noise. They appear to be more spread out. But in
certain cases a non-trivial effect can be seen. Namely, smaller and less stable
cluster emerge. For some parameter sets these "side" clusters persist, but in
some cases they appear and disappear, only to reappear at some later time.

Feel free to explore the new dynamics using the app below. Unlike earlier, here
we report only logarithmic density of agents in certain opinion ranges (0.01
increments). The darker the color, the more agents share similar opinions. The
ticks on the plot were placed in 0.1 increments.

[html5-interactive width="520" height="570" mode="iframe"
src="/uploads/models/deffuant-bc-model/noisy.html"]

[acknowledge id="postdoc-ak-2017-lit"]
