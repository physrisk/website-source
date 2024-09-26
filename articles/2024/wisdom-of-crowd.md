Title: Wisdom of the crowd
Date: 2024-11-12 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, opinion dynamics, agent-based models, DeGroot model
Slug: wisdom-of-crowd
Status: draft
Image_url: uploads/2024/wisdom-of-crowd.png

While looking through the recent [opinion dynamics](/tag/opinion-dynamics/)
literature I have started noticing papers exploring various extensions of
the DeGroot model [cite id="DeGroot1974"]. Prior to those papers I haven't
even heard or paid much attention to it. So I felt a bit curious.

In the [previous post]({filename}/articles/2024/degroot-model.md) we have
talked about the core ideas in the [DeGroot model](/tag/degroot-model/). In
this post let me show how wisdom of the crowd effect emerges in the model.
<!--more-->

## The model

In the previous post I have mentioned that opinion is encoded by a real
number between zero and unity. Actually, opinion could be any real number
and the model still works as fine. In this post we won't restrict the
opinions.

In this post we also increase the number of agents acting in the system to 
\\\( 300 \\\). So, naturally, you won't be able to adjust trust matrix
manually. Instead the trust matrix will be filled-in randomly:

1. Diagonal elements of the trust matrix will be set to \\\(
   t\_{\mathrm{self}} \\\). Note that this value will change during the
   normalization procedure, but in general it allows partial control of how
   self-confident the agents are.
2. Off-diagonal elements will be set to zero with probability \\\( 1 -
   p\_{\mathrm{trust}} \\\). The smaller \\\( p\_{\mathrm{trust}} \\\), the
   smaller social networks of the agents will be.
3. Non-zero elements will be set to a uniformly distributed random value in
   \\\( [0, 1] \\\) interval.

## Wisdom of the crowd

As is commonly known, the wisdom of the crowd is an observation that the
aggregated opinion of a diverse and independent group of individuals would
be closer to the true answer than the opinion of a single expert.

In [DeGroot model](/tag/degroot-model/) this observation works a bit
differently. Let initial opinion of the agents be distribution according to
some arbitrary distribution (in the app we use normal distribution) centered
around some true opinion \\\( \mu \\\). No matter the initial diversity of the
opinions, let \\\( \sigma \\\) be the standard deviation, as long as the
trust network is strongly connected (there are no separated components), the
system should reach a consensus state close to \\\( \mu \\\). An important
requirement to observe this effect is that influence of the most influential
agent should diminish to zero as the number of agents grows to infinity.

For the network to be strongly connected \\\( p\_{\mathrm{trust}} \gg
\frac{\log(N)}{N} \\\) condition should be satisfied. This condition can be
derived from the connectivity of [Erdos-Renyi
network]({filename}/articles/2013/erdos-renyi-model.md). As in our case \\\(
N = 300 \\\), so \\\( p\_{\mathrm{trust}} \gg 0.02 \\\).

## Interactive app

The app below allows you to explore the wisdom of the crowd effect in the
context of the [DeGroot model](/tag/degroot-model/). Initial distribution of
opinions is shown as gray dots, while the current (evolving) opinion
distribution is shown as red dots. Observe that the current opinion
distribution quickly shrinks around value close to \\\( \mu \\\). Unless
\\\( p\_{\mathrm{trust}} \\\) becomes small - then most agent will converge
towards consensus, but outliers (not connected to large components) will
retain their own opinions.

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/opinion-dynamics/degroot-model/wisdom.html"]

Note that the app will stop automatically when the current opinions become
too similar.
