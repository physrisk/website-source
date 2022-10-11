Title: Bowling percolation puzzle
Date: 2022-10-11 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistics, percolation, FiveThirtyEight
Slug: bowling-percolation
Status: published
Image_url: uploads/2022/bowling-percolation.png

[FiveThirtyEight](https://fivethirtyeight.com/) has an interesting column,
[Riddler column](https://fivethirtyeight.com/tag/the-riddler/), which I
follow with great interest. In this post we will take a look at bowling
percolation puzzle formulated as [Riddler Classic puzzle for August 5th
post](https://fivethirtyeight.com/features/can-you-knock-down-the-last-bowling-pin/).
<!--more-->

## Puzzle

In short (see the [original
post](https://fivethirtyeight.com/features/can-you-knock-down-the-last-bowling-pin/)
for a more detailed formulation), we have \\\( N^2 \\\) bowling pins arranged
in a rhombus pattern. The first (topmost) pin is always hit by the bowler, but
further pins must be knocked down by the pins in front. Actually, let us
assume that \\\( p \\\) is the probability (which depends on the bowlers
skill) for a falling pin to knock down
either of the pins directly behind it (independently of each other).

If there is just one pin behind a fallen pin, it will be knocked down with
probability \\\( p \\\). If there two pins, then there is \\\( p^2 \\\)
probability that both pins will go down and \\\( 2 p (1-p) \\\) chance that
a single pin (either of the two) will go down.

Given this mechanism, what is the probability to hit the last (bottommost)
ping? How does it depend on \\\( p \\\)?

## Solution

General analytical solution for arbitrary \\\( N \\\) is quite cumbersome to
obtain. Actually, it is an [unsolved
problem](https://fivethirtyeight.com/features/can-you-escape-the-casino/) in
the [percolation theory](/tag/percolation). Yet this problem is quite
approachable to be solve numerically.

Below you should see an interactive app, which allows you to experiment with
this puzzle numerically. You can change \\\( N \\\) and \\\( p \\\) values
to observe what happens. Smaller \\\( N \\\) are best for visual viewing
purposes, otherwise larger \\\( N \\\) should produce the same results plus
reveal additional information.

On the left hand side of the app pins are shown. Some of them are
highlighted (with red outline). State of the highlighted pins is observed
over iterations of the simulation.

On the right hand side of the app there is a plot which shows how empirical
probability (frequency) changes as the state of the middle pins of deeper
rows is observed. As this dependency appears to be close to exponential, on
the y axis of the plot we have base 10 logarithm of the empirical
probability itself. Note that for larger \\\( p \\) the dependence flattens
out: if \\\( p \\\) is larger than some critical value, then the system will
percolate (bottommost pin will be knocked down) with non-zero probability.

[html5-interactive width="520" height="280" mode="iframe"
url="/uploads/models/stats-puzzles/bowling-percolation/index.html"]
