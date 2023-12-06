Title: Forest fire model
Date: 2023-04-04 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, Cellular automata, percolation, self-organized criticality
Slug: forest-fire-model
Status: published
Image_url: uploads/2023/forest-fire-model.png

One of the classic [agent-based](/tag/agent-based-models/) and [cellular
automata](/tag/cellular-automata/) models is so-called forest fire model. It
is an excellent example of a modeling problem which could, in theory, be
solved using standard mathematical modeling tools (such as, partial
differential equations), but it would be extremely hard. On the other hand
one could use the aforementioned discrete modeling frameworks. So, lets do
that.
<!--more-->

## Model

There are couple somewhat different variations of the model, but they all
share the same core mechanism: fire spreads to nearby trees, and they spread
the fire to their unburnt neighbors. The original rules of the model were
defined in [cite id="Drossel1992PRL"]. And the original model was intended
as a [self-organized criticality](/tag/self-organized-criticality/) model
along the lines of the [sandpile
model]({filename}/articles/2015/sandpile-model.md). So, there could
be multiple fires burning at the same time, while the trees were also
replanted, and effectively long term temporal dynamics were observed.

Here we simplify the original model with a goal to see the size of the
individual fires. We do so, as the model exhibits phase transition when
consider the sizes of the fire "avalanches". If \\\( \rho \lesssim 0.55 \\\),
then the fires usually will be small in comparison to the size of the
forest. While with larger \\\( \rho \\\) fires would easily spread across
the forest.

Still we keep the core rule as it was: a tree will burn if at least one
neighbor is burning. In other words, during each time tick we
(simultaneously) check if an unburnt tree has a burning neighbor. If so,
then we set the unburnt tree on fire. We continue until no tree was set on
fire during a time tick.

In the app below we use 10&times;10 forest with periodic boundary
conditions. We consider four cardinal neighbors as neighbors for the
purposes of spreading the fire.

## Interactive app

Feel free to explore the model using the interactive app below. You can
control the density of trees \\\( \rho \\\) (effectively this is a
probability that a cell will contain a tree). You should be able to observe
that around \\\( \rho \approx 0.55 \\\) the sizes of the fires change: being
local for smaller values, and spanning whole forest with larger values.

[html5-interactive width="520" height="540" mode="iframe"
url="/uploads/models/forest-fire/index.html"]
