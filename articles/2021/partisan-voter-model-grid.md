Title: Partisan voter model on a two dimensional grid
Date: 2021-05-25 08:00
Author: Aleksejus Kononovicius
Tags: Agent-based models, Interactive models, voter model, postdoctoral project, opinion dynamics
Slug: partisan-voter-model-two-dimensional-grid
Status: published
Image_url: uploads/2021/partisan-voter-model-grid.png

While doing literature review for my postdoctoral project I have taken a
look at [cite id="Masuda2010PRE"]. I have even implemented related
interactive apps, but I have forgotten about them and not written a post about
the model on Physics of Risk.

In this post I am sharing an app which implements [partisan voter
model]({filename}/articles/2021/partisan-voter-model.md) on a two
dimensional grid. There is nothing special about this particular version of
the model. Just the average consensus time for this topology ought to be a
bit shorter.
<!--more-->

## Interactive app

Below you should see an app, which implements Masuda's partisan voter model
on a two dimensional grid (every agent is able to interact with his four
immediate neighbors).

Notice that for non-trivial values of \\\( \varepsilon \\\) the
model appears to not be able to settle down close to the self-centered
polarization state. Also note the peculiar shapes of the cluster of agents
with similar external opinions. They are very much reminiscent of the
clusters observed in the [Ising model](/tag/ising-model/) near the critical
temperature.

[html5-interactive width="520" height="480" mode="iframe"
url="/uploads/models/voter/partisan/index.html"]

Note that this app colors agents (cells) according to their external
opinion, while in the equations from [the earlier
post]({filename}/articles/2021/partisan-voter-model.md) they are referred to
by their internal opinions.

[acknowledge id="postdoc-ak-2017-lit"]

