Title: Granularity order book model
Date: 2018-06-05 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, agent-based models, financial markets, order book, postdoctoral project
Slug: granularity-order-book-model
Status: published
Image_url: uploads/2018/granularity-order-book-model.png

We continue our series of posts on [order book models](/tag/order-book/) by
considering an order book model proposed by Cristelli et al.
[cite id="Cristelli2010EPJB"], which is able to reproduce power-law price
change. Originally this model was develop to study order impacts on a price
in case of finite liquidity (in case when the order book is not tightly packed).
Indeed it seems that when there are noticeable gaps behind the best bids, going
deeper into the respective order book side, a couple of consecutive orders may
cause power-law fluctuations.<!--more-->

## The model

We initialize this model by filling it with order uniformly distributed around
best bids. The original paper did not specify any specific model initialization
rules, hence we picked on our own. So please allow certain burn-in period for
the model to allow for its true dynamics to emerge (around 5000-10000 time ticks
should be enough).

The price in this model is defined as an average between the best bids:

\begin{equation}
p(t) = \frac{a\_0(t) + b\_0(t)}{2} ,
\end{equation} 

here \\\( a\_0(t) \\\) and \\\( b\_0(t) \\\) are best ask and bid quotes (prices
associated with the order) at certain time \\\( t \\\) respectively. We took
liberty to define the price, in case of any side of the order book would be emptied,
as the last executed order price.

In this model quotes are defined in integer price ticks relative to some
reference level (price at "zero" level). No quote may be expressed in fractional
price ticks. In this sense price tick is smallest unit of price. In the original
paper it is set to 1 (without loss of generality).

The time is also discrete and runs in time ticks. An order is created at each
time tick after the model initialization. The order is either ask or bid with
equal probabilities. The order is market order with probability \\\( \pi \\\)
or limit order with probability \\\( 1 - \pi \\\). In the original paper
\\\( \pi \\\) is estimated to be roughly \\\( 0.32 \\\).

If the order is limit order its quote is assumed to be uniformly distributed in

\begin{equation}
[ b\_0(t)+1 , b\_0(t) + k s(t) ] ,
\end{equation}

if the order is ask order, and uniformly distributed in

\begin{equation}
[ a\_0(t) - k s(t) , a(t)-1 ] ,
\end{equation}

if the order is bid order. Namely the ask orders are put at least one price
tick away from the best bid quote and vice versa. The order are put at most
\\\( k \\\) times spread (defined as difference between best ask and bid) away
from the opposite best bid. In the original paper \\\( k \\\) is estimated to
be between \\\( 3 \\\) and \\\( 4 \\\).
If order book would be empty on the respective side, if \\\( b\_0(t) \\\) or
\\\( a\_0(t) \\\) would be undefined, then the order would be put one tick away
from the last executed order price. This is once again our interpretation, which
is not present in the original article.

If the order is market order, then it simply triggers the best opposite quote.

This model also includes simple order cancellation mechanic. Each order is
canceled after \\\( \tau \\\) time ticks. The original paper argues that for this
case most realistic results are produced when \\\( \tau \in (200,750) \\\).

In the applets below we also use parameter \\\( \delta \\\) which describes
both number of time ticks between the visual updates and used to define return
(price difference):

\begin{equation}
r\_\delta(t) = p(t) - p(t - \delta) = \Delta\_\delta p(t).
\end{equation}

## Interactive applets

To understand the model and its dynamics better you should study the interactive
applets below.

The first applet, as has become usual, shows us how the structure of the order
book evolves as the time goes on. Here we have assumed that the reference level
is at \\\( 100 \\\) monies and the price tick is set to \\\( 0.1 \\\) money.
This assumption were done simply to obtain easily understandable figure.

[html5-interactive
src="/uploads/models/order-book-models/cristelli/ob.html"
width="520" height="370" mode="iframe"]

The second applet is in certain sense traditional Physics of Risk applet for all
financial market models. Though there are some specific differences related to
the model in question.

First of all instead traditional price, or log-price,
series plot on the bottom left you see relative price series plot. Recall that
this model operates using distances in price ticks from some undefined reference
level. To get price series you should add some fixed number (price at "zero"
level).

Another difference is related to how return is measured in
[cite id="Cristelli2010EPJB"]. In the paper return is measured as absolute
difference between the relative price at two different points in time. To
differentiate between the return in traditional sense (difference of log-price
at two different points in time) we call this return simply "price change" and
use \\\( | \Delta p | \\\) notation.

Note that \\\( | \Delta p | \\\) is power-law distributed when \\\( \tau \\\)
is small. Also note that in order to match the original paper results we have
defined the price tick as price measurement unit (in other words price tick is
equal to \\\( 1 \\\)).

[html5-interactive
src="/uploads/models/order-book-models/cristelli/index.html" width="520"
height="470" mode="iframe"]

[acknowledge id="postdoc-ak-2017-lit"]
