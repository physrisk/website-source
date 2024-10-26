Title: Hierarchical voting model
Date: 2018-12-18 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, opinion dynamics, statistical physics, postdoctoral project
Slug: hierarchical-voting-model
Status: published
Image_url: uploads/2018/hierarchical-voting-model.png

Few years ago we have already introduced a more sophisticated version
of the model we are going to talk about this week. We have already
covered so called "Referendum model" by S. Galam [cited id="Galam2008IntJModPhysC"],
while talking about
[many particle interactions in kinetic exchange models]({filename}/articles/2014/many-particle-interaction-in-the-kinetic-exchange-models.md).
This time we will cover a precursor to this model, which was also reviewed in
[cited id="Galam2008IntJModPhysC"].
<!--more-->

## Hierarchical voting model

This model somewhat imitates election system used in the United States as well
as [renormalization approach](https://en.wikipedia.org/wiki/Renormalization_group)
commonly used in physics. But first let us discuss how the geometry of this model.

Here it is assumed that agents are placed on a square grid. Each cell on the
grid (at level 1) is occupied by an who has either positive (red) or negative
(blue) opinion towards some subject.

These agents are subdivided into groups, which elect their representatives.
These representatives always have the same opinion as the majority of their
group. In case of the draw, the representative will have a negative opinion.
This represents "reasonable doubt" - when given similar amount of positive and
negative evidence, current status quo is preferred by the agents.

These representatives are then also subdivided into groups on level 2. These
groups also elect representatives to level 3 according to the same rules. This
"representation-subdivision" cycle will continue until the last group elects
its single representative. This is the result of the model, which represents
final decision of the agents. Note that this result does not always coincide
with the popular vote at level 1.

Using square grid in this model is helpful as we can rather easily subdivide
agents into groups at all levels. Our app uses six different group sizes
(\\\( K \\\)) from 2x2 to 6x6 (these group sizes apply on all levels). Hence
grid sizes also differ for different \\\( K \\\) but they are integer powers of
the group size (to obtain clean subdivision).

## HTML5 app

Here you can find an interactive app, which implements the described
hierarchical voting model. This app has just two parameters: probability for
an agent to have positive opinion (to be red), \\\( p\_{red} \\\), and group
size \\\( K \\\). After changing these parameters do not forget to press
"Restart" (this will generate a new configuration of agents at level 1).
Afterwards you can climb up the hierarchical ladder by pressing "+", at any time
you can go down the ladder by pressing "-".

As you climb the ladder note how the fraction of red agents, \\\( f\_{red} \\\),
changes with the level, \\\( L \\\). Note that for even group sizes (especially
2x2) \\\( f\_{red} \\\) decreases as you climb the ladder (this is the effect
of the draws). For odd group sizes there are no draws, hence the final result
is likely to reflect \\\( f\_{red} \\\) at \\\( L=1 \\\).

[html5-interactive width="520" height="560" mode="iframe"
src="/uploads/models/hierarchical-voting-model/index.html"]

[acknowledge id="postdoc-ak-2017-lit"]
