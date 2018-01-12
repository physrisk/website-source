Title: "Noise traders only" order book model by Bak et al.
Date: 2018-05-08 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, financial markets, order book, postdoctoral project
Slug: noise-traders-only-order-book-model-bak
Status: published
Image_url: uploads/2018/bak-ob-model.png

Last time we have discussed what
[order book]({filename}/articles/2018/what-the-order-book-is.md) is, and now we
will present a simple model for the order book [cite id="Bak1997PhysA"], which
was inspired by reaction-diffusion model from physics.

Note that the full model considered in [cite id="Bak1997PhysA"] is more complex
than we discuss in this post. Here we only reproduce the results of the model
with "noise traders" only (as discussed in Section IV B of the article).<!--more-->

## The "noise traders" only model

The model itself is rather simple. It is assumed that there are \\\( N \\\)
agents (here \\\( N \\\) must be even). Half of the agents will always submit
bid orders, while the other half will always submit ask orders.

Initially all agents submit their orders. Log-prices for the bid orders are
uniformly distributed between \\\( -(\Delta P -1) /2 \\\) and \\\( 0 \\\). While
prices for the ask orders are uniformly distributed between \\\( 0 \\\) and
\\\( (\Delta P-1)/2 \\\). Note that, unlike in this interpretation, in the
original formulation of the model linear prices were used.

After initialization, during each time tick, randomly selected agent revises his
order price. He moves the order one unit toward the spread, with
probability \\\( \frac{1+D}{2} \\\), or one unit away from the spread,
with probability \\\( \frac{1-D}{2} \\\). If ask order meets bid order (or vice
versa), both orders are anihilated and new current price is set. Afterwards the
agents resubmit their orders - bid order price is picked randomly between
\\\( - (\Delta P-1) /2 \\\) and \\\( P\_t \\\), ask order price is picked
randomly between \\\( P\_t \\\) and \\\( (\Delta P -1) /2 \\\).

In real markets such behavior is possible, but not reasonable as some stock
exchanges may apply charges. It would be too costly to adjust the order's price
often. Hence the model appears to be not plausible. But the model has its
redeemable feature - it reminds of certain physical system.

Imagine a long tube. You inject two different types of particles from the sides
of the tube. Inside the tube particles move randomly (diffuse) until they
collide with particles of other type and anihilate (react). The same model
describes a physical and financial system.

## Interactive applets

To undestand the model better study the interactive applets below. The first
applet shows us the structure of the order book. A similar applet was published
in the [previous text]({filename}/articles/2018/what-the-order-book-is.md), but
it used another model (which will be discussed in the near future). As in this
model order book often has alot of orders, we have chosen lines instead of points
to show the amount of order per price level (though the price levels are still
discrete as in the previous example).

[html5-interactive
src="/uploads/models/bak-order-book-model/ob-vizualization-en.html" width="520"
height="370" mode="iframe"]

The second applet has a somewhat more traditional look. By using the applet
below you can see the log-price and absolute return time series, as well as
the main statistical features of absolute return (PDF and spectral density).
Note that this model does not have diserable statistical features, we show them
simply out of tradition and our own curiosity.

[html5-interactive
src="/uploads/models/bak-order-book-model/index.html" width="520"
height="470" mode="iframe"]

[acknowledge id="postdoc-ak-2017-lit"]
