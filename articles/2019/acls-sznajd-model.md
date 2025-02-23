Title: ACLS Sznajd model
Date: 2019-03-05 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, opinion dynamics, Sznajd model, postdoctoral project
Slug: acls-sznajd-model
Status: published
Image_url: uploads/2019/acls-sznajd-model.png

This time we consider another generalization of the
[Sznajd model]({filename}/articles/2019/sznajd-united-we-stand-divided-we-fall-model.md), which also includes
four opinions. But now they are no longer one-dimensional! In this
Authoritarian-conservative-libertarian-socialist (ACLS) Sznajd model
opinions are two-dimensional. Namely, there are two binary dimensions:
attitudes towards political and personal freedoms are considered at the same time
[cite id="SznajdWeron2005PhysA"].
<!--more-->

## The model

The ACLS model is based on the idea that political spectrum could be not
one-dimensional (the left-right divide), but in fact have two intertwined
dimensions: economic (we will use \\\( E\_k \\\) to denote economic dimension)
and social (personal; we will use \\\( S\_k \\\) to denote social dimension)
freedoms. This idea is heavily inspired by the
[Political Compass](https://www.politicalcompass.org/).

Based on their binary (restrict or endorse) economic and personal freedom
attitudes agents can be split into four types:

* **Authoritarian** agents restrict both economic and personal freedoms. In our
notation such agents have \\\( E\_k = -1 \\\) and \\\( S\_k = -1 \\\). These
agents are marked using red-ish color in the app.
* **Conservative** agents endorse economic freedoms, but restrict personal
freedoms. In our notation such agents have \\\( E\_k = -1 \\\) and
\\\( S\_k = 1 \\\). These agents are marked using blue-ish color in the app.
* **Libertarian** agents endorse both economic and personal freedoms. In our
notation such agents have \\\( E\_k = 1 \\\) and \\\( S\_k = 1 \\\). These
agents are marked using purple-ish color in the app.
* **Socialist** agents restrict economic freedoms, but endorse personal
freedoms. In our notation such agents have \\\( E\_k = -1 \\\) and
\\\( S\_k = 1 \\\). These agents are marked using green-ish color in the app.

As the dimensions under consideration are notably different, most people
perceive economic freedoms to be less intimate than personal freedoms, different
assumptions are made about the opinion dynamics on these dimensions. Namely,
economic discussions occur through [Sznajd model]({filename}/articles/2019/sznajd-united-we-stand-divided-we-fall-model.md)
with "social validation" rule and without "discord" rule, while discussions
about personal freedoms occur via Glauber dynamics at zero temperature. 

To be a bit more clear about the algorithm let us outline it for you. In this
outline, when using mathematical expressions we will assume that agents are
distributed in the one-dimensional space (line), though in the app below they are
distributed in the two-dimensional space (grid).

First choose two random neighboring agents. If these two agents agree about
personal freedom (if \\\( S\_{i} = S\_{i+1} \\\) in one-dimensional case),
they transmit their economic attitudes to their other neighbors
(\\\( E\_{i-1} = E\_{i} \\\) and \\\( E\_{i+1} = E\_{i+2} \\\)). Otherwise the
transmission of economic attitudes occurs
with probability \\\( p\_t \\\) (here t stands for tolerance).

Next choose a random agent and his two neighbors. For the sake of simplicity we
choose two neighbors on the opposite sides of the agent. If the neighbors agree
on economic issues (if \\\(E\_{i-1} = E\_{i+1} \\\)), then
transmission of social attitudes occurs. Otherwise the transmission of social
attitudes occurs with probability \\\( p\_t \\\).

Transmission of social attitudes occurs via Glauber dynamics at zero temperature.
Namely, if the neighbors agree about the personal freedom
(if \\\( S\_{i-1}=S\_{i+1} \\\)), then the selected agent
adopts their views on personal freedom (\\\(S\_i = S\_{i-1} \\\)).
Otherwise agent flips his views on personal freedom with probability \\\( 1/2 \\\).

## HTML 5 app

Explore the formation of consensus in this case. Note that the agents reach
agreement only on economic dimension, while personal (social) dimension stays
noisy. These is because of the different mechanisms used for each dimension.

This app has two additional parameters \\\( p\_e \\\) and \\\( p\_s \\\). Both
of these set the probabilities for each agent to endorse economic and social
(personal) freedoms during the initialization.

[html5-interactive width="520" height="470" mode="iframe"
src="/uploads/models/opinion-dynamics/sznajd-model/acls.html"]

[acknowledge id="postdoc-ak-2017-lit"]
