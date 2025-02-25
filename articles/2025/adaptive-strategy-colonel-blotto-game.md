Title: Adaptive strategy in Colonel Blotto game
Date: 2025-02-25 08:00
Author: Aleksejus Kononovicius
Tags: interactive, game theory, conflicts, Colonel Blotto game
Slug: adaptive-strategy-colonel-blotto-game
Status: published
Image_url: uploads/2025/adaptive-strategy-colonel-blotto-game.png

[Last week]({filename}/articles/2025/coding-colonel-blotto-tournament.md) I
have shared a story about [Colonel Blotto](/tag/colonel-blotto-game/)
tournament I held back when I still used to teach [Matlab](/tag/matlab/).
This tournament is interesting from the perspective of Physics of Risk,
because it was designed to encourage adaptive strategy. Admittedly, only few
students actually did that, but...

Anyway, let us build an adaptive strategy for one of the variations of the
[Colonel Blotto game](/tag/colonel-blotto-game/) we have explored recently.
Let us revisit [Colonel Blotto game with varied
castles]({filename}/articles/2025/colonel-blotto-game-varied-castles.md)!
<!--more-->

## The game

As in an [earlier
post]({filename}/articles/2025/colonel-blotto-game-varied-castles.md):

* Both warlords have 25 troops.
* There are 5 castles.
* Each castle has 3, 2 or 1 flags raised above its battlements. These flags
  represent the value of the castle.
* In total all castles are worth 9 points (flags). Thus, to win the war
  (game) 5 flags (points) are sufficient.

But now both warlords are computer-controlled. "CPU" warlord will use simple
fixed or random strategies (you will be allowed to choose their strategy).
"ADA" warlord will use an adaptive strategy (i.e., this strategy allocates
troops based on opponent's previous troop allocations).

## How did "AK999" strategy work?

The ["AK999"
strategy](https://github.com/akononovicius/NMI-coding-session-archive/blob/main/2021-blotto-tournament/strats/AK999.m),
I used in the aforementioned tournament against my students, aims to
discover the value opponent gives to every castle. It does so by calculating
the mean number of troops assigned to every castle. This approach works
reasonably well against most random strategies, at least as long as variance
is reasonably low.

Yet my strategy failed against those few students who played "extremely"
varied strategies. Simplest approach to beating my strategy was to randomly
play one of two fixed troop allocations. As each of those prioritized
different castles my strategy quickly got confused and lost.

I have long wanted to improve it, and "ADA" is my attempt to do exactly
that.

## How does "ADA" adaptive stategy work?

The core idea is really simple. After each war, "CPU" troop allocation is
recorded. To speed up parsing of the previous allocations, history is stored
as five-dimensional cumulative distribution function. Indirectly this
approach assumes that "CPU" warlord behaves in an ergodic way. In other
words, that "CPU" warlord does not adapt their allocation or have another
time-dependent strategy. This assumption holds well for fixed and purely
random strategies.

"ADA" chooses troop allocation by solving margin maximization problem of the
five dimensional cumulative distribution function. In general, such problem
would be really hard, but in our case the input vector of the function is
discrete (5 components with 26 possible values). The search space is also
greatly reduced by the fact that the input vector lies in a simplex
(assuming that all troops must be used). So, we are lucky that exhaustive
search works just fine in our case.

To be more exact, exhaustive search is being performed recursively over the
components. But the components are processed in a random order, to add some
variability to the allocations. Further variability is added, when multiple
allocations have the same expected margin. In such case, the "previous" (in
regards to the search tree) allocation is kept with a probability of 50%.

## "CPU" strategies

**Priority-based**. This the strategy used in the [original
post]({filename}/articles/2025/colonel-blotto-game-varied-castles.md). This
strategy is based on the fact that in this game there five different ways to
get 5 points sufficient to win the game. "CPU" will then prioritize one of
these combinations, while assigning minimal number (0 to 3) of troops to
other castles.

**Completely random**. Each troop is assigned to a random castles. All
castles are weighted equally.

**Weighted(\\\(\alpha\\\)) random**. Troops are assigned randomly to the
castles, but castles are weighted proportionally to their value. The weights
are given by \\\( v\_i^\alpha \\\).

**Fixed(...)**. "Almost" fixed strategies. These may be slightly random but
only due to the inherent symmetries in the game. As for example, there is
little difference between second and third castles. So "Fixed(13-12-0-0-0)"
strategy could shift 12 troops to the third castle instead.

**Copycat**. It will first play uniform troop allocation. From the second
play onward it will simply repeat opponent's previous allocation.

**Random over all**. Will randomize between all the strategies available in
the app.

## Interactive app

Feel free to try distinct strategies against "ADA" adaptive strategy! As far
as my experiments show, "copycat" strategy seems to be the most effective.
In my opinion, it is the most effective, because it is nonergodic while
"ADA" assumes ergodicity. "ADA" could be easily modified to detect the
"copycat" strategy, but this problem is beyond the point of the current
post. Furthermore, it leads to "what he thinks I think he thinks..."-style
overthinking madness, which highlights complexity of the [Colonel Blotto
game](/tag/colonel-blotto-game/).

[html5-interactive width="520" height="250" mode="iframe"
url="/uploads/models/game-theory/blotto-game/adaptive/index.html"]

Another thing to notice in this app, is that the it takes time for "ADA" to
crack the "priority-based" strategy. For "ADA" to work best, it needs to
have seen all (most?) possible plays at frequencies close to their
theoretical probabilities.
