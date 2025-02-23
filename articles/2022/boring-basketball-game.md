Title: Boring basketball game
Date: 2022-10-25 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, sports, FiveThirtyEight
Slug: boring-basketball-game
Status: published
Image_url: uploads/2022/boring-basketball-game.png

[FiveThirtyEight](https://fivethirtyeight.com/) has an interesting column,
[Riddler column](https://fivethirtyeight.com/tag/the-riddler/), which I
follow with great interest. In this post we will take a look at another
[statistics](/tag/statistics/) puzzle published as [Riddler Classic puzzle
for April
29th](https://fivethirtyeight.com/features/who-wins-a-very-boring-basketball-game/).
<!--more-->

## Puzzle

In short (see the [original
post](https://fivethirtyeight.com/features/who-wins-a-very-boring-basketball
game/) for a more detailed formulation), we have two teams (e.g., "red" and
"blue") playing a game of \\\( 200 \\\) possessions (\\\( 100 \\\) possessions
for each team). Let us allow only two-pointers in this game. Furthermore let
us assume that if the teams are tied, scoring probability for either
team is \\\( 0.5 \\\), but if one team is ahead then loosing team
concentrates and starts shooting better: scoring with \\\( 0.5 + x \\\)
probability. Likewise winning team looses concentration and starts
shooting worse: scoring with \\\( 0.5 - x \\\) probability.

Organizer, who knows \\\( x \\\) (from empirical observation?), has done the
math and came to conclusion that after \\\( 200 \\\) possessions there is
\\\( 50 \% \\\) chance that the game will be tied. How big is the losers
advantage \\\( x \\\)? Under these assumptions is there first possession
(dis)advantage?

## Solution

Analytical solution is possible, but will merit its own post. Here let us
share interactive app, which may be used to solve the problem. The input
parameters are self-explanatory, while the plot shows progression of a
single game. Overall record is shown in the top label of the interactive app
below.

[html5-interactive width="520" height="280" mode="iframe"
url="/uploads/models/stats/puzzles/boring-basketball/index.html"]

Can you find the \\\( x \\\)?
