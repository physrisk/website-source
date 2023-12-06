Title: Price formation: Cobweb model
Date: 2018-01-16 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Economics, market price, free market, supply and demand, price formation series, cobweb model
Slug: price-formation-cobweb-model
Status: published
Image_url: uploads/2018/price-formation-cobweb-model.png

Couple of months ago I have started a [series of posts](/tag/price-formation-series/) on price formation in the free market or how and why the free market does (not) work.

In the [first part]({filename}/articles/2017/laws-of-supply-and-demand.md) of the series we have discussed economic laws of supply and demand. We have also mentioned the "sweet spot" of the supply-demand model - equilibrium price. But we did not cover how one would discover the equilibrium price.

In the [second part]({filename}/articles/2018/price-formation-printing-press-example.md) we have discussed a simple example in which printing press failed to predict the demand for the book. We have discussed how non-optimal prices as well as certain dynamics might emerge.

In this installment (a third part) of the series, we discuss another classical, but more sophisticated, model, which attempts to explain what happens if the knowledge about supply and demand laws is not perfect. The cobweb model aims to show how the self-organized optimal prices emerge over time. Note that we have already discussed (see [this post]({filename}/articles/2014/market-price-is-it-economic-or-sociological-concept.md)) how self-organized price emerges from [the Kirman model](/tag/kirman-model/) and that this price is far from reflecting underlying economic values.<!--more-->

## Cobweb model

Let us assume that we are producers of lettuce, a product which is almost always in constant demand, first year we decide to grow some patches and see what happens. We must make some guesses as we do not know the demand law. So for the first time we produce \\\( Q\_0 \\\) units of lettuce. As we sell them, we notice that the demand for the lettuce is higher, thus we will increase the price, \\\( P\_0 \\\), until the demand is roughly equal to our supply. Next year, being smart and self-interested farmers we will consider our previous experience and plant significantly more lettuce. We will pick the new quantity, \\\( Q\_1 \\\), based on our production intent (supply law) and the price previous year, \\\( Q\_1 = Q\_s(P\_0) \\\). Yet we will most likely over-produce, hence we will have to sell our lettuce at a lower price \\\( P\_1 \\\). But the next year we will be even smarter and more knowledgeable - \\\( Q\_2 = Q\_s(P_1) \\\). And so on, until at some point we will arrive near the equilibrium point.

This logic, also known as cobweb model, can be nicely visualized using cobweb plot, which you should see in the interactive applet below. Here the gray curve marks the trajectory of price and quantity.

[html5-interactive
src="/uploads/models/cobweb-model/index.html" width="405"
height="460" mode="iframe"]

This interactive applet has three parameters:

* \\\( Q\_0 \\\) is self-explanatory - it is the initial quantity produced.
* \\\( \alpha\_s \\\) is inclination of the known supply law (elasticity of supply). The supply law (green curve) in this applet is given by \\\( Q\_s(P) = \alpha\_s (P-100)+310 \\\).
* \\\( \alpha\_d \\\) is inclination of the unknown demand law (elasticity of demand). The demand law (blue-ish curve) in this applet is given by \\\( Q\_d(P) = -\alpha\_d (P-100)+310 \\\).

Note that:

* if \\\( \alpha\_s < \alpha\_d \\\), then the trajectory diverges,
* if \\\( \alpha\_s = \alpha\_d \\\), then a cycle is observed,
* while if \\\( \alpha\_s > \alpha\_d \\\), then the trajectory will eventually converge.

The divergence paradox is considered in multiple empirical works, which conduct social experiments or polls and show that \\\( \alpha\_s < \alpha\_d \\\) never occurs in practice.
