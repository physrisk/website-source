Title: Riddler's Fan Bus problem
Date: 2023-03-21 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, FiveThirtyEight
Slug: riddler-fan-bus
Status: published
Image_url: uploads/2023/riddler-fan-bus.png

This week we will take a look at another [Riddler's Classic
puzzle](/tag/fivethirtyeight/). The problem for [December 2th,
2022](https://fivethirtyeight.com/features/can-you-separate-the-world-cup-fans/)
invites us to transport football fans to the stadium. Obviously, we can't
transport supporters of different teams in the same bus! What do we do?
<!--more-->

## The problem

In the original formulation of the problem we have \\\( 18 \\\) football
fans drinking at a hotel bar. \\\( 11 \\\) fans support red (USA) team and
the remaining \\\( 7 \\\) support blue (Netherlands) team.

Shuttle bus drivers are instructed to transport the fans to the stadium for
the game. Yet they must do so while avoiding any possible conflicts between
the supporters of different teams. To ensure this, a bus will pull up in
front of the hotel, its driver will pick random fans to come aboard. As long
as fans boarding the bus support the same team, the driver will allow them
to board. As soon as a fan supporting another team tries to board, the
driver will not allow that fan to board and will leave for the stadium.
Another shuttle bus will pull up with its driver repeating the process. New
buses will arrive as long as there is at least one fan remaining.

What is the probability that last shuttle bus will transport blue
(Netherlands) team fans? What is the average number of buses needed to
transport all the fans?

## Interactive app

While analytical solution of this problem is quite possible, to fully answer
the questions one would need to build quite involved Markov chain. Nothing
special about that chain, yet it would require much manual labor.

Answering just the first question is much simpler. Suppose that at some
point there are \\\( N\_r \\\) red team fans and \\\( N\_b \\\) blue team
fans left waiting. There is only one permutation of the fans in which all
red team fans are ahead of all blue team fans. Likewise, there is only
permutation in which all blue team fans are ahead of all red team fans. As
both these combinations are equally likely, the probability that last bus
transports blue team fans is exactly \\\( 50\% \\\). All other permutations
simply lead us to state with different \\\( N\_r \\\) and \\\( N\_b \\\),
thus repeating earlier logic.

Below you see an interactive app, which solves this problem by numerical
simulation. You can change \\\( N\_r \\\) and \\\( N\_b \\\) as much as you
want, but the frequency that blue bus was the last will fluctuate around the
true answer of \\\( 50\% \\\). What will change is the distribution of
number of buses \\\( p ( n ) \\\). The mode of \\\( p ( n ) \\\) will quite
often be close to the mean.

[html5-interactive width="520" height="280" mode="iframe"
url="/uploads/models/stats-puzzles/fan-bus/index.html"]

Note that the left plot shows how the number of fans changed after each bus
(\\\( i \\\) being the index of the bus): on average over all simulations
(continuous line) and during the last simulation only (circles).
