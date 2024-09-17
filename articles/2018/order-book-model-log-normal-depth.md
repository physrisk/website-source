Title: Order book model with log-normal depth
Date: 2018-06-19 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, agent-based models, financial markets, order book, postdoctoral project
Slug: order-book-model-log-normal-depth
Status: published
Image_url: uploads/2018/order-book-model-log-normal-depth.png

We continue our series of posts on [order book models](/tag/order-book/) by
considering an order book model proposed by Tobias Preis
[cite id="Preis2010JPhysConf"], which is able to reproduce log-normal order book
side profile. There are more modifications of this model considered in the
aforementioned paper [cite id="Preis2010JPhysConf"]. One of them is simpler
and reminiscent of the order book model by Cristelli, which was discussed in a
[previous post]({filename}/articles/2018/granularity-order-book-model.md), couple
of them are more sophisticated and able to reproduce other interesting stylized
facts.

It is quite possible that we will discuss some of the modifications
sometime later on Physics of Risk, but now let us describe the chosen version
of the model proposed by Tobias Preis.<!--more-->

## The model

We initialize this model by filling it with order uniformly distributed around
best bids. The original paper did not specify any specific model initialization
rules, hence we picked on our own. So please allow certain burn-in period for
the model to allow for its true dynamics to emerge.

[Once again]({filename}/articles/2018/granularity-order-book-model.md) the price
in the model is defined as an average between the best bids:

\begin{equation}
p(t) = \frac{a\_0(t) + b\_0(t)}{2} ,
\end{equation} 

here \\\( a\_0(t) \\\) and \\\( b\_0(t) \\\) are best ask and bid quotes at a
given time \\\( t \\\). As in
[the previous post]({filename}/articles/2018/granularity-order-book-model.md) we took
liberty to define the price, in case of any side of the order book would be emptied,
as the last executed order price.

[Once again]({filename}/articles/2018/granularity-order-book-model.md) in the
model quotes are defined in integer price ticks relative to some
reference level (price at "zero" level). No quote may be expressed in fractional
price ticks. In this sense price tick is smallest unit of price. To keep matters
simple we, without loss of generality, set price tick to unit.

In the original paper [cite id="Preis2010JPhysConf"] time is also discrete, but
the model is formulated in a way which allows to implement it in "somewhat"
continuous time. To achieve this we use the so-called Gillespie algorithm
[cite id="Gillespie1977"]. In the Gillespie algorithm discrete times steps are
replaced with the Monte Carlo (random) time steps. Hence the model is updated
in a Poissonian manner producing the illusion of continuous time. Despite this
difference our implementation should produce the same results as the original
model.

In this model we have two types of agents: liquidity providers and liquidity
takers. There are \\\( N\_a \\\) agents of each of these types (hence in total
there are \\\( 2 N\_a \\\) agents). Liquidity providers provide liquidity by
submitting limit orders at rate \\\( \alpha \\\). While liquidity takers
consume the liquidity by submitting market orders with rate \\\( \mu \\\).

Liquidity providers may also consume liquidity by canceling orders at rate
\\\( \delta \\\). There are numerous distinct ways to implement cancellation of
the orders. One way is to remove one random limit order, which was not executed
yet, at some rate. Similarly one could remove a random limit order taking into
account order's side (first pick random side, then pick random order from that
side). We have implemented a third alternative - on limit order creation the
order is assigned both its quote and its expiry time (assuming certain
cancellation rate). If the order is not executed until its expiry time, then it
is canceled. From reading the original paper [cite id="Preis2010JPhysConf"] it
is not clear which interpretation was used to produce the reported results. Some
parts of the paper hint at the third interpretation, others at the first.

Agents of both types decide to buy or sell depending on their respective
probabilities. Liquidity provider will submit a buy limit order with probability
\\\( q\_{provider} \\\) and liquidity taker will submit a buy market order with
probability \\\( q\_{taker} \\\).

All that is left to define is how the liquidity providers decide on their
quotes. In [the previous post]({filename}/articles/2018/granularity-order-book-model.md)
the agents drew quotes from uniform distribution bounds of which depended on the
current order book spread. In this model a simpler assumption is made - quotes
are drawn from uniform distribution bound of which depend on exponential random
variable, \\\( \eta \\\):

\begin{equation}
\eta = \lfloor - \lambda\_0 \ln u \rfloor ,
\end{equation}

here \\\( u \\\) is a random variable drawn from \\\( \mathcal{U}(0,1) \\\).
The new limit ask quotes are drawn from uniform distribution with bounds:

\begin{equation}
[ b\_0(t)+1 , b\_0(t) + \eta +1 ] .
\end{equation}

The new limit bid quotes are drawn from uniform distribution with bounds:

\begin{equation}
[ a\_0(t) - \eta -1 , a(t)-1 ] .
\end{equation}

In the original paper [cite id="Preis2010JPhysConf"] the model dynamics were
discretized at periods of 1 MCS, which consists of \\\( 2 N\_a \\\) smallest
model steps (during each of which one agent would be selected). As in such case
even with reasonably small \\\( N\_a \\\) model would take considerable time to
evaluate, we have picked a smaller time step for our simulation - and defined
our simulation time step as \\\( 0.2 N\_a \\\).

Here we [once again]({filename}/articles/2018/granularity-order-book-model.md)
use price change in price ticks instead of return. Price change in measured
with after each our simulation step:

\begin{equation}
r(t) = p(t) - p(t - 1) = \Delta p(t).
\end{equation}

## Interactive applets

To understand the model and its dynamics better you should study the interactive
applets below.

The first applet, as has become usual, shows us how the structure of the order
book evolves as the time goes on. Note that unlike in all other cases here we
have relative price on the x axis, thus negative prices are also possible. Note
that both sides of the order book look symmetric and have log-normal shape
(the center is smooth, while the tails behave differently: one falls off
quickly, while the other decays significantly slower).

[html5-interactive
src="/uploads/models/order-book-models/preis/ob.html"
width="520" height="400" mode="iframe"]

The second applet is in certain sense traditional Physics of Risk applet for all
financial market models. Though there are some specific differences related to
the model in question.

First of all instead traditional price, or log-price,
series plot on the bottom left you see relative price series plot. Recall that
this model operates using distances in price ticks from some undefined reference
level. To get price series you should add some fixed number (price at "zero"
level).

Also instead of return in traditional sense (difference of log-price
at two different points in time) we have "price change" and use
\\\( | \Delta p | \\\) notation. This model lacks some important ingredients
to reproduce power-law "price change" PDF. Actually "price change" in this
model is normally distributed.

[html5-interactive
src="/uploads/models/order-book-models/preis/index.html" width="520"
height="500" mode="iframe"]

[acknowledge id="postdoc-ak-2017-lit"]
