Title: Phase transition in the "price war" game?
Date: 2018-02-13 08:00
Author: Aleksejus Kononovicius
Tags: economics, market price, free market, supply and demand, competition, game theory, topic: price formation, interactive
Slug: price-war-game
Status: published
Image_url: uploads/2018/price-war-game.png

Couple of months ago I have started a [series of posts](/tag/topic-price-formation/) on price formation in the free market or how and why the free market does (not) work. This text is a slightly detour from the [part four]({filename}/articles/2018/price-formation-game-theory.md) of the series. In which I would like to delve into interesting properties of the gameI have introduced in the [part four]({filename}/articles/2018/price-formation-game-theory.md).

In the [part four]({filename}/articles/2018/price-formation-game-theory.md) I have asked you to imagine that the market consists of two competing companies, which produce almost identical products. Each of the companies can charge a high price or a low price. If one company wants to charge low price, then all consumers would prefer buying its product and not the competitors. I have assumed that there are 100 consumers and that companies produce products for all consumers (namely they always produce 100 units of the product), high price is 5 monies, low price is 3 monies and production costs are 0.5 monies. In this post I would like to remove some of these simplifying assumptions and discuss how the model works if different numbers are selected.<!--more-->

In the interactive app below you can try changing some these values. I have only kept the total number of consumers fixed at 100 as this assumption does not have qualitative impact on the results of the game. All of the other parameters can be changed and you can explore the phase transition in the "price war" game.

Further \\\( p\_0 \\\) is used to denote the production costs, \\\( p\_1 \\\) - "Price 1", \\\( p\_2 \\\) - "Price 2", \\\( N \\\) - units of product which competing companies produce (bottom limit is fixed at 50, so that all consumer could buy either product, upper limit is fixed at 100 to avoid overproduction). Try changing the parameter values to see what happens.

[html5-interactive
src="/uploads/models/game-theory/price-war-game/index.html" width="410"
height="150" mode="iframe"]

Obviously as you change the parameter values the expected profits (the payoffs in the matrix) are updated. Depending on the expected profits the companies also update the price they charge for their product. The price charge by the company is highlighted in bold, while one of the cells becomes green (companies receive profits written in that cell). As the game is symmetric both companies will charge the same price for the product (either "Price 1" or "Price 2"). These simple changes occur if you do not drastically change \\\( N \\\).

In a special case if \\\( p\_1 = p\_2 \\\), the cells will turn orange as it does not matter which price the companies will choose.

If you do change \\\( N \\\) a lot, all cells at some point will become blue and no action label will be bold. This means that the competitors no longer have an obvious "best" choice. As long as \\\( N \\\) is large or small there is the obvious choice, because independent of what the competitor does one of the prices always yields larger profits than the other. Namely, the red numbers in one column are larger than in the other, the blue numbers in one row are larger than in the other. But when all the cells go blue, there is no longer a better "row" or "column" as one number will be larger and one will be smaller. In this case our "price war" game transitions from being the [prisoner's dilemma](/tag/prisoners-dilemma/) to a coordination game.

We have not yet discussed the coordination game on Physics of Risk, but the essence of this game is rather simple. Both players are better off if they coordinate their actions (prices). Simplest example of everyday coordination game could be the choice of the driving side - everything is fine as long as all drivers drive on the same side of the road, but the accidents will occur if someone decides to drive on the opposite side. In game theory terms this game does not have dominating strategy as it was in prisoners dilemma. This game has two "pure" strategy equilibria (it does not pay off to break the ongoing coordination) as well as "mixed" strategy equilibrium. "Mixed" strategy equilibrium is a random strategy equilibrium (action or prices are selected based on optimal probabilities). To avoid the randomness on the roads governments regulate on which side of the road the drivers drive. In our case, "price war", governments could change the profits (payoffs) via taxation to make one of the prices more attractive.

We can obtain a general formula for the "mixed" strategy equilibrium for our "price war" game. Exact method will be discussed on Physics of Risk sometime in the future, but the result is:
\begin{equation}
p = \frac{50}{50-N} + \frac{p\_1}{p\_1-p\_2} ,
\end{equation}
here \\\( p \\\) is the probability to choose "Price 1" and likewise \\\( 1-p \\\) would be the probability to choose "Price 2". Note that \\\( p \\\) does not depend on \\\( p\_0 \\\).

Now let us assume that if there is "pure" dominating strategy, then the competitors will use that strategy all the time. Otherwise they will randomize the charged price and will do so optimally. This leads to an interesting plot below (presented as interactive figure).

[html5-interactive
src="/uploads/models/game-theory/price-war-game/graph.html" width="400"
height="300" mode="iframe"]

Try matching parameter values between the interactive apps. Explore the transition points to understand the peculiar shape seen in the figure. Observe the transition from the prisoners dilemma to the coordination game. Observe as coordination game once again becomes the game with dominating strategy (I am not sure if it has well-known name).

**Note 2023:** Actually "mixed" strategy is not the dominating strategy for
the intermediate \\\( N \\\). Both pure strategies are as reasonable choice.
See the update app in [the newer
post]({filename}/articles/2023/mistake-in-price-war-game.md).
