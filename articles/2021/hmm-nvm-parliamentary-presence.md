Title: "Hidden" noisy voter model for the parliamentary presence
Date: 2021-02-16 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, anomalous diffusion, opinion dynamics, voter model, politics, postdoctoral project
Slug: hidden-noisy-voter-model-for-the-parliamentary-presence
Status: published
Image_url: uploads/2021/hmm-nvm-parliamentary-presence.png

In an [earlier post]({filename}/articles/2021/anomalous-diffusion-parliamentary-presence-data.md)
we have defined the parliamentary presence and shown that the data from 
Brazilian and Lithuanian parliaments exhibits anomalous diffusion. Actually
we have analyzed Lithuanian data [cite id="Kononovicius2020JStat"], while
Brazilian data was considered by Vieira and others [cite id="Vieira2019PRE"].
Also in a [follow up post]({filename}/articles/2021/nvm-parliamentary-presence.md)
we have shown that a noisy [voter model](/tag/voter-model/) is able to reproduce
ballistic regime and normal diffusion when we consider individual agent
trajectories. Now let us extend the model to account for sub-linear diffusion
of parliamentary attendance.<!--more-->

## The model extension

Now let us assume that the attendance behavior is imperfect. Namely, agents in
state \\\( 1 \\\) some times do not attend, while agents in state \\\( 0 \\\)
do. Let \\\( q\_i \\\) be the probability that agent in state \\\( i \\\)
will attend the session. To keep the original meaning of states we have to
require that \\\( q\_0 \leq q\_1 \\\).

![(figure from my paper) Schematic representation of the hidden model]({static}/uploads/2021/hmm-nvm-parliamentary-presence.png "(figure from my paper) Schematic representation
of the hidden model")

Note that this model is somewhat alike hidden Markov models, but the dynamics
are assumed to be conditioned on the true (unobserved) state.

Now this small modification of the model allows us to recreate sub-linear
diffusion. The exact dependence of power-law coefficient on \\\( q\_i \\\) is
not known, but by utilizing
[simulated annealing]({filename}/articles/2020/scishow-the-most-metal-algorithm.md)
we were able to find parameter values for which the model replicates the
empirically observed behavior of the Lithuanian Seimas
[cite id="Kononovicius2020JStat"]. These parameter values are the defaults of
the app below.

## The interactive app

Feel free to explore the model in the interactive app below. The upper plot
shows how the attendance of the individual agents, \\\( N = 100 \\\), evolves
within the window of 250 days, \\\( N\_s = 250 \\\). Agent index varies on the
y-axis, while time is on the x-axis. The lower left plot shows the cumulative
presence series of three agents. The lower right plot shows the scaling law
and standard deviation series for the data within the window of 250 days. Try
varying model parameters to see how the law and the dynamics of the model
change.

[html5-interactive mode="iframe" height="500" width="520"
src="/uploads/models/voter/parliamentary-presence/hmm.html"]

[acknowledge id="postdoc-ak-2017-lit"]
