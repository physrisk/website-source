Title: Sznajd (United we stand, divided we fall) model
Date: 2019-01-22 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, opinion dynamics, voter model, Ising model, Sznajd model, postdoctoral project
Slug: sznajd-united-we-stand-divided-we-fall-model
Status: published
Image_url: uploads/2019/sznajd-united-we-stand-divided-we-fall-model.png

Sznajd model, also known as united we stand, divided we fall model, is another
classical model in [opinion dynamics](/tag/opinion-dynamics/).
It was proposed in 2000 by two Polish scientists in [cite id="Sznajd2000IntJModPhysC"]
and since then it was heavily studied both by various groups of sociophysicists.
It was used not only in the usual generic scenarios (e.g., exploring how fast
the opinions converge), but also helped to predict Polish elections of 2015
[cite id="Sobkowicz2016PlosOne"].
<!--more-->

## The model

Sznajd model itself is rather simple. In its original formulation
[cite id="Sznajd2000IntJModPhysC"] it uses only two rules: social validation rule
and discord rule.

Unlike in the most other models of [opinion dynamics](/tag/opinion-dynamics/) these
rules apply not only to two neighboring agents, but to their immediate neighbors
as well. If the two neighboring agents agree (share the same opinion), their
neighbors will also start to agree. If the two neighboring agents disagree (have
differing opinions), their neighbors will also disagree with the two agents.

The first rule here is called **social validation rule**, because the opinion
of the agreeing agents gets validated. This rule is a lot like ferromagnetic
interaction in the [Ising model]({filename}/articles/2010/ising-model.md) and
also similar to the copying (herding) interactions in the
[voter model]({filename}/articles/2016/voter-model.md). Actually it was
shown that this model is equivalent to voter model with one caveat - the
opinion spreads not through the immediate neighbors (\\\( i \\\) influencing
\\\( i+1 \\\)), but through the second neighbors (\\\( i \\\) influencing
\\\( i+2 \\\)). This rule also stands for the "united we stand" part in the
alternative naming of the model.

The second rule in this model (not used in the later iterations of the model) is
called **discord rule**, because disagreement (discord) spreads. This rule is a
lot like anti-ferromagnetic interaction in the
[Ising model]({filename}/articles/2010/ising-model.md). Using this rule creates
chessboard patterns. This rule stands for the "divided we fall" part in the
alternative naming of the model.

Similarity to the [Ising]({filename}/articles/2010/ising-model.md) and
the [voter]({filename}/articles/2016/voter-model.md) models suggests what
can be expected from the model. This model will reach a stationary state with
average opinion, \\\( M \\\), of \\\( -1 \\\), \\\( 0 \\\) or \\\( 1 \\\).

## HTML 5 app

The app below allows you to explore the dynamics of the Sznajd model. You can
enable and disable usage of the both of the discussed rules as well as select
the probability for an agent to have a positive opinion at \\\( t=0 \\\).

[html5-interactive width="520" height="505" mode="iframe"
src="/uploads/models/opinion-dynamics/sznajd-model/index.html"]

[acknowledge id="postdoc-ak-2017-lit"]
