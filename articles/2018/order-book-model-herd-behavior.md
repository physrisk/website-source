Title: Order book model with herd behavior
Date: 2018-11-13 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, financial markets, order book, voter model, Kirman model, A. Kononovicius, J. Ruseckas, postdoctoral project
Slug: order-book-model-herd-behavior
Status: published
Image_url: uploads/2018/order-book-model-herd-behavior.png

This is the final post in our continuing series on the [order book models](/tag/order-book/).
Though we do not entirely neglect this topic. It is quite likely that in the near
future we will come back to discuss more of the order book models.

So this time we will finally talk about an order book model we (Aleksejus
Kononovicius and Julius Ruseckas) have decided to propose. This will be only a
brief introduction into the model as it will recycle couple of ideas and
concepts we have discussed earlier. More details on the model are available
in [cite id="Kononovicius2019OB"].

So, our order book model involves elements from the agent-based herding model,
about which [we often write about here on Physics of Risk](/tag/kirman-model/),
[cite id="Kirman1993QJE"]. We have extended our earlier approach
[cited id="Kononovicius2012PhysA"] by defining how different types of agents
implement their strategies in order book setting. This implementation heavily
relies on the core ideas of the empirical high-frequency trader's behavior model
[cite id="Kanazawa2018PRL,Kanazawa2018arxiv"] we have discussed
[recently]({filename}/articles/2018/describing-high-frequency-traders-behavior-in-the-order-book.md).<!--more-->

## The model

We will define our model in terms of event rates. We will have five possible
events:

* an agent switches his trading strategy from chartist to fundamentalist,
* an agent switches his trading strategy from fundamentalist to chartist,
* sign of market mood flips,
* an agent using chartist trading strategy considers submitting market order,
* an agent using fundamentalist trading strategy consider submitting marker order.

Essential feature of our usual approach to agent-based herding modeling is that
transition rates between two states are proportional to the number of agents in
the opposite state. Here we have also used the same shape of transition rates:
\begin{equation}
\lambda\_{cf}\left(t\right)=\frac{\lambda\_{e}}{\tau\left(N\_{c}\left(t\right)\right)}N\_{c}\left(t\right)\left[\varepsilon\_{cf}+\left\\\{ N-N\_{c}\left(t\right)\right\\\} \right],
\end{equation}
and
\begin{equation}
\lambda\_{fc}\left(t\right)=\frac{\lambda\_{e}}{\tau\left(N\_{c}\left(t\right)\right)}\left[N-N\_{c}\left(t\right)\right]\left[\varepsilon\_{fc}+N\_{c}\left(t\right)\right].
\end{equation}
In the above \\\( \lambda\_{ij} \\\) is the transition rate from state \\\( i \\\)
to state \\\( j \\\), \\\( \lambda\_{e} \\\) is the base event rate, while
\\\( \tau(\dots) \\\) plays the same role as
[earlier]({filename}/articles/2011/agent-based-herding-model-financial-markets.md)
[cite id="Kononovicius2012PhysA"]. As usual \\\( N \\\) stands for total number
of agents, while \\\( N\_c \\\) for number of agents using chartist trading strategy,
while \\\( \varepsilon\_{ij} \\\) are responsible for the idiosyncratic switching
rate between the trading strategies.

We can't do full model with out splitting
[chartists into two groups (optimists and pessimists)]({filename}/articles/2011/three-group-kirman-agent-based-model-for-financial-markets.md)
[cite id="Kononovicius2013EPL"], but we can simplify this matter a bit by introducing mean market
mood, \\\( \xi \\\). If \\\( \xi \\\) is positive, then more chartists feel
optimistic. Here we can consider a very simple model for \\\( \xi \\\): mood is
only able to change its sign with rate:
\begin{equation}
\lambda\_{M}\left(t\right)=\frac{\lambda\_{e}}{\tau\left(N\_{c}\left(t\right)\right)}\lambda\_{m},
\end{equation}
where \\\( \lambda\_m \\\) is the base rate for the mood swings. The probability
that chartist will submit market bid (buy) order is dependent on \\\( \xi \\\)
as follows:
\begin{equation}
p\_{\text{bid}}\left(t\right)=\frac{1+\xi\left(t\right)}{2}.
\end{equation}

Trading rate for chartist traders takes a very simple form:
\begin{equation}
\lambda\_{tC}(t)= \frac{\lambda\_e}{\tau(N\_c(t))} \lambda\_{tc} N\_c(t) .
\end{equation}
While for fundamentalist traders it is a bit more complex:
\begin{equation}
\lambda\_{tF}\left(t\right)=\frac{\lambda\_{e}}{\tau\left(N\_{c}\left(t\right)\right)}\lambda\_{tf}\left[N-N\_{c}\left(t\right)\right]\left|\ln\left(\frac{P\left(t\right)}{P\_{f}}\right)\right|,
\end{equation}
because fundamentalists' activity is conditioned on the deviations of price from
the fundamental price. In both rates above \\\( \lambda\_{ti} \\\) stands for
trading activity of a single agent using trading strategy \\\( i \\\), while
\\\( P \\\) stands for price and \\\( P\_f \\\) for fundamental price.

All these transition rates are updated after each event.

Note that we have not described how order book is filled with limit orders.
This mechanism is partly lifted from the
[HFT order book model]({filename}/articles/2018/describing-high-frequency-traders-behavior-in-the-order-book.md)
[cite id="Kanazawa2018PRL,Kanazawa2018arxiv"]. Namely, we assume that chartists
are liquidity providers, who submit limit orders to the both sides of the order
book. The spread between their limit orders is determined in the same manner as
in [cite id="Kanazawa2018PRL,Kanazawa2018arxiv"], but their valuation (mid point
between the limit orders) is always assumed to be equal to the current market
price. Namely, here we have simplified the HFT order book model by assuming
that orders are adjusted instantaneously. Fundamentalists in our model do not
submit limit orders at all, they only exploit their knowledge with market orders.

## Interactive applets

To understand the model and its dynamics better you should study the interactive
applets below.

The first applet shows us how the structure of the order book evolves as the
time goes on. Note that the profiles of the both sides remain more or less the
same in this model and only the price movements are rather easily noticed. The
shapes of the profiles change only if chartist agent switches away to
fundamentalist trading strategy (then his limit orders are canceled) or if
fundamentalist becomes chartist (then new limit orders are submitted). These
changes are slower than trading rate, hence they are harder to be noticed.

[html5-interactive
src="/uploads/models/order-book-models/herd/ob.html"
width="520" height="455" mode="iframe"]

The second applet is a traditional Physics of Risk applet for most financial
market models. Here you can see how price and return time series look like
as well as explore the two main statistical properties of absolute return time
series - probability density function (PDF) and spectral density. Note that
return PDF for default parameters has power-law form, while PSD looks fractured.
These more-or-less reproduce the exact empirical shapes of respective empirical
statistical properties.

[html5-interactive
src="/uploads/models/order-book-models/herd/index.html" width="520"
height="565" mode="iframe"]

[acknowledge id="postdoc-ak-2017"]
