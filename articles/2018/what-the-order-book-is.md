Title: What the order book is?
Date: 2018-05-01 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, financial markets, order book, Walrasian Market, postdoctoral project
Slug: what-the-order-book-is
Status: published
Image_url: uploads/2018/order-book.svg.png

All models of the [financial markets](/tag/financial-markets/) we have presented on Physics of Risk to this date did not make any assumptions about the actual market microstructure. The previously discussed models assumed that some kind of market maker takes in the information about the market sentiments. This market marker sets a "fair" price and everyone is assumed to be happy with it. Similar price discovery mechanism was used in the past in various stock exchanges. In the literature this mechanism is referred to as the Walrasian Market. In contemporary stock exchanges Walrasian Market is replaced with the [order book]({filename}/articles/2018/what-the-order-book-is.md). This post is meant to explain some of the related terminology, which will be relevant in future posts about [order book models](/tag/order-book/).<!--more-->

**Order book** is where the traders submit their buy and sell orders. Some financial markets use one order book, some use multiple order books. For example one book for in-session, one for pre-session and one for post-session trading.

The most obvious way to differentiate between the orders is buy-sell category. Buy orders are referred to as **bid orders**, while sell orders are referred to as **ask orders**.

The orders may also be either market orders or limit orders. 

**Limit orders** are orders that may take some time to execute, but these orders are executed at some fixed price or a better price (this price is often referred to as **quote**). For example a bid limit order could be formulated as "buy stock if someone is willing to sell it at 60 monies per unit or less". Ask limit order could be formulated similarly as "sell stock if someone is willing to buy for 100 monies per unit or less". Until limit orders are executed they are stored in the order book. Of course if at the time of submission of the limit order there is a suitable order of the opposite type (in bid-ask terms), then the limit order is executed immediately.

Often limit orders have some expiry time or they are removed if the order book grows too much.

**Spread** of the order book is defined as distance between best ask and best bid quotes. Best ask order is the one with lowest quote (left most order), while best bid order is the right most (highest quote) bid order. Spread is always positive as if it would shrink to zero or become negative, then overlapping order would be immediately executed and the spread would be restored to a positive value.

**Market orders** are orders that are executed immediately at the best available price. For example bid market order is executed at the best available ask limit order price. They are much simpler than the limit orders.

In the example below we have shown an order book, which had 10 bid limit orders (red full circles) and 7 ask limit orders (blue filled circles) in it. Then one additional bid limit order came in and was placed based on its limit price (direction of arrow). Afterwards an ask market order (empty circle with blue outline) came in and was executed by pairing with best bid limit order (the crossed out red circle). The new market price would be set to the price of the executed limit order (60 monies as per previous example).

![Example events in the order book.](/uploads/2018/order-book.svg.png "Example events in the order book.")

Below you can also find a somewhat interactive preview of the model we will discuss some time in the future (the most impatient will find the detailed description in [cite id="Maslov2000PhysA"]). It shows the same plot as above: number of order vs price. Both limit and market orders here arrive at random and are executed if it is possible. If not, then limit orders are placed into order book (number of bids at given price level are shown as red dots, while number of asks as blue dots). Dark line is the last price separator.

[html5-interactive
src="/uploads/models/order-book-models/maslov/ob-vizualization-en.html" width="520"
height="370" mode="iframe"]

Note that new bid orders arrive to the left of the last price. While the new ask orders arrive to the right of the last price. Note that there are never bid and ask orders at the same price level. If there would be any "overlaping" limit orders, the orders would be immediately executed and removed from the order book until no overlap is left. Another key thing to note is that always the right-most (largest) bid and the left-most (lowest) ask are executed.

[acknowledge id="postdoc-ak-2017-lit"]
