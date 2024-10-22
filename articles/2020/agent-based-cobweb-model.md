Title: Agent-based cobweb model
Date: 2020-01-28 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, economics, supply and demand, free market, market price, cobweb model
Slug: agent-based-cobweb-model
Status: published
Image_url: uploads/2020/agent-based-cobweb-model.png

[Long time ago]({filename}/articles/2020/cobweb-model-and-efficient-market-maker-order-book-model.md) theoretical background
of the [cobweb model]({filename}/articles/2018/price-formation-cobweb-model.md) has somewhat
troubled me. So I wanted to explore my doubts. At the time I didn't have any
idea how to do this properly, but recently I think I have figured it out.

In this post I will construct quite simple agent-based model of the price formation
in the [free market](/tag/free-market/). This time the approach works, at least
in part, and from these we can uncover hidden assumption made in the classical
[cobweb model]({filename}/articles/2018/price-formation-cobweb-model.md).
<!--more-->

## Agent-based cobweb model

Note that this is not a true agent-based model as buyers and suppliers are not
heterogeneous and are effectively represented by a single agent. Nevertheless
let us continue with the introduction of the model.

From the [cobweb model]({filename}/articles/2018/price-formation-cobweb-model.md) we have the
supply and the demand laws. Our suppliers will produce in accordance to the
current market price and observe how well their product is received. They will
observe for a single unit of time.

During the observation period our buyers will buy goods at rate predicted by
the demand law. Based on how many goods were sold and how fast they were sold,
the suppliers will estimate the true demand of the buyers at the current price:

\begin{equation}
\hat{D}\_i = \frac{G\_i}{T\_i} .
\end{equation}

In the above \\\( G \\\) stands for the number of goods sold and \\\( T \\\)
stands for the time it took to sell those goods. The index simply enumerates
the observation periods (time). This estimate is used by the suppliers to
calculate the excess demand:

\begin{equation}
\mathrm{ED}\_i = \hat{D}\_i - S\_i .
\end{equation}

Suppliers are aware that they could increase their sales, if the could make use
of this "uncovered" (excess) demand. But they are also aware the demand will
shrink if they increase production and price as per supply law. Let us assume
that they increase the price at rate \\\( \beta \\\):

\begin{equation}
P\_{i+1} = P\_i + \beta \cdot \mathrm{ED}\_i .
\end{equation}

Note that the excess demand can be negative, in which case the price would
decrease.

## Dynamics of the model

Now, the dynamics of this model are a lot nicer than the ones we had in the
[previous approach]({filename}/articles/2020/cobweb-model-and-efficient-market-maker-order-book-model.md). While at the first
glance they somewhat contradict the intuitions of the original
[cobweb model]({filename}/articles/2018/price-formation-cobweb-model.md), but we can quickly
fix that.

First of all let us define inverse supply and inverse demand laws. Original
supply and demand laws are linear functions of quantity:

\begin{equation}
S(Q) = \alpha\_s [ Q - Q\_{eq} ] + P\_{eq} ,
\end{equation}

\begin{equation}
D(Q) = \alpha\_d [ Q\_{eq} - Q ] + P\_{eq} .
\end{equation}

Respective inverse laws are functions of price:

\begin{equation}
S^{-1}(P) = \frac{P - P\_{eq}}{\alpha\_s} + Q\_{eq},
\end{equation}

\begin{equation}
D^{-1}(P) = \frac{P\_{eq} - P}{\alpha\_d} + Q\_{eq}.
\end{equation}

Price in the original [cobweb model]({filename}/articles/2018/price-formation-cobweb-model.md)
is updated as follows:

\begin{equation}
P\_{i+1} = D(S^{-1}(P\_i))
         = \frac{\alpha\_d (P\_{eq} - P\_i)}{\alpha\_s} + P\_{eq} .
\end{equation}

As we can see price deviation from the equilibrium is multiplied by a
coefficient \\\( K = \frac{\alpha\_d}{\alpha\_s} \\\). It should be trivial to
see that if \\\( | K | > 1 \\\) then the model is unstable. Obviously the same
conclusion follows from the graphical analysis covered in
[the original post]({filename}/articles/2018/price-formation-cobweb-model.md).

For the agent-based model we have introduced in this post, ignoring the
inherent randomness, we find a somewhat different the update rule:

\begin{equation}
P\_{i+1} = P\_i + \beta \cdot [ D^{-1}(P\_i) - S^{-1}(P\_i) ] ,
\end{equation}

which expands into:

\begin{equation}
P\_{i+1} = \frac{[ \alpha\_d + \alpha\_s ] \cdot \beta}{\alpha\_d \alpha\_s}
           [ P\_{eq} - P\_i ] .
\end{equation}

Qualitatively the rule is similar, so after few algebraic operations we can
easily find the coefficient. We see that:

\begin{equation}
K = \frac{ (\alpha\_d + \alpha\_s) \beta - \alpha\_d \alpha\_s}{\alpha\_d \alpha\_s}.
\end{equation}

Now we just have to require that \\\( | K | < 1 \\\) for the model to be
stable. This condition is used by the app below to estimate when the market
should be stable. Note the "should": if \\\( | K | \\\) is close to
\\\( 1 \\\), the market can still collapse due to the randomness and
discreteness effects.

The next step is to compare to the coefficients for the two models. After brief
examination it is easy to see that if \\\( \beta = \alpha\_d \\\), the
coefficient for the agent-based cobweb model becomes identical to the one
arising from [the original model]({filename}/articles/2018/price-formation-cobweb-model.md).
This actually lends an interpretation for the rate \\\( \beta \\\): it is the
guess of a supplier about the flexibility of the buyer. Note that, the model
is usually stable when the guess underestimates \\\( \alpha\_d \\\), though
in some cases small overestimation also can yield stability. While gross
overestimation usually will result in the market collapse.

## Conclusion

[Cobweb model]({filename}/articles/2018/price-formation-cobweb-model.md) seems to have a hidden
assumption that suppliers know the demand law (or at least its slope) of the
buyers. But if they know the law fully, they should be able to immediately know
where the equilibrium point lies. This is likely the thing that originally
bothered me about the [cobweb model]({filename}/articles/2018/price-formation-cobweb-model.md).

Another catch is that after few initial observation periods the suppliers could
be even smarter. They could used linear fit to make a rather good guess of the
demand law. Thus these smarter suppliers could find equilibrium point even
quicker.

In some cases, near \\\( | K | = 1 \\\), price seems to exhibit bursty
behavior. I wonder if they price changes exhibit stylized facts common to
[financial markets](/tag/financial-markets/). This we will explore in the next
post.

Finally recall that behavior of the agents is governed by the supply and the
demand laws, but they themselves might be also put through a more detailed
inquiry as it is not totally evident why suppliers can't (or don't want to)
charge higher prices. We have discussed this point from game theory perspective
in an [earlier post]({filename}/articles/2018/price-formation-game-theory.md).
Both of these approaches could be combined and a more complete (and
complicated) model could be analyzed, but at this point I believe that we have
explored the problem enough to get basic intuitions.

## Interactive app

At this time we invite you to explore the agent-based cobweb model using an
interactive app below. Feel free to verify our intuitions as well as to develop
your own.

[html5-interactive mode="iframe"
src="/uploads/models/cobweb-model/abm.html" width="520" height="500"]

## Disclaimer

Note that this model is a product of my inquiries to the nature of the
[cobweb model]({filename}/articles/2018/price-formation-cobweb-model.md). This exploration
might not make a lot of sense to a person more familiar with
[Economics](/tag/economics/) than myself. Also it is quite possible that someone
has already made a similar inquiry.
