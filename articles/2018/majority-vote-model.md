Title: Majority-vote model
Date: 2018-12-11 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, opinion dynamics, voter model, Ising model, postdoctoral project
Slug: majority-vote-model
Status: published
Image_url: uploads/2018/majority-vote-model.png

Couple of years ago we have discussed one of the most prominent models in
[opinion dynamics](/tag/opinion-dynamics) - [voter model]({filename}/articles/2016/rinkejo-modelis.md).
This time we consider a generalization of the [voter model]({filename}/articles/2016/rinkejo-modelis.md),
which draws inspiration from the [Ising model]({filename}/articles/2010/ising-model.md).
This generalization, known as majority-vote model [cite id="Liggett1985,Oliveira1992JStatPhys"],
adds thermal noise and hence the average opinion, \\\( M \\\), no longer
converges to a fixed
point if the amount of noise is just right.<!--more-->

## Majority-vote model

Although the model can be run on any [complex network](/tag/network-models/),
let us implement it on a grid with periodic boundary conditions (basically our
grid geometry is [torus](https://en.wikipedia.org/wiki/Torus)).

Each cell on this grid corresponds to single agent. Each agent has opinion on
some topic and the opinion can be binary (though it seems that the model can be
generalized for non-binary opinions [cite id="Lima2012PhysA"]). For the sake of
simplicity let us quantify the possible alternatives as \\\( +1 \\\) (red color
in our app) and \\\( -1 \\\) (blue color in our app).

During each time step a random agent is chosen. The selected agent checks whether
his opinion is "aligned" with his neighbors cumulative opinion. In other words
the agent checks if he agrees with the majority of his neighbors. If he agrees
with the majority, then his willingness to change the opinion will be low.
Otherwise the agent will be more inclined to switch his opinion. Let us say that
the agent will change his opinion with probability \\\( q \\\) if he finds that
he agrees with the local majority, while otherwise, if he disagrees with the
local majority, he will "flip" with probability \\\( 1-q \\\). If neither
of the binary opinions has majority, then the agent will flip
with probability \\\( 0.5 \\\).

These forms of probabilities likely come from a specific interpretation of the
Ising model. In which the orientation of the selected spin is determined by
coming into contact with some heatbath. Yet in the majority-vote model it is not
necessary to ensure that flipping probabilities sum to unity. It would suffice
to assume that probability to flip "in-majority" is a lot smaller than probability
to flip "out-of-majority". But we keep the original notation, because it is
commonly used in the literature as well as to keep the model simpler (a single
parameter instead of two).

To keep matters simple in this implementation of the majority-vote model we
consider only von Neumann neighborhood of radius 1 (namely each agent has only
4 neighbors). In general one could consider broader radius or different types of
neighborhoods, but this selection is one of the simplest and the most common
in the literature.

So for the majority-vote model to work nicely we simply have to require that
\\\( q \ll 1 \\\). Earlier research suggests [cite id="Oliveira1992JStatPhys"]
that especially interesting behavior should be observed for \\\( q \approx 0.075 \\\),
because this is a critical point for continuous transition. It is also reported
that this model possesses same critical exponents as the
[Ising model]({filename}/articles/2010/ising-model.md).

## HTML5 app

Below you can find HTML5 app using which you can check your intuitions. Here we
also provide some of our intuitions.

Obviously if \\\( q=0 \\\), then the majority-vote model becomes extremely similar
to the [voter model]({filename}/articles/2016/rinkejo-modelis.md). Namely average
opinion will converge to some fixed point (though not necessarily \\\( -1 \\\) or
\\\( 1 \\\)).

For small yet positive \\\( q \\\) the model will start to oscillate between the
\\\( -1 \\\) and \\\( 1 \\\). Though the switching from one extreme to the other
could take long time. As \\\( q \\\) approaches the critical point the extremes
will become less probable than broad range of medium values. For even larger
\\\( q \\\) the average opinion will start to converge to \\\( 0 \\\)
(approximately equal number of agents having the opposite opinions). Similar
transition could be observed in the [Kirman's model](/tag/kirman-model/), which
suggests an interesting research direction for us in the future.

Note that the model app provides another parameter \\\( p \\\), which sets the
initial fraction of red agents (ones with \\\( +1 \\\) opinion). It is only used
to generate initial configuration of the grid.

[html5-interactive
src="/uploads/models/majority-vote-model/index.html" width="520"
height="450" mode="iframe"]

[acknowledge id="postdoc-ak-2017-lit"]
