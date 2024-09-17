Title: Voter model
Date: 2016-01-19 07:14
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive models, cellular automata, politics, sociology, opinion dynamics, voter model
Slug: voter-model
Status: published

In 1973 two British scientists
proposed an elementary model of spatial conflict between two distinct
species \[cite id="Clifford1973"\]. The results of this model were
heavily dependent on the dimensionality of the topology on which
modeling occurred, which was rather interesting phenomenon at that
time. In contemporary science this model is rather popular, thought now
it is known as the voter model. This text discusses the simplest version
of the model.<!--more-->

## Essential rules behind the model

We start with grid, which is fully filled with agents of random types.
In our app we use only two types, but in general case one could use
more. Next during each time step random agent chooses his random
neighbor and copies his "type" (imitates his behavior). Most of other
voter models differ in stochastic rule, which is used to select random
neighbor. In our app all immediate neighbors are chosen with equal
probability.

Why this model is referred to as the voter model? Most of the more
sophisticated applications of this model consider opinion dynamics. It
has becomes one of the iconic models of opinion dynamics in sociology.
It actually doesn't matter if you model human or animals. It actually
doesn't matter if competition is between different opinions or between
different species.

## HTML5 app

In this app you can choose dimensionality of the topology - "1D" stands
for the one dimensional case (topology - ring), while "2D" stands for
the two dimensional case (topology - torus). You can also set the
probability that agent will start being of "red" type, \\\(  p\_r \\\).
On the right hand side of the app you will see a graph of the mean
opinion. While calculating mean opinion it is assumed that "red" agents
have opinion index \\\(  1 \\\), while blue agents have opinion index
\\\(  -1 \\\).

[html5-interactive
url="/uploads/models/voter/index.html" width="425"
height="280" mode="iframe"]
