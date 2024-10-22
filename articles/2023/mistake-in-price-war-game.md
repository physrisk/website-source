Title: Mistake in the "price war" game analysis
Date: 2023-04-18 08:00
Author: Aleksejus Kononovicius
Tags: interactive, game theory, price formation series
Slug: mistake-in-price-war-game
Status: published
Image_url: uploads/2023/price-war-game-prob.png

[Five years ago]({filename}/articles/2018/price-war-game.md) when analyzing
rational strategies in a [game](/tag/game-theory/) I have made a mistake. I
was so fascinated that for some parameter sets mixed strategy can be used,
that I have forgotten, that pure strategy equilibria might still exist and
be more attractive than the mixed strategy equilibrium. In this post, I
share the updated app.
<!--more-->

## Interactive app

The app below shows \\\( p(N) \\\) plot, where dependent variable
\\\( p \\\) is the probability that \\\( p\_1 \\\) price will be charged in
a market with two competing sellers and \\\( 100 \\\) customers. The
independent variable \\\( N \\\) is the number of customers each seller
could serve. Note that manufacturing cost is fixed at \\\( p\_0 = 0.5 \\\).
See [the original post]({filename}/articles/2018/price-war-game.md) for a
more detailed discussion of the underlying model.

One could see \\\( N \\\) as being an indicator of competition: if
\\\( N=100 \\\) both sellers try to take over the market, and thus low price
is being charged. On the other hand, if \\\( N = 50 \\\) both sellers are
content on sharing the market and high price is charged by both. For
intermediate \\\( N \\\) there are three equilibria: two pure strategy
equilibria (high price and low price), and one mixed strategy equilibria.
In [the original post]({filename}/articles/2018/price-war-game.md) I have
only taken into account the mixed strategy equilibrium, but the updated app
shows all three curves.

[html5-interactive width="520" height="240" mode="iframe"
url="/uploads/models/game-theory/price-war-game/graph-update.html"]
