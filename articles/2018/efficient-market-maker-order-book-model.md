Title: Efficient market maker order book model
Date: 2018-10-16 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, financial markets, order book, Walrasian Market, postdoctoral project
Slug: efficient-market-maker-order-book-model
Status: published
Image_url: uploads/2018/efficient-market-maker-order-book-model.png

We continue our series of posts on [order book models](/tag/order-book/) by
considering extremely simple order book model. In this model most agents
submit only market orders, while there is also a single market maker, which
provides liquidity for them.<!--more-->

## The model

The model is initialized with a full order book. Here, full order book means
that for every possible quote there is a single limit order at that quote. All
quotes below current price are filled with bid market orders, while all quotes
above current price are filled with ask market orders.

Market orders arrive at rates \\\( \lambda^{-} \\\) and \\\( \lambda^{+} \\\) for
buy and sell orders respectively. As soon as market order arrives it consumes
best limit order of the opposite side. As soon as the limit order is consumed
market maker places another limit order. The new limit order replaces the old
one, but it maybe placed on either side of the order book. The new limit order
is placed on the same side of the order book as the market order with
probability \\\( p \\\), likewise a limit order is placed on the opposite side
of the order book with probability \\\( 1 - p \\\).

Note that order book model formulated in this way is essentially an almost
perfect replica of the Walrasian market maker.

## Interactive applets

To understand the model and its dynamics better you should study the interactive
applets below.

The first applet shows us how the structure of the order book evolves as the
time goes on. Note that the profiles of the both sides remain the same in this
model and only the price moves. The shapes of the profiles do not change as
order book is always filled with one order per quote. What changes is only the
boundary between the sides of the order book.

[html5-interactive
src="/uploads/models/order-book-models/efficient-market-maker/ob.html"
width="520" height="340" mode="iframe"]

The second applet is in certain sense traditional Physics of Risk applet for all
financial market models. Though there are some specific differences related to
the model in question.

First of all instead traditional price, or log-price, series plot on the bottom
left you see relative price series plot. We have selected relative price
instead of absolute to price to avoid introducing boundary condition at 0 (as
there cannot be negative absolute prices). Simply add some large enough number
to the relative price to obtain absolute price.

Also instead of return in traditional sense (difference of log-price
at two different points in time) we have "price change" and use
\\\( | \Delta p | \\\) notation. This model lacks some important ingredients
to reproduce power-law "price change" PDF. Actually "price change" in this
model is normally distributed.

Also as the order flows are uncorrelated the spectrum of price changes is flat.
The price in this case undergoes simple Brownian motion.

[html5-interactive
src="/uploads/models/order-book-models/efficient-market-maker/index.html" width="520"
height="470" mode="iframe"]

[acknowledge id="postdoc-ak-2017-lit"]
